
import React from 'react';
import { SlideProps } from '../../types';

const InfrastructureSlide: React.FC<SlideProps> = () => {
  return (
    <div className="min-h-screen flex flex-col font-display bg-midnight-black p-6 md:p-12 lg:p-20">
      <header className="relative mb-8 md:mb-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-start md:items-start border-b border-midnight-yellow/30 pb-6 gap-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Infrastructure Excellence</h1>
          <img
            src="/logo.png"
            alt="OmniVision Logo"
            className="h-10 md:h-14 w-auto object-contain self-start md:self-auto"
          />
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          <section className="space-y-6 md:space-y-8">
            <SectionHeader title="Power & Redundancy" />
            <div className="space-y-4 md:space-y-6">
              <Panel icon="bolt" title="Power Systems">
                <PanelList items={["Battery Backup (UPS)", "2x On-site Generators"]} />
              </Panel>
              <Panel icon="settings_input_component" title="Connectivity">
                <PanelList items={["Tier-1 Fibre Optic", "High-Speed Wireless", "LTE Failover Integration"]} />
              </Panel>
            </div>
          </section>

          <section className="space-y-6 md:space-y-8">
            <SectionHeader title="Communications" />
            <div className="bg-zinc-900/40 p-6 md:p-8 border border-white/10 h-full rounded">
              <span className="material-icons text-midnight-yellow text-3xl md:text-4xl mb-4 md:mb-6">settings_voice</span>
              <h3 className="font-bold text-lg md:text-xl text-white mb-3 md:mb-4">Unified Comms Stack</h3>
              <p className="text-zinc-400 mb-6 md:mb-8 leading-relaxed text-sm">
                High-availability hybrid communication infrastructure ensuring 99.99% uptime for mission-critical responses.
              </p>
              <div className="space-y-3 md:space-y-4">
                <CommsBadge icon="phone_in_talk" title="VoIP Protocol" label="Primary Line" />
                <CommsBadge icon="radio" title="Dedicated Radio" label="Field Frequency" />
              </div>
            </div>
          </section>

          <section className="space-y-6 md:space-y-8">
            <SectionHeader title="Operator Training" />
            <div className="bg-zinc-900 p-6 md:p-8 border-t-4 border-midnight-yellow shadow-2xl h-full rounded">
              <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-10 text-white">Human Infrastructure</h3>
              <div className="space-y-6 md:space-y-8">
                <TrainingStep step="1" title="Rigorous Selection" desc="Psychometric and technical screening process for all elite candidates." />
                <TrainingStep step="2" title="4-Week Programme" desc="Intensive internal training covering SOPs and crisis response." />
                <TrainingStep step="3" title="Training Centre" desc="Simulation-based learning in our specialized facility." />
                <TrainingStep step="4" title="Assessments" desc="Strict certification gates before operational deployment." />
              </div>
            </div>
          </section>
        </div>
      </main>

      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03] grid-texture"></div>
    </div>
  );
};

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-2 h-8 bg-midnight-yellow"></div>
    <h2 className="text-xl font-black text-midnight-yellow uppercase tracking-widest">{title}</h2>
  </div>
);

const Panel = ({ icon, title, children }: any) => (
  <div className="bg-zinc-900/40 p-6 border-l-2 border-midnight-yellow/50 rounded-r">
    <div className="flex items-start gap-4">
      <span className="material-icons text-midnight-yellow text-3xl">{icon}</span>
      <div>
        <h3 className="font-bold text-lg text-white mb-3">{title}</h3>
        {children}
      </div>
    </div>
  </div>
);

const PanelList = ({ items }: { items: string[] }) => (
  <ul className="text-zinc-400 space-y-2">
    {items.map((it, i) => (
      <li key={i} className="flex items-center gap-3 text-sm">
        <span className="w-1.5 h-1.5 bg-midnight-yellow rotate-45"></span> {it}
      </li>
    ))}
  </ul>
);

const CommsBadge = ({ icon, title, label }: any) => (
  <div className="flex items-center gap-4 p-4 bg-black border border-white/5 rounded">
    <span className="material-icons text-midnight-yellow">{icon}</span>
    <div>
      <span className="block font-bold text-white text-sm">{title}</span>
      <span className="text-[10px] text-midnight-yellow uppercase font-bold tracking-tighter">{label}</span>
    </div>
  </div>
);

const TrainingStep = ({ step, title, desc }: any) => (
  <div className="flex gap-5">
    <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-midnight-yellow flex items-center justify-center text-midnight-yellow font-black text-sm">{step}</div>
    <div>
      <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">{title}</h4>
      <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default InfrastructureSlide;
