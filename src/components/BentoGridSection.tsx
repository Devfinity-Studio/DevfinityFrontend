"use client";

import { useState } from "react";
import { 
  Layers, 
  Terminal, 
  Sparkles, 
  Database, 
  Activity, 
  ArrowUpRight, 
  CheckCircle2,
  Boxes,
  Globe,
  Cpu
} from "lucide-react";
import Link from "next/link";

export function BentoGridSection() {
  const [activeTech, setActiveTech] = useState<string | null>("React 19");

  const techIcons = [
    {
      name: "React 19",
      role: "Client & Server Components",
      badge: "Core",
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      name: "Tailwind 4",
      role: "OKLCH Variable Design System",
      badge: "Styling",
      color: "bg-teal-50 text-teal-600 border-teal-200",
    },
    {
      name: "Next.js 16",
      role: "App Router & Turbopack Engine",
      badge: "Framework",
      color: "bg-zinc-100 text-zinc-900 border-zinc-300",
    },
    {
      name: "GSAP 3.15",
      role: "Physics & ScrollTrigger Scrubbing",
      badge: "Motion",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      name: "TypeScript 5",
      role: "Zero Runtime Type Inconsistencies",
      badge: "Safety",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
      name: "Web3 & APIs",
      role: "Decentralized & Serverless Pipelines",
      badge: "Cloud",
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
  ];

  return (
    <section aria-labelledby="bento-heading" className="w-full py-24 px-4 md:px-8 relative z-10" id="who-we-are">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <header className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ 01 / ARSENAL &amp; BLUEPRINT ]</span>
          </div>
          <h2 id="bento-heading" className="text-4xl md:text-5xl font-extrabold tracking-tighter text-zinc-900">
            Who We Are &amp; What We Use
          </h2>
          {/* AIO Answer-First Summary */}
          <p className="max-w-3xl text-base md:text-lg text-zinc-700 leading-relaxed font-normal bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
            Devfinity is an ultra-modern software engineering studio specializing in bespoke Next.js platforms, type-safe full-stack architectures, and custom enterprise ERPs. We eliminate brittle templates in favor of resilient server components, deeply indexed PostgreSQL schemas, and granular role-based authentication, delivering sub-150ms interaction latency with full codebase and intellectual property ownership.
          </p>
        </header>

        {/* 3x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Interactive Tech Stack Card (Spans 2 columns on desktop) */}
          <article className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                  <Boxes className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">Interactive Tech Arsenal</h3>
                  <span className="text-xs font-mono text-zinc-600">Click any module to inspect architecture</span>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Active Stack
              </span>
            </div>

            {/* Interactive Tech Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
              {techIcons.map((tech) => {
                const isSelected = activeTech === tech.name;
                return (
                  <button
                    key={tech.name}
                    type="button"
                    onClick={() => setActiveTech(tech.name)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer select-none ${
                      isSelected
                        ? "bg-white shadow-lg border-blue-500 scale-[1.02] ring-2 ring-blue-500/20"
                        : "bg-white/60 hover:bg-white border-zinc-200/80 hover:border-zinc-300 hover:scale-[1.01]"
                    }`}
                    data-cursor="view"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-black/[0.04] text-zinc-600">
                        {tech.badge}
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                    </div>
                    <span className="font-bold text-sm text-zinc-900">{tech.name}</span>
                    <span className="text-[11px] text-zinc-600 mt-1 leading-tight">{tech.role}</span>
                  </button>
                );
              })}
            </div>

            {/* Tooltip / Active Inspection Bar */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 via-purple-50/50 to-white border border-blue-200/50 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-700">
                Selected: <strong className="text-blue-600 font-bold">{activeTech}</strong> — Production Verified
              </span>
              <span className="text-xs font-mono text-blue-600 font-bold tracking-wider uppercase">
                Zero Runtime Crashes
              </span>
            </div>
          </article>

          {/* Card 2: Operational Latency Benchmark */}
          <article className="glass-card rounded-3xl p-8 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-zinc-600 uppercase font-semibold">Interaction Speed</span>
            </div>
            
            <div className="my-6">
              <span className="text-6xl font-extrabold font-mono text-gradient-future block tracking-tighter">
                &lt; 150ms
              </span>
              <span className="text-sm text-zinc-600 mt-2 block font-medium">
                Average server-render round trip across global edge nodes.
              </span>
            </div>

            <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200/40 text-xs font-mono text-purple-700 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Zero Cumulative Layout Shift
            </div>
          </article>

          {/* Card 3: Type Safety & Architecture */}
          <article className="glass-card rounded-3xl p-8 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-zinc-600 uppercase font-semibold">Compiler Gate</span>
            </div>

            <div className="my-6">
              <span className="text-6xl font-extrabold font-mono text-emerald-600 block tracking-tighter">
                100%
              </span>
              <span className="text-sm text-zinc-600 mt-2 block font-medium">
                End-to-end compile-time contract verification with Zod and TypeScript.
              </span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/40 text-xs font-mono text-emerald-700">
              $ tsc --noEmit: Passed (0 Errors)
            </div>
          </article>

          {/* Card 4: Blueprint & Code Architecture Preview (Spans 2 columns on desktop) */}
          <article className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">Systems Over Templates</h3>
                  <span className="text-xs font-mono text-zinc-600">Declarative, modular execution blueprints</span>
                </div>
              </div>
              <Link
                href="/work"
                className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                data-cursor="view"
              >
                Case Studies <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 text-zinc-100 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner my-2">
              <span className="text-zinc-600">{"//"} Devfinity Type-Safe Pipeline Blueprint</span>
              <br />
              <span className="text-purple-400">export const</span> <span className="text-blue-400">studioArchitecture</span> = &#123;
              <br />
              &nbsp;&nbsp;rendering: <span className="text-emerald-400">&quot;Server-First Next.js 16&quot;</span>,
              <br />
              &nbsp;&nbsp;physics: <span className="text-emerald-400">&quot;GSAP 3.15 Elastic Springs&quot;</span>,
              <br />
              &nbsp;&nbsp;designSystem: <span className="text-emerald-400">&quot;Light Mode Plus &amp; Glassmorphism&quot;</span>,
              <br />
              &nbsp;&nbsp;security: <span className="text-amber-400">&#123; sanitized: true, rateLimited: true &#125;</span>
              <br />
              &#125;;
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-600 pt-2 font-mono">
              <span>Ready for production workloads</span>
              <span className="text-blue-600 font-bold">91+ Deployments Shipped</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
