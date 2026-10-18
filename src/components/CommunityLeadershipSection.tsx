"use client";

import Link from "next/link";
import { Users, Award, Radio, Camera, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export function CommunityLeadershipSection() {
  const credentials = [
    {
      title: "GDG Baroda DevFest 2025",
      role: "Organizing & Technical Lead",
      badge: "Google Developer Groups",
      description:
        "Spearheading the flagship annual developer conference for Google Developer Group Baroda. Organizing technical workshops on Next.js architectures, edge runtimes, and distributed cloud computing for 500+ engineers.",
      icon: Users,
      metric: "500+ Regional Engineers Mentored",
      link: {
        label: "Community Footprint",
        href: "/insights",
      },
    },
    {
      title: "IIT Bombay Techfest: Cozmoclench",
      role: "Hardware & Wireless Robotics",
      badge: "National Tech Challenge",
      description:
        "Engineered custom wireless robotics platforms for the Cozmoclench challenge at Asia's largest science and technology festival (IIT Bombay). Field-tested low-latency RF transceivers, dynamic gripper mechanics, and live telemetry.",
      icon: Radio,
      metric: "Sub-10ms Wireless Motor Control",
      link: {
        label: "Inspect Hardware Tech",
        href: "/labs",
      },
    },
    {
      title: "Def-Space Aerospace Telemetry",
      role: "Mission-Critical Systems Research",
      badge: "Aerospace & Defense Research",
      description:
        "Rigorous research during the Def-Space Summer Internship developing binary telemetry parsers, mutual TLS edge encryption, and hardware-in-the-loop simulation conduits for high-speed UAV flight data.",
      icon: Cpu,
      metric: "Zero-Trust Encrypted Streams",
      link: {
        label: "Read Case Study",
        href: "/insights/aerospace-telemetry-def-space-cybersecurity",
      },
    },
  ];

  return (
    <section
      aria-labelledby="community-leadership-title"
      className="w-full py-24 px-4 md:px-8 relative z-10 border-t border-black/[0.06] bg-gradient-to-b from-white via-blue-50/20 to-white"
    >
      <div className="container mx-auto max-w-6xl space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase border border-blue-200/60 shadow-xs">
            <Award className="w-3.5 h-3.5" />
            <span>[ REAL-WORLD PROVENANCE &amp; LEADERSHIP ]</span>
          </div>
          <h2
            id="community-leadership-title"
            className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900"
          >
            Engineering Beyond the Browser
          </h2>
          {/* AIO 40-60 Word Direct Answer */}
          <p className="text-zinc-700 text-base md:text-lg leading-relaxed font-normal bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
            Devfinity’s founders actively lead real-world technical initiatives, including organizing GDG Baroda DevFest 2025, competing in wireless robotics at IIT Bombay Techfest, and conducting aerospace telemetry research during the Def-Space internship. We bring physical engineering rigor, hardware-level performance, and verified community leadership directly into modern web software architectures.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-blue-600 font-bold block mt-0.5">
                      {item.role}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.06] space-y-3">
                  <div className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{item.metric}</span>
                  </div>
                  <Link
                    href={item.link.href}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{item.link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Authentic Studio Media Provenance Banner */}
        <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4 max-w-2xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
                Studio &amp; Hardware Media Transparency
              </div>
              <h4 className="text-xl font-black text-zinc-900 tracking-tight">
                Authentic Photography // Zero Stock Agency Placeholders
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                All workshop documentation, hardware test benches, and laboratory setups originate from our physical engineering studio in Vadodara, Gujarat, documented with Fujifilm X-S20 optical clarity (35mm f/1.4). What you see is authentic, deployed engineering.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center sm:items-end gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-white text-zinc-800 font-bold border border-zinc-200 shadow-xs">
              Vadodara Studio Headquarters
            </span>
            <span className="text-zinc-600">Architected by Devansh &amp; Heena</span>
          </div>
        </div>

      </div>
    </section>
  );
}
