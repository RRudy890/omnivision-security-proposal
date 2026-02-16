
import React from 'react';
import { SlideProps } from '../../types';

const FoundationSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen border border-white/10 overflow-hidden">
      <div className="w-full md:w-1/3 bg-midnight-grey p-10 flex flex-col justify-between border-r border-white/10">
        <div className="space-y-4">
          <div className="mb-12">
            <span className="text-midnight-yellow text-xs font-bold tracking-[0.3em] uppercase">Core Statistics</span>
          </div>

          <StatCard icon="location_city" label="Infrastructure" value="500+" sub="Sites Under Management" />
          <StatCard icon="videocam" label="Deployment" value="8200+" sub="Active Cameras" />
          <StatCard icon="support_agent" label="Operations" value="15+" sub="Certified Operators" />
        </div>
      </div>

      <div className="flex-1 p-10 md:p-16 flex flex-col bg-black relative">
        <div className="absolute top-10 right-10 md:top-16 md:right-16">
          <img
            src="/logo.png"
            alt="OmniVision Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-5xl font-black text-white leading-tight uppercase tracking-tight">
              Company<br /><span className="text-midnight-yellow">Foundation</span>
            </h1>
            <div className="h-1 w-32 bg-midnight-yellow mt-6"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureBlock
              icon="verified_user"
              title="PSIRA Registered"
              desc="Absolute compliance with the Private Security Industry Regulatory Authority standards."
            />
            <FeatureBlock
              icon="settings_input_component"
              title="24-hr Control Room"
              desc="High-intensity centralized monitoring hub active 365 days a year without fail."
            />
          </div>

          <div className="bg-zinc-900/30 p-10 border border-zinc-800">
            <div className="flex items-center space-x-3 mb-8">
              <span className="material-icons text-midnight-yellow">groups</span>
              <h3 className="font-black text-xl text-white uppercase tracking-widest">Strategic References</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ReferenceItem title="Llandudno SRA" subtitle="Critical Perimeter Protection & Grid Surveillance" />
              <ReferenceItem title="Camps Bay CID" subtitle="AI-Enhanced Threat Detection & Response" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, sub }: any) => (
  <div className="bg-midnight-yellow p-8 text-black shadow-2xl transition-transform hover:-translate-y-1">
    <div className="flex justify-between items-start">
      <span className="material-icons text-black/40">{icon}</span>
      <span className="text-[10px] font-black tracking-widest uppercase">{label}</span>
    </div>
    <div className="mt-4">
      <div className="text-6xl font-black leading-none">{value}</div>
      <div className="text-xs font-bold uppercase mt-2 tracking-wider">{sub}</div>
    </div>
  </div>
);

const FeatureBlock = ({ icon, title, desc }: any) => (
  <div className="group flex items-start p-6 bg-zinc-900 border-l-4 border-midnight-yellow transition-all hover:bg-zinc-800">
    <div className="mr-6">
      <span className="material-icons text-midnight-yellow text-4xl">{icon}</span>
    </div>
    <div>
      <h3 className="font-black text-xl text-white uppercase tracking-wide mb-1">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ReferenceItem = ({ title, subtitle }: any) => (
  <div className="flex items-start space-x-4">
    <div className="mt-1">
      <span className="material-icons text-midnight-yellow">radio_button_checked</span>
    </div>
    <div>
      <h4 className="font-black text-white uppercase tracking-wider text-sm">{title}</h4>
      <p className="text-xs mt-1 text-zinc-400 uppercase tracking-tight">{subtitle}</p>
    </div>
  </div>
);

export default FoundationSlide;
