import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Lydiahh Nyakweba",
  description: "Impressum (Legal Notice) according to § 5 TMG for Lydiahh Nyakweba's professional portfolio.",
};

export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-industrial-grey mb-8 border-b-4 border-iron-lemon inline-block pb-2">Impressum</h1>
      
      <div className="space-y-8 text-gray-600 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <section>
          <h2 className="text-xl font-bold text-industrial-grey mb-2">Angaben gemäß § 5 TMG</h2>
          <p className="leading-relaxed">
            Lydiahh Nyakweba<br />
            [Musterstraße 1]<br />
            [12345 Musterstadt]<br />
            Germany
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-industrial-grey mb-2">Kontakt</h2>
          <p className="leading-relaxed">
            Telefon: +49 (0) 123 456789<br />
            E-Mail: Lydiah.kwamboka@example.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-industrial-grey mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="leading-relaxed">
            Lydiahh Nyakweba<br />
            [Musterstraße 1]<br />
            [12345 Musterstadt]
          </p>
        </section>
      </div>
    </div>
  );
}
