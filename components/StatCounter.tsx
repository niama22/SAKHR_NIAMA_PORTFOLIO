"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function StatCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div className="card-surface p-6 text-center">
      <motion.span ref={ref} className="block font-display font-bold text-3xl text-primary">
        {display}+
      </motion.span>
      <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 block">{label}</span>
    </div>
  );
}
