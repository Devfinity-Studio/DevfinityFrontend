"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TrendingUp, ShieldCheck, Zap, Award, ChevronDown } from "lucide-react";

export function StatCounters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeExpanded, setActiveExpanded] = useState<number | null>(null);

  const stats = [
    {
      target: 91,
      suffix: "+",
      label: "Projects Shipped",
      subtitle: "Enterprise full-stack platforms & APIs",
      icon: Award,
      color: "text-blue-600",
      bg: "bg-blue-500/10",
      details: "Bespoke web platforms, CRM architectures, and custom administrative registers deployed to production with zero regressions.",
      techStack: "Next.js 16, PostgreSQL, TypeScript, GSAP",
    },
    {
      target: 150,
      prefix: "< ",
      suffix: "ms",
      label: "Interaction Latency",
      subtitle: "Edge-rendered sub-second responses",
      icon: Zap,
      color: "text-purple-600",
      bg: "bg-purple-500/10",
      details: "Highly tuned server components and lightweight UI layers deliver instantaneous user responses under heavy concurrent loads.",
      techStack: "Turbopack, OKLCH CSS, Server-Side Streaming",
    },
    {
      target: 100,
      suffix: "%",
      label: "Type Safety Rate",
      subtitle: "Compile-time structural verification",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-500/10",
      details: "Strict end-to-end schema validation ensures zero unhandled database mismatches or runtime client crashes.",
      techStack: "Zod 4, TypeScript 5, Strict ESLint 9",
    },
    {
      target: 99.9,
      decimals: 1,
      suffix: "%",
      label: "Operational Uptime",
      subtitle: "Continuous edge reliability SLA",
      icon: TrendingUp,
      color: "text-orange-600",
      bg: "bg-orange-500/10",
      details: "Serverless distribution, resilient failovers, and redundant cloud pipelines maintain continuous system availability.",
      techStack: "Vercel OIDC, Cloudflare Edge, Automated CI/CD",
    },
  ];

  useGSAP(
    () => {
      // Numerical count-up animations on ScrollTrigger
      stats.forEach((stat, idx) => {
        const counterEl = document.getElementById(`stat-counter-${idx}`);
        if (!counterEl) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          onUpdate: () => {
            if (counterEl) {
              const formatted = stat.decimals
                ? obj.val.toFixed(stat.decimals)
                : Math.round(obj.val).toString();
              counterEl.innerText = `${stat.prefix || ""}${formatted}${stat.suffix || ""}`;
            }
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full py-20 px-4 md:px-8 relative z-10" id="stats">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const isExpanded = activeExpanded === idx;
            return (
              <div
                key={stat.label}
                onClick={() => setActiveExpanded(isExpanded ? null : idx)}
                className={`glass-card rounded-3xl p-7 flex flex-col justify-between cursor-pointer select-none transition-all duration-300 ${
                  isExpanded ? "ring-2 ring-blue-500/30 shadow-xl" : ""
                }`}
                data-cursor="view"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-zinc-600 flex items-center gap-1">
                      Details <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </span>
                  </div>

                  {/* Animated Number */}
                  <div
                    id={`stat-counter-${idx}`}
                    className={`text-4xl md:text-5xl font-black font-mono tracking-tighter mb-2 ${stat.color}`}
                  >
                    0{stat.suffix}
                  </div>

                  <h3 className="font-extrabold text-base text-zinc-900 tracking-tight">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-1">
                    {stat.subtitle}
                  </p>
                </div>

                {/* Expandable Tech Stack Card Details */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded ? "grid-rows-[1fr] mt-4 pt-4 border-t border-black/[0.06]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden space-y-2">
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {stat.details}
                    </p>
                    <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/60 font-mono text-[11px] text-zinc-700">
                      <strong className="text-blue-600">Stack:</strong> {stat.techStack}
                    </div>
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
