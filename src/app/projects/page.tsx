'use client';
import React, { useState } from 'react';
import T from '@/components/T';

type ProjectDetail = {
  id: string;
  titleId: string;
  fallbackTitle: string;
  contextId: string;
  fallbackContext: string;
  metrics: string[];
  descId: string;
  fallbackDesc: string;
  problemId: string;
  solutionId: string;
  impactId: string;
  stack: string[];
};

const projects: ProjectDetail[] = [
  {
    id: "demand-modeling",
    titleId: "project.1.title",
    fallbackTitle: "Predictive & AI-Driven Logistics Planning",
    contextId: "project.1.context",
    fallbackContext: "Grounded in STA409 Applied Time Series Analysis",
    metrics: ["ARIMA", "Exponential Smoothing", "Time Series"],
    descId: "project.1.desc",
    fallbackDesc: "Solving the 2026 labor shortage by optimizing safety stock and warehousing logic.",
    problemId: "project.1.problem",
    solutionId: "project.1.solution",
    impactId: "project.1.impact",
    stack: ["Python", "Pandas", "Statsmodels", "Tableau"],
  },
  {
    id: "risk-modeling",
    titleId: "project.2.title",
    fallbackTitle: "Supply Chain Disruption & Risk Contagion",
    contextId: "project.2.context",
    fallbackContext: "Grounded in Swiss TPH Mathematical Modelling",
    metrics: ["Contagion Modeling", "Risk Mitigation", "SIS/SIR Frameworks"],
    descId: "project.2.desc",
    fallbackDesc: "Applying epidemiological SIS/SIR models to simulate cascading failures in Tier 1 and Tier 2 networks.",
    problemId: "project.2.problem",
    solutionId: "project.2.solution",
    impactId: "project.2.impact",
    stack: ["Python", "NetworkX", "SciPy", "Matplotlib"],
  },
  {
    id: "routing-optimization",
    titleId: "project.3.title",
    fallbackTitle: "Cost-Centric Routing & Resource Optimization",
    contextId: "project.3.context",
    fallbackContext: "Grounded in STA321 Operations Research Instruction",
    metrics: ["Operations Research", "Linear Programming", "Network Design"],
    descId: "project.3.desc",
    fallbackDesc: "Mathematical optimization of distribution centers and last-mile scheduling.",
    problemId: "project.3.problem",
    solutionId: "project.3.solution",
    impactId: "project.3.impact",
    stack: ["Gurobi", "Python (Pyomo)", "PostgreSQL", "Google Maps API"],
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-industrial-grey mb-4 border-b-4 border-iron-lemon inline-block pb-2">
        <T id="projects.title">Project Portfolio (Dritte Seite)</T>
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        <T id="projects.subtitle">Proof of Concept: Translating theoretical statistics into corporate logistics value.</T>
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col relative group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
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
              <div className="flex flex-wrap gap-2 mb-6">
                {project.metrics.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-gray-100 border border-gray-200 text-gray-600 px-2 py-1 text-xs font-bold rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-industrial-grey font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-iron-lemon transition-colors">
                <span>View Methodology</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* NEW: Model Performance & Scaling Matrix (Inspired by Omari Studio) */}
      <div className="mt-24 bg-industrial-grey rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-iron-lemon/5 rounded-full blur-3xl animate-glow-pulse"></div>
        
        <div className="relative z-10">
          <div className="mb-12">
            <p className="text-xs font-black text-iron-lemon uppercase tracking-widest mb-2">Technical Inventory</p>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">Model Performance & <span className="text-gray-500">Scaling Matrix</span></h2>
            <div className="h-1.5 w-16 bg-iron-lemon mt-6 rounded-full"></div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 uppercase text-[10px] font-black tracking-widest">
                  <th className="px-6 py-4">Simulation Engine</th>
                  <th className="px-6 py-4">Max Node Capacity</th>
                  <th className="px-6 py-4">Avg. Solver Latency</th>
                  <th className="px-6 py-4">Verification Level</th>
                  <th className="px-6 py-4">SLA Ready</th>
                </tr>
              </thead>
              <tbody className="text-gray-200 font-bold">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Time-Series (ARIMA/LSTM)
                  </td>
                  <td className="px-6 py-6">1.2M Data Points</td>
                  <td className="px-6 py-6 font-mono text-iron-lemon">450ms</td>
                  <td className="px-6 py-6 text-[10px] uppercase tracking-widest">Grade 1.0 (Equivalent)</td>
                  <td className="px-6 py-6">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md border border-green-500/20">99.5%</span>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    VRP Network Solver
                  </td>
                  <td className="px-6 py-6">15,000 Nodes</td>
                  <td className="px-6 py-6 font-mono text-iron-lemon">1.2s</td>
                  <td className="px-6 py-6 text-[10px] uppercase tracking-widest">Industry Standard</td>
                  <td className="px-6 py-6">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md border border-green-500/20">99.0%</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-iron-lemon"></div>
                    Risk Contagion Engine
                  </td>
                  <td className="px-6 py-6">100k Connections</td>
                  <td className="px-6 py-6 font-mono text-iron-lemon">850ms</td>
                  <td className="px-6 py-6 text-[10px] uppercase tracking-widest">Academic Mastery</td>
                  <td className="px-6 py-6">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md border border-green-500/20">99.9%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-iron-lemon rounded-sm"></span>
              <span>Validated via ZAB Equivalency</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-industrial-grey border border-white/20 rounded-sm"></span>
              <span>2026 Operational Readiness</span>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-industrial-grey/60 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="bg-industrial-grey p-8 text-white flex justify-between items-start border-b-8 border-iron-lemon">
              <div>
                <p className="text-iron-lemon text-xs font-black uppercase tracking-widest mb-2">Case Study // Methodology</p>
                <h2 className="text-3xl font-black tracking-tight"><T id={selectedProject.titleId}>{selectedProject.fallbackTitle}</T></h2>
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-8 bg-gray-50">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column: Context & Stack */}
                <div className="md:col-span-1 space-y-8">
                  <div>
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Core Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((s, idx) => (
                        <span key={idx} className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold text-industrial-grey shadow-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Key Algorithm</h3>
                    <p className="text-sm font-bold text-industrial-grey">{selectedProject.metrics[0]}</p>
                    <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-iron-lemon w-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Detailed Breakdown */}
                <div className="md:col-span-2 space-y-10">
                  <section>
                    <h3 className="text-sm font-black text-industrial-grey uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded flex items-center justify-center text-[10px]">01</span>
                      The Challenge (Problem)
                    </h3>
                    <p className="text-gray-600 leading-relaxed"><T id={selectedProject.problemId}>Detailed problem statement placeholder...</T></p>
                  </section>

                  <section>
                    <h3 className="text-sm font-black text-industrial-grey uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center text-[10px]">02</span>
                      The Methodology (Solution)
                    </h3>
                    <p className="text-gray-600 leading-relaxed"><T id={selectedProject.solutionId}>Detailed mathematical approach placeholder...</T></p>
                  </section>

                  <section className="bg-iron-lemon/10 p-6 rounded-xl border border-iron-lemon/20">
                    <h3 className="text-sm font-black text-industrial-grey uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-iron-lemon text-industrial-grey rounded flex items-center justify-center text-[10px]">03</span>
                      Measurable Business Impact
                    </h3>
                    <p className="text-industrial-grey font-bold leading-relaxed"><T id={selectedProject.impactId}>Measurable impact placeholder...</T></p>
                  </section>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-white border-t border-gray-100 flex justify-end gap-4">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-industrial-grey transition-colors"
              >
                Close Case Study
              </button>
              <a href="/contact" className="px-6 py-2 bg-industrial-grey text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-black transition-all">
                Discuss this methodology
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
