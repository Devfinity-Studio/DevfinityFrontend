"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, Check, ArrowRight, Shield, Zap, Layers, Database } from "lucide-react";
import { ProcessPipeline } from "@/components/ProcessPipeline";
import { StatCounters } from "@/components/StatCounters";
import { MagneticButton } from "@/components/MagneticButton";
import { TrustBanner } from "@/components/TrustBanner";
import { AccordionFAQ, servicesFAQs } from "@/components/AccordionFAQ";
import { CommunityLeadershipSection } from "@/components/CommunityLeadershipSection";

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
      deliverables: ["Role-Based Access Control (RBAC)", "Automated Financial & Inventory Auditing", "Zero Spreadsheet Latency"],
    },
    {
      title: "High-Performance Next.js Web Platforms",
      icon: Zap,
      desc: "Server-component-driven architectures stripped of heavy client-side bloat. Sub-150ms roundtrip responses, instantaneous routing, and dynamic visual flair.",
      deliverables: ["React 19 Server Components", "Turbopack Bundling & Image Optimization", "Zero Layout Shifting (CLS)"],
    },
    {
      title: "Optimized Relational Database Architecture",
      icon: Database,
      desc: "Speed is governed by data structures. We architect deeply indexed PostgreSQL and MySQL schemas that withstand high-concurrency transactional spikes.",
      deliverables: ["Index Tuning & Sub-40ms Queries", "Type-Safe Drizzle ORM Schema Mappings", "Automated Migration Guards"],
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
      <section aria-labelledby="services-hero-title" className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 overflow-hidden text-center">
        <div className="container mx-auto max-w-4xl space-y-6">
          <div className="services-hero-anim inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ 02 / SERVICES &amp; CAPABILITIES ]</span>
          </div>
          <h1 id="services-hero-title" className="services-hero-anim text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 uppercase">
            ENGINEERING <span className="text-gradient-future">PRECISION</span>
          </h1>
          <p className="services-hero-anim text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            We do not sell pre-made templates. We architect resilient, bespoke full-stack applications engineered for the exact operational realities of modern enterprise workflows.
          </p>
        </div>
      </section>

      {/* Verified Authority & Trust Banner */}
      <TrustBanner />

      {/* Numerical Stat Counters */}
      <StatCounters />

      {/* The Process Pipeline with Scroll-Linked Light Trail */}
      <ProcessPipeline />

      {/* Detailed Capabilities Grid with AIO Answer-First Structure */}
      <section aria-labelledby="pillars-heading" className="w-full py-24 px-4 md:px-8 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-16 space-y-4">
            <h2 id="pillars-heading" className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900">
              Core Architectural Pillars
            </h2>
            {/* AIO 40-60 Word Direct Answer */}
            <p className="text-zinc-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
              Devfinity builds bespoke enterprise systems, Next.js web applications, and optimized database architectures on the T3 Stack. We replace slow, generic templates with type-safe server components, sub-40ms indexed PostgreSQL queries, and role-based Kinde authentication, guaranteeing 100% intellectual property ownership and zero vendor lock-in for modern engineering teams.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article
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

                  <ul className="pt-4 border-t border-black/[0.06] space-y-2 list-none p-0">
                    {item.deliverables.map((d) => (
                      <li key={d} className="flex items-center space-x-2 text-xs font-mono text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          {/* Architectural Comparison Matrix (AIO Structured Extraction) */}
          <div className="mt-16 glass-card rounded-3xl p-6 md:p-10 border border-white/80 shadow-lg">
            <h3 className="text-xl md:text-2xl font-black text-zinc-900 mb-2">
              Engineering Architecture Comparison
            </h3>
            <p className="text-xs font-mono text-zinc-600 uppercase mb-6">
              Bespoke Devfinity Architecture vs. Off-The-Shelf Commercial Templates
            </p>
            <div className="overflow-x-auto rounded-2xl border border-black/[0.06]">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-zinc-50 border-b border-black/[0.06] font-mono text-xs uppercase text-zinc-700">
                    <th className="p-3.5 font-bold">Capability Dimension</th>
                    <th className="p-3.5 font-bold text-blue-600">Devfinity Bespoke Build</th>
                    <th className="p-3.5 font-bold text-zinc-500">Generic SaaS / Commercial Templates</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.04] text-zinc-800">
                  <tr>
                    <td className="p-3.5 font-semibold font-mono text-xs">Source Code Ownership</td>
                    <td className="p-3.5 text-emerald-700 font-medium">100% Client Ownership (Zero IP Lock-in)</td>
                    <td className="p-3.5 text-zinc-500">Proprietary Closed Platform / Recurring Fees</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold font-mono text-xs">Query Latency</td>
                    <td className="p-3.5 text-emerald-700 font-medium">&lt; 40ms Indexed PostgreSQL Queries</td>
                    <td className="p-3.5 text-zinc-500">350ms - 1.2s Generic REST APIs</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold font-mono text-xs">Security &amp; Permissions</td>
                    <td className="p-3.5 text-emerald-700 font-medium">Kinde Auth Granular RBAC Per Facility</td>
                    <td className="p-3.5 text-zinc-500">Monolithic All-or-Nothing Access</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold font-mono text-xs">Custom Workflows</td>
                    <td className="p-3.5 text-emerald-700 font-medium">Tailored Exactly to Physical Operations</td>
                    <td className="p-3.5 text-zinc-500">Forced Spreadsheet Workarounds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Community Leadership & Real-World Provenance Section */}
      <CommunityLeadershipSection />

      {/* Frequently Answered Questions (Services AIO Schema) */}
      <section aria-label="Services Frequently Asked Questions" className="w-full py-20 px-4 md:px-8 bg-zinc-50/60 border-t border-black/[0.04]">
        <div className="container mx-auto max-w-5xl">
          <AccordionFAQ
            items={servicesFAQs}
            title="Technical & Architectural FAQ"
            subtitle="Definitive answers on compliance, legacy data migrations, ERP engineering, and latency benchmarks."
            categoryLabel="[ SERVICES & STACK FAQS ]"
          />
        </div>
      </section>

      {/* CTA Box */}
      <section aria-labelledby="services-cta-heading" className="w-full py-20 px-4 md:px-8 border-t border-black/[0.06] bg-white/70 backdrop-blur-md text-center">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h2 id="services-cta-heading" className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900">
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
