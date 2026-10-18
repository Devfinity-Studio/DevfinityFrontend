"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { HeroFloating3D } from "@/components/HeroFloating3D";
import { BentoGridSection } from "@/components/BentoGridSection";

export default function HomeClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Staggered hero entrance
      gsap.from(".hero-anim", {
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
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="container mx-auto max-w-5xl flex flex-col items-center text-center space-y-6">
          
          {/* Eyebrow Badge */}
          <div className="hero-anim inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ FORWARD-THINKING WEB DEVELOPMENT STUDIO ]</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-anim text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 leading-[1.05] uppercase">
            WE BUILD THE DIGITAL{" "}
            <span className="text-gradient-future inline-block">
              FUTURE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-anim max-w-3xl text-lg md:text-xl text-zinc-600 font-normal leading-relaxed">
            Devfinity designs and deploys bespoke, type-safe full-stack software tailored to the exact blueprints of modern enterprises. We turn operational friction into high-utility digital art.
          </p>

          {/* Action Buttons */}
          <div className="hero-anim flex flex-wrap items-center justify-center gap-4 pt-4">
            <MagneticButton href="/connect" variant="primary">
              Let&apos;s Build 🚀
            </MagneticButton>

            <Link
              href="/work"
              className="inline-flex items-center space-x-2 font-mono font-medium rounded-full px-7 py-3 text-sm text-zinc-700 bg-white/80 border border-zinc-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 shadow-sm transition-all duration-300"
              data-cursor="view"
            >
              <span>View Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Floating 3D Interactive Blocks */}
          <div className="hero-anim w-full pt-4">
            <HeroFloating3D />
          </div>
        </div>
      </section>

      {/* 3x2 Bento Grid Section */}
      <BentoGridSection />

      {/* Bottom CTA Strip */}
      <section className="w-full py-20 px-4 md:px-8 border-t border-black/[0.06] bg-white/60 backdrop-blur-md">
        <div className="container mx-auto max-w-5xl rounded-3xl p-10 md:p-14 glass-panel border border-white/80 shadow-2xl shadow-blue-500/5 text-center flex flex-col items-center space-y-6">
          <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
            [ READY TO SCALE YOUR DIGITAL PLATFORM? ]
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900">
            Have an ambitious software project? Let&apos;s talk.
          </h2>
          <p className="text-zinc-600 max-w-xl text-base md:text-lg">
            From custom enterprise resource systems to high-speed client-facing platforms, we deliver flawless results.
          </p>
          <div className="pt-2">
            <MagneticButton href="/connect" variant="primary">
              Initialize Project Intake 🚀
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
