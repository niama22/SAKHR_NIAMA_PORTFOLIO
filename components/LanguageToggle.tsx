"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/Languagecontext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
      aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
      className="relative w-[52px] h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-colors overflow-hidden text-xs font-bold tracking-wide"
    >
      <motion.span
        key={locale}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="text-slate-700 dark:text-slate-200"
      >
        {locale === "fr" ? "FR" : "EN"}
      </motion.span>
    </button>
  );
}