
import React from 'react';
import { SlideProps } from '../../types';

const CommercialsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 flex flex-col justify-center min-h-screen">
      <div className="bg-midnight-black border border-zinc-800 rounded-none overflow-hidden flex flex-col shadow-2xl">
        <header className="p-12 flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Monitoring Commercials</h1>
          </div>
          <img
            src="/logo.png"
            alt="OmniVision Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </header>

        <main className="flex-grow px-12">
          <div className="overflow-hidden border border-zinc-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 border-b border-zinc-800">
                  <th className="py-6 px-8 text-sm font-bold tracking-widest uppercase text-midnight-yellow">Service Breakdown</th>
                  <th className="py-6 px-8 text-sm font-bold tracking-widest uppercase text-midnight-yellow text-right">Investment (ZAR) <span className="text-[10px] font-medium opacity-70">Ex-VAT</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <PriceRow icon="settings_input_component" title="Upfront Hardware & Connection" price="Included" />
                <PriceRow icon="groups" title="Dedicated Desk (3 Ops + Relief)" price="65,000" />
                <PriceRow icon="notifications_active" title="Alarm Monitoring (4000 alarms)" price="15,500" />
                <PriceRow icon="videocam" title="Analytics (20 cams)" price="2,200" />
                <PriceRow icon="key" title="Software Licenses" price="2,200" />
              </tbody>
              <tfoot>
                <tr className="bg-midnight-yellow">
                  <td className="py-8 px-8">
                    <span className="text-2xl font-black text-black uppercase tracking-widest">Total Monthly Investment</span>
                  </td>
                  <td className="py-8 px-8 text-right">
                    <div className="inline-block text-black px-4 py-1">
                      <span className="text-sm font-bold uppercase opacity-60 mr-2">Net:</span>
                      <span className="text-4xl font-black">R84,900</span>
                      <span className="text-xs font-bold ml-2 opacity-60 uppercase">pm ex-vat</span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

const PriceRow = ({ icon, title, price }: any) => (
  <tr className="hover:bg-zinc-800/30 transition-colors">
    <td className="py-6 px-8">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined !text-midnight-yellow">{icon}</span>
        <span className="text-lg font-medium text-white">{title}</span>
      </div>
    </td>
    <td className="py-6 px-8 text-right font-bold text-2xl text-white">
      {price === 'Included' ? (
        <span className="inline-flex items-center px-4 py-1.5 border border-midnight-yellow text-midnight-yellow text-sm font-bold uppercase tracking-widest bg-midnight-yellow/5">
          Included
        </span>
      ) : (
        <>
          <span className="text-midnight-yellow text-sm font-medium mr-1 align-top mt-1 inline-block">R</span>
          {price} <span className="text-xs font-normal text-zinc-500 uppercase tracking-tighter">pm</span>
        </>
      )}
    </td>
  </tr>
);

export default CommercialsSlide;
