import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Lydiah Nyakweba | Logistics Data Analyst",
  description: "Portfolio of Lydiah Nyakweba, Logistics Data Analyst & Operations Research Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navigation */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="font-bold text-xl tracking-tight text-industrial-grey hover:text-black">
                  Lydiah Nyakweba
                </Link>
              </div>
              <div className="flex items-center">
                <nav className="hidden md:flex space-x-8 mr-8">
                  <Link href="/credentials" className="text-sm font-semibold text-industrial-grey hover:text-black transition-colors">
                    Credentials
                  </Link>
                  <Link href="/skills" className="text-sm font-semibold text-industrial-grey hover:text-black transition-colors">
                    Skills
                  </Link>
                  <Link href="/projects" className="text-sm font-semibold text-industrial-grey hover:text-black transition-colors">
                    Projects
                  </Link>
                  <Link href="/contact" className="text-sm font-semibold text-industrial-grey hover:text-black transition-colors">
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center space-x-4">
                  <button className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors" title="Search OR Models">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <span className="text-xs font-mono font-bold tracking-wider">⌘ K</span>
                  </button>
                  <LanguageToggle />
                  <a href="/lydiah.nyakweba-bewerbung.pdf" target="_blank" className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-iron-lemon text-industrial-grey font-bold rounded-md hover:bg-yellow-400 transition-colors shadow-sm text-sm">
                    Get Dossier
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-industrial-grey text-white py-12 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-iron-lemon mb-4">Lydiah Nyakweba</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Logistics Data Analyst & Operations Research Specialist. Driving supply chain efficiency through advanced predictive modeling.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li><a href="mailto:lydiah.nyakweba@example.com" className="hover:text-iron-lemon transition-colors">lydiah.nyakweba@example.com</a></li>
                  <li><a href="#" className="hover:text-iron-lemon transition-colors">LinkedIn Profile</a></li>
                  <li><a href="#" className="hover:text-iron-lemon transition-colors">GitHub Repository</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Location Status</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>Based in Germany</span>
                  </li>
                  <li>Available for On-Site / Hybrid</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Lydiah Nyakweba. All rights reserved.</p>
              <div className="mt-4 md:mt-0 space-x-4">
                <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                <Link href="/privacy" className="hover:text-white transition-colors">Datenschutzerklärung</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
