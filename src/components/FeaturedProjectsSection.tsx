"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Activity,
  Layers,
  ShieldCheck,
  Cpu,
  BarChart3,
  Terminal,
  Database,
  Lock,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  metrics: string;
  badge: string;
  visualType: "clinical" | "erp" | "industrial";
}

export function FeaturedProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Exact 3 portfolio projects in designated priority order
  const projects: Project[] = [
    {
      id: "asmee-pharma",
      title: "AsmeePharma",
      category: "Healthcare Tech // Priority Platform",
      desc: "A high-performance, secure web platform built for the pharmaceutical sector. Features complex data handling and a highly responsive, modern UI.",
      tech: ["Next.js", "PostgreSQL", "Tailwind", "Healthcare Tech"],
      metrics: "99.98% Regulatory Uptime",
      badge: "Clinical Glassmorphism",
      visualType: "clinical",
    },
    {
      id: "virat-shivshakti-erp",
      title: "Virat ShivShakti ERP",
      category: "Enterprise System // T3 Stack",
      desc: "A comprehensive, full-stack Enterprise Resource Planning system tailored for seamless business operations, inventory, and workflow management.",
      tech: ["T3 Stack", "Kinde Auth", "Next.js", "Drizzle ORM"],
      metrics: "94% Operational Efficiency",
      badge: "Analytics & Dashboard",
      visualType: "erp",
    },
    {
      id: "rustechnet",
      title: "Rustechnet",
      category: "Industrial Operations // High-Speed Digital",
      desc: "A robust digital solution designed for industrial and technical operations, focusing on blazing-fast speeds and intuitive interface management.",
      tech: ["TypeScript", "React", "tRPC", "Tailwind CSS"],
      metrics: "< 15ms RPC Response",
      badge: "Electric Industrial",
      visualType: "industrial",
    },
  ];

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth >= 768 ? 480 : container.clientWidth * 0.85;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-16 md:py-24 relative z-10 overflow-hidden">
      {/* Section Header with Controls */}
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[ 03 / PRODUCTION PORTFOLIO ]</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 uppercase">
              Featured <span className="text-gradient-future">Work</span>
            </h2>
            <p className="text-zinc-600 mt-2 text-sm md:text-base font-normal leading-relaxed">
              Engineered by Devfinity. Swipe or click to explore our flagship production platforms built on modern full-stack architectures.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <span className="text-xs font-mono text-zinc-600 hidden sm:inline-block">
              Swipe or navigate →
            </span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full border border-zinc-200 bg-white/90 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-40 disabled:hover:bg-white/90 disabled:hover:border-zinc-200 text-zinc-700 hover:text-blue-600 flex items-center justify-center transition-all shadow-xs cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full border border-zinc-200 bg-white/90 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-40 disabled:hover:bg-white/90 disabled:hover:border-zinc-200 text-zinc-700 hover:text-blue-600 flex items-center justify-center transition-all shadow-xs cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Matrix Container */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide no-scrollbar gap-6 md:gap-8 px-4 md:px-8 py-4 items-stretch cursor-grab active:cursor-grabbing"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {projects.map((project, idx) => {
            const isFeatured = idx === 0;

            return (
              <div
                key={project.id}
                className="snap-start snap-always shrink-0 w-[85vw] sm:w-[75vw] md:w-[480px] lg:w-[520px] xl:w-[560px] min-w-[80vw] md:min-w-[420px] flex flex-col"
              >
                <div
                  className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full group hover:shadow-2xl transition-all duration-300 relative overflow-hidden border ${
                    project.visualType === "clinical"
                      ? "bg-gradient-to-br from-white/95 via-sky-50/40 to-blue-50/30 border-sky-200/80 shadow-lg shadow-sky-500/5 hover:border-sky-400"
                      : project.visualType === "erp"
                      ? "glass-card bg-white/90 border-indigo-200/70 shadow-lg shadow-indigo-500/5 hover:border-indigo-400"
                      : "bg-gradient-to-br from-white/95 via-slate-50 to-zinc-100/60 border-zinc-300 hover:border-blue-500 shadow-lg shadow-blue-500/5"
                  }`}
                  data-cursor="view"
                >
                  {/* Subtle Top Ambient Glow */}
                  <div
                    className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-40 transition-opacity group-hover:opacity-70 ${
                      project.visualType === "clinical"
                        ? "bg-sky-400"
                        : project.visualType === "erp"
                        ? "bg-indigo-400"
                        : "bg-blue-500"
                    }`}
                  />

                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-xs font-mono font-bold uppercase px-3 py-1 rounded-full border ${
                          project.visualType === "clinical"
                            ? "bg-sky-50 text-sky-700 border-sky-200"
                            : project.visualType === "erp"
                            ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                            : "bg-slate-100 text-slate-800 border-slate-300"
                        }`}
                      >
                        {isFeatured && "★ "}
                        {project.title}
                      </span>
                      <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {project.metrics}
                      </span>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="w-9 h-9 rounded-full bg-black/[0.04] hover:bg-blue-600 hover:text-white flex items-center justify-center text-zinc-700 transition-colors shrink-0"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Card Body */}
                  <div className="my-6 space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-zinc-600 font-semibold uppercase tracking-wider mb-1">
                        {project.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed font-normal mt-2.5">
                        {project.desc}
                      </p>
                    </div>

                    {/* Specialized Visual Presentation */}
                    {project.visualType === "clinical" && (
                      <div className="mt-4 rounded-2xl bg-gradient-to-br from-sky-50/70 via-white to-blue-50/50 border border-sky-200/60 p-4 shadow-inner relative overflow-hidden">
                        <div className="flex items-center justify-between border-b border-sky-100 pb-2 mb-3">
                          <div className="flex items-center space-x-1.5">
                            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                            <span className="text-[10px] font-mono font-bold text-sky-800 uppercase tracking-wider">
                              Clinical Platform Console
                            </span>
                          </div>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white text-sky-600 border border-sky-200 font-semibold">
                            GMP Secure // HIPAA
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-left">
                          <div className="p-2.5 rounded-xl bg-white/80 border border-sky-100">
                            <div className="text-[10px] font-mono text-zinc-600">Active Formulary</div>
                            <div className="text-sm font-extrabold text-sky-900 flex items-center gap-1 mt-0.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> 14,280 SKUs
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/80 border border-sky-100">
                            <div className="text-[10px] font-mono text-zinc-600">Data Integrity</div>
                            <div className="text-sm font-extrabold text-emerald-600 flex items-center gap-1 mt-0.5">
                              <Activity className="w-3.5 h-3.5" /> 100% Type-Safe
                            </div>
                          </div>
                        </div>
                        <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-sky-700 bg-sky-100/50 px-3 py-1.5 rounded-lg">
                          <span>PostgreSQL Relational Core</span>
                          <span className="font-bold">Sub-40ms Query</span>
                        </div>
                      </div>
                    )}

                    {project.visualType === "erp" && (
                      <div className="mt-4 rounded-2xl bg-gradient-to-br from-indigo-50/60 via-white to-slate-50 border border-indigo-200/60 p-4 shadow-inner relative overflow-hidden">
                        <div className="flex items-center justify-between border-b border-indigo-100 pb-2 mb-3">
                          <div className="flex items-center space-x-1.5">
                            <span className="w-2 h-2 rounded-full bg-indigo-500" />
                            <span className="text-[10px] font-mono font-bold text-indigo-950 uppercase tracking-wider">
                              ERP Operational Dashboard
                            </span>
                          </div>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center gap-1">
                            <Lock className="w-2.5 h-2.5" /> Kinde Auth Role Guard
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-zinc-600">Inventory Sync</span>
                            <span className="font-bold text-indigo-600">98.4% Live</span>
                          </div>
                          <div className="w-full bg-indigo-100/60 rounded-full h-2 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full w-[94%]" />
                          </div>
                          <div className="grid grid-cols-3 gap-1.5 pt-1 text-center">
                            <div className="p-1.5 rounded-lg bg-white/90 border border-indigo-50 text-[10px] font-mono">
                              <span className="text-zinc-600 block">Drizzle ORM</span>
                              <span className="font-bold text-zinc-900">Zero Drift</span>
                            </div>
                            <div className="p-1.5 rounded-lg bg-white/90 border border-indigo-50 text-[10px] font-mono">
                              <span className="text-zinc-600 block">Warehouses</span>
                              <span className="font-bold text-zinc-900">12 Synced</span>
                            </div>
                            <div className="p-1.5 rounded-lg bg-white/90 border border-indigo-50 text-[10px] font-mono">
                              <span className="text-zinc-600 block">Workflows</span>
                              <span className="font-bold text-emerald-600">Automated</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.visualType === "industrial" && (
                      <div className="mt-4 rounded-2xl bg-zinc-900 text-zinc-100 p-4 shadow-inner relative overflow-hidden border border-zinc-800">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                          <div className="flex items-center space-x-1.5">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                            <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                              Industrial Telemetry Stream
                            </span>
                          </div>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-semibold flex items-center gap-1">
                            <Cpu className="w-2.5 h-2.5" /> tRPC High-Speed
                          </span>
                        </div>
                        <div className="space-y-2 font-mono text-[11px]">
                          <div className="flex justify-between items-center text-zinc-400">
                            <span>OPERATIONAL STATUS:</span>
                            <span className="text-cyan-400 font-bold">NOMINAL // 100%</span>
                          </div>
                          <div className="p-2 rounded-lg bg-black/60 border border-zinc-800 text-[10px] text-zinc-300 space-y-1">
                            <div className="flex justify-between">
                              <span className="text-zinc-500">RPC Handshake:</span>
                              <span className="text-emerald-400">12.4ms (p99)</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Node Sync:</span>
                              <span className="text-cyan-300">Active WebSocket</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono text-zinc-600">
                      Engineered by Devfinity
                    </span>
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      View Case Study <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
