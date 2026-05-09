import Link from "next/link";
import type { Metadata } from "next";
import T from "@/components/T";
import GradeConverter from "@/components/GradeConverter";
import SupplyChainSimulation from "@/components/SupplyChainSimulation";
import ZABShowcase from "@/components/ZABShowcase";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Lydiah Nyakweba | Logistics Data Analyst & Operations Research",
  description: "Portfolio of Lydiah Nyakweba, a Logistics Data Analyst specializing in predictive modeling, supply chain efficiency, and Operations Research for the German market.",
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lydiah Nyakweba',
    jobTitle: 'Logistics Data Analyst & Operations Research Specialist',
    description: 'Leveraging advanced mathematical modeling and predictive analytics to drive supply chain efficiency, optimize routing, and mitigate disruption risks in the German market.',
    knowsAbout: [
      "Operations Research",
      "Supply Chain Optimization",
      "Data Science",
      "Predictive Analytics",
      "Logistics Management"
    ]
  };

  const tools = [
    { name: "Python", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5h-6V10h10.75L24 10.75v1.25l-.1.3-.2.27-.3.2-.3.13h-2.9l-1.33 1.33-.06.12-.01.12v2.25l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H15.5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H12l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H8.5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H1.5l-.13-.01-.12-.03-.12-.06-.1-.1-.07-.1-.06-.12-.03-.12-.01-.13V22.5l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01H5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-6.5h-6V10h5.85l.12-.01.12-.03.12-.06.1-.1.07-.1.06-.12.03-.12.01-.13V5.5l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12v-.67l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12v-.67l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12V.18l.13.01.12.03.12.06.1.1.07.1.06.12.03.12.01.13v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01h3.5l1.33 1.33.06.12.01.12v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01h3.5l1.33 1.33.06.12.01.12v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01H14.25z"/></svg> },
    { name: "Power BI", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24v-8h-4v8h4zm4 0v-12h-4v12h4zm4 0v-16h-4v16h4z"/></svg> },
    { name: "SQL", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg> },
    { name: "SAP ERP", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> },
    { name: "Gurobi", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 18.18L4.5 15.5v-7L12 4.18l7.5 4.32v7L12 20.18z"/></svg> },
    { name: "Tableau", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5 13.5H13.5V10.5H10.5V13.5ZM10.5 17H13.5V14H10.5V17ZM10.5 10H13.5V7H10.5V10ZM7 13.5H10V10.5H7V13.5ZM14 13.5H17V10.5H14V13.5Z"/></svg> },
    { name: "Git", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 11.25L12.75 3.5a1.5 1.5 0 00-2.1 0L9.4 4.75l2.1 2.1a1.5 1.5 0 11-2.1 2.1l-2.1-2.1L3.5 10.65a1.5 1.5 0 000 2.1l7.75 7.75a1.5 1.5 0 002.1 0l7.15-7.15a1.5 1.5 0 000-2.1z"/></svg> },
  ];
  
  const scrollTools = [...tools, ...tools, ...tools, ...tools];

  const processSteps = [
    { num: "01", titleId: "process.1.title", descId: "process.1.desc", fallbackTitle: "Data Auditing", fallbackDesc: "Deep-dive into historical transit, inventory, and supply chain data to identify hidden bottlenecks." },
    { num: "02", titleId: "process.2.title", descId: "process.2.desc", fallbackTitle: "Mathematical Modeling", fallbackDesc: "Apply predictive algorithms (ARIMA, Exponential Smoothing) to forecast demand cycles." },
    { num: "03", titleId: "process.3.title", descId: "process.3.desc", fallbackTitle: "Network Optimization", fallbackDesc: "Solve Vehicle Routing Problems (VRP) using linear programming to minimize freight costs." },
    { num: "04", titleId: "process.4.title", descId: "process.4.desc", fallbackTitle: "Risk Mitigation", fallbackDesc: "Deploy contagion modeling (SIS/SIR) to simulate and prevent cascading supply chain failures." },
  ];

  return (
    <div className="gradient-mesh min-h-screen pb-20">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* 1. Hero Section */}
      <Reveal>
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center w-full gap-12">
            
            <div className="md:w-3/5 flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 w-fit shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-black text-industrial-grey tracking-wide uppercase">
                  <T id="hero.badge">Based in Germany</T>
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-industrial-grey tracking-tight mb-4 leading-tight">
                <T id="hero.title.1">Logistics Data Analyst</T> <br />
                <span className="text-gray-400 font-light"><T id="hero.title.2">& Operations Research</T></span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed font-medium">
                <T id="hero.subtitle">Leveraging advanced mathematical modeling and predictive analytics to drive supply chain efficiency, optimize routing, and mitigate disruption risks.</T>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/projects" className="inline-flex justify-center items-center px-8 py-4 bg-iron-lemon text-industrial-grey font-bold rounded-lg hover:bg-yellow-400 transition-all hover:scale-105 shadow-md">
                  <T id="hero.btn.portfolio">View Project Portfolio</T>
                </Link>
                <a href="/lydiah-nyakweba-cv.html" target="_blank" className="inline-flex justify-center items-center px-8 py-4 bg-industrial-grey text-white font-bold rounded-lg hover:bg-black transition-all hover:scale-105 shadow-md">
                  <T id="hero.btn.dossier">Download Dossier</T>
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-gray-200/50">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-industrial-grey">1.0</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">Grade Equiv.</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4">
                  <span className="text-3xl font-black text-industrial-grey">2</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">ZAB Degrees</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4">
                  <span className="text-3xl font-black text-industrial-grey">C2</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">English Prof.</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4">
                  <span className="text-3xl font-black text-iron-lemon">2026</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">Market Ready</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/5 flex justify-center md:justify-end mt-12 md:mt-0 relative">
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden glass-panel shadow-2xl transform transition-transform hover:scale-[1.02] group">
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-grey/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                  <svg className="w-20 h-20 mb-4 text-gray-200 group-hover:text-iron-lemon transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span className="font-black tracking-widest uppercase text-[10px] text-gray-400 group-hover:text-white transition-colors z-20">Bewerbungsfoto</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 1.5 ZAB Showcase */}
      <Reveal delay={200}>
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ZABShowcase />
        </section>
      </Reveal>

      {/* 2. Marquee */}
      <section className="relative z-10 py-10 bg-industrial-grey text-white overflow-hidden border-y-4 border-iron-lemon shadow-xl">
        <div className="relative flex w-[300%] md:w-[200%] lg:w-full overflow-hidden hide-scrollbar">
          <div className="flex w-max animate-infinite-scroll gap-4 px-4 items-center">
            {scrollTools.map((tool, idx) => (
              <div key={idx} className="flex-shrink-0 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 font-black tracking-wide flex items-center gap-3">
                <span className="text-iron-lemon">{tool.icon}</span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Milestones */}
      <section id="milestones" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Verified Recognition</p>
            <h2 className="text-3xl md:text-4xl font-black text-industrial-grey uppercase tracking-tighter">Key Professional Milestones</h2>
            <div className="h-1.5 w-16 bg-iron-lemon mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { year: "2024", title: "ZAB Master Equivalence", desc: "Statement of Comparability for Master of Science in Logistics.", link: "/credentials" },
            { year: "2023", title: "Dean's List Award", desc: "Top 5% academic performance at Technical University of Mombasa.", link: "https://www.tum.ac.ke/" },
            { year: "2022", title: "OR Research Lead", desc: "Led supply chain optimization research for Tier-1 distributors.", link: "/projects" },
            { year: "2021", title: "B.Sc. Mathematics", desc: "First Class Honours equivalent (German 1.0).", link: "/credentials" },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 100}>
              <Link href={m.link} className="group h-full flex flex-col p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all border-b-4 border-b-gray-100 hover:border-b-iron-lemon overflow-hidden relative">
                <div className="absolute inset-0 bg-iron-lemon/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-xs font-black text-iron-lemon uppercase tracking-widest relative z-10">{m.year}</span>
                <h3 className="text-lg font-black text-industrial-grey mt-2 group-hover:text-black transition-colors relative z-10">{m.title}</h3>
                <p className="text-xs text-gray-500 font-medium mt-2 leading-relaxed relative z-10">{m.desc}</p>
                <div className="mt-auto pt-4 flex items-center text-[10px] font-black text-gray-300 group-hover:text-iron-lemon transition-colors relative z-10">
                  VERIFIED STATUS <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Services */}
      <section className="relative z-10 bg-industrial-grey py-20 border-y border-iron-lemon/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-iron-lemon/5 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-black text-iron-lemon uppercase tracking-widest mb-2">Service Portfolio</p>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Operational Efficiency <br /><span className="text-gray-500">as a Service.</span></h2>
              </div>
              <Link href="/contact" className="px-6 py-3 bg-white text-industrial-grey font-black text-xs uppercase tracking-widest rounded-lg hover:bg-iron-lemon transition-all shadow-lg hover:scale-105">Request Consultation</Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Supply Chain Auditing", desc: "Comprehensive analysis of transit, inventory, and procurement data to identify cost-leakage and process bottlenecks." },
              { num: "02", title: "Network Optimization", desc: "Deployment of mathematical solvers (VRP/OR) to optimize routing paths and reduce fuel/freight expenses by up to 15%." },
              { num: "03", title: "Predictive Stock Control", desc: "Implementation of advanced demand forecasting models to maintain optimal safety stock and prevent capital-lock in inventory." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="h-full relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-iron-lemon/50 group">
                  <span className="text-4xl font-black text-white/10 group-hover:text-iron-lemon transition-colors">{s.num}</span>
                  <h3 className="text-xl font-black text-white mt-4 mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-16 text-center md:text-left">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2"><T id="process.subtitle">My Process</T></p>
              <h2 className="text-3xl md:text-4xl font-black text-industrial-grey uppercase tracking-tighter"><T id="process.title">How I Solve Supply Chain Problems</T></h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-iron-lemon transition-colors"></div>
                  <div className="text-4xl font-black text-gray-100 mb-4 tracking-tighter group-hover:text-iron-lemon/20 transition-colors">{step.num}</div>
                  <h3 className="text-lg font-black text-industrial-grey mb-3"><T id={step.titleId}>{step.fallbackTitle}</T></h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-bold"><T id={step.descId}>{step.fallbackDesc}</T></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Strategic Risk & Mitigation Register (Inspired by Omari Studio) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="bg-white rounded-3xl border-2 border-industrial-grey p-8 md:p-12 shadow-[10px_10px_0px_rgba(62,62,62,1)]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
              <div className="max-w-xl">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Consultative Foresight</p>
                <h2 className="text-3xl md:text-4xl font-black text-industrial-grey uppercase tracking-tighter">Supply Chain <span className="text-gray-400 italic">Risk Register</span></h2>
                <p className="mt-4 text-sm text-gray-600 font-bold leading-relaxed">
                  Translating mathematical contagion models into actionable corporate risk mitigation protocols.
                </p>
              </div>
              <div className="px-4 py-2 bg-industrial-grey text-iron-lemon text-[10px] font-black uppercase tracking-widest rounded shadow-lg">
                SOC 2 / GDPR Compliant Architecture
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-red-50 rounded-2xl border border-red-100 group hover:bg-red-100 transition-colors">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Risk ID: SC-001</span>
                    <span className="px-2 py-1 bg-red-600 text-white text-[9px] font-black uppercase rounded">High Impact</span>
                  </div>
                  <h4 className="font-black text-industrial-grey mb-2 uppercase tracking-tight">Tier-2 Supplier Contagion</h4>
                  <p className="text-xs text-gray-500 font-bold leading-relaxed">Hidden bottlenecks in sub-tier networks causing cascading assembly line shutdowns.</p>
                  <div className="mt-4 pt-4 border-t border-red-200">
                    <span className="text-[9px] font-black text-industrial-grey uppercase tracking-widest">Mitigation:</span>
                    <p className="text-[10px] text-red-600 font-black mt-1 uppercase tracking-wider italic">N-1 Redundancy + Dynamic Buffering</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 group hover:bg-blue-100 transition-colors">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Risk ID: LG-042</span>
                    <span className="px-2 py-1 bg-blue-600 text-white text-[9px] font-black uppercase rounded">Medium Impact</span>
                  </div>
                  <h4 className="font-black text-industrial-grey mb-2 uppercase tracking-tight">Labor/Capacity Volatility</h4>
                  <p className="text-xs text-gray-500 font-bold leading-relaxed">Fluctuations in freight availability leading to 15%+ spike in spot-market spend.</p>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <span className="text-[9px] font-black text-industrial-grey uppercase tracking-widest">Mitigation:</span>
                    <p className="text-[10px] text-blue-600 font-black mt-1 uppercase tracking-wider italic">Predictive Demand Smoothing (ARIMA)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* NEW: 2026 German Market Alignment (Inspired by Strategic Analysis) */}
      <section className="relative z-10 bg-industrial-grey py-24 overflow-hidden border-y border-iron-lemon/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-black text-iron-lemon uppercase tracking-widest mb-2">Market Intelligence // 2026 Focus</p>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Solving the <span className="text-gray-500">German Logistics Challenge.</span></h2>
              <div className="h-1.5 w-16 bg-iron-lemon mx-auto mt-6 rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={100}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-iron-lemon transition-all group">
                <div className="w-12 h-12 bg-iron-lemon/10 rounded-xl flex items-center justify-center text-iron-lemon mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">Predictive Routing</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-bold">Mitigating the 2026 driver shortage by mathematically optimizing European same-day networks through advanced Vehicle Routing (VRP) algorithms.</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-iron-lemon transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">LkSG Compliance</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-bold">Applying SIS/SIR risk contagion modeling to identify supplier vulnerabilities, ensuring adherence to the German Supply Chain Due Diligence Act.</p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-iron-lemon transition-all group">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">AI-Driven Fulfillment</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-bold">Optimizing safety stock and e-commerce warehousing operations through predictive demand smoothing to combat 2026 labor market volatility.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50/50 rounded-3xl mb-20 border border-gray-100 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-iron-lemon/10 rounded-full blur-3xl animate-float"></div>
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2"><T id="tools.subtitle">Simulation & Analysis</T></p>
            <h2 className="text-3xl md:text-4xl font-black text-industrial-grey uppercase tracking-tighter"><T id="tools.title">Decision Support Lab</T></h2>
            <div className="h-1.5 w-16 bg-iron-lemon mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start px-4">
          <Reveal delay={200}>
            <GradeConverter />
          </Reveal>
          <Reveal delay={400}>
            <SupplyChainSimulation />
          </Reveal>
        </div>
      </section>

      {/* Reference Section */}
      <Reveal>
        <section className="relative z-10 max-w-4xl mx-auto px-4 py-20">
          <div className="glass-panel rounded-3xl p-10 md:p-16 text-center shadow-2xl border border-white transform transition-transform hover:rotate-1 hover:scale-[1.01] group">
            <div className="absolute inset-0 bg-iron-lemon/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-6 relative z-10"><T id="ref.title">Arbeitszeugnis / References</T></p>
            <blockquote className="text-2xl md:text-3xl text-industrial-grey font-light italic leading-snug mb-8 relative z-10">
              &quot;Lydiah demonstrates an exceptional grasp of Operations Research. Her ability to translate complex mathematical theorems into actionable operational strategies is outstanding.&quot;
            </blockquote>
            <div className="flex flex-col items-center justify-center relative z-10">
              <div className="font-black text-black text-lg">Dr. Michael Munywoki</div>
              <div className="text-xs font-bold text-gray-500 mb-2">Department of Mathematics & Physics</div>
              <div className="text-[10px] font-black text-industrial-grey bg-iron-lemon px-3 py-1 rounded shadow-sm uppercase tracking-widest animate-float">Technical University of Mombasa</div>
            </div>
          </div>
        </section>
      </Reveal>

    </div>
  );
}