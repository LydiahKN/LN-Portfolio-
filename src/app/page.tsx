import Link from "next/link";
import type { Metadata } from "next";
import T from "@/components/T";
import GradeConverter from "@/components/GradeConverter";
import SupplyChainSimulation from "@/components/SupplyChainSimulation";
import ZABShowcase from "@/components/ZABShowcase";

export const metadata: Metadata = {
  title: "Lydiah Nyakweba | Logistics Data Analyst & Operations Research",
  description: "Portfolio of Lydiah Nyakweba, a Logistics Data Analyst specializing in predictive modeling, supply chain efficiency, and Operations Research for the German market.",
};

export default function Home() {
  // JSON-LD Structured Data for Next.js 15 SEO
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
    { name: "Python", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5h-6V10h10.75L24 10.75v1.25l-.1.3-.2.27-.3.2-.3.13h-2.9l-1.33 1.33-.06.12-.01.12v2.25l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H15.5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H12l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H8.5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H5l-1.33 1.33-.06.12-.01.12v.67l-.01.13-.03.12-.06.12-.07.1-.1.1-.12.06-.12.03-.13.01H1.5l-.13-.01-.12-.03-.12-.06-.1-.1-.07-.1-.06-.12-.03-.12-.01-.13V22.5l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01H5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-.67l.01-.13.03-.12.06-.12.07-.1.1-.1.12-.06.12-.03.13-.01h3.5l1.33-1.33.06-.12.01-.12v-6.5h-6V10h5.85l.12-.01.12-.03.12-.06.1-.1.07-.1.06-.12.03-.12.01-.13V5.5l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12v-.67l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12v-.67l-.01-.13-.03-.12-.06-.12-.07-.1-.1-.1-.12-.06-.12-.03-.13-.01h-3.5l-1.33-1.33-.06-.12-.01-.12V.18l.13.01.12.03.12.06.1.1.07.1.06.12.03.12.01.13v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01h3.5l1.33 1.33.06.12.01.12v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01h3.5l1.33 1.33.06.12.01.12v.67l.01.13.03.12.06.12.07.1.1.1.12.06.12.03.13.01H14.25z"/></svg> },
    { name: "Power BI", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24v-8h-4v8h4zm4 0v-12h-4v12h4zm4 0v-16h-4v16h4z"/></svg> },
    { name: "SQL", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 1.79 10 4s-4.477 4-10 4-10-1.79-10-4 4.477-4 10-4zm0 6c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3zm0 4c-5.523 0-10-1.79-10-4v4c0 2.21 4.477 4 10 4s10-1.79 10-4v-4c0 2.21-4.477 4-10 4zm0 4c-5.523 0-10-1.79-10-4v4c0 2.21 4.477 4 10 4s10-1.79 10-4v-4c0 2.21-4.477 4-10 4z"/></svg> },
    { name: "SAP ERP", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> },
    { name: "Gurobi", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 18.18L4.5 15.5v-7L12 4.18l7.5 4.32v7L12 20.18z"/></svg> },
    { name: "Tableau", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M10.5 13.5H13.5V10.5H10.5V13.5ZM10.5 17H13.5V14H10.5V17ZM10.5 10H13.5V7H10.5V10ZM7 13.5H10V10.5H7V13.5ZM14 13.5H17V10.5H14V13.5Z"/></svg> },
    { name: "Git", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 11.25L12.75 3.5a1.5 1.5 0 00-2.1 0L9.4 4.75l2.1 2.1a1.5 1.5 0 11-2.1 2.1l-2.1-2.1L3.5 10.65a1.5 1.5 0 000 2.1l7.75 7.75a1.5 1.5 0 002.1 0l7.15-7.15a1.5 1.5 0 000-2.1z"/></svg> },
  ];
  
  // Duplicate for seamless infinite scroll
  const scrollTools = [...tools, ...tools, ...tools, ...tools];

  const processSteps = [
    { num: "01", titleId: "process.1.title", descId: "process.1.desc", fallbackTitle: "Data Auditing", fallbackDesc: "Deep-dive into historical transit, inventory, and supply chain data to identify hidden bottlenecks." },
    { num: "02", titleId: "process.2.title", descId: "process.2.desc", fallbackTitle: "Mathematical Modeling", fallbackDesc: "Apply predictive algorithms (ARIMA, Exponential Smoothing) to forecast demand cycles." },
    { num: "03", titleId: "process.3.title", descId: "process.3.desc", fallbackTitle: "Network Optimization", fallbackDesc: "Solve Vehicle Routing Problems (VRP) using linear programming to minimize freight costs." },
    { num: "04", titleId: "process.4.title", descId: "process.4.desc", fallbackTitle: "Risk Mitigation", fallbackDesc: "Deploy contagion modeling (SIS/SIR) to simulate and prevent cascading supply chain failures." },
  ];

  return (
    <div className="gradient-mesh min-h-screen">
      
      {/* 0. SEO JSON-LD Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* 1. Hero Section with Glassmorphism */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center w-full gap-12">
          
          <div className="md:w-3/5 flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 w-fit shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-industrial-grey tracking-wide uppercase">
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

            {/* Metrics */}
            <div className="flex gap-6 sm:gap-8 border-y border-gray-200/50 py-6 mb-8">
              <div>
                <div className="text-3xl font-extrabold text-industrial-grey tabular-nums">2</div>
                <div className="text-xs text-gray-500 font-bold tracking-wide uppercase mt-1"><T id="hero.metrics.zab">ZAB Degrees</T></div>
              </div>
              <div className="border-l border-gray-200/50 pl-6 sm:pl-8">
                <div className="text-3xl font-extrabold text-industrial-grey tabular-nums">1.0</div>
                <div className="text-xs text-gray-500 font-bold tracking-wide uppercase mt-1"><T id="hero.metrics.grade">Grade Equiv.</T></div>
              </div>
              <div className="border-l border-gray-200/50 pl-6 sm:pl-8">
                <div className="text-3xl font-extrabold text-industrial-grey tabular-nums">C2</div>
                <div className="text-xs text-gray-500 font-bold tracking-wide uppercase mt-1"><T id="hero.metrics.english">English (A2 DE)</T></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="inline-flex justify-center items-center px-8 py-4 bg-iron-lemon text-industrial-grey font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-md">
                <T id="hero.btn.portfolio">View Project Portfolio</T>
              </Link>
              <a href="/lydiah-nyakweba-bewerbung.pdf" target="_blank" className="inline-flex justify-center items-center px-8 py-4 bg-industrial-grey text-white font-bold rounded-lg hover:bg-black transition-colors shadow-md">
                <T id="hero.btn.dossier">Download Dossier</T>
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

      {/* 1.5 ZAB Showcase Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ZABShowcase />
      </section>

      {/* 2. Infinite Auto-Scrolling Tech Marquee */}
      <section className="relative z-10 py-10 bg-industrial-grey text-white overflow-hidden border-y-4 border-iron-lemon shadow-xl">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <p className="text-center text-white/50 text-xs font-bold uppercase tracking-widest">Tools and Technologies</p>
        </div>
        <div className="relative flex w-[300%] md:w-[200%] lg:w-full overflow-hidden hide-scrollbar">
          <div className="flex w-max animate-infinite-scroll gap-4 px-4 items-center">
            {scrollTools.map((tool, idx) => (
              <div key={idx} className="flex-shrink-0 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 font-bold tracking-wide flex items-center gap-3">
                <span className="text-iron-lemon">{tool.icon}</span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "3-in-1" Value Proposition Badges */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2"><T id="value.subtitle">Core Value Proposition</T></p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-industrial-grey"><T id="value.title">The 3-in-1 Synergy</T></h2>
          <div className="h-1 w-16 bg-iron-lemon mx-auto mt-6 rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl hover:border-iron-lemon transition-colors">
            <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center mb-6 text-2xl shadow-sm border border-gray-100">📊</div>
            <h3 className="text-xl font-bold text-industrial-grey mb-3"><T id="value.data.title">Data Science</T></h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium"><T id="value.data.desc">Advanced analytics, statistical modeling, and machine learning to extract actionable intelligence from massive logistics datasets.</T></p>
          </div>
          <div className="glass-panel p-8 rounded-2xl hover:border-iron-lemon transition-colors">
            <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center mb-6 text-2xl shadow-sm border border-gray-100">🧮</div>
            <h3 className="text-xl font-bold text-industrial-grey mb-3"><T id="value.or.title">Operations Research</T></h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium"><T id="value.or.desc">Mathematical optimization, linear programming, and combinatorial algorithms to minimize costs and maximize resource allocation.</T></p>
          </div>
          <div className="glass-panel p-8 rounded-2xl hover:border-iron-lemon transition-colors">
            <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center mb-6 text-2xl shadow-sm border border-gray-100">📦</div>
            <h3 className="text-xl font-bold text-industrial-grey mb-3"><T id="value.log.title">Logistics Domain</T></h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium"><T id="value.log.desc">Deep understanding of supply chain volatility, demand forecasting, warehousing, and dynamic network routing.</T></p>
          </div>
        </div>
      </section>

      {/* 4. 4-Step "How I Work" Methodology Framework */}
      <section className="relative z-10 bg-white/40 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center md:text-left">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2"><T id="process.subtitle">My Process</T></p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-industrial-grey"><T id="process.title">How I Solve Supply Chain Problems</T></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-iron-lemon transition-colors"></div>
                <div className="text-4xl font-black text-gray-100 mb-4 tracking-tighter">{step.num}</div>
                <h3 className="text-lg font-bold text-industrial-grey mb-3"><T id={step.titleId}>{step.fallbackTitle}</T></h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium"><T id={step.descId}>{step.fallbackDesc}</T></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Engineering Tools Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50/50">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2"><T id="tools.subtitle">Simulation & Analysis</T></p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-industrial-grey"><T id="tools.title">Interactive Decision Support</T></h2>
          <div className="h-1 w-16 bg-iron-lemon mx-auto mt-6 rounded"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <GradeConverter />
          <SupplyChainSimulation />
        </div>
      </section>

      {/* Referenzen (Testimonial) Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <div className="glass-panel rounded-3xl p-10 md:p-16 text-center transform transition-transform hover:scale-[1.01]">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6"><T id="ref.title">Arbeitszeugnis / References</T></p>
          <blockquote className="text-2xl md:text-3xl text-industrial-grey font-light italic leading-snug mb-8">
            &quot;Lydiah demonstrates an exceptional grasp of Operations Research. Her ability to translate complex mathematical theorems into actionable operational strategies is outstanding.&quot;
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