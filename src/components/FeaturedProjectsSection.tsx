"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

export function FeaturedProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: "erp",
      title: "Shivshakti Industrial ERP Platform",
      category: "Enterprise System",
      desc: "Centralized inventory, replacement registers, and automated logistics replacing fragmented spreadsheets.",
      tech: ["Next.js 16", "PostgreSQL", "Zod", "TypeScript"],
      metrics: "94% Adoption Rate",
      accent: "from-blue-600 to-indigo-600",
    },
    {
      id: "fintech",
      title: "Real-Time Transaction Ledger",
      category: "Financial Architecture",
      desc: "Sub-50ms audit logging pipeline featuring immutable event streaming and multi-tenant security.",
      tech: ["Serverless Next.js", "WebSockets", "Tailwind 4"],
      metrics: "100% Audit Precision",
      accent: "from-indigo-600 to-purple-600",
    },
    {
      id: "cloud",
      title: "Telemetry & Infrastructure Visualizer",
      category: "DevOps & Cloud",
      desc: "Interactive cluster visualizer with live topology mapping and continuous latency probing.",
      tech: ["React 19", "GSAP 3.15", "SVG Nodes"],
      metrics: "< 120ms Roundtrip",
      accent: "from-purple-600 to-pink-600",
    },
    {
      id: "pipeline",
      title: "Automated Deployment Pipeline Terminal",
      category: "Automation Core",
      desc: "Bespoke continuous delivery console providing granular rollbacks and live compilation stream diagnostics.",
      tech: ["Turbopack", "Radix UI", "Node.js"],
      metrics: "Zero Downtime",
      accent: "from-pink-600 to-orange-500",
    },
  ];

  useGSAP(
    () => {
      // Horizontal Scroll Interception
      const totalPanels = projects.length;

      gsap.to(containerRef.current, {
        xPercent: -100 * ((totalPanels - 1) / totalPanels),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (containerRef.current?.offsetWidth || 0),
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="h-screen w-full flex flex-col justify-center overflow-hidden relative z-10 py-12">
      <div className="container mx-auto px-4 md:px-8 mb-8 z-10 relative pointer-events-none">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>[ 03 / PRODUCTION DEPLOYMENTS ]</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 uppercase">
          Featured <span className="text-gradient-future">Works</span>
        </h2>
        <p className="text-zinc-600 mt-2 max-w-lg text-sm md:text-base font-normal">
          Scroll down to explore enterprise production architectures along a horizontal showcase matrix.
        </p>
      </div>

      {/* Horizontal Matrix Container */}
      <div
        ref={containerRef}
        className="flex h-[62vh] items-center px-4"
        style={{ width: `${projects.length * 100}vw` }}
      >
        {projects.map((project) => (
          <div key={project.id} className="w-screen px-4 md:px-12 flex-shrink-0">
            <div
              className="glass-card rounded-3xl p-8 max-w-5xl mx-auto flex flex-col justify-between h-full group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              data-cursor="view"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200/60">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-600 font-semibold">
                    {project.metrics}
                  </span>
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="w-9 h-9 rounded-full bg-black/[0.04] hover:bg-blue-600 hover:text-white flex items-center justify-center text-zinc-700 transition-colors"
                  aria-label="View Project"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Card Body & Preview Mockup */}
              <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
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

                {/* Interactive Visual Window */}
                <div className="h-56 rounded-2xl bg-gradient-to-tr from-slate-100 to-white border border-black/[0.06] p-4 flex flex-col justify-between shadow-inner relative overflow-hidden group-hover:scale-[1.01] transition-transform">
                  <div className="flex items-center space-x-1.5 border-b border-black/[0.05] pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono text-zinc-600 ml-2">architecture.preview</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                    <span className="font-mono text-xs text-zinc-600 font-medium">
                      [ Interactive Workspace // {project.title} ]
                    </span>
                    <span className="text-[11px] font-mono text-blue-600 mt-2 font-semibold">
                      Click to explore full system case study →
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-600">Bespoke Architecture</span>
                <Link
                  href={`/projects/${project.id}`}
                  className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  View Case Study <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
