import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-100 dark:border-white/5">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </p>
        <div className="flex items-center gap-3">
          <FooterIcon href={`mailto:${profile.email}`} icon={<Mail size={16} />} label="Email" />
          <FooterIcon href={profile.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" />
          <FooterIcon href={profile.github} icon={<Github size={16} />} label="GitHub" />
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
    >
      {icon}
    </a>
  );
}
