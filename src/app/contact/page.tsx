import type { Metadata } from "next";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Contact & Bewerbungsmappe | Lydiah Nyakweba",
  description: "Contact information and download link for the complete German application dossier (Bewerbungsmappe) for Lydiah Nyakweba.",
};

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-industrial-grey mb-12 border-b-4 border-iron-lemon inline-block pb-2"><T id="contact.title">Contact & Application Dossier</T></h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Structured Contact Form */}
        <section className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-industrial-grey mb-6"><T id="contact.form.title">Send a Message</T></h2>
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
            <a 
              href="/lydiah-nyakweba-bewerbung.pdf" 
              target="_blank" 
              className="inline-flex items-center justify-center px-8 py-4 bg-iron-lemon text-industrial-grey font-black text-lg rounded-lg hover:bg-yellow-400 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <T id="contact.dossier.btn">Download Complete Bewerbungsmappe (PDF)</T>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a href="mailto:lydiah.nyakweba@example.com" className="bg-white border border-gray-200 p-4 rounded text-center hover:border-iron-lemon transition-colors">
              <span className="block text-xs font-bold text-gray-500 uppercase mb-1"><T id="contact.email.label">Direct Email</T></span>
              <span className="text-sm font-bold text-industrial-grey break-all">lydiah.nyakweba@example.com</span>
            </a>
            <a href="tel:+4915755988419" className="bg-white border border-gray-200 p-4 rounded text-center hover:border-iron-lemon transition-colors">
              <span className="block text-xs font-bold text-gray-500 uppercase mb-1"><T id="contact.phone.label">Phone (DE)</T></span>
              <span className="text-sm font-bold text-industrial-grey">+49 1575 5988419</span>
            </a>
            <a href="https://wa.me/4915755988419" target="_blank" className="col-span-2 bg-[#25D366]/10 border border-[#25D366]/20 p-4 rounded text-center hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span className="text-sm font-black text-industrial-grey uppercase tracking-widest">Chat on WhatsApp</span>
            </a>
            <a href="#" className="col-span-2 bg-white border border-gray-200 p-4 rounded text-center hover:border-iron-lemon transition-colors">
              <span className="block text-xs font-bold text-gray-500 uppercase mb-1">LinkedIn</span>
              <span className="text-sm font-bold text-industrial-grey break-all">/in/lydiah-nyakweba</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
