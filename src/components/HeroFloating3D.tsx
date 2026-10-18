"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Code2, Cpu, ShieldCheck, Zap } from "lucide-react";

export function HeroFloating3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      // Staggered idle bobbing float
      gsap.to(card1Ref.current, {
        y: -14,
        rotateZ: -2,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(card2Ref.current, {
        y: 16,
        rotateZ: 2,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4,
      });

      gsap.to(card3Ref.current, {
        y: -12,
        rotateZ: 3,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8,
      });

      gsap.to(card4Ref.current, {
        y: 15,
        rotateZ: -3,
        duration: 4.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });
    },
    { scope: containerRef }
  );

  // 3D perspective tilt on cursor movement
  const handleMouseMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / width;
    const y = (clientY - (top + height / 2)) / height;

    gsap.to([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current], {
      rotateX: -y * 25,
      rotateY: x * 25,
      duration: 0.6,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current], {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  });

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-4xl h-72 md:h-80 mx-auto mt-8 flex items-center justify-center select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Central Glassmorphic Dashboard Showcase Anchor */}
      <div className="w-full max-w-2xl h-44 md:h-52 rounded-2xl glass-panel p-6 flex flex-col justify-between shadow-2xl shadow-blue-500/5 border border-white/80 relative z-10 transition-transform duration-300">
        <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-mono text-zinc-600 font-semibold tracking-wider uppercase">
            devfinity.studio // runtime.tsx
          </span>
          <div className="w-3 h-3" />
        </div>
        <div className="grid grid-cols-3 gap-4 my-auto">
          <div className="p-3 rounded-xl bg-white/70 border border-black/[0.04] text-center">
            <span className="text-xs font-mono text-zinc-600 block">Latency</span>
            <span className="text-xl font-extrabold text-blue-600 font-mono">&lt; 45ms</span>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-black/[0.04] text-center">
            <span className="text-xs font-mono text-zinc-600 block">Integrity</span>
            <span className="text-xl font-extrabold text-purple-600 font-mono">100%</span>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-black/[0.04] text-center">
            <span className="text-xs font-mono text-zinc-600 block">Deploy Rate</span>
            <span className="text-xl font-extrabold text-emerald-600 font-mono">0.02s</span>
          </div>
        </div>
      </div>

      {/* Floating 3D Block 1: Code Brackets */}
      <div
        ref={card1Ref}
        className="absolute -top-6 left-2 md:left-8 px-4 py-3 rounded-2xl glass-card flex items-center space-x-3 shadow-lg shadow-blue-500/10 cursor-pointer z-20 group"
        data-cursor="view"
      >
        <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Code2 className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-mono text-zinc-600 font-bold block uppercase">Architecture</span>
          <span className="text-sm font-extrabold text-zinc-900 tracking-tight">Type-Safe Next.js</span>
        </div>
      </div>

      {/* Floating 3D Block 2: Uptime Badge */}
      <div
        ref={card2Ref}
        className="absolute -top-4 right-2 md:right-10 px-4 py-3 rounded-2xl glass-card flex items-center space-x-3 shadow-lg shadow-purple-500/10 cursor-pointer z-20 group"
        data-cursor="view"
      >
        <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-mono text-zinc-600 font-bold block uppercase">Reliability</span>
          <span className="text-sm font-extrabold text-zinc-900 tracking-tight flex items-center gap-1.5">
            99.9% Uptime
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </span>
        </div>
      </div>

      {/* Floating 3D Block 3: Interactive Physics */}
      <div
        ref={card3Ref}
        className="absolute -bottom-8 left-6 md:left-16 px-4 py-3 rounded-2xl glass-card flex items-center space-x-3 shadow-lg shadow-amber-500/10 cursor-pointer z-20 group"
        data-cursor="rocket"
      >
        <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-mono text-zinc-600 font-bold block uppercase">Motion</span>
          <span className="text-sm font-extrabold text-zinc-900 tracking-tight">GSAP 3.15 Physics</span>
        </div>
      </div>

      {/* Floating 3D Block 4: Microchip Compute */}
      <div
        ref={card4Ref}
        className="absolute -bottom-6 right-6 md:right-20 px-4 py-3 rounded-2xl glass-card flex items-center space-x-3 shadow-lg shadow-emerald-500/10 cursor-pointer z-20 group"
        data-cursor="drag"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Cpu className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-mono text-zinc-600 font-bold block uppercase">Engine</span>
          <span className="text-sm font-extrabold text-zinc-900 tracking-tight">Tailwind 4 + Radix</span>
        </div>
      </div>
    </div>
  );
}
