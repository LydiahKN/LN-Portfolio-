import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lydiah Nyakweba | Logistics Data Analyst & Operations Research",
  description: "Portfolio of Lydiah Nyakweba, a Logistics Data Analyst specializing in predictive modeling, supply chain efficiency, and Operations Research for the German market.",
};

export default function Home() {
  const tools = [
    "Python", "Power BI", "SQL", "ARIMA", "Gurobi", "SAP ERP", "SPSS", "MS Excel", "Time Series", "SIS/SIR Models", "Linear Programming", "Tableau", "Git"
  ];
  
  // Duplicate for seamless infinite scroll
  const scrollTools = [...tools, ...tools, ...tools, ...tools];

  const processSteps = [
    { num: "01", title: "Data Auditing", desc: "Deep-dive into historical transit, inventory, and supply chain data to identify hidden bottlenecks." },
    { num: "02", title: "Mathematical Modeling", desc: "Apply predictive algorithms (ARIMA, Exponential Smoothing) to forecast demand cycles." },
    { num: "03", title: "Network Optimization", desc: "Solve Vehicle Routing Problems (VRP) using linear programming to minimize freight costs." },
    { num: "04", title: "Risk Mitigation", desc: "Deploy contagion modeling (SIS/SIR) to simulate and prevent cascading supply chain failures." },
  ];

  return (
    <div className="gradient-mesh min-h-screen">
      
      {/* 1. Hero Section with Glassmorphism */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center w-full gap-12">
          
          <div className="md:w-3/5 flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 w-fit shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-industrial-grey tracking-wide uppercase">
                Based in Germany
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-industrial-grey tracking-tight mb-4 leading-tight">
              Logistics Data Analyst <br />
              <span className="text-gray-400 font-light">& Operations Research</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed font-medium">
              Leveraging advanced mathematical modeling and predictive analytics to drive supply chain efficiency, optimize routing, and mitigate disruption risks.
            </p>

            {/* Metrics */}
            <div className="flex gap-6 sm:gap-8 border-y border-gray-200/50 py-6 mb-8">
              <div>
                <div className="text-3xl font-extrabold text-industrial-grey tabular-nums">2</div>
                <div className="text-xs text-gray-500 font-bold tracking-wide uppercase mt-1">ZAB Degrees</div>
              </div>
              <div className="border-l border-gray-200/50 pl-6 sm:pl-8">
                <div className="text-3xl font-extrabold text-industrial-grey tabular-nums">1.0</div>
                <div className="text-xs text-gray-500 font-bold tracking-wide uppercase mt-1">Grade Equiv.</div>
              </div>
              <div className="border-l border-gray-200/50 pl-6 sm:pl-8">
                <div className="text-3xl font-extrabold text-industrial-grey tabular-nums">C2</div>
                <div className="text-xs text-gray-500 font-bold tracking-wide uppercase mt-1">English (A2 DE)</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="inline-flex justify-center items-center px-8 py-4 bg-iron-lemon text-industrial-grey font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-md">
                View Project Portfolio
              </Link>
              <a href="/lydiah.nyakweba-bewerbung.pdf" target="_blank" className="inline-flex justify-center items-center px-8 py-4 bg-industrial-grey text-white font-bold rounded-lg hover:bg-black transition-colors shadow-md">
                Download Dossier
              </a>
            </div>
          </div>

          {/* Bewerbungsfoto Placeholder */}
          <div className="md:w-2/5 flex justify-center md:justify-end mt-12 md:mt-0 relative">
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden glass-panel flex flex-col items-center justify-center text-gray-400 transform transition-transform hover:scale-[1.02]">
              <svg className="w-20 h-20 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="font-bold tracking-widest uppercase text-sm text-gray-500">Bewerbungsfoto</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Infinite Auto-Scrolling Tech Marquee */}
      <section className="relative z-10 py-10 bg-industrial-grey text-white overflow-hidden border-y-4 border-iron-lemon shadow-xl">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <p className="text-center text-white/50 text-xs font-bold uppercase tracking-widest">Tools and Technologies</p>
        </div>
        <div className="relative flex w-[300%] md:w-[200%] lg:w-full overflow-hidden hide-scrollbar">
          <div className="flex w-max animate-infinite-scroll gap-4 px-4 items-center">
            {scrollTools.map((tool, idx) => (
              <div key={idx} className="flex-shrink-0 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 font-bold tracking-wide">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "3-in-1" Value Proposition Badges */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Core Value Proposition</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-industrial-grey">The 3-in-1 Synergy</h2>
          <div className="h-1 w-16 bg-iron-lemon mx-auto mt-6 rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl hover:border-iron-lemon transition-colors">
            <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center mb-6 text-2xl shadow-sm border border-gray-100">📊</div>
            <h3 className="text-xl font-bold text-industrial-grey mb-3">Data Science</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">Advanced analytics, statistical modeling, and machine learning to extract actionable intelligence from massive logistics datasets.</p>
          </div>
          <div className="glass-panel p-8 rounded-2xl hover:border-iron-lemon transition-colors">
            <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center mb-6 text-2xl shadow-sm border border-gray-100">🧮</div>
            <h3 className="text-xl font-bold text-industrial-grey mb-3">Operations Research</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">Mathematical optimization, linear programming, and combinatorial algorithms to minimize costs and maximize resource allocation.</p>
          </div>
          <div className="glass-panel p-8 rounded-2xl hover:border-iron-lemon transition-colors">
            <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center mb-6 text-2xl shadow-sm border border-gray-100">📦</div>
            <h3 className="text-xl font-bold text-industrial-grey mb-3">Logistics Domain</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">Deep understanding of supply chain volatility, demand forecasting, warehousing, and dynamic network routing.</p>
          </div>
        </div>
      </section>

      {/* 4. 4-Step "How I Work" Methodology Framework */}
      <section className="relative z-10 bg-white/40 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center md:text-left">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">My Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-industrial-grey">How I Solve Supply Chain Problems</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-iron-lemon transition-colors"></div>
                <div className="text-4xl font-black text-gray-100 mb-4 tracking-tighter">{step.num}</div>
                <h3 className="text-lg font-bold text-industrial-grey mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referenzen (Testimonial) Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <div className="glass-panel rounded-3xl p-10 md:p-16 text-center transform transition-transform hover:scale-[1.01]">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Arbeitszeugnis / References</p>
          <blockquote className="text-2xl md:text-3xl text-industrial-grey font-light italic leading-snug mb-8">
            "Lydiah demonstrates an exceptional grasp of Operations Research. Her ability to translate complex mathematical theorems into actionable operational strategies is outstanding."
          </blockquote>
          <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-black text-lg">Dr. Michael Munywoki</div>
            <div className="text-sm font-semibold text-gray-500 mb-2">Department of Mathematics & Physics</div>
            <div className="text-xs font-bold text-industrial-grey bg-iron-lemon px-3 py-1 rounded shadow-sm">Technical University of Mombasa</div>
          </div>
        </div>
      </section>

    </div>
  );
}
