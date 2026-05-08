"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function T({ id, children }: { id: string, children: React.ReactNode }) {
  const { lang } = useLanguage();
  
  if (lang === "EN") {
    return <>{children}</>;
  }

  const translatedText = translations[lang.toLowerCase()]?.[id];
  return <>{translatedText || children}</>;
}
