import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { Scale, CheckCircle2, ShieldAlert, Award, FileCode2 } from "lucide-react";
import { defaultOpenGraphImages } from "@/data/openGraphDefaults";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Devfinity's terms of service, bespoke engineering scope, code ownership transfer guarantees, and liability limitations.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Devfinity Studio",
    description: "Devfinity's terms of service, bespoke engineering scope, code ownership transfer guarantees, and liability limitations.",
    url: "https://devfinity.net/terms",
    type: "website",
    images: defaultOpenGraphImages,
  },
};

export default function TermsPage() {
  const toc = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "services", label: "2. Engineering Services Scope" },
    { id: "ip-ownership", label: "3. Intellectual Property & Ownership" },
    { id: "payments", label: "4. Milestone Commitments & Payment" },
    { id: "warranties", label: "5. Disclaimers & Warranties" },
    { id: "liability", label: "6. Limitation of Liability" },
    { id: "jurisdiction", label: "7. Governing Law & Jurisdiction" },
  ];

  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Standard operational terms governing software engineering engagements, architectural consultations, and intellectual property transfers."
      lastUpdated="October 18, 2026"
      currentSlug="terms"
      toc={toc}
    >
      <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-indigo-950 flex items-start space-x-3.5">
        <Award className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div className="text-sm leading-relaxed">
          <strong className="font-bold block text-indigo-900 mb-0.5">100% Codebase Ownership Transfer</strong>
          Devfinity does not lock clients into proprietary vendor ecosystems. Upon final settlement of project milestones, complete ownership of custom repository source code, relational schemas, and deployment assets transfers unconditionally to your organization.
        </div>
      </div>

      <section id="acceptance" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          1. Acceptance of Terms
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          By accessing Devfinity Studio&apos;s website (<code>devfinity.net</code>), executing a project blueprint, or engaging our engineering team, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you are entering into this agreement on behalf of a corporate entity, you represent that you hold valid authority to bind that entity.
        </p>
      </section>

      <section id="services" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          2. Engineering Services Scope
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Devfinity provides high-performance custom web development, full-stack architectural engineering, database schema optimization (PostgreSQL, Drizzle ORM, TypeORM), role-based authentication setups (Kinde Auth, Clerk, Auth0), and performance tuning.
        </p>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Specific project deliverables, milestones, tech-stack matrices, and delivery schedules are defined in formal written Statements of Work (SOW) or architectural proposals executed between Devfinity and the client.
        </p>
      </section>

      {/* Code Ownership Guarantee */}
      <section id="ip-ownership" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <FileCode2 className="w-5 h-5 text-blue-600" />
          3. Intellectual Property &amp; Codebase Ownership
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          We respect our clients&apos; proprietary operational data and competitive edge:
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-black/[0.06] text-sm flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-zinc-900 font-bold block">Custom Client Deliverables:</strong>
              <span className="text-zinc-600 text-xs md:text-sm">Upon receipt of final milestone payments, all bespoke code, custom database schemas, API routes, and proprietary business workflows developed for you become your sole intellectual property.</span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-black/[0.06] text-sm flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-zinc-900 font-bold block">Open-Source &amp; Third-Party Libraries:</strong>
              <span className="text-zinc-600 text-xs md:text-sm">Underlying open-source components (e.g. Next.js, React, Tailwind CSS, Lucide) remain governed by their respective permissive licenses (e.g., MIT, Apache 2.0).</span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-black/[0.06] text-sm flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-zinc-900 font-bold block">Public Showcase Rights:</strong>
              <span className="text-zinc-600 text-xs md:text-sm">Unless an explicit non-disclosure agreement (NDA) specifies otherwise, Devfinity retains the right to display high-level visual summaries and performance benchmarks in our professional portfolio.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="payments" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          4. Milestone Commitments &amp; Payment
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Engineering engagements operate on predefined sprint milestones. Invoices are payable within 14 calendar days of issuance unless customized in the project SOW. Work pauses if invoices remain delinquent past the agreed payment window.
        </p>
      </section>

      <section id="warranties" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          5. Disclaimers &amp; Warranties
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Devfinity warrants that custom software will perform substantially in accordance with agreed technical specifications for a <strong>30-day warranty window</strong> following milestone deployment. During this period, functional regressions and bugs attributable to our codebase are rectified at zero additional cost.
        </p>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Except as expressly set forth, our website and exploratory architecture tools are provided &quot;AS IS&quot; without warranty of any kind regarding third-party hosting uptime, external API downtime, or client network failures.
        </p>
      </section>

      <section id="liability" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-600" />
          6. Limitation of Liability
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, punitive, or consequential damages (including loss of business profits or data corruption) arising out of or related to this agreement. Devfinity&apos;s aggregate liability under any project shall not exceed the total fees paid by the client under the specific Statement of Work giving rise to the claim.
        </p>
      </section>

      <section id="jurisdiction" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <Scale className="w-5 h-5 text-zinc-800" />
          7. Governing Law &amp; Jurisdiction
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          These Terms of Service and any contractual disputes arising hereunder shall be governed by and construed in accordance with the laws of <strong>India</strong>. The courts located in <strong>Vadodara, Gujarat, India</strong> shall possess exclusive jurisdiction over any legal proceedings arising from these terms.
        </p>
      </section>
    </LegalLayout>
  );
}
