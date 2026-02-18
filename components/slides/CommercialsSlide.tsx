
import React from 'react';
import { SlideProps } from '../../types';

const CommercialsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col p-6 md:p-12 w-full justify-center">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-white/10 pb-6 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">Commercials</h1>
          <p className="text-midnight-yellow font-bold uppercase tracking-widest text-xs md:text-sm">Cost Breakdown</p>
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
                <th className="p-4 md:p-6 font-bold w-2/3">Service Breakdown</th>
                <th className="p-4 md:p-6 font-bold text-right w-1/3">Cost (ZAR) Ex VAT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm md:text-base">
              <Row item="Upfront Hardware & Connection" price="Included" highlight />
              <Row item="Dedicated Desk (3 Ops + Relief)" price="R 65,000.00" />
              <Row item="Alarm Monitoring (4,000 alarms)" price="R 15,500.00" />
              <Row item="Analytics (20 licenses)" price="R 2,200.00" />
              <Row item="Software Licenses" price="R 2,200.00" />
            </tbody>
            <tfoot>
              <tr className="bg-midnight-yellow/10 border-t-2 border-midnight-yellow">
                <td className="p-4 md:p-6 font-bold text-white uppercase tracking-wider">Total Monthly Cost</td>
                <td className="p-4 md:p-6 font-black text-xl md:text-2xl text-midnight-yellow text-right">R 84,900.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>


    </div>
  );
};

const Row = ({ item, price, highlight }: { item: string; price: string; highlight?: boolean }) => (
  <tr className={`hover:bg-white/5 transition-colors ${highlight ? 'bg-blue-900/10' : ''}`}>
    <td className="p-4 md:p-6 text-white font-medium">{item}</td>
    <td className="p-4 md:p-6 text-right font-semibold">
      {price === 'Included' || price === 'INCLUDED' ? (
        <span className="inline-flex items-center px-3 py-1 border border-blue-500 text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-900/20 rounded-full">
          Included
        </span>
      ) : (
        <>
          {price} <span className="text-xs font-normal text-zinc-500 uppercase tracking-tighter">pm</span>
        </>
      )}
    </td>
  </tr >
);

export default CommercialsSlide;
