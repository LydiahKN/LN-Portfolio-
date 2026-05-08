import type { Metadata } from "next";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Qualifikationsmatrix & Skills | Lydiah Nyakweba",
  description: "A comprehensive matrix of technical skills, Operations Research tools, and supply chain domain expertise.",
};

export default function Skills() {
  const categories = [
    {
      title: "Data Analytics & Programming",
      skills: [
        { name: "Python, R", level: "Advanced", desc: "Processing massive logistics datasets, feature engineering, and deploying ML models for supply chain visibility." },
        { name: "SQL, SPSS", level: "Advanced", desc: "Extracting/transforming databases and applying foundational statistical computing." }
      ]
    },
    {
      title: "Operations Research & Optimization",
      skills: [
        { name: "Linear Programming", level: "Expert", desc: "Solving complex vehicle routing problems and distribution network design." },
        { name: "Stochastic Processes & Queuing", level: "Expert", desc: "Warehouse layout optimization and buffer stock management under uncertainty." }
      ]
    },
    {
      title: "Predictive Analytics & Forecasting",
      skills: [
        { name: "Time Series Analysis (ARIMA)", level: "Expert", desc: "Developing highly accurate demand forecasting models and capacity planning." },
        { name: "Exponential Smoothing", level: "Expert", desc: "Optimizing safety stock levels to prevent stockouts and minimize holding costs." }
      ]
    },
    {
      title: "Risk & Disruption Modeling",
      skills: [
        { name: "Epidemiological Frameworks (SIS/SIR)", level: "Advanced", desc: "Enhancing supply chain resilience by analyzing disruption contagion." },
        { name: "Probabilistic Spread Modeling", level: "Advanced", desc: "Vulnerability mapping across interconnected Tier 1 and Tier 2 supplier networks." }
      ]
    },
    {
      title: "Data Visualization & Linguistic Competencies",
      skills: [
        { name: "Tableau, Power BI", level: "Professional", desc: "Translating complex statistical outputs into actionable dashboards for operational stakeholders." },
        { name: "English (C2) / German (A1/A2)", level: "Professional", desc: "Native/fluent English for international integration; actively developing German proficiency." }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-industrial-grey mb-4 border-b-4 border-iron-lemon inline-block pb-2">Qualifikationsmatrix (Competency Matrix)</h1>
      <p className="text-xl text-gray-600 mb-12">Targeted technical capabilities aligning academic statistics with the SAP-driven German enterprise logistics environment.</p>
      
      <div className="space-y-12">
        {categories.map((category, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-bold text-industrial-grey mb-6 uppercase tracking-wider">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="group bg-white border border-gray-200 p-6 rounded-lg hover:border-iron-lemon hover:shadow-md transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-black group-hover:text-industrial-grey">{skill.name}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded text-gray-600">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
