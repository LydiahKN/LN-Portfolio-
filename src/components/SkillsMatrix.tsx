'use client';
import { useState } from 'react';
import Reveal from './Reveal';

const categories = ["All", "Analytics", "Optimization", "Forecasting", "Risk", "Domain"];

const skills = [
  { 
    name: "Python, R", 
    category: "Analytics", 
    level: "Expert", 
    desc: "Processing massive logistics datasets and deploying ML models.",
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5h-6V10h10.75L24 10.75v1.25l-.1.3-.2.27-.3.2-.3.13h-2.9l-1.33 1.33-.06.12-.01.12v2.25l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H15.5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H12l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H8.5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H1.5l-.13-.01-.12-.03-.12-.06-.1-.1-.07-.1-.06-.12-.03-.12-.01-.13V22.5l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01H5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-6.5h-6V10h5.85l.12-.01.12-.03.12-.06.1-.1.07-.1.06-.12.03-.12.01-.13V5.5l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12v-.67l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12v-.67l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12V.18l.13.01.12.03.12.06.1.1.07.1.06.12.03.12.01.13v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01h3.5l1.33 1.33.06.12.01.12v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01h3.5l1.33 1.33.06.12.01.12v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01H14.25z"/></svg>,
    span: "md:col-span-2 md:row-span-2"
  },
  { 
    name: "SQL", 
    category: "Analytics", 
    level: "Expert", 
    desc: "Advanced relational database management.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    span: "md:col-span-1 md:row-span-1"
  },
  { 
    name: "VRP Optimization", 
    category: "Optimization", 
    level: "Expert", 
    desc: "Vehicle Routing & Network Design.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    span: "md:col-span-1 md:row-span-1"
  },
  { 
    name: "Time Series (ARIMA)", 
    category: "Forecasting", 
    level: "Expert", 
    desc: "Predictive demand forecasting.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    span: "md:col-span-2 md:row-span-1"
  },
  { 
    name: "SIS/SIR Risk", 
    category: "Risk", 
    level: "Expert", 
    desc: "Contagion modeling for supply resilience.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    span: "md:col-span-1 md:row-span-1"
  },
  { 
    name: "SAP ERP", 
    category: "Domain", 
    level: "Advanced", 
    desc: "Enterprise resource planning and MM/PP modules.",
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
    span: "md:col-span-1 md:row-span-1"
  },
];

export default function SkillsMatrix() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSkills = activeFilter === 'All' ? skills : skills.filter(s => s.category === activeFilter);

  return (
    <div className="w-full">
      <Reveal>
        <div className="flex gap-2 mb-12 flex-wrap">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full transition-all border-2 ${activeFilter === cat ? 'bg-industrial-grey border-industrial-grey text-iron-lemon scale-105 shadow-lg' : 'bg-white border-gray-100 text-gray-400 hover:border-iron-lemon hover:text-industrial-grey'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]">
        {filteredSkills.map((skill, idx) => (
          <Reveal key={skill.name} delay={idx * 100}>
            <div 
              className={`h-full group relative overflow-hidden bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:border-iron-lemon transition-all duration-500`}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full transition-colors group-hover:bg-iron-lemon/10 -z-0"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-industrial-grey text-iron-lemon rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-industrial-grey transition-colors">
                      {skill.level}
                    </span>
                  </div>
                  <h4 className="font-black text-xl text-industrial-grey tracking-tighter leading-none mb-2">{skill.name}</h4>
                  <p className="text-xs text-gray-400 font-bold leading-relaxed max-w-[200px]">{skill.desc}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex-grow h-1.5 bg-gray-100 rounded-full overflow-hidden mr-4">
                    <div 
                      className="h-full bg-iron-lemon transition-all duration-1000 delay-300" 
                      style={{ width: skill.level === 'Expert' ? '100%' : '75%' }}
                    ></div>
                  </div>
                  <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest group-hover:text-iron-lemon">{skill.category}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
