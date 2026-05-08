'use client';
import { useState } from 'react';
import T from '@/components/T';

const categories = ["All", "Analytics", "Optimization", "Forecasting", "Risk", "Domain"];

const skills = [
  { name: "Python, R", category: "Analytics", level: "Advanced", desc: "Processing massive logistics datasets, feature engineering, and deploying ML models." },
  { name: "SQL, SPSS", category: "Analytics", level: "Advanced", desc: "Extracting/transforming databases and applying foundational statistical computing." },
  { name: "Linear Programming", category: "Optimization", level: "Expert", desc: "Solving complex vehicle routing problems and distribution network design." },
  { name: "Queuing Theory", category: "Optimization", level: "Expert", desc: "Warehouse layout optimization and buffer stock management under uncertainty." },
  { name: "Time Series (ARIMA)", category: "Forecasting", level: "Expert", desc: "Developing highly accurate demand forecasting models and capacity planning." },
  { name: "Exponential Smoothing", category: "Forecasting", level: "Expert", desc: "Optimizing safety stock levels to prevent stockouts and minimize holding costs." },
  { name: "SIS/SIR Frameworks", category: "Risk", level: "Advanced", desc: "Enhancing supply chain resilience by analyzing disruption contagion." },
  { name: "Vulnerability Mapping", category: "Risk", level: "Advanced", desc: "Mapping interconnected Tier 1 and Tier 2 supplier networks." },
  { name: "Supply Chain Strategy", category: "Domain", level: "Expert", desc: "Deep understanding of logistics volatility and procurement cycles." },
  { name: "Warehouse Design", category: "Domain", level: "Expert", desc: "Optimizing physical flow and throughput in distribution centers." },
];

export default function SkillsMatrix() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSkills = activeFilter === 'All' ? skills : skills.filter(s => s.category === activeFilter);

  return (
    <div className="w-full">
      <div className="flex gap-3 mb-10 flex-wrap">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 text-xs font-black uppercase tracking-widest rounded-lg transition-all border-2 ${activeFilter === cat ? 'bg-iron-lemon border-iron-lemon text-industrial-grey shadow-lg scale-105' : 'bg-white border-gray-200 text-gray-400 hover:border-iron-lemon hover:text-industrial-grey'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map(skill => (
          <div key={skill.name} className="group p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:border-iron-lemon transition-all border-l-8 border-l-industrial-grey">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-black text-xl text-industrial-grey tracking-tight">{skill.name}</h4>
              <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-2 py-1 rounded text-gray-500 group-hover:bg-iron-lemon group-hover:text-industrial-grey transition-colors">
                {skill.level}
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-4">{skill.desc}</p>
            <div className="flex items-center gap-1">
              <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full bg-iron-lemon ${skill.level === 'Expert' ? 'w-full' : 'w-3/4'}`}></div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 ml-2">{skill.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
