
import React from 'react';
import { SlideProps } from '../../types';

const CommercialsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col p-6 md:p-12 w-full justify-center">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-white/10 pb-6 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">Commercials</h1>
          <p className="text-midnight-yellow font-bold uppercase tracking-widest text-xs md:text-sm">Investment Breakdown</p>
        </div>
        <img
          src="/logo.png"
          alt="OmniVision Logo"
          className="h-10 md:h-14 w-auto object-contain"
        />
      </header>

      <div className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden mb-8 md:mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-zinc-400">
                <th className="p-4 md:p-6 font-bold">Service Item</th>
                <th className="p-4 md:p-6 font-bold">Unit Model</th>
                <th className="p-4 md:p-6 font-bold text-right">Monthly (ZAR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm md:text-base">
              <Row item="Dedicated Monitoring Operator" model="Per Desk / Shift" price="R 28,500.00" />
              <Row item="AI Analytics License (Per Cam)" model="Volume Tier 2" price="R 185.00" />
              <Row item="Offsite Footage Storage" model="30-Day Cloud Retention" price="R 4,200.00" />
              <Row item="System Maintenance & Health Checks" model="SLA Level A" price="Included" highlight />
            </tbody>
            <tfoot>
              <tr className="bg-midnight-yellow/10 border-t-2 border-midnight-yellow">
                <td className="p-4 md:p-6 font-bold text-white uppercase tracking-wider" colSpan={2}>Total Monthly Investment (Excl. VAT)</td>
                <td className="p-4 md:p-6 font-black text-xl md:text-2xl text-midnight-yellow text-right">R 32,885.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg flex items-start space-x-4">
          <span className="material-icons text-blue-400 text-2xl md:text-3xl mt-1">handshake</span>
          <div>
            <h3 className="font-bold text-white text-base md:text-lg mb-2">Partnership Value</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We don't just bill; we build. Includes quarterly strategic reviews and relentless system optimization at no extra cost.
            </p>
          </div>
        </div>
        <div className="bg-midnight-yellow/10 border border-midnight-yellow/30 p-6 rounded-lg flex items-start space-x-4">
          <span className="material-icons text-midnight-yellow text-2xl md:text-3xl mt-1">rocket_launch</span>
          <div>
            <h3 className="font-bold text-white text-base md:text-lg mb-2">Activation Timeline</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Full operational handover within <span className="text-white font-bold">14 days</span> of SLA signature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = ({ item, model, price, highlight }: { item: string; model: string; price: string; highlight?: boolean }) => (
  <tr className={`hover:bg-white/5 transition-colors ${highlight ? 'bg-blue-900/10' : ''}`}>
    <td className="p-4 md:p-6 text-white">{item}</td>
    <td className="p-4 md:p-6 text-zinc-300">{model}</td>
    <td className="p-4 md:p-6 text-right font-semibold">
      {price === 'Included' ? (
        <span className="inline-flex items-center px-3 py-1 border border-blue-500 text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-900/20 rounded-full">
          Included
        </span>
      ) : (
        <>
          <span className="text-midnight-yellow text-sm font-medium mr-1 align-top mt-1 inline-block">R</span>
          {price} <span className="text-xs font-normal text-zinc-500 uppercase tracking-tighter">pm</span>
        </>
      )}
    </td>
  </tr >
);

export default CommercialsSlide;
