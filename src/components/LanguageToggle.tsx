"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button 
      onClick={toggleLang}
      className="ml-6 flex items-center justify-center px-3 py-1.5 text-xs font-bold rounded-md border border-gray-300 text-industrial-grey bg-white hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
      title="Toggle Language"
    >
      <span className={lang === "EN" ? "text-black" : "text-gray-400"}>EN</span>
      <span className="mx-1 text-gray-300">|</span>
      <span className={lang === "DE" ? "text-black" : "text-gray-400"}>DE</span>
    </button>
  );
}
