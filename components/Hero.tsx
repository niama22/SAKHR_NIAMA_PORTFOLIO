"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Mail, FolderGit2 } from "lucide-react";
import { profile } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";
import TypingText from "./TypingText";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      {/* soft ambient gradient, restrained */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"
      />

      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow mb-4"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-bold text-4xl md:text-6xl leading-tight tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-xl md:text-2xl font-semibold text-primary dark:text-primary-light h-8"
          >
            <TypingText words={t.hero.typingWords} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
          >
            {t.meta.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/CV_SAkhr_Niama_Software_Engineer.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl2 bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors shadow-glow"
            >
              <Download size={16} /> {t.hero.downloadCv}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl2 border border-slate-200 dark:border-white/10 font-semibold text-sm hover:border-primary/50 transition-colors"
            >
              <Mail size={16} /> {t.hero.contactMe}
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl2 font-semibold text-sm text-accent-dark dark:text-accent hover:underline"
            >
              <FolderGit2 size={16} /> {t.hero.viewProjects}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="card-surface p-6 md:p-10 flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-xl2 overflow-hidden">
              <Image
                src="/profile_niama_sakhr.png"
                alt={profile.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
