'use client';
import { useState, useEffect } from 'react';
import T from './T';

type Node = { id: number; status: 'healthy' | 'disrupted' | 'recovering' };

export default function SupplyChainSimulation() {
  const [nodes, setNodes] = useState<Node[]>(
    Array.from({ length: 6 }, (_, i) => ({ id: i, status: 'healthy' }))
  );

  const disruptNode = (id: number) => {
    setNodes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: 'disrupted' } : n))
    );
  };

  // Simulate risk propagation (SIS model logic)
  useEffect(() => {
    const disruptedNodes = nodes.filter(n => n.status === 'disrupted');
    if (disruptedNodes.length > 0 && disruptedNodes.length < nodes.length) {
      const timer = setTimeout(() => {
        setNodes(prev => prev.map(n => 
          n.status === 'healthy' && Math.random() > 0.4 ? { ...n, status: 'disrupted' } : n
        ));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [nodes]);

  const resetNetwork = () => {
    setNodes(nodes.map(n => ({ ...n, status: 'healthy' })));
  };

  return (
    <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-xl glass-panel relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <svg className="w-24 h-24 text-industrial-grey" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.18L19.5 8.5 12 12.82 4.5 8.5 12 4.18zM4 15.5v-5.18l7 4v5.18l-7-4zm9 4v-5.18l7-4v5.18l-7-4z"/></svg>
      </div>

      <h3 className="text-xl font-black text-industrial-grey mb-2 tracking-tight flex items-center gap-2">
        <span className="p-1.5 bg-iron-lemon rounded text-sm">VRP</span>
        <T id="sim.title">Network Disruption Simulator</T>
      </h3>
      <p className="text-sm text-gray-500 mb-8 font-medium">
        <T id="sim.desc">Click a node to introduce a delay and watch the contagion effect (SIS Model).</T>
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {nodes.map((node) => (
          <button
            key={node.id}
            onClick={() => disruptNode(node.id)}
            className={`group relative w-full aspect-square rounded-xl transition-all duration-500 font-bold flex flex-col items-center justify-center border-2 ${
              node.status === 'disrupted' 
                ? 'bg-red-50 border-red-500 text-red-600 shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse' 
                : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-iron-lemon hover:text-industrial-grey'
            }`}
          >
            <div className={`w-3 h-3 rounded-full mb-2 ${node.status === 'disrupted' ? 'bg-red-500' : 'bg-green-500'}`}></div>
            <span className="text-[10px] uppercase tracking-tighter">Node {node.id + 1}</span>
          </button>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button 
          onClick={resetNetwork} 
          className="px-6 py-2.5 bg-industrial-grey text-iron-lemon font-black text-xs uppercase tracking-widest rounded-lg hover:bg-black transition-all shadow-lg active:scale-95"
        >
          <T id="sim.reset">Reset Network</T>
        </button>
        
        <div className="text-[10px] font-mono text-gray-400 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
          PROBABILITY: 0.4 | SIS_THETA: 1.5
        </div>
      </div>
    </div>
  );
}
