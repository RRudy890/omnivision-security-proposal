
import React from 'react';
import { SlideProps } from '../../types';

const TitleSlide: React.FC<SlideProps> = () => {
  return (
    <div className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden border-[12px] border-midnight-black">
      <section className="relative w-full md:w-[60%] h-full bg-midnight-black flex flex-col justify-between p-12 lg:p-24 z-10">
        <div className="flex flex-col space-y-2 border-l-4 border-midnight-yellow pl-8">
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            LGCID<br />
            <span className="text-white">MONITORING</span><br />
            <span className="text-midnight-yellow">PROPOSAL</span>
          </h1>
          <div className="pt-8 max-w-lg">
            <h2 className="text-xl md:text-2xl font-light text-white/80 tracking-tight">
              High-Contrast Security Infrastructure & CCTV Strategic Overview
            </h2>
          </div>
        </div>
        <div className="grid gap-12 border-t border-white/10 pt-12 max-w-xl">
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-midnight-yellow">Prepared For</span>
            <p className="text-2xl font-bold text-white">Lower Gardens CID</p>
          </div>
        </div>
      </section>

      <section className="relative w-full md:w-[40%] h-full bg-midnight-black overflow-hidden border-l border-white/5">
        <div className="absolute inset-0 grid-texture opacity-10"></div>
        <div className="absolute inset-0 grayscale contrast-150 brightness-50 opacity-40">
          <img 
            className="w-full h-full object-cover mix-blend-overlay" 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
            alt="High-tech surveillance" 
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-around py-24 opacity-20 pointer-events-none">
          <div className="scan-line"></div>
          <div className="scan-line"></div>
          <div className="scan-line"></div>
          <div className="scan-line"></div>
        </div>
      </section>

      {/* Decorative corner borders */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-midnight-yellow z-30"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-midnight-yellow z-30"></div>
      
      <div className="absolute top-12 right-12 z-40 p-4">
        <img 
          src="/logo.png" 
          alt="OmniVision Logo" 
          className="h-16 md:h-20 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default TitleSlide;
