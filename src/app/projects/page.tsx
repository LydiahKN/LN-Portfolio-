import type { Metadata } from "next";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Project Portfolio (Dritte Seite) | Lydiah Nyakweba",
  description: "Proof of concept projects applying theoretical statistics to corporate logistics: Network Routing, Demand Modeling, and Risk Contagion.",
};

export default function Projects() {
  const projects = [
    {
      title: "Predictive Demand Modeling & Inventory Optimization",
      context: "Grounded in STA409 Applied Time Series Analysis",
      metrics: ["ARIMA", "Exponential Smoothing", "Time Series"],
      description: "Utilizing historical sales and transit data to model future demand cycles. Applying exponential smoothing and ARIMA models to optimize safety stock levels across warehousing networks. By managing probabilistic demand variables and variable lead times, this approach ensures leaner inventory operations, minimizes holding costs, and aggressively prevents stockouts.",
    },
    {
      title: "Supply Chain Disruption & Risk Contagion Modeling",
      context: "Grounded in Swiss TPH Mathematical Modelling",
      metrics: ["Contagion Modeling", "Risk Mitigation", "SIS/SIR Frameworks"],
      description: "Applying epidemiological modeling frameworks (SIS/SIR models) to supply networks. Simulates how localized disruptions (e.g., Tier 2 supplier failure or regional transport breakdown) cascade through the entire manufacturing ecosystem. Enables proactive risk mitigation, identification of critical bottleneck nodes, and design of robust contingency plans.",
    },
    {
      title: "Network Routing Optimization and Resource Allocation",
      context: "Grounded in STA321 Operations Research Instruction",
      metrics: ["Operations Research", "Linear Programming", "Network Design"],
      description: "Application of linear programming, network design algorithms, and combinatorial optimization to solve complex Vehicle Routing Problems (VRP) and facility location problems. Designed to absolutely minimize freight costs and transit times through mathematical optimization of distribution centers, load balancing, and dynamic last-mile scheduling.",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-industrial-grey mb-4 border-b-4 border-iron-lemon inline-block pb-2"><T id="projects.title">Project Portfolio (Dritte Seite)</T></h1>
      <p className="text-xl text-gray-600 mb-12">Proof of Concept: Translating theoretical statistics into corporate logistics value.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col relative group">
            <div className="bg-industrial-grey p-6 border-b-4 border-iron-lemon relative">
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/30 backdrop-blur-sm shadow">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs text-gray-200 font-mono tracking-wider font-semibold">NDA / ANONYMIZED</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-8 mb-2 leading-tight">{project.title}</h2>
              <p className="text-xs font-semibold text-iron-lemon uppercase tracking-wider">{project.context}</p>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-gray-700 leading-relaxed mb-6 text-sm flex-1">{project.description}</p>
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
