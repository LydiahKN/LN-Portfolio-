'use client';
import T from './T';
import dynamic from 'next/dynamic';

// Dynamically import NetworkGraph to avoid SSR issues with React Flow
const NetworkGraph = dynamic(() => import('./NetworkGraph'), { ssr: false });

export default function SupplyChainSimulation() {
  return (
    <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-xl glass-panel relative overflow-hidden group h-full flex flex-col">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <svg className="w-24 h-24 text-industrial-grey" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.18L19.5 8.5 12 12.82 4.5 8.5 12 4.18zM4 15.5v-5.18l7 4v5.18l-7-4zm9 4v-5.18l7-4v5.18l-7-4z"/></svg>
      </div>

      <h3 className="text-xl font-black text-industrial-grey mb-2 tracking-tight flex items-center gap-2">
        <span className="p-1.5 bg-iron-lemon rounded text-sm">VRP</span>
        <T id="sim.title">Enterprise Risk Simulator</T>
      </h3>
      <p className="text-sm text-gray-500 mb-8 font-medium">
        <T id="sim.desc">A professional visualization of risk propagation across Tier 1 and Tier 2 supply networks using SIS contagion parameters.</T>
      </p>

      <div className="flex-grow">
        <NetworkGraph />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-[10px] font-bold text-gray-400 uppercase">Stable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-gray-400 uppercase">Critical</span>
          </div>
        </div>
        
        <div className="text-[10px] font-mono text-gray-400 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
          ALGORITHM: SIS_PROB_DIST_0.4
        </div>
      </div>
    </div>
  );
}
