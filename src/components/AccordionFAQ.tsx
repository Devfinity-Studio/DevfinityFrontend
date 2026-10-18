"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function AccordionFAQ() {
  const faqs = [
    {
      q: "How long does a custom web platform or ERP architecture take from blueprint to deployment?",
      a: "A standard custom enterprise build typically spans 6 to 10 weeks. This includes detailed operational scoping, database relational schema design, interactive UI prototyping, and live traffic stress testing."
    },
    {
      q: "Can Devfinity handle legacy data migration into a new full-stack system?",
      a: "Yes. We engineer automated data translation pipelines that extract, scrub, and map legacy files into type-safe relational databases. This workflow ensures zero data loss and flawless continuity."
    },
    {
      q: "Who owns the final codebase, database instances, and intellectual property?",
      a: "Your organization retains 100% full ownership of all source code repositories, deployment scripts, database instances, and assets upon production handoff. No proprietary vendor lock-in."
    },
    {
      q: "What makes Devfinity's 'Light Mode Plus' and bespoke code outperform standard templates?",
      a: "Standard templates carry heavy client script overhead, dragging down Core Web Vitals and user adoption. We write clean Next.js server-rendered code with sub-150ms interaction latency, zero layout shifting, and tactile micro-interactions."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {faqs.map((faq, idx) => (
        <AccordionItem key={idx} question={faq.q} answer={faq.a} />
      ))}
    </div>
  );
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/80 shadow-xs transition-all duration-200">
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left hover:bg-black/[0.02] transition-colors focus:outline-none cursor-pointer"
      >
        <div className="flex items-center space-x-3 pr-6">
          <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <h3 className="text-zinc-900 font-extrabold text-base md:text-lg tracking-tight m-0">
            {question}
          </h3>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
          isOpen ? "bg-blue-600 text-white" : "bg-black/[0.04] text-zinc-600"
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pt-2 text-zinc-600 text-sm md:text-base leading-relaxed border-t border-black/[0.04] m-0">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
