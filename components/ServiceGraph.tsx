"use client";

import { motion } from "framer-motion";

// Signature visuelle du hero : au lieu de blobs génériques, un graphe de services
// animé qui représente concrètement ce que fait Niama — architectures microservices,
// API Gateway, message broker, bases de données. Chaque nœud a un sens.

type Node = { id: string; x: number; y: number; label: string };

const nodes: Node[] = [
  { id: "gateway", x: 300, y: 60, label: "API Gateway" },
  { id: "auth", x: 120, y: 150, label: "Auth" },
  { id: "orders", x: 300, y: 170, label: "Service" },
  { id: "kafka", x: 480, y: 150, label: "Kafka" },
  { id: "db1", x: 190, y: 290, label: "DB" },
  { id: "db2", x: 410, y: 290, label: "DB" },
];

const edges: [string, string][] = [
  ["gateway", "auth"],
  ["gateway", "orders"],
  ["gateway", "kafka"],
  ["auth", "db1"],
  ["orders", "db1"],
  ["orders", "db2"],
  ["kafka", "db2"],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function ServiceGraph() {
  return (
    <svg
      viewBox="0 0 600 360"
      className="w-full h-full"
      role="img"
      aria-label="Illustration d'une architecture microservices"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const from = nodeMap[a];
        const to = nodeMap[b];
        return (
          <motion.line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="url(#edgeGrad)"
            strokeWidth={1.5}
            strokeDasharray="6 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 1.4, delay: 0.15 * i, ease: "easeInOut" }}
          />
        );
      })}

      {nodes.map((n, i) => (
        <motion.g
          key={n.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 * i + 0.3, type: "spring" }}
        >
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={26}
            className="fill-white dark:fill-surface-darksoft"
            stroke={i % 2 === 0 ? "#2563EB" : "#14B8A6"}
            strokeWidth={2}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            className="fill-slate-600 dark:fill-slate-200 text-[9px] font-semibold"
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
