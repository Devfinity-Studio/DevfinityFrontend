import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { ShieldCheck, Mail, AlertTriangle, UserCheck, Trash2, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Devfinity Studio",
  description: "Devfinity's data protection commitment, privacy governance, data deletion procedures, and GDPR/CCPA compliance.",
};

export default function PrivacyPage() {
  const toc = [
    { id: "overview", label: "1. Overview & Data Controller" },
    { id: "data-collection", label: "2. Information We Collect" },
    { id: "data-usage", label: "3. How We Process Data" },
    { id: "data-deletion", label: "4. Data Deletion Requests" },
    { id: "minor-consent", label: "5. Age Consent for Minors" },
    { id: "user-rights", label: "6. Your International Privacy Rights" },
    { id: "security", label: "7. Security & Retention" },
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Our transparent commitments to data minimization, privacy rights, and regulatory compliance under international governance."
      lastUpdated="October 18, 2026"
      currentSlug="privacy"
      toc={toc}
    >
      {/* Callout Notice */}
      <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-blue-950 flex items-start space-x-3.5">
        <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="text-sm leading-relaxed">
          <strong className="font-bold block text-blue-900 mb-0.5">Privacy First Guarantee</strong>
          Devfinity does not sell, broker, or monetize your personal details. We collect only what is strictly required to evaluate technical briefs, engineer software architectures, and fulfill client agreements.
        </div>
      </div>

      <section id="overview" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          1. Overview &amp; Data Controller
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          This Privacy Policy details how <strong>Devfinity Studio</strong> (&quot;Devfinity&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, processes, and protects your information when you visit our website (<code>devfinity.net</code>), interact with our intake terminals, or contract our technical engineering services.
        </p>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Devfinity acts as the Data Controller under the General Data Protection Regulation (GDPR) and applicable data privacy statutes for personal data collected through this website.
        </p>
      </section>

      <section id="data-collection" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          2. Information We Collect
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          In adherence to data minimization principles, we only collect the minimum information necessary to communicate and deliver technical services:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-700 text-sm md:text-base">
          <li>
            <strong>Voluntarily Submitted Contact Details:</strong> When you submit our project intake or contact form, we collect your name, work email address, operational project scope, and project briefing.
          </li>
          <li>
            <strong>Strictly Necessary Technical Telemetry:</strong> Essential session cookies, timestamp, and basic user-agent strings required to maintain server stability, security firewalls, and route rendering.
          </li>
          <li>
            <strong>Opt-in Analytics (Conditional):</strong> Anonymous usage telemetry is collected <em>only</em> if you provide explicit opt-in consent via our Cookie Preferences terminal. We respect browser Do-Not-Track (DNT) flags automatically.
          </li>
        </ul>
      </section>

      <section id="data-usage" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          3. How We Process Data
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          We use collected details solely for legitimate technical business purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-700 text-sm md:text-base">
          <li>To review your architectural blueprint and provide tailored engineering consultation.</li>
          <li>To establish legal statements of work (SOWs), contracts, and milestone schedules.</li>
          <li>To secure infrastructure against malicious traffic, automated scrapers, and denial-of-service attempts.</li>
        </ul>
      </section>

      {/* Dedicated Data Deletion Requests Section */}
      <section id="data-deletion" className="space-y-4 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <Trash2 className="w-5 h-5 text-rose-600" />
          4. Data Deletion Requests
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          You hold the unconditional right to request the complete deletion and erasure of your personal data from Devfinity&apos;s records at any time (&quot;Right to be Forgotten&quot;).
        </p>

        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
          <h3 className="font-bold text-zinc-900 text-base">How to Submit a Data Erasure Request:</h3>
          <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
            Send an email from the address associated with your inquiry to our privacy team. We verify and permanently purge all stored communications, form entries, and associated logs within <strong>7 business days</strong>.
          </p>
          <div className="pt-2">
            <a
              href="mailto:info@devfinity.net?subject=Data%20Deletion%20Request&body=Please%20permanently%20delete%20all%20personal%20records%20and%20communications%20associated%20with%20my%20email%20address."
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs font-bold transition-all shadow-sm"
              aria-label="Submit Data Deletion Request via email"
            >
              <Trash2 className="w-4 h-4" />
              <span>Submit Data Deletion Request (info@devfinity.net)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dedicated Age Consent for Minors Clause */}
      <section id="minor-consent" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-blue-600" />
          5. Age Consent for Minors
        </h2>
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 flex items-start space-x-3.5">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <strong className="font-bold block text-amber-900 mb-0.5">Eligibility Restriction (18+ Years)</strong>
            Devfinity&apos;s platform and engineering consultation services are tailored strictly for commercial business entities and individuals aged <strong>18 years or older</strong>. We do not knowingly solicit, collect, or process personal data from children or individuals under the age of majority.
          </div>
        </div>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          If we discover that personal information has been submitted by an individual under the age of 18 without verified parental or legal guardian consent, we take immediate action to purge the records from our systems without delay.
        </p>
      </section>

      <section id="user-rights" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          6. Your International Privacy Rights
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Depending on your jurisdiction (GDPR, CCPA/CPRA, Indian DPDP Act), you possess the following enforceable statutory rights:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] text-xs space-y-1">
            <strong className="text-zinc-900 block font-bold">Right to Access:</strong>
            <span className="text-zinc-600">Obtain confirmation of data collected and receive an export copy.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] text-xs space-y-1">
            <strong className="text-zinc-900 block font-bold">Right to Rectification:</strong>
            <span className="text-zinc-600">Correct inaccurate or outdated business records.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] text-xs space-y-1">
            <strong className="text-zinc-900 block font-bold">Right to Restrict Processing:</strong>
            <span className="text-zinc-600">Limit how your technical specifications are processed.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] text-xs space-y-1">
            <strong className="text-zinc-900 block font-bold">Right to Object:</strong>
            <span className="text-zinc-600">Withdraw consent for non-essential communications at any time.</span>
          </div>
        </div>
      </section>

      <section id="security" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <Lock className="w-5 h-5 text-emerald-600" />
          7. Security &amp; Retention
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          All client submissions are encrypted in transit via TLS 1.3 cryptographic protocols. Data is stored on secure, role-restricted infrastructure protected by multi-factor authentication. We retain prospective client briefings for up to 12 months after the conclusion of technical evaluations, after which they are securely scrubbed unless an active commercial service agreement is executed.
        </p>
        <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Devfinity Data Protection Officer</span>
          <a href="mailto:info@devfinity.net" className="text-blue-600 font-bold hover:underline">
            info@devfinity.net
          </a>
        </div>
      </section>
    </LegalLayout>
  );
}
