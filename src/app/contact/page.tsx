import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Bewerbungsmappe | Lydiahh Nyakweba",
  description: "Contact information and download link for the complete German application dossier (Bewerbungsmappe) for Lydiahh Nyakweba.",
};

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-industrial-grey mb-12 border-b-4 border-iron-lemon inline-block pb-2">Contact & Application Dossier</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Structured Contact Form */}
        <section className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-industrial-grey mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Name *</label>
                <input type="text" className="w-full border border-gray-300 rounded p-3 text-sm focus:ring-2 focus:ring-iron-lemon focus:border-transparent outline-none" placeholder="Recruiter / Manager" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email *</label>
                <input type="email" className="w-full border border-gray-300 rounded p-3 text-sm focus:ring-2 focus:ring-iron-lemon focus:border-transparent outline-none" placeholder="hr@logistics.de" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Reason for Contact</label>
              <select className="w-full border border-gray-300 rounded p-3 text-sm focus:ring-2 focus:ring-iron-lemon focus:border-transparent outline-none bg-white">
                <option>Interview Invitation</option>
                <option>Request Full Dossier (PDF via Email)</option>
                <option>Technical Assessment / Case Study</option>
                <option>Networking / General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Message *</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded p-3 text-sm focus:ring-2 focus:ring-iron-lemon focus:border-transparent outline-none resize-none" placeholder="Guten Tag, we are interested in your profile..."></textarea>
            </div>

            <button type="button" className="w-full bg-industrial-grey text-white font-bold py-4 rounded hover:bg-black transition-colors">
              Submit Inquiry
            </button>
          </form>
        </section>

        {/* Dossier Download & Direct Links */}
        <section className="flex flex-col gap-8">
          <div className="bg-industrial-grey text-white p-8 rounded-lg shadow-sm flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-bold text-iron-lemon mb-4">Die Bewerbungsmappe</h2>
              <p className="mb-6 text-gray-300">Download the complete German application dossier in a single, ATS-optimized PDF.</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-gray-400 mb-8 ml-2 font-mono">
                <li>Deckblatt (Cover Page)</li>
                <li>Anschreiben (Cover Letter)</li>
                <li>Lebenslauf (CV in German Format)</li>
                <li>ZAB Statement (MSc) - Reg.-Nr.: LN2025/87975-1</li>
                <li>ZAB Statement (BSc) - Reg.-Nr.: LN2025/87975-2</li>
                <li>MSc Degree Certificate & Transcript (JKUAT)</li>
                <li>BSc Degree Certificate & Transcript (UoN)</li>
                <li>Swiss TPH Certificate (Infectious Diseases)</li>
                <li>Functional Arbeitszeugnis (TUM Recommendation)</li>
              </ul>
            </div>
            <a href="/Lydiah-kwamboka-bewerbung.pdf" target="_blank" className="block w-full text-center px-6 py-4 bg-iron-lemon text-industrial-grey font-bold rounded hover:bg-yellow-400 transition-colors shadow-lg">
              Download Full Dossier (PDF)
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a href="mailto:Lydiah.kwamboka@example.com" className="bg-white border border-gray-200 p-4 rounded text-center hover:border-iron-lemon transition-colors">
              <span className="block text-xs font-bold text-gray-500 uppercase mb-1">Direct Email</span>
              <span className="text-sm font-bold text-industrial-grey break-all">Lydiah@example.com</span>
            </a>
            <a href="#" className="bg-white border border-gray-200 p-4 rounded text-center hover:border-iron-lemon transition-colors">
              <span className="block text-xs font-bold text-gray-500 uppercase mb-1">LinkedIn</span>
              <span className="text-sm font-bold text-industrial-grey break-all">/in/lydiah.nyakweba</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
