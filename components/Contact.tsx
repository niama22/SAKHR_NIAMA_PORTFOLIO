"use client";

import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

// `profile` (lib/data) n'expose pas d'email — on le garde en constante locale ici.
const EMAIL = "niamasakhr@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface-soft dark:bg-surface-darksoft/40">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-eyebrow">Contact</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-12">
            Discutons de votre prochain projet
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl">
          <ScrollReveal delay={0.05} className="md:col-span-5">
            <ContactRow icon={<Mail size={16} />} label={EMAIL} href={`mailto:${EMAIL}`} />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="md:col-span-5">
            <ContactRow icon={<Phone size={16} />} label={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <ContactRow icon={<Linkedin size={16} />} label="LinkedIn" href={profile.linkedin} />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ContactRow icon={<Github size={16} />} label="GitHub" href={profile.github} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const content = (
    <div className="card-surface p-4 flex items-center gap-3 hover:border-primary/40 transition-colors h-full">
      <span className="w-9 h-9 rounded-xl2 bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {icon}
      </span>
      <span className="text-sm font-medium truncate">{label}</span>
    </div>
  );
  if (!href) return content;
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  );
}
