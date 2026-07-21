"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";
import { useLanguage } from "@/lib/Languagecontext";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-surface-soft dark:bg-surface-darksoft/40">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-eyebrow">{t.projects.eyebrow}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-12">{t.projects.heading}</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.items.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card-surface overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-44 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="w-full font-display font-bold text-2xl text-primary/40 text-center px-6 leading-snug">
                      {project.title}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 flex-1">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/5 text-primary dark:bg-primary/10 dark:text-primary-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {(project.demoUrl || project.liveUrl) && (
                      <a
                        href={project.demoUrl || project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        <ExternalLink size={15} /> {t.projects.demoLabel}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:underline"
                      >
                        <Github size={15} /> {t.projects.codeLabel}
                      </a>
                    )}
                    {project.articleUrl && (
                      <a
                        href={project.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:underline"
                      >
                        <FileText size={15} /> {t.projects.articleLabel}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
