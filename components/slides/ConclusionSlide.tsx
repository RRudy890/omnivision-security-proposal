
import React from 'react';
import { SlideProps } from '../../types';

const ConclusionSlide: React.FC<SlideProps> = () => {
  return (
    <div className="min-h-screen w-full bg-midnight-black relative overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-12 py-16 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-midnight-black to-midnight-black"></div>

      <div className="relative z-10 max-w-5xl w-full">
        <div className="mb-6 md:mb-12 animate-pulse">
          <img
            src="/logo.png"
            alt="OmniVision Logo"
            className="h-12 md:h-24 w-auto object-contain mx-auto"
          />
        </div>

        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-8 tracking-tighter leading-none">
          SECURE THE <br /><span className="text-midnight-yellow">FUTURE</span>
        </h1>

        <p className="text-sm md:text-2xl text-zinc-400 font-light mb-8 md:mb-16 max-w-2xl mx-auto px-4">
          A reliable partnership committed to keeping the Lower Gardens community safe through proactive monitoring and dedicated support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8 md:pt-12 mb-16 md:mb-0">
          <BenefitCard icon="visibility" title="Always Watching, Always Ready" desc="Our 24/7 dedicated team ensures constant, reliable oversight of the Lower Gardens community, so you never have to worry about gaps in your security." />
          <BenefitCard icon="battery_charging_full" title="Built for Resilience" desc="With comprehensive power backups and network failovers in place, your security stays online without interruption, even during unexpected outages." />
          <BenefitCard icon="extension" title="Adaptable to Your Needs" desc="As the LGCID grows and evolves, our flexible monitoring systems can easily expand alongside you, adding new cameras or features seamlessly." />
          <BenefitCard icon="support_agent" title="Expert Human Oversight" desc="Technology is only as good as the people behind it. Our rigorously trained operators provide the critical human judgment needed to turn AI alerts into effective action." />
        </div>
      </div>

      <div className="relative md:absolute bottom-6 md:bottom-12 w-full px-6 flex justify-center mt-8 md:mt-0 z-20">
        <div className="bg-midnight-yellow/10 border border-midnight-yellow/40 px-6 md:px-8 py-3 md:py-4 rounded-xl backdrop-blur-sm max-w-xl">
          <p className="text-[10px] md:text-sm text-white font-bold uppercase tracking-widest text-center">"Committed to partnering with LGCID to provide unwavering protection and peace of mind for the Lower Gardens community."</p>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label, value }: any) => (
  <div className="flex flex-col items-center gap-2 md:gap-3">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-midnight-yellow">
      <span className="material-icons text-xl md:text-2xl">{icon}</span>
    </div>
    <div>
      <span className="block text-[10px] uppercase font-bold text-zinc-500 tracking-widest mb-1">{label}</span>
      <span className="block text-sm md:text-base font-bold text-white break-all">{value}</span>
    </div>
  </div>
);

const BenefitCard = ({ icon, title, desc }: any) => (
  <div className="bg-zinc-900 border border-midnight-yellow/20 p-6 md:p-10 rounded flex flex-col items-center text-center transition-all hover:border-midnight-yellow hover:-translate-y-1">
    <div className="mb-4 md:mb-6">
      <span className="material-icons text-3xl md:text-4xl text-midnight-yellow">{icon}</span>
    </div>
    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white uppercase tracking-wider">{title}</h3>
    <p className="text-[10px] md:text-xs leading-relaxed font-light text-zinc-400">{desc}</p>
  </div>
);

export default ConclusionSlide;
