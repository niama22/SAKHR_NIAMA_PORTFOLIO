"use client";

import { useLanguage } from "@/lib/Languagecontext";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-eyebrow">{t.skills.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-12">
            {t.skills.heading}
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={(i % 3) * 0.08}>
              <div className="card-surface h-full p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-softlg">
                <h3 className="mb-5 font-display text-lg font-semibold">
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/20 dark:bg-primary/10 dark:text-primary-light"
                    >
                      {skill}
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