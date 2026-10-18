import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { FileText, CheckCircle2, Clock, HelpCircle, ArrowRight } from "lucide-react";
import { defaultOpenGraphImages } from "@/data/openGraphDefaults";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Devfinity's transparent refund terms, milestone acceptance criteria, and sprint cancellation policies for digital engineering services.",
  alternates: {
    canonical: "/refund",
  },
  openGraph: {
    title: "Refund Policy | Devfinity Studio",
    description: "Devfinity's transparent refund terms, milestone acceptance criteria, and sprint cancellation policies for digital engineering services.",
    url: "https://devfinity.net/refund",
    type: "website",
    images: defaultOpenGraphImages,
  },
};

export default function RefundPage() {
  const toc = [
    { id: "principles", label: "1. Core Principles" },
    { id: "milestones", label: "2. Milestone-Based Billing & Acceptance" },
    { id: "consultations", label: "3. Technical Consultations & Onboarding" },
    { id: "cancellations", label: "4. Project Cancellations & Termination" },
    { id: "disputes", label: "5. Dispute Escalation Process" },
  ];

  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="Clear and predictable refund terms designed for milestone-driven software engineering and bespoke architecture engagements."
      lastUpdated="October 18, 2026"
      currentSlug="refund"
      toc={toc}
    >
      <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 flex items-start space-x-3.5">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="text-sm leading-relaxed">
          <strong className="font-bold block text-emerald-900 mb-0.5">Milestone Protection Model</strong>
          Our bespoke engineering services operate on transparent milestone gates. You only approve and fund project phases after technical criteria and UAT benchmarks are satisfied.
        </div>
      </div>

      <section id="principles" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          1. Core Principles
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Because Devfinity engineers custom, high-utility digital software tailored to proprietary business requirements, services represent dedicated engineering hours and bespoke intellectual output. We establish clear milestone deliverables prior to starting work to eliminate ambiguity.
        </p>
      </section>

      <section id="milestones" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          2. Milestone-Based Billing &amp; Acceptance
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Most client projects are structured into distinct phases (e.g., Phase 1: Architecture &amp; Schemas, Phase 2: Core Platform, Phase 3: QA &amp; Launch):
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-black/[0.06] text-sm">
            <strong className="text-zinc-900 font-bold block mb-1">Pre-Sprint Review Window:</strong>
            <p className="text-zinc-600 text-xs md:text-sm">
              Each milestone includes a <strong>7-calendar-day User Acceptance Testing (UAT) window</strong> upon deployment to staging. Clients review delivered code, API benchmarks, and UI responsiveness.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-black/[0.06] text-sm">
            <strong className="text-zinc-900 font-bold block mb-1">Non-Refundable Milestone Completion:</strong>
            <p className="text-zinc-600 text-xs md:text-sm">
              Once a milestone is reviewed, formally accepted in writing, and deployed to production, the corresponding fee for that completed phase is non-refundable.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-black/[0.06] text-sm">
            <strong className="text-zinc-900 font-bold block mb-1">Correction Guarantee:</strong>
            <p className="text-zinc-600 text-xs md:text-sm">
              If milestone deliverables fail to satisfy the written specifications during UAT, Devfinity rectifies regressions at zero extra cost before milestone sign-off.
            </p>
          </div>
        </div>
      </section>

      <section id="consultations" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          3. Technical Consultations &amp; Onboarding
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Initial discovery calls and architectural evaluations conducted prior to contract signing are complimentary. Paid in-depth architectural audits or technical spike sessions may be cancelled for a 100% full refund up to <strong>48 hours</strong> prior to the scheduled session.
        </p>
      </section>

      <section id="cancellations" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <Clock className="w-5 h-5 text-zinc-700" />
          4. Project Cancellations &amp; Termination
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Either party may terminate an active engineering engagement with 14 calendar days&apos; written notice. In the event of early termination:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-700 text-sm md:text-base">
          <li>The client pays strictly for hours worked or milestone progress achieved up to the termination effective date.</li>
          <li>Any pre-funded balances for future milestones that have not yet commenced will be refunded in full within 10 business days.</li>
          <li>All code and assets developed up to the date of settlement are transferred to the client.</li>
        </ul>
      </section>

      <section id="disputes" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          5. Dispute Escalation Process
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          If you have questions regarding a milestone charge or believe an error occurred, please contact our financial operations team at <a href="mailto:info@devfinity.net" className="text-blue-600 font-bold hover:underline">info@devfinity.net</a>. We work constructively to resolve concerns within 5 business days.
        </p>
      </section>
    </LegalLayout>
  );
}
