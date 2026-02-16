
import React from 'react';
import { SlideProps } from '../../types';

const ServicesSlide: React.FC<SlideProps> = () => {
  return (
    <div className="max-w-7xl w-full mx-auto relative px-6 md:px-8 py-12 md:py-16 flex flex-col min-h-screen justify-center">
      <header className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between border-l-4 border-midnight-yellow pl-6 md:pl-8 py-2">
        <div>
          <h1 className="text-4xl md:text-5xl md:text-6xl font-black text-white mt-3 tracking-tight">Value-Added Services</h1>
        </div>
        <div className="mt-4 md:mt-0">
          <img
            src="/logo.png"
            alt="OmniVision Logo"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        <ServiceCard
          icon="health_and_safety"
          tag="Operational"
          title="System Health"
          desc="Continuous technical oversight to ensure zero-downtime performance of your security infrastructure."
          items={[
            { title: "Daily Camera Checks", sub: "Visual verification of all feed angles and clarity." },
            { title: "Auto-Connection Tests (5min)", sub: "Automated pings to ensure network stability." }
          ]}
        />
        <ServiceCard
          icon="verified_user"
          tag="Governance"
          title="Accountability"
          desc="Rigorous data management and logging protocols for compliance and incident investigation."
          items={[
            { title: "Comprehensive Audit Trail", sub: "Detailed logs of all access and system interactions." },
            { title: "30-Day Off-site Storage", sub: "Secure cloud backup of critical event footage." }
          ]}
        />
        <ServiceCard
          icon="emergency_share"
          tag="Resilience"
          title="Contingency"
          desc="Robust planning for external disruptions to ensure uninterrupted business continuity."
          items={[
            { title: "Labour Action Protocols", sub: "Pre-defined response plans for staff shortages." },
            { title: "Staff Housing & Transport Plan", sub: "Logistics for essential staff during local crises." }
          ]}
        />
      </div>

      <footer className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
        <div className="flex items-center space-x-4 md:space-x-5">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-midnight-yellow rounded flex items-center justify-center shadow-[0_0_15px_rgba(255,255,0,0.3)]">
            <span className="material-icons text-midnight-black text-2xl md:text-3xl">security</span>
          </div>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Global Security Standards Compliant</span>
        </div>
      </footer>

      <div className="fixed bottom-[-5%] right-[-5%] opacity-[0.03] pointer-events-none select-none">
        <span className="material-icons text-[20rem] md:text-[40rem] text-midnight-yellow">shield</span>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, tag, title, desc, items }: any) => (
  <div className="bg-midnight-card border rounded-xl p-10 shadow-2xl transition-all duration-300 relative overflow-hidden group hover:border-midnight-yellow/50 border-midnight-yellow/20">
    <div className="absolute top-0 left-0 w-full h-1 bg-midnight-yellow"></div>
    <div className="mb-8 flex items-center justify-between">
      <div className="bg-midnight-yellow/10 p-5 rounded-xl border border-midnight-yellow/20">
        <span className="material-icons text-midnight-yellow text-4xl">{icon}</span>
      </div>
      <span className="text-[10px] font-black text-midnight-yellow bg-midnight-yellow/5 px-4 py-1.5 rounded-full border border-midnight-yellow/30 uppercase tracking-widest">{tag}</span>
    </div>
    <h3 className="text-2xl font-bold text-white mb-5">{title}</h3>
    <p className="text-zinc-400 mb-10 leading-relaxed text-sm">{desc}</p>
    <ul className="space-y-6">
      {items.map((it: any, i: number) => (
        <li key={i} className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <span className="material-icons text-midnight-yellow text-2xl drop-shadow-[0_0_5px_rgba(255,255,0,0.5)]">check_circle</span>
          </div>
          <div className="ml-4">
            <span className="text-white font-bold block text-base">{it.title}</span>
            <span className="text-zinc-500 text-xs">{it.sub}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ServicesSlide;
