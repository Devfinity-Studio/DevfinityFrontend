"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Cpu, Terminal, Palette, Github, ArrowUpRight, CheckCircle2, ShieldCheck, Activity } from "lucide-react";
import { TrustBanner } from "@/components/TrustBanner";

interface LabProject {
  id: string;
  title: string;
  category: "Hardware & IoT" | "Open Source" | "Digital Concept Art";
  status: string;
  description: string;
  tech: string[];
  metrics: string;
  links?: {
    label: string;
    href: string;
  }[];
}

const labProjects: LabProject[] = [
  {
    id: "esp32-telemetry",
    title: "ESP32 Industrial Telemetry Conduit",
    category: "Hardware & IoT",
    status: "Hardware Verified",
    description:
      "A dual-core ESP32 micro-bridge translating factory RS-485 serial communication into secure binary WebSocket packets. Features sub-10ms edge transmission and local EEPROM ring buffers for offline resilience.",
    tech: ["ESP32-S3", "C++", "FreeRTOS", "WebSockets", "Hardware-in-the-Loop"],
    metrics: "< 8ms Transmission Latency // Zero Frame Loss",
  },
  {
    id: "raspberry-cluster",
    title: "Edge Sensor Aggregation Node",
    category: "Hardware & IoT",
    status: "Prototype Deployed",
    description:
      "Distributed Raspberry Pi CM4 node running a lightweight alpine edge kernel. Gathers physical environmental and power telemetry with mutual TLS (mTLS) cryptographic handshakes before syncing to PostgreSQL.",
    tech: ["Raspberry Pi CM4", "Alpine Linux", "PostgreSQL", "mTLS Encryption"],
    metrics: "100% Cryptographic Verification",
  },
  {
    id: "drizzle-zod-guard",
    title: "drizzle-zod-guard: Type-Safe Contract Engine",
    category: "Open Source",
    status: "Open Source Active",
    description:
      "An automated build-time compiler gate that inspects PostgreSQL relational schemas and synthesizes runtime Zod validation contracts with zero manual boilerplate.",
    tech: ["TypeScript 5", "Drizzle ORM", "Zod", "Turbopack"],
    metrics: "Zero Schema-Drift Regressions",
    links: [
      { label: "Inspect on GitHub", href: "https://github.com" },
    ],
  },
  {
    id: "next-sub15-rpc",
    title: "sub15-rpc: Low-Latency Binary Adapter",
    category: "Open Source",
    status: "Beta Release",
    description:
      "A ultra-compact binary serialization protocol for tRPC and Next.js App Router, engineered specifically for high-concurrency sensor streaming and real-time dashboard telemetry.",
    tech: ["tRPC v11", "Next.js 16", "ArrayBuffer", "WebSockets"],
    metrics: "< 15ms Response Time",
    links: [
      { label: "View Architecture", href: "/insights/aerospace-telemetry-def-space-cybersecurity" },
    ],
  },
  {
    id: "digital-concept-art",
    title: "Isometric Hardware & Architecture Blueprints",
    category: "Digital Concept Art",
    status: "Creative Studio",
    description:
      "Bespoke digital vector illustrations, isometric telemetry schematics, and UI interface blueprints handcrafted by Devansh & Heena in Procreate and Adobe Fresco for high-fidelity technical presentations.",
    tech: ["Procreate", "Adobe Fresco", "Apple Pencil", "Vector SVG"],
    metrics: "100% Original Vector Art",
  },
];

export default function LabsClient() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Hardware & IoT", "Open Source", "Digital Concept Art"];

  const filtered =
    filter === "All"
      ? labProjects
      : labProjects.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section
        aria-labelledby="labs-heading"
        className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 text-center overflow-hidden"
      >
        <div className="container mx-auto max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ 06 / DEVFINITY LABS &amp; EXPERIMENTS ]</span>
          </div>
          <h1 id="labs-heading" className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 uppercase">
            OPEN SOURCE &amp; <span className="text-gradient-future">HARDWARE</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Our engineering playground. Where we test embedded IoT hardware, open-source type-safe developer tools, and hand-drawn digital schematics that push the boundaries of digital craft.
          </p>
        </div>
      </section>

      {/* Verified Authority & Trust Banner */}
      <TrustBanner />

      {/* Labs Content Grid */}
      <section aria-labelledby="labs-grid-heading" className="w-full py-16 px-4 md:px-8 relative z-10">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white/80 hover:bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <h2 id="labs-grid-heading" className="sr-only">
            Active Experimental Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200/60">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 font-medium">Benchmark</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {item.metrics}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 text-xs font-mono font-medium border border-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500">Handcrafted by Heena &amp; Devansh</span>
                  {item.links && item.links.length > 0 ? (
                    item.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ))
                  ) : (
                    <Link
                      href="/connect"
                      className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire Prototype</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
