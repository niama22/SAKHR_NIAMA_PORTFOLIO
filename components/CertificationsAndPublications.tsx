"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { Award, BookOpen, ExternalLink } from "lucide-react";

export default function CertificationsAndPublications() {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="section-container grid md:grid-cols-2 gap-16">
        <div>
          <ScrollReveal>
            <p className="section-eyebrow">{t.certifications.eyebrow}</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl mt-2 mb-8">{t.certifications.heading}</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.certifications.items.map((cert, i) => {
              const Wrapper = cert.url ? "a" : "div";
              const wrapperProps = cert.url
                ? {
                    href: cert.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <ScrollReveal key={cert.name} delay={i * 0.06}>
                  <Wrapper
                    {...wrapperProps}
                    className={`card-surface p-4 flex items-start gap-3 h-full ${
                      cert.url ? "hover:border-accent/40 hover:-translate-y-0.5 transition-all cursor-pointer" : ""
                    }`}
                  >
                    <span className="w-9 h-9 rounded-xl2 bg-accent/10 flex items-center justify-center shrink-0">
                      <Award size={16} className="text-accent" />
                    </span>
                    <span className="flex-1 flex items-start justify-between gap-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{cert.name}</span>
                      {cert.url && (
                        <ExternalLink size={14} className="text-slate-400 shrink-0 mt-0.5" aria-label={t.certifications.viewBadgeLabel} />
                      )}
                    </span>
                  </Wrapper>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <div>
          <ScrollReveal>
            <p className="section-eyebrow">{t.publications.eyebrow}</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl mt-2 mb-8">{t.publications.heading}</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {t.publications.items.map((pub, i) => (
              <ScrollReveal key={pub.title} delay={i * 0.06}>
                <div className="card-surface p-6 flex gap-4">
                  <span className="w-9 h-9 rounded-xl2 bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen size={16} className="text-primary" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold">{pub.title}</h3>
                    <p className="text-xs text-primary dark:text-primary-light font-medium mt-1">{pub.venue}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{pub.description}</p>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary dark:text-primary-light mt-3 hover:underline"
                      >
                        {t.publications.viewLabel}
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
