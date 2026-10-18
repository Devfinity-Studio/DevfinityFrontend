"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { StatCounters } from "@/components/StatCounters";
import { MagneticButton } from "@/components/MagneticButton";

export default function WorkClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".work-hero-anim", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 text-center overflow-hidden">
        <div className="container mx-auto max-w-4xl space-y-6">
          <div className="work-hero-anim inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ 03 / PORTFOLIO &amp; ARCHITECTURAL CASES ]</span>
          </div>
          <h1 className="work-hero-anim text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 uppercase">
            PRODUCTION <span className="text-gradient-future">DEPLOYMENTS</span>
          </h1>
          <p className="work-hero-anim text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Review our raw architectural deployments. We do not build simple brochures. We engineer low-latency, role-based database environments that handle complex physical workflows.
          </p>
        </div>
      </section>

      {/* Featured Horizontal Scroll Matrix */}
      <FeaturedProjectsSection />

      {/* Numerical Metrics Summary */}
      <StatCounters />

      {/* Deep Dive Case Study */}
      <section className="w-full py-24 px-4 md:px-8 relative z-10">
        <div className="container mx-auto max-w-5xl glass-panel rounded-3xl p-8 md:p-14 border border-white/80 shadow-2xl space-y-10">
          
          <div className="space-y-4 border-b border-black/[0.06] pb-8">
            <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 inline-block">
              Featured Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Virat ShivShakti ERP System Architecture
            </h2>
            <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
              A comprehensive full-stack enterprise overhaul engineered by Devfinity. Replaced legacy dispatch spreadsheets with a type-safe T3 Stack platform featuring Kinde authentication, Drizzle ORM schema integrity, and automated inventory logistics across 12 facilities.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase text-blue-600 font-mono tracking-tight">
              Architectural Metric Matrix
            </h3>
            
            <div className="overflow-x-auto rounded-2xl border border-black/[0.06]">
              <table className="w-full text-left border-collapse text-sm md:text-base font-sans">
                <thead>
                  <tr className="bg-zinc-50 border-b border-black/[0.06] font-mono text-xs uppercase text-zinc-600">
                    <th className="p-4 font-bold">Stack Component</th>
                    <th className="p-4 font-bold">Implementation Metric</th>
                    <th className="p-4 font-bold">Operational Gain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.04] text-zinc-800">
                  <tr className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-4 font-semibold font-mono text-blue-600">T3 Stack + Drizzle ORM</td>
                    <td className="p-4 font-mono text-xs text-zinc-600">Type-Safe Relational Queries</td>
                    <td className="p-4 font-medium text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Zero schema-drift regressions
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-4 font-semibold font-mono text-blue-600">Kinde Authentication</td>
                    <td className="p-4 font-mono text-xs text-zinc-600">Role-Based Access Control</td>
                    <td className="p-4 font-medium text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Secure multi-facility permissions
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-4 font-semibold font-mono text-blue-600">Next.js App Router</td>
                    <td className="p-4 font-mono text-xs text-zinc-600">Edge Dynamic Rendering</td>
                    <td className="p-4 font-medium text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Sub-50ms query latency under load
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-4 flex justify-between items-center flex-wrap gap-4">
            <span className="text-xs font-mono text-zinc-600">Complete Codebase Ownership Guaranteed</span>
            <MagneticButton href="/connect" variant="primary">
              Build Similar Infrastructure 🚀
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
