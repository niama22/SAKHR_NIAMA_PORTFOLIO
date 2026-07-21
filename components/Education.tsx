"use client";

import { useLanguage } from "@/lib/Languagecontext";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-eyebrow">{t.education.eyebrow}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-12">{t.education.heading}</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {t.education.items.map((ed, i) => (
            <ScrollReveal key={ed.school} delay={i * 0.1}>
              <div className="card-surface p-6 flex gap-4">
                <span className="w-11 h-11 rounded-xl2 bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-primary" />
                </span>
                <div>
                  <h3 className="font-display font-semibold">{ed.degree}</h3>
                  <p className="text-sm text-primary dark:text-primary-light mt-1">{ed.school}</p>
                  <p className="text-xs text-slate-400 mt-1">{ed.period}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}