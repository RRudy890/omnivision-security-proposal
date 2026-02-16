
import React from 'react';
import { SlideProps } from '../../types';

const ConclusionSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-screen w-full bg-midnight-black relative overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-midnight-black to-midnight-black"></div>

      <div className="relative z-10 max-w-5xl w-full">
        <div className="mb-8 md:mb-12 animate-pulse">
          <img
            src="/logo.png"
            alt="OmniVision Logo"
            className="h-16 md:h-24 w-auto object-contain mx-auto"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-none">
          SECURE THE <br /><span className="text-midnight-yellow">FUTURE</span>
        </h1>

        <p className="text-lg md:text-2xl text-zinc-400 font-light mb-12 md:mb-16 max-w-2xl mx-auto">
          We are ready to deploy. The standard for LGCID security is about to be redefined.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8 md:pt-12">
          <ContactItem icon="person" label="Lead Contact" value="Byers T" />
          <ContactItem icon="email" label="Email" value="byers@omnivision.co.za" />
          <ContactItem icon="phone" label="Direct Line" value="+27 21 555 1234" />
          <ContactItem icon="language" label="Website" value="www.omnivision.co.za" />
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-12 w-full text-center">
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.5em]">Confidential Proposal • 2024</p>
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
  <div className="bg-zinc-900 border border-midnight-yellow/20 p-10 rounded flex flex-col items-center text-center transition-all hover:border-midnight-yellow hover:-translate-y-1">
    <div className="mb-6">
      <span className="material-icons text-4xl text-midnight-yellow">{icon}</span>
    </div>
    <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">{title}</h3>
    <p className="text-xs leading-relaxed font-light text-zinc-400">{desc}</p>
  </div>
);

export default ConclusionSlide;
