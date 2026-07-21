"use client";

import { useLanguage } from "@/lib/Languagecontext";
import ScrollReveal from "./ScrollReveal";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-surface-soft dark:bg-surface-darksoft/40">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-eyebrow">{t.experience.eyebrow}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-12">{t.experience.heading}</h2>
        </ScrollReveal>

        <div className="relative border-l-2 border-primary/15 dark:border-primary/20 pl-8 space-y-10">
          {t.experience.items.map((exp, i) => (
            <ScrollReveal key={exp.company} delay={i * 0.1} className="relative">
              <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <Briefcase size={12} className="text-primary" />
              </span>

              <div className="card-surface p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                  <span className="text-xs font-medium text-slate-400">{exp.period}</span>
                </div>
                <p className="text-sm text-primary dark:text-primary-light font-medium mb-3">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {exp.achievements.map((a) => (
                    <li key={a} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                      <span className="text-accent">›</span> {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent-dark dark:text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}