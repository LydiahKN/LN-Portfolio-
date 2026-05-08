import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credentials & ZAB Certification | Lydiahh Nyakweba",
  description: "ZAB-certified academic credentials in Applied Statistics from JKUAT and UoN. Relocation ready and EU Blue Card eligible for the German logistics sector.",
};

export default function Credentials() {
  const timeline = [
    {
      year: "2025",
      title: "Zentralstelle für ausländisches Bildungswesen (ZAB)",
      subtitle: "Official German Degree Equivalence",
      content: "MSc Registration No: LN2025/87975-1. BSc Registration No: LN2025/87975-2. Fully recognized as equivalent to German Master and Bachelor degrees, fulfilling EU Blue Card requirements.",
    },
    {
      year: "2024",
      title: "Swiss TPH & CEMA",
      subtitle: "Mathematical Modelling for Infectious Diseases",
      content: "Specialized training in complex contagion modeling (SIS/SIR models), directly translatable to supply chain disruption and systemic risk propagation.",
    },
    {
      year: "2023",
      title: "Technical University of Mombasa (TUM)",
      subtitle: "Instruction in Operations Research (STA321)",
      content: "Instructed advanced linear programming, network routing optimization, and combinatorial algorithms. Reference: Dr. Michael Munywoki (Functional Arbeitszeugnis).",
    },
    {
      year: "2021",
      title: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
      subtitle: "MSc in Applied Statistics",
      content: "Advanced focus on Time Series Analysis (STA409) and predictive demand modeling.",
    },
    {
      year: "2018",
      title: "University of Nairobi (UoN)",
      subtitle: "BSc in Statistics",
      content: "Foundational mathematical statistics, probability theory, and data visualization.",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-industrial-grey mb-4 border-b-4 border-iron-lemon inline-block pb-2">Academic & Professional Timeline</h1>
      <p className="text-xl text-gray-600 mb-12">Verified credentials and academic progression.</p>

      <div className="relative border-l-4 border-gray-200 ml-4 md:ml-6 space-y-12">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            <div className="absolute w-6 h-6 bg-iron-lemon rounded-full -left-[15px] top-1 border-4 border-white shadow-sm"></div>
            <div className="text-sm font-bold text-gray-400 tracking-widest mb-1">{item.year}</div>
            <h3 className="text-2xl font-bold text-industrial-grey mb-1">{item.title}</h3>
            <h4 className="text-lg font-semibold text-gray-500 mb-3">{item.subtitle}</h4>
            <p className="text-gray-700 leading-relaxed bg-white p-4 border border-gray-100 shadow-sm rounded-md">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
