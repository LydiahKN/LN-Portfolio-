'use client';
import Link from "next/link";
import "./globals.css";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/context/LanguageContext";
import T from "@/components/T";
import CommandPalette from "@/components/CommandPalette";
import React, { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFabOpen, setIsFabOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lydiah Nyakweba",
    "jobTitle": "Logistics Data Analyst & Operations Research Specialist",
    "url": "https://lydiah-nyakweba.com",
    "sameAs": [
      "https://linkedin.com/in/lydiah-nyakweba",
      "https://github.com/LydiahKN"
    ],
    "knowsAbout": [
      "Operations Research",
      "Supply Chain Optimization",
      "Data Science",
      "Predictive Analytics",
      "Logistics Management"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Germany"
    }
  };

  const escapedJsonLd = JSON.stringify(jsonLd).replace(/</g, '\\u003c');

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: escapedJsonLd }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased selection:bg-iron-lemon selection:text-industrial-grey">
        {/* Scroll Progress Bar */}
        <div 
          className="fixed top-0 left-0 h-1 bg-iron-lemon z-[100] transition-all duration-150 shadow-[0_0_10px_rgba(254,225,43,0.5)]" 
          style={{ width: `${scrollProgress}%` }}
        />

        <LanguageProvider>
          <CommandPalette isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
          
          {/* Navigation */}
          <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <Link href="/" className="font-black text-xl tracking-tighter text-industrial-grey hover:text-black transition-colors">
                    LYDIAH NYAKWEBA
                  </Link>
                </div>
                <div className="flex items-center">
                  <nav className="hidden md:flex space-x-8 mr-8">
                    <Link href="/credentials" className="text-xs font-black uppercase tracking-widest text-industrial-grey hover:text-black transition-colors">
                      <T id="nav.credentials">Credentials</T>
                    </Link>
                    <Link href="/skills" className="text-xs font-black uppercase tracking-widest text-industrial-grey hover:text-black transition-colors">
                      <T id="nav.skills">Skills</T>
                    </Link>
                    <Link href="/projects" className="text-xs font-black uppercase tracking-widest text-industrial-grey hover:text-black transition-colors">
                      <T id="nav.projects">Projects</T>
                    </Link>
                    <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-industrial-grey hover:text-black transition-colors">
                      <T id="nav.contact">Contact</T>
                    </Link>
                  </nav>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setIsSearchOpen(true)}
                      className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors" 
                      title="Search OR Models"
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      <span className="text-[10px] font-mono font-black tracking-widest">⌘ K</span>
                    </button>
                    <LanguageToggle />
                    <a href="/lydiah-nyakweba-cv.html" target="_blank" className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-iron-lemon text-industrial-grey font-black uppercase tracking-widest rounded-md hover:bg-yellow-400 transition-all shadow-md text-[10px]">
                      <T id="nav.dossier">Get Dossier</T>
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

          {/* Quick Connect FAB */}
          <div className="fixed bottom-8 right-8 z-[90] flex flex-col items-end gap-4">
            {isFabOpen && (
              <div className="flex flex-col gap-3 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <a 
                  href="https://wa.me/4915755988419" 
                  target="_blank" 
                  className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-xl border border-gray-100 hover:scale-105 transition-transform"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-industrial-grey">WhatsApp</span>
                  <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                </a>
                <a 
                  href="mailto:lydiah.nyakweba@example.com" 
                  className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-xl border border-gray-100 hover:scale-105 transition-transform"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-industrial-grey">Email</span>
                  <div className="w-8 h-8 bg-industrial-grey rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                </a>
              </div>
            )}
            <button 
              onClick={() => setIsFabOpen(!isFabOpen)}
              className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isFabOpen ? 'bg-industrial-grey text-white rotate-45' : 'bg-iron-lemon text-industrial-grey hover:scale-110'}`}
              aria-label="Connect with Lydiah"
            >
              {isFabOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              )}
            </button>
          </div>

          {/* Footer */}
          <footer className="bg-industrial-grey text-white py-12 border-t border-gray-700 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-black text-iron-lemon mb-4 tracking-tighter uppercase">LYDIAH NYAKWEBA</h3>
                  <p className="text-gray-400 text-xs font-medium leading-relaxed">
                    Logistics Data Analyst & Operations Research Specialist. Driving supply chain efficiency through advanced predictive modeling and technical authority.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest mb-6">Contact</h3>
                  <ul className="text-gray-400 text-xs font-bold space-y-3">
                    <li><a href="mailto:lydiah.nyakweba@example.com" className="hover:text-iron-lemon transition-colors">lydiah.nyakweba@example.com</a></li>
                    <li><a href="tel:+4915755988419" className="hover:text-iron-lemon transition-colors">+49 1575 5988419</a></li>
                    <li><a href="https://wa.me/4915755988419" target="_blank" className="hover:text-iron-lemon transition-colors">WhatsApp Direct</a></li>
                    <li><a href="#" className="hover:text-iron-lemon transition-colors">LinkedIn Profile</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest mb-6"><T id="footer.location">Location Status</T></h3>
                  <ul className="text-gray-400 text-xs font-bold space-y-3">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span><T id="footer.based">Based in Germany</T></span>
                    </li>
                    <li className="uppercase tracking-widest text-[10px] text-gray-500"><T id="footer.hybrid">Available for On-Site / Hybrid</T></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Platform: Live (fra1)</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md border border-white/10">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Version: v1.0.4-stable</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md border border-white/10">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">SLA: 99.9% Support</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end text-[10px] font-black uppercase tracking-widest text-gray-500">
                  <p>&copy; {new Date().getFullYear()} Lydiah Nyakweba. All rights reserved.</p>
                  <div className="mt-2 space-x-4">
                    <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy & GDPR</Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
