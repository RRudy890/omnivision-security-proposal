import puppeteer from 'puppeteer';
import fs from 'fs';

const TOTAL_SLIDES = 8;
const VIEWPORT = { width: 1920, height: 1080 };
const OUTPUT_FILE = 'LGCID_Presentation.pdf';

(async () => {
    console.log('Starting PDF generation...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport(VIEWPORT);

    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

    // Hide navigation controls
    await page.addStyleTag({ content: '.no-print { display: none !important; }' });

    const slideImages = [];

    for (let i = 0; i < TOTAL_SLIDES; i++) {
        console.log(`Capturing slide ${i + 1}/${TOTAL_SLIDES}...`);

        // Capture screenshot as buffer
        const buffer = await page.screenshot({ fullPage: true, encoding: 'base64' });
        slideImages.push(`data:image/png;base64,${buffer}`);

        if (i < TOTAL_SLIDES - 1) {
            await page.keyboard.press('ArrowRight');
            // Wait for transition animation
            await new Promise(r => setTimeout(r, 1000));
        }
    }

    console.log('Compiling PDF...');

    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <body style="margin: 0; padding: 0;">
        ${slideImages.map(img => `
          <div style="width: ${VIEWPORT.width}px; height: ${VIEWPORT.height}px; page-break-after: always; display: flex; justify-content: center; align-items: center; overflow: hidden;">
            <img src="${img}" style="width: 100%; height: 100%; object-fit: contain;">
          </div>
        `).join('')}
      </body>
    </html>
  `;

    await page.setContent(htmlContent);

    await page.pdf({
        path: OUTPUT_FILE,
        width: `${VIEWPORT.width}px`,
        height: `${VIEWPORT.height}px`,
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log(`Successfully generated ${OUTPUT_FILE}`);
    await browser.close();
})();
