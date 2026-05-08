import type { Metadata } from "next";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Project Portfolio (Dritte Seite) | Lydiah Nyakweba",
  description: "Proof of concept projects applying theoretical statistics to corporate logistics: Network Routing, Demand Modeling, and Risk Contagion.",
};

export default function Projects() {
  const projects = [
    {
      titleId: "project.1.title",
      fallbackTitle: "Predictive & AI-Driven Logistics Planning",
      contextId: "project.1.context",
      fallbackContext: "Grounded in STA409 Applied Time Series Analysis",
      metrics: ["ARIMA", "Exponential Smoothing", "Time Series"],
      descId: "project.1.desc",
      fallbackDesc: "Solving the 2026 labor shortage by optimizing safety stock and warehousing logic. Applying ARIMA models to maximize delivery reliability without increasing headcount, directly addressing current infrastructure disruptions in the DAX-listed logistics sector.",
    },
    {
      titleId: "project.2.title",
      fallbackTitle: "Supply Chain Disruption & Risk Contagion Modeling",
      contextId: "project.2.context",
      fallbackContext: "Grounded in Swiss TPH Mathematical Modelling",
      metrics: ["Contagion Modeling", "Risk Mitigation", "SIS/SIR Frameworks"],
      descId: "project.2.desc",
      fallbackDesc: "Applying epidemiological SIS/SIR models to simulate cascading failures in Tier 1 and Tier 2 networks. Designed to proactively mitigate risks in volatile markets, ensuring systemic resilience against regional transport breakdowns and global supply shocks.",
    },
    {
      titleId: "project.3.title",
      fallbackTitle: "Cost-Centric Routing & Resource Optimization",
      contextId: "project.3.context",
      fallbackContext: "Grounded in STA321 Operations Research Instruction",
      metrics: ["Operations Research", "Linear Programming", "Network Design"],
      descId: "project.3.desc",
      fallbackDesc: "Mathematical optimization of distribution centers and last-mile scheduling. Using linear programming to minimize freight costs and transit times, combating high energy prices and road transport bottlenecks in the current German economic climate.",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-industrial-grey mb-4 border-b-4 border-iron-lemon inline-block pb-2"><T id="projects.title">Project Portfolio (Dritte Seite)</T></h1>
      <p className="text-xl text-gray-600 mb-12">
        <T id="projects.subtitle">Proof of Concept: Translating theoretical statistics into corporate logistics value.</T>
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col relative group">
            <div className="bg-industrial-grey p-6 border-b-4 border-iron-lemon relative">
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/30 backdrop-blur-sm shadow">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs text-gray-200 font-mono tracking-wider font-semibold">NDA / ANONYMIZED</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-8 mb-2 leading-tight">
                <T id={project.titleId}>{project.fallbackTitle}</T>
              </h2>
              <p className="text-xs font-semibold text-iron-lemon uppercase tracking-wider">
                <T id={project.contextId}>{project.fallbackContext}</T>
              </p>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-gray-700 leading-relaxed mb-6 text-sm flex-1">
                <T id={project.descId}>{project.fallbackDesc}</T>
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.metrics.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-gray-100 border border-gray-200 text-gray-600 px-2 py-1 text-xs font-bold rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
