"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display font-bold text-7xl text-primary mb-4"
      >
        404
      </motion.h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-md">
        Cette page n&apos;existe pas ou a été déplacée. Retourne à l&apos;accueil pour continuer la visite.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl2 bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
      >
        <Home size={16} /> Retour à l&apos;accueil
      </Link>
    </div>
  );
}
