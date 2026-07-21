"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { content, ContentShape, Locale } from "./content";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ContentShape;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-locale";

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  // Récupère la langue sauvegardée (localStorage) ou celle du navigateur au montage.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "fr" || stored === "en") {
      setLocaleState(stored);
      return;
    }
    const browserLang = window.navigator.language?.toLowerCase().startsWith("en") ? "en" : "fr";
    setLocaleState(browserLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: content[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage doit être utilisé à l'intérieur de LanguageProvider");
  }
  return ctx;
}