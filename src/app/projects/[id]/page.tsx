import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Sparkles, CheckCircle2 } from "lucide-react";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const projectId = resolvedParams.id;

  const projectMap: Record<string, { title: string; client: string; category: string; description: string; tech: string[]; metrics: string }> = {
    erp: {
      title: "Shivshakti Industrial ERP Platform",
      client: "Shivshakti Agro Industries",
      category: "Enterprise System",
      description: "A centralized operational hub replacing fragmented dispatch spreadsheets into a type-safe Next.js platform. Features granular replacement registers, automated audits, and multi-tenant security.",
      tech: ["Next.js 16", "PostgreSQL", "TypeORM", "Zod", "TypeScript", "Tailwind 4"],
      metrics: "94% Adoption Rate across 12 factories",
    },
    fintech: {
      title: "Real-Time Transaction Ledger",
      client: "Apex Financial Labs",
      category: "Financial Architecture",
      description: "Sub-50ms audit logging pipeline featuring immutable event streaming, zero-overhead client synchronization, and cryptographic data verification.",
      tech: ["Next.js App Router", "Serverless Edge", "WebSockets", "Tailwind CSS"],
      metrics: "100% Audit Precision under heavy peak traffic",
    },
    cloud: {
      title: "Telemetry & Infrastructure Visualizer",
      client: "KubeCloud Technologies",
      category: "DevOps & Cloud",
      description: "Interactive distributed node visualizer with live topology mapping, continuous latency probing, and incident timeline replays.",
      tech: ["React 19", "GSAP 3.15", "SVG Math", "TypeScript"],
      metrics: "< 120ms Global Roundtrip",
    },
    pipeline: {
      title: "Automated Deployment Pipeline Terminal",
      client: "DevOps Global Networks",
      category: "Automation Core",
      description: "Bespoke continuous delivery console providing granular rollbacks, live compilation stream diagnostics, and automated verification checks.",
      tech: ["Turbopack", "Radix UI", "Node.js", "Zod"],
      metrics: "Zero Downtime Deployments Guaranteed",
    },
  };

  const project = projectMap[projectId] || {
    title: `Project ${projectId.toUpperCase()}`,
    client: "Enterprise Partner",
    category: "Bespoke System",
    description: "A cutting-edge solution designed to improve operational efficiency and deliver an exceptional user experience. Incorporates state-of-the-art technologies to ensure scalability, security, and performance.",
    tech: ["Next.js 16", "React 19", "TypeScript 5", "Tailwind CSS 4"],
    metrics: "Production Verified",
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-6xl">
      <div className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase text-zinc-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-black/[0.03]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Production Deployments</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Interactive Workspace Window Mockup */}
          <div className="h-80 rounded-3xl glass-panel border border-white/80 p-6 flex flex-col justify-between shadow-xl shadow-blue-500/5 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-mono text-zinc-600 font-semibold tracking-wider uppercase">
                {projectId}.production.env
              </span>
              <div className="w-3 h-3" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-emerald-600 font-semibold">
                Status: Verified in Production
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Details Card */}
        <div className="space-y-6">
          <div className="glass-card rounded-3xl p-7 border border-white/80 shadow-lg space-y-6">
            <h3 className="font-extrabold text-lg text-zinc-900 tracking-tight border-b border-black/[0.06] pb-3">
              Architectural Specifications
            </h3>
            
            <dl className="space-y-4 text-sm font-sans">
              <div>
                <dt className="text-xs font-mono text-zinc-600 uppercase font-semibold">Client Organization</dt>
                <dd className="font-bold text-zinc-900 mt-0.5">{project.client}</dd>
              </div>

              <div>
                <dt className="text-xs font-mono text-zinc-600 uppercase font-semibold">Validation Benchmark</dt>
                <dd className="font-bold text-emerald-600 mt-0.5 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> {project.metrics}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-mono text-zinc-600 uppercase font-semibold mb-2">Deployed Technologies</dt>
                <dd className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 text-xs font-mono font-medium border border-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="pt-4 border-t border-black/[0.06] space-y-3">
              <Link
                href="/connect"
                className="w-full py-3 rounded-full font-mono font-bold text-xs text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-blue-500/25 flex items-center justify-center space-x-2 text-center"
              >
                <span>Request Similar Architecture 🚀</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
