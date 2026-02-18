
const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('original_reference.pdf');

pdf(dataBuffer).then(function (data) {
    // pdf-parse doesn't strictly separate pages by reliable index in text, 
    // but it provides numrender/info.
    // However, data.text is usually all text.
    // data.numpages is total.

    // To get specific page, we might need to use the pagerender option or just dump all text and look for page markers if they exist.
    // Actually pdf-parse puts page breaks as form feed \f or similar? 
    // Let's just output the whole text and I will manually find Page 7 content since I know the context.

    console.log(data.text);
});
