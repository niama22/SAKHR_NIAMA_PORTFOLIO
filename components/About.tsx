"use client";

import { useLanguage } from "@/lib/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import StatCounter from "./StatCounter";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-surface-soft dark:bg-surface-darksoft/40">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-eyebrow">{t.about.eyebrow}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-12">{t.about.heading}</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ul className="space-y-4">
            {t.about.points.map((point, i) => (
              <ScrollReveal key={point} delay={i * 0.06}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 dark:text-slate-300">{point}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-4">
            {t.about.stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <StatCounter value={s.value} label={s.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}