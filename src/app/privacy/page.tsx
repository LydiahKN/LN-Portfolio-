import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Lydiah Nyakweba",
  description: "Privacy Policy for Lydiah Nyakweba's professional portfolio.",
};

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-industrial-grey mb-8 border-b-4 border-iron-lemon inline-block pb-2">Datenschutzerklärung</h1>
      
      <div className="space-y-8 text-gray-600 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <section>
          <h2 className="text-xl font-bold text-industrial-grey mb-2">1. Datenschutz auf einen Blick</h2>
          <p className="leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-industrial-grey mb-2">2. Datenerfassung auf dieser Website</h2>
          <h3 className="font-bold mb-1 text-industrial-grey">Kontaktformular</h3>
          <p className="leading-relaxed">
            Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-industrial-grey mb-2">3. Server-Log-Dateien</h2>
          <p className="leading-relaxed">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
        </section>
      </div>
    </div>
  );
}
