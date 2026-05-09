'use client';
import { useState } from 'react';

const categories = ["All", "Analytics", "Optimization", "Forecasting", "Risk", "Domain"];

const skills = [
  { 
    name: "Python, R", 
    category: "Analytics", 
    level: "Expert", 
    desc: "Processing massive logistics datasets, feature engineering, and deploying ML models.",
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5h-6V10h10.75L24 10.75v1.25l-.1.3-.2.27-.3.2-.3.13h-2.9l-1.33 1.33-.06.12-.01.12v2.25l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H15.5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H12l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H8.5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H1.5l-.13-.01-.12-.03-.12-.06-.1-.1-.07-.1-.06-.12-.03-.12-.01-.13V22.5l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01H5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-6.5h-6V10h5.85l.12-.01.12-.03.12-.06.1-.1.07-.1.06-.12.03-.12.01-.13V5.5l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12v-.67l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12v-.67l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12V.18l.13.01.12.03.12.06.1.1.07.1.06.12.03.12.01.13v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01h3.5l1.33 1.33.06.12.01.12v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01h3.5l1.33 1.33.06.12.01.12v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01H14.25z"/></svg>
  },
  { 
    name: "SQL, SPSS", 
    category: "Analytics", 
    level: "Advanced", 
    desc: "Extracting/transforming databases and applying foundational statistical computing.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
  },
  { 
    name: "Linear Programming", 
    category: "Optimization", 
    level: "Expert", 
    desc: "Solving complex vehicle routing problems and distribution network design.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  },
  { 
    name: "Queuing Theory", 
    category: "Optimization", 
    level: "Expert", 
    desc: "Warehouse layout optimization and buffer stock management under uncertainty.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  },
  { 
    name: "Time Series (ARIMA)", 
    category: "Forecasting", 
    level: "Expert", 
    desc: "Developing highly accurate demand forecasting models and capacity planning.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  },
  { 
    name: "Exponential Smoothing", 
    category: "Forecasting", 
    level: "Expert", 
    desc: "Optimizing safety stock levels to prevent stockouts and minimize costs.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
  },
  { 
    name: "SIS/SIR Frameworks", 
    category: "Risk", 
    level: "Advanced", 
    desc: "Enhancing supply chain resilience by analyzing disruption contagion.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  { 
    name: "Vulnerability Mapping", 
    category: "Risk", 
    level: "Advanced", 
    desc: "Mapping interconnected Tier 1 and Tier 2 supplier networks.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  },
  { 
    name: "Supply Chain Strategy", 
    category: "Domain", 
    level: "Expert", 
    desc: "Deep understanding of logistics volatility and procurement cycles.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  { 
    name: "Warehouse Design", 
    category: "Domain", 
    level: "Expert", 
    desc: "Optimizing physical flow and throughput in distribution centers.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  },
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
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-50 rounded-lg text-industrial-grey group-hover:bg-iron-lemon transition-colors">
                  {skill.icon}
                </div>
                <h4 className="font-black text-xl text-industrial-grey tracking-tight">{skill.name}</h4>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-2 py-1 rounded text-gray-500 group-hover:bg-iron-lemon group-hover:text-industrial-grey transition-colors">
                {skill.level}
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-4 pl-16">{skill.desc}</p>
            <div className="flex items-center gap-1 pl-16">
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
