"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, Check, ArrowRight, Shield, Zap, Layers, Database } from "lucide-react";
import { ProcessPipeline } from "@/components/ProcessPipeline";
import { StatCounters } from "@/components/StatCounters";
import { MagneticButton } from "@/components/MagneticButton";

export default function ServicesClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".services-hero-anim", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  const capabilities = [
    {
      title: "Bespoke Enterprise Systems (ERP / CRM)",
      icon: Layers,
      desc: "Custom operational backbones designed from scratch. Role-based granular permissions, automated sales auditing, replacement registers, and seamless real-time tracking.",
      deliverables: ["Role-Based Access Control", "Automated Auditing", "Zero Spreadsheet Latency"],
    },
    {
      title: "High-Performance Next.js Web Platforms",
      icon: Zap,
      desc: "Server-component-driven architectures stripped of heavy client-side bloat. Sub-150ms roundtrip responses, instantaneous routing, and dynamic visual flair.",
      deliverables: ["React 19 Server Components", "Turbopack Optimization", "Zero Layout Shifting"],
    },
    {
      title: "Optimized Relational Database Architecture",
      icon: Database,
      desc: "Speed is governed by data structures. We architect deeply indexed PostgreSQL and MySQL schemas that withstand high-concurrency transactional spikes.",
      deliverables: ["Index Tuning & Query Optimization", "Type-Safe ORM Mappings", "Automated Migration Guards"],
    },
    {
      title: "Continuous Verification & Zero-Downtime Deploy",
      icon: Shield,
      desc: "Compile-time strictness and continuous validation pipelines ensure zero regressions bypass automated gates into production.",
      deliverables: ["100% Strict Type Verification", "Vercel OIDC Deploy Pipelines", "Security Threat Mitigations"],
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      
      {/* Services Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 overflow-hidden text-center">
        <div className="container mx-auto max-w-4xl space-y-6">
          <div className="services-hero-anim inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ 02 / SERVICES &amp; CAPABILITIES ]</span>
          </div>
          <h1 className="services-hero-anim text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 uppercase">
            ENGINEERING <span className="text-gradient-future">PRECISION</span>
          </h1>
          <p className="services-hero-anim text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            We do not sell pre-made templates. We architect resilient, bespoke full-stack applications engineered for the exact operational realities of modern enterprise workflows.
          </p>
        </div>
      </section>

      {/* Numerical Stat Counters */}
      <StatCounters />

      {/* The Process Pipeline with Scroll-Linked Light Trail */}
      <ProcessPipeline />

      {/* Detailed Capabilities Grid */}
      <section className="w-full py-24 px-4 md:px-8 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900">
              Core Architectural Pillars
            </h2>
            <p className="text-zinc-600 max-w-xl mx-auto text-base">
              Explore how our engineering principles deliver measurable competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card rounded-3xl p-8 flex flex-col justify-between group"
                  data-cursor="view"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-zinc-900 tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] space-y-2">
                    {item.deliverables.map((d) => (
                      <div key={d} className="flex items-center space-x-2 text-xs font-mono text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="w-full py-20 px-4 md:px-8 border-t border-black/[0.06] bg-white/70 backdrop-blur-md text-center">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900">
            Ready to design your custom software architecture?
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Book an engineering consultation to review your technical blueprints and database schemas.
          </p>
          <div className="pt-2">
            <MagneticButton href="/connect" variant="primary">
              Schedule Technical Consultation 🚀
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
