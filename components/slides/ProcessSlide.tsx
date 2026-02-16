
import React from 'react';
import { SlideProps } from '../../types';

const ProcessSlide: React.FC<SlideProps> = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-6 py-12 relative">
      <nav className="absolute top-0 w-full px-6 md:px-12 py-6 md:py-8 flex justify-end">
        <img
          src="/logo.png"
          alt="OmniVision Logo"
          className="h-10 md:h-14 w-auto object-contain"
        />
      </nav>

      <header className="text-center mb-12 md:mb-20 max-w-4xl mt-16 md:mt-0">
        <div className="inline-block px-4 py-1 border border-midnight-yellow mb-6 text-midnight-yellow text-[10px] font-bold uppercase tracking-[0.25em]">
          Operational Workflow
        </div>
        <h1 className="text-4xl md:text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
          Monitoring <span className="text-midnight-yellow">Process</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto">
          High-contrast tactical monitoring. Our 4-step interactive cycle ensures immediate threat neutralization through AI-driven precision.
        </p>
      </header>

      <div className="w-full max-w-7xl px-0 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
          <ProcessStep
            step="01"
            icon="radar"
            title="Detect"
            desc="AI/Analytics detects potential threat via perimeter algorithms."
            hasArrow={true}
          />
          <ProcessStep
            step="02"
            icon="visibility"
            title="Assess"
            desc="Professional operator views live feed to verify the incident."
            hasArrow={true}
          />
          <ProcessStep
            step="03"
            icon="campaign"
            title="Intervene"
            desc="Direct audio announcement (Voice Down) to deter intruders."
            hasArrow={true}
          />
          <ProcessStep
            step="04"
            icon="gavel"
            title="Resolve"
            desc="Notify Armed Response and provide live updates of the person/s of interest whereabouts ."
          />
        </div>
      </div>

      <div className="mt-12 md:mt-20 w-full max-w-6xl overflow-hidden border border-midnight-yellow/20 relative h-[250px] md:h-[300px] rounded">
        <img className="w-full h-full object-cover grayscale opacity-30" src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200" alt="Command center" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-black via-transparent to-midnight-black"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-midnight-black/80 backdrop-blur-sm border-l-4 border-midnight-yellow p-6 md:p-8 max-w-xl text-center md:text-left">
            <p className="text-midnight-yellow font-black tracking-[0.3em] text-xs mb-3 uppercase">Elite Response Unit</p>
            <p className="text-xl md:text-3xl font-bold text-white uppercase tracking-tight leading-tight">Zero-Latency Strategic Monitoring Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessStep = ({ step, icon, title, desc, hasArrow }: any) => (
  <div className="group relative flex flex-col items-center">
    <div className="mb-6 md:mb-8 relative">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-midnight-grey border-2 border-midnight-yellow flex items-center justify-center shadow-[0_0_30px_rgba(255,255,0,0.1)] group-hover:bg-midnight-yellow group-hover:text-black transition-all duration-300">
        <span className="material-symbols-outlined text-4xl md:text-5xl text-midnight-yellow group-hover:text-black">{icon}</span>
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-midnight-black px-3 py-0.5 border border-midnight-yellow text-midnight-yellow text-[10px] font-black">
        STEP {step}
      </div>
    </div>
    <div className="text-center">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 uppercase tracking-wider">{title}</h3>
      <p className="text-xs text-zinc-500 leading-relaxed max-w-[180px] mx-auto">{desc}</p>
    </div>
    {hasArrow && (
      <div className="hidden md:block absolute top-12 -right-4 translate-x-1/2 z-10">
        <span className="material-icons-round text-midnight-yellow text-4xl">arrow_right_alt</span>
      </div>
    )}
  </div>
);

export default ProcessSlide;
