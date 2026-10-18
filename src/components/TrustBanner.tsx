"use client";

import { ShieldCheck, Cpu, Database, Activity, Lock, Layers } from "lucide-react";

export function TrustBanner() {
  const stats = [
    {
      metric: "91+",
      label: "Production Deployments",
      subtext: "Delivered on schedule",
      icon: Layers,
    },
    {
      metric: "99.98%",
      label: "Regulatory Uptime",
      subtext: "Pharma & industrial SLA",
      icon: Activity,
    },
    {
      metric: "< 15ms",
      label: "RPC Response Time",
      subtext: "tRPC & Edge pipelines",
      icon: Cpu,
    },
    {
      metric: "100%",
      label: "Type Safety & IP Handover",
      subtext: "Zero proprietary lock-in",
      icon: ShieldCheck,
    },
  ];

  const stack = [
    { name: "Next.js 16 App Router", category: "Core Platform" },
    { name: "PostgreSQL + Drizzle ORM", category: "Relational Schema" },
    { name: "Kinde Auth RBAC", category: "Enterprise Security" },
    { name: "tRPC + TypeScript 5", category: "Type-Safe Network" },
  ];

  return (
    <aside
      aria-label="Devfinity verified operational benchmarks and trust signals"
      className="w-full py-8 px-4 md:px-8 relative z-20"
    >
      <div className="container mx-auto max-w-6xl glass-card rounded-3xl p-6 md:p-8 border border-white/80 shadow-xl shadow-blue-500/5">
        {/* Top Heading Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-black/[0.06] gap-4">
          <div className="flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900">
              Verified Production Authority &amp; System Integrity
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {stack.map((item) => (
              <span
                key={item.name}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 font-semibold"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* 4-Column Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="p-4 rounded-2xl bg-white/70 border border-black/[0.04] space-y-1.5 transition-all hover:bg-white hover:border-blue-200 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">
                    {s.metric}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-zinc-800 uppercase">
                  {s.label}
                </div>
                <p className="text-[11px] font-mono text-zinc-500">
                  {s.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
