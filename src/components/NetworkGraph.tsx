'use client';
import React, { useCallback, useEffect } from 'react';
import ReactFlow, { 
  addEdge, 
  Background, 
  Controls, 
  Connection, 
  Edge, 
  Node, 
  useNodesState, 
  useEdgesState,
  Handle,
  Position,
  NodeProps
} from 'reactflow';
import 'reactflow/dist/style.css';
import T from './T';

type SupplyNodeData = {
  label: string;
  status: 'healthy' | 'disrupted';
};

// Custom Node Component to look industrial
const SupplyNode = ({ data }: NodeProps<SupplyNodeData>) => {
  const isDisrupted = data.status === 'disrupted';
  
  return (
    <div className={`px-4 py-2 shadow-md rounded-md bg-white border-2 transition-all duration-500 ${isDisrupted ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)] animate-pulse' : 'border-industrial-grey hover:border-iron-lemon'}`}>
      <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-gray-400" />
      <div className="flex flex-col items-center">
        <div className={`w-2 h-2 rounded-full mb-1 ${isDisrupted ? 'bg-red-500' : 'bg-green-500'}`} />
        <div className="text-[10px] font-black text-industrial-grey uppercase tracking-tighter">{data.label}</div>
        {isDisrupted && <div className="text-[8px] font-bold text-red-500 animate-bounce">DELAY</div>}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-gray-400" />
    </div>
  );
};

// Define nodeTypes OUTSIDE the component to ensure static reference
const nodeTypes = {
  supplyNode: SupplyNode,
};

const initialNodes: Node<SupplyNodeData>[] = [
  { id: '1', type: 'supplyNode', position: { x: 250, y: 0 }, data: { label: 'Tier 2 Supplier', status: 'healthy' } },
  { id: '2', type: 'supplyNode', position: { x: 100, y: 100 }, data: { label: 'Tier 1 Component', status: 'healthy' } },
  { id: '3', type: 'supplyNode', position: { x: 400, y: 100 }, data: { label: 'Raw Material P.', status: 'healthy' } },
  { id: '4', type: 'supplyNode', position: { x: 250, y: 200 }, data: { label: 'Final Assembly', status: 'healthy' } },
  { id: '5', type: 'supplyNode', position: { x: 100, y: 300 }, data: { label: 'Regional Dist.', status: 'healthy' } },
  { id: '6', type: 'supplyNode', position: { x: 400, y: 300 }, data: { label: 'Last Mile Hub', status: 'healthy' } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e4-6', source: '4', target: '6', animated: true },
];

export default function NetworkGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === node.id) {
          return { ...n, data: { ...n.data, status: 'disrupted' } };
        }
        return n;
      })
    );
  }, [setNodes]);

  // Propagation Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      const disruptedIds = nodes.filter(n => n.data.status === 'disrupted').map(n => n.id);
      
      if (disruptedIds.length > 0) {
        const nextToDisrupt: string[] = [];
        edges.forEach(edge => {
          if (disruptedIds.includes(edge.source) && !disruptedIds.includes(edge.target)) {
            if (Math.random() > 0.4) {
              nextToDisrupt.push(edge.target);
            }
          }
        });

        if (nextToDisrupt.length > 0) {
          setNodes((nds) =>
            nds.map((n) => {
              if (nextToDisrupt.includes(n.id)) {
                return { ...n, data: { ...n.data, status: 'disrupted' } };
              }
              return n;
            })
          );
        }
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [nodes, edges, setNodes]);

  const reset = () => {
    setNodes(initialNodes);
  };

  return (
    <div className="h-[400px] w-full bg-gray-50 rounded-xl border border-gray-200 shadow-inner relative overflow-hidden group">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="#aaa" gap={20} />
        <Controls />
      </ReactFlow>
      
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md p-3 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-[10px] font-black text-industrial-grey uppercase tracking-widest mb-1">Live SIS Simulation</h4>
          <p className="text-[8px] text-gray-400 font-bold max-w-[120px] leading-tight">Click nodes to simulate cascading disruptions across the network.</p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <button 
          onClick={reset}
          className="px-4 py-2 bg-industrial-grey text-iron-lemon text-[10px] font-black uppercase tracking-widest rounded-md hover:bg-black transition-all shadow-lg"
        >
          <T id="sim.reset">Reset Network</T>
        </button>
      </div>
    </div>
  );
}
