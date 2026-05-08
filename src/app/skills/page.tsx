import type { Metadata } from "next";
import T from "@/components/T";
import SkillsMatrix from "@/components/SkillsMatrix";

export const metadata: Metadata = {
  title: "Qualifikationsmatrix & Skills | Lydiah Nyakweba",
  description: "A comprehensive matrix of technical skills, Operations Research tools, and supply chain domain expertise.",
};

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-industrial-grey mb-4 border-b-4 border-iron-lemon inline-block pb-2">
          <T id="skills.title">Professional Skills Matrix</T>
        </h1>
        <p className="text-xl text-gray-600">
          <T id="skills.subtitle">Targeted technical capabilities aligning academic statistics with the SAP-driven German enterprise logistics environment.</T>
        </p>
      </div>
      
      <SkillsMatrix />
      
      <div className="mt-20 p-8 bg-industrial-grey text-white rounded-2xl border-b-8 border-iron-lemon">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-iron-lemon">!</span> <T id="skills.stack.title">Current Technical Stack Evolution</T>
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
          <T id="skills.stack.desc">While my core expertise lies in mathematical modeling and Python-based optimization, I am actively integrating SAP ERP (MM/PP modules) and advanced Gurobi solvers into my workflow to match the high-scale infrastructure of the DAX-listed logistics sector in Germany.</T>
        </p>
      </div>
    </div>
  );
}
