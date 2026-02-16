
import React from 'react';
import { SlideProps } from '../../types';

const ConclusionSlide: React.FC<SlideProps> = () => {
  return (
    <div className="min-h-screen flex flex-col font-display relative overflow-hidden bg-midnight-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-midnight-yellow/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-midnight-yellow/5 rounded-full blur-[120px]"></div>
      </div>

      <main className="flex-grow flex flex-col items-center justify-center px-8 relative z-10 max-w-7xl mx-auto w-full py-20">
        <div className="absolute top-0 right-0 p-12">
          <img
            src="/logo.png"
            alt="OmniVision Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </div>

        <header className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-midnight-yellow mb-6 drop-shadow-[0_0_15px_rgba(255,255,0,0.3)]">STRATEGIC CONCLUSION</h1>
          <div className="h-1.5 w-32 bg-midnight-yellow mx-auto"></div>
          <p className="mt-10 text-xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
            A high-contrast architectural framework designed for <span className="text-midnight-yellow font-medium italic">absolute vigilance</span> and operational continuity.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <BenefitCard icon="verified_user" title="Operational Certainty" desc="Engineered reliability ensuring continuous oversight for mission-critical assets." />
          <BenefitCard icon="hub" title="Zero Failure Nodes" desc="Multi-layered redundancy built into every core intersection of the network." />
          <BenefitCard icon="trending_up" title="Scalable Growth" desc="Modular design that evolves with your footprint without structural re-engineering." />
          <BenefitCard icon="school" title="Masterclass Insight" desc="Deep-dive expertise providing strategic insights that transcend basic protocols." />
        </div>

        <div className="mt-20 w-full max-w-4xl border-l-4 border-midnight-yellow bg-zinc-900/50 p-8 flex items-center justify-between rounded-r">
          <div className="flex items-center gap-8">
            <div className="h-20 w-20 overflow-hidden grayscale contrast-125 border border-white/10 rounded">
              <img alt="Leadership" className="w-full h-full object-cover" src="https://picsum.photos/seed/executive/200/200" />
            </div>
            <div>
              <p className="text-midnight-yellow font-black uppercase tracking-widest text-[10px] mb-2">Executive Commitment</p>
              <p className="text-white text-lg font-light italic">"Unmatched vigilance and structural integrity for OmniVision Security."</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

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
