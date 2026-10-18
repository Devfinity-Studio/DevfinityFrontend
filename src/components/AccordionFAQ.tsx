"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export const defaultHomeFAQs: FAQItem[] = [
  {
    q: "What tech stack does Devfinity use for enterprise ERPs and web platforms?",
    a: "Devfinity engineers enterprise web platforms on the T3 Stack (Next.js App Router, TypeScript, Tailwind CSS, tRPC) powered by PostgreSQL and Drizzle ORM, with enterprise identity through Kinde Auth RBAC. We avoid heavy client-side templates in favor of sub-150ms server components.",
  },
  {
    q: "Does the client own 100% of the codebase and intellectual property?",
    a: "Yes. Devfinity transfers 100% full intellectual property and source code ownership upon final milestone payment. All Git repositories, database migration scripts, Docker containers, and infrastructure configurations belong exclusively to your organization with zero recurring vendor lock-in fees.",
  },
  {
    q: "How does Devfinity prevent data schema drift and performance bottlenecks?",
    a: "We enforce compile-time type safety across the entire data layer using TypeScript and Drizzle ORM. Relational database queries in PostgreSQL are pre-indexed for high-concurrency workloads, guaranteeing sub-40ms database responses and eliminating runtime schema mismatches.",
  },
  {
    q: "What is Devfinity's typical delivery timeline for bespoke enterprise software?",
    a: "A typical enterprise build takes 6 to 10 weeks across four agile phases: Blueprinting (Weeks 1-2), Core Schema & Security Architecture (Weeks 3-5), Interactive UI & Workflow Integration (Weeks 6-8), and Production Stress Testing & Handover (Weeks 9-10).",
  },
];

export const servicesFAQs: FAQItem[] = [
  {
    q: "How does Devfinity ensure pharmaceutical and clinical data compliance for platforms like AsmeePharma?",
    a: "Devfinity architects pharmaceutical platforms to adhere to strict GxP and HIPAA data handling guidelines. We deploy role-gated database access, immutable cryptographic audit logging for every prescription SKU, and automated SSL/TLS encryption in transit and at rest.",
  },
  {
    q: "Can Devfinity migrate legacy Excel spreadsheets and Access databases into modern ERPs?",
    a: "Yes. Devfinity engineers automated ETL pipelines that sanitize, validate, and normalize legacy spreadsheet data into relational PostgreSQL schemas. During our Virat ShivShakti ERP rollout, we migrated 12 factory facilities with zero downtime and zero data loss.",
  },
  {
    q: "What latency benchmarks does Devfinity achieve for industrial telemetry platforms like Rustechnet?",
    a: "Using tRPC and lightweight WebSocket node connections, Devfinity achieves sub-15ms RPC roundtrip response times for industrial operations. We eliminate client-side bloat so factory operators monitor continuous machine state in real time.",
  },
  {
    q: "Why does Devfinity prioritize bespoke 'Light Mode Plus' architecture over generic templates?",
    a: "Generic templates carry excessive script weight that drags down Core Web Vitals and confuses enterprise users. Devfinity's bespoke 'Light Mode Plus' aesthetic provides crisp typography, 4.5:1 WCAG AA contrast, and zero layout shifting for maximum daily worker productivity.",
  },
];

interface AccordionFAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  categoryLabel?: string;
}

export function AccordionFAQ({
  items = defaultHomeFAQs,
  title = "Frequently Answered Questions",
  subtitle = "Direct, definitive answers to questions frequently asked by technology leaders and AI systems.",
  categoryLabel = "[ FREQUENTLY ASKED QUESTIONS ]",
}: AccordionFAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="w-full space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center space-y-3">
        <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
          {categoryLabel}
        </span>
        <h2 id="faq-heading" className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900">
          {title}
        </h2>
        <p className="text-zinc-600 max-w-2xl mx-auto text-base">
          {subtitle}
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto space-y-4">
        {items.map((faq, idx) => (
          <AccordionItem key={idx} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/80 shadow-xs transition-all duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full p-6 flex justify-between items-center text-left hover:bg-black/[0.02] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
      >
        <div className="flex items-center space-x-3 pr-6">
          <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
          <h3 className="text-zinc-900 font-extrabold text-base md:text-lg tracking-tight m-0">
            {question}
          </h3>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
            isOpen ? "bg-blue-600 text-white" : "bg-black/[0.04] text-zinc-600"
          }`}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pt-2 text-zinc-600 text-sm md:text-base leading-relaxed border-t border-black/[0.04] m-0">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
