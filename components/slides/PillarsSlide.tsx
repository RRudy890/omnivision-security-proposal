
import React from 'react';
import { SlideProps } from '../../types';

const PillarsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col p-6 md:p-8 lg:p-12 w-full">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4">
        <div className="flex flex-col gap-4">
          <img
            src="/logo.png"
            alt="OmniVision Logo"
            className="h-10 md:h-16 w-auto object-contain self-start"
          />
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-midnight-yellow ml-1 md:ml-2">Security Proposal</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
        <PillarCard
          icon="headset_mic"
          title="Dedicated Desk"
          description="High-level synchronization between remote monitoring and onsite physical security."
          features={["24/7 Dedicated Operator", "OV Control Room Integration", "LGCID Onsite Team Sync"]}
          accentOpacity="1"
          footer={
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-midnight-yellow/40 overflow-hidden grayscale contrast-125 flex-shrink-0">
                <img className="w-full h-full object-cover" src="https://picsum.photos/seed/lead1/100/100" alt="Lead" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-midnight-yellow uppercase tracking-widest">Assigned Team Lead</span>
            </div>
          }
        />

        <PillarCard
          icon="visibility"
          title="Community Monitoring"
          description="Strategic separation of duties to maintain 100% vigilance across all sectors."
          features={["AI/Analytics Specialized Team", "Alarms vs. Live View Split", "Strategic Patrol Coordination"]}
          accentOpacity="0.6"
          footer={
            <div className="relative h-20 w-full overflow-hidden rounded bg-black">
              <img className="w-full h-full object-cover opacity-30 grayscale" src="https://picsum.photos/seed/camwall/400/200" alt="Control Room" />
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-[10px] text-midnight-yellow font-bold uppercase tracking-widest leading-tight">Real-time Analytics Feed</span>
              </div>
            </div>
          }
        />

        <PillarCard
          icon="sync"
          title="Reliever & Overflow"
          description="Ensuring continuous coverage with no single point of failure during peak times."
          features={["Shared Coverage Model", "Byers On-site Relief", "Seamless Overflow Handling"]}
          accentOpacity="0.3"
          footer={
            <div className="bg-midnight-yellow/10 border border-midnight-yellow/20 p-3 rounded flex items-center gap-3 w-full">
              <span className="material-icons text-midnight-yellow text-sm">info</span>
              <span className="text-[10px] md:text-xs text-zinc-300 font-bold uppercase tracking-tighter">Auto-failover Active</span>
            </div>
          }
        />
      </main>

      <footer className="mt-auto">
        <div className="bg-midnight-grey border-l-4 border-midnight-yellow rounded-xl p-6 md:p-8 text-white flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-midnight-yellow/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="flex flex-col gap-2 relative z-10">
            <span className="text-midnight-yellow text-xs font-black uppercase tracking-[.4em]">Technology Stack</span>
            <h4 className="text-2xl md:text-3xl font-black text-white">Core Software Suite</h4>
          </div>
          <div className="flex flex-wrap gap-4 items-center relative z-10 w-full md:w-auto">
            <TechItem icon="video_settings" title="Blue Iris VMS" sub="Management Engine" />
            <TechItem icon="psychology" title="Behavioural Analytics" sub="Crowd & Loitering" />
            <TechItem icon="cloud_done" title="Secure Archiving" sub="Cloud Redundancy" />
          </div>
        </div>
      </footer>
    </div>
  );
};

const PillarCard = ({ icon, title, description, features, accentOpacity, footer }: any) => (
  <div className="group relative flex flex-col rounded-xl overflow-hidden border border-midnight-yellow/20 hover:border-midnight-yellow transition-all bg-midnight-card hover:bg-midnight-accent h-full">
    <div className={`h-1 bg-midnight-yellow w-full opacity-[${accentOpacity}]`}></div>
    <div className="p-6 md:p-8 flex-grow">
      <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-midnight-yellow rounded-full flex items-center justify-center mb-6">
        <span className="material-icons text-midnight-yellow text-2xl md:text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-zinc-400 mb-6 md:mb-8 leading-relaxed text-sm">{description}</p>
      <ul className="space-y-3 md:space-y-4">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex gap-3 items-start md:items-center">
            <span className="material-icons text-midnight-yellow text-lg md:text-xl mt-0.5 md:mt-0">verified</span>
            <span className="text-zinc-200 text-sm font-medium">{f}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-auto p-4 md:p-6 bg-midnight-grey/50 border-t border-zinc-800 flex justify-center">
      {footer}
    </div>
  </div>
);

const TechItem = ({ icon, title, sub }: any) => (
  <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 bg-black/40 rounded-xl border border-zinc-800 hover:border-midnight-yellow transition-colors group/feat w-full md:w-auto">
    <div className="w-10 h-10 md:w-12 md:h-12 bg-midnight-yellow/10 rounded flex-shrink-0 flex items-center justify-center group-hover/feat:bg-midnight-yellow group-hover/feat:text-black transition-all">
      <span className="material-icons text-midnight-yellow group-hover/feat:text-black text-xl md:text-2xl">{icon}</span>
    </div>
    <div>
      <div className="text-sm font-black text-white">{title}</div>
      <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{sub}</div>
    </div>
  </div>
);

export default PillarsSlide;
