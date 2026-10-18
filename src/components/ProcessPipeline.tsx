"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Lightbulb, Palette, Terminal, Rocket, CheckCircle2 } from "lucide-react";

export function ProcessPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const steps = [
    {
      num: "01",
      title: "Ideate & Architecture",
      icon: Lightbulb,
      desc: "Deep-dive operational mapping, relational database schema architecture, and technical scoping before writing a single line of code.",
      tag: "Blueprint",
      color: "from-blue-500 to-indigo-500",
      border: "border-blue-200",
    },
    {
      num: "02",
      title: "Design & Interaction Contract",
      icon: Palette,
      desc: "High-fidelity micro-interactions, responsive design contracts (UI-SPEC), and tactile glassmorphic design systems.",
      tag: "Prototyping",
      color: "from-indigo-500 to-purple-500",
      border: "border-indigo-200",
    },
    {
      num: "03",
      title: "Build & Compiler Verification",
      icon: Terminal,
      desc: "Type-safe Next.js 16 App Router engineering, server components, and automated data pipelines with zero runtime bugs.",
      tag: "Engineering",
      color: "from-purple-500 to-pink-500",
      border: "border-purple-200",
    },
    {
      num: "04",
      title: "Launch & Global Edge Scale",
      icon: Rocket,
      desc: "Zero-downtime cutover deployment, edge network distribution, sub-150ms latency tuning, and automated verification sign-off.",
      tag: "Deployment",
      color: "from-pink-500 to-orange-500",
      border: "border-pink-200",
    },
  ];

  useGSAP(
    () => {
      // Light trail stroke dash animation linked to scroll
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0.8,
          },
        });
      }

      // Step cards entry animation
      gsap.from(".process-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full py-24 px-4 md:px-8 relative overflow-hidden" id="process">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/60 text-purple-600 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
            <span>[ 02 / METHODOLOGY &amp; PIPELINE ]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900">
            The Devfinity Process
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-zinc-600">
            A battle-tested 4-stage pipeline that transforms complex requirements into resilient digital ecosystems.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="process-card glass-card rounded-3xl p-7 flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300"
                data-cursor="view"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-zinc-300 group-hover:text-blue-600 transition-colors">
                      {step.num}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-md shadow-blue-500/10`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200/60 inline-block mb-3">
                    {step.tag}
                  </span>
                  <h3 className="font-extrabold text-xl text-zinc-900 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Footer Checkmark */}
                <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center justify-between text-xs font-mono text-zinc-600">
                  <span>Phase {idx + 1} Contract</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
