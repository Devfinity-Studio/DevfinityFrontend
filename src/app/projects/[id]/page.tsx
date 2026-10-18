import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Sparkles, CheckCircle2, Calendar, UserCheck, ShieldCheck } from "lucide-react";

interface ProjectData {
  title: string;
  client: string;
  category: string;
  description: string;
  tech: string[];
  metrics: string;
  applicationCategory: string;
}

const projectMap: Record<string, ProjectData> = {
  "asmee-pharma": {
    title: "AsmeePharma",
    client: "Asmee Pharmaceutical Enterprises",
    category: "Healthcare Tech // Priority Platform",
    description: "A secure, high-performance web platform built by Devfinity for pharmaceutical compliance, complex data handling, and responsive clinical workflows.",
    tech: ["Next.js", "PostgreSQL", "Tailwind", "Healthcare Tech"],
    metrics: "99.98% Regulatory Uptime // Sub-40ms Query Speed",
    applicationCategory: "HealthApplication",
  },
  "virat-shivshakti-erp": {
    title: "Virat ShivShakti ERP",
    client: "Virat ShivShakti Enterprise Group",
    category: "Enterprise System // T3 Stack",
    description: "Full-stack ERP system engineered by Devfinity for multi-facility operations, inventory management, and automated workflows with Kinde RBAC and Drizzle ORM.",
    tech: ["T3 Stack", "Kinde Auth", "Next.js", "Drizzle ORM"],
    metrics: "94% Operational Efficiency across 12 facilities",
    applicationCategory: "BusinessApplication",
  },
  rustechnet: {
    title: "Rustechnet",
    client: "Rustechnet Industrial Dynamics",
    category: "Industrial Operations // High-Speed Digital",
    description: "High-speed industrial digital platform engineered by Devfinity featuring sub-15ms RPC response times, real-time node telemetry, and type-safe systems.",
    tech: ["TypeScript", "React", "tRPC", "Tailwind CSS"],
    metrics: "< 15ms RPC Response // 100% Type-Safe Core",
    applicationCategory: "IndustrialApplication",
  },
  erp: {
    title: "Virat ShivShakti ERP",
    client: "Virat ShivShakti Enterprise Group",
    category: "Enterprise System // T3 Stack",
    description: "Full-stack ERP system engineered by Devfinity for multi-facility operations, inventory management, and automated workflows with Kinde RBAC and Drizzle ORM.",
    tech: ["T3 Stack", "Kinde Auth", "Next.js", "Drizzle ORM"],
    metrics: "94% Adoption Rate across 12 factories",
    applicationCategory: "BusinessApplication",
  },
  fintech: {
    title: "Real-Time Transaction Ledger",
    client: "Apex Financial Labs",
    category: "Financial Architecture",
    description: "Sub-50ms audit logging pipeline featuring immutable event streaming, zero-overhead synchronization, and cryptographic data verification by Devfinity.",
    tech: ["Next.js App Router", "Serverless Edge", "WebSockets", "Tailwind CSS"],
    metrics: "100% Audit Precision under heavy peak traffic",
    applicationCategory: "FinanceApplication",
  },
  cloud: {
    title: "Telemetry & Infrastructure Visualizer",
    client: "KubeCloud Technologies",
    category: "DevOps & Cloud",
    description: "Interactive distributed node visualizer with live topology mapping, continuous latency probing, and incident timeline replays engineered by Devfinity.",
    tech: ["React 19", "GSAP 3.15", "SVG Math", "TypeScript"],
    metrics: "< 120ms Global Roundtrip",
    applicationCategory: "DeveloperApplication",
  },
  pipeline: {
    title: "Automated Deployment Pipeline Terminal",
    client: "DevOps Global Networks",
    category: "Automation Core",
    description: "Continuous delivery console providing granular rollbacks, live compilation stream diagnostics, and automated verification checks engineered by Devfinity.",
    tech: ["Turbopack", "Radix UI", "Node.js", "Zod"],
    metrics: "Zero Downtime Deployments Guaranteed",
    applicationCategory: "DeveloperApplication",
  },
};

export async function generateStaticParams() {
  return Object.keys(projectMap).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projectMap[id] || {
    title: `Project ${id.toUpperCase()}`,
    description: "Bespoke architectural engineering case study by Devfinity.",
  };

  return {
    title: `${project.title} Architectural Case Study`,
    description: project.description,
    alternates: {
      canonical: `/projects/${id}`,
    },
    openGraph: {
      title: `${project.title} Architectural Case Study | Devfinity Studio`,
      description: project.description,
      url: `https://devfinity.net/projects/${id}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const projectId = resolvedParams.id;

  const project = projectMap[projectId] || {
    title: `Project ${projectId.toUpperCase()}`,
    client: "Enterprise Partner",
    category: "Bespoke System",
    description:
      "A cutting-edge solution designed to improve operational efficiency and deliver an exceptional user experience. Incorporates state-of-the-art technologies to ensure scalability, security, and performance.",
    tech: ["Next.js 16", "React 19", "TypeScript 5", "Tailwind CSS 4"],
    metrics: "Production Verified",
    applicationCategory: "SoftwareApplication",
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "TechArticle"],
    "name": project.title,
    "headline": `${project.title} — Architectural Case Study`,
    "description": project.description,
    "applicationCategory": project.applicationCategory,
    "operatingSystem": "Cloud / Web Browser",
    "softwareRequirements": project.tech.join(", "),
    "author": [
      {
        "@type": "Person",
        "name": "Heena",
        "jobTitle": "Lead Systems Architect"
      },
      {
        "@type": "Person",
        "name": "Devansh",
        "jobTitle": "Principal Full-Stack Engineer"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Devfinity Studio",
      "url": "https://devfinity.net"
    },
    "datePublished": "2026-09-15T00:00:00Z",
    "dateModified": "2026-10-18T00:00:00Z"
  };

  return (
    <article className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <nav aria-label="Breadcrumb navigation" className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase text-zinc-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-black/[0.03]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Production Deployments</span>
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <section aria-labelledby="case-study-title" className="lg:col-span-2 space-y-8">
          <header>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            <h1 id="case-study-title" className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Author Provenance & Freshness Signals */}
            <div className="mt-6 pt-4 border-t border-black/[0.06] flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-600">
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-blue-600" />
                <span>Architected by <strong className="text-zinc-900">Heena &amp; Devansh</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-zinc-500" />
                <span>Last Verified &amp; Updated: <strong className="text-zinc-900">October 2026</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Production Live</span>
              </div>
            </div>
          </header>

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
        </section>

        {/* Sidebar Details Card */}
        <aside aria-label="Project Architectural Specifications" className="space-y-6">
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
        </aside>
      </div>
    </article>
  );
}
