
import React from 'react';
import { SlideProps } from '../../types';

const TitleSlide: React.FC<SlideProps> = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden border-[8px] md:border-[12px] border-midnight-black">
      <section className="relative w-full md:w-[60%] h-[60vh] md:h-full bg-midnight-black flex flex-col justify-between p-6 md:p-12 lg:p-24 z-10">
        <div className="flex flex-col space-y-2 border-l-4 border-midnight-yellow pl-6 md:pl-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            LGCID<br />
            <span className="text-white">MONITORING</span><br />
            <span className="text-midnight-yellow">PROPOSAL</span>
          </h1>
          <div className="pt-6 md:pt-8 max-w-lg">
          </div>
        </div>
        <div className="grid gap-8 md:gap-12 border-t border-white/10 pt-8 md:pt-12 max-w-xl">
          <div className="flex flex-col space-y-1 md:space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-midnight-yellow">Prepared For</span>
            <p className="text-xl md:text-2xl font-bold text-white">Lower Gardens CID</p>
          </div>
        </div>
      </section>

      <div className="h-screen w-full bg-midnight-black relative overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-12">
        <div className="absolute inset-0">
          <img src="/pg1-bg.png" alt="Background" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-midnight-black/80 to-transparent"></div>
        </div>
        <div className="absolute inset-0 grayscale contrast-150 brightness-50 opacity-40">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
            alt="High-tech surveillance"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-around py-12 md:py-24 opacity-20 pointer-events-none">
          <div className="scan-line"></div>
          <div className="scan-line"></div>
          <div className="scan-line"></div>
          <div className="scan-line"></div>
        </div>
      </div>



      {/* Decorative corner borders */}
      <div className="absolute top-0 left-0 w-8 md:w-16 h-8 md:h-16 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-midnight-yellow z-30"></div>
      <div className="absolute bottom-0 right-0 w-8 md:w-16 h-8 md:h-16 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-midnight-yellow z-30"></div>

      <div className="absolute top-4 right-4 md:top-12 md:right-12 z-40 p-2 md:p-4">
        <img
          src="/logo.png"
          alt="OmniVision Logo"
          className="h-10 md:h-20 w-auto object-contain"
        />
      </div>
    </div >
  );
};

export default TitleSlide;
