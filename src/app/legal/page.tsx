import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { Building2, Mail, MapPin, Phone, ShieldCheck, UserCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Notice & Impressum | Devfinity Studio",
  description: "Official Devfinity business identity, registered address, executive leadership, tax details, and legal disclosures.",
};

export default function LegalNoticePage() {
  const toc = [
    { id: "business-identity", label: "1. Business Identity & Registration" },
    { id: "contact-details", label: "2. Official Contact Information" },
    { id: "leadership", label: "3. Executive Leadership" },
    { id: "tax-details", label: "4. Tax & Regulatory Information" },
    { id: "disclaimers", label: "5. Content Liability & External Links" },
  ];

  return (
    <LegalLayout
      title="Legal Notice / Impressum"
      subtitle="Official corporate transparency, registered business entity details, executive leadership, and tax disclosures."
      lastUpdated="October 18, 2026"
      currentSlug="legal"
      toc={toc}
    >
      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 flex items-start space-x-3.5">
        <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="text-sm leading-relaxed">
          <strong className="font-bold block text-zinc-900 mb-0.5">Corporate Transparency Declaration</strong>
          Information provided in accordance with statutory business disclosure requirements under Indian corporate laws and international digital commerce standards.
        </div>
      </div>

      <section id="business-identity" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          1. Business Identity &amp; Registration
        </h2>
        <div className="p-5 rounded-2xl bg-white border border-black/[0.06] space-y-3 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase block">Trade Name</span>
              <strong className="text-zinc-900 font-bold text-base">Devfinity Studio</strong>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase block">Legal Entity Type</span>
              <span className="text-zinc-800 font-medium">Bespoke Software Engineering &amp; Architecture Studio</span>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase block">Registered Operational Hub</span>
              <span className="text-zinc-800 font-medium flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                Vadodara, Gujarat, India (IN)
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase block">Primary Domain</span>
              <span className="font-mono text-blue-600 font-semibold">https://devfinity.net</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-details" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-600" />
          2. Official Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-white border border-black/[0.06] space-y-1">
            <span className="text-xs font-mono text-zinc-500 uppercase block">General &amp; Technical Inquiries</span>
            <a href="mailto:info@devfinity.net" className="font-bold text-blue-600 hover:underline block text-base">
              info@devfinity.net
            </a>
            <span className="text-xs text-zinc-500">Average response latency: &lt; 24 hours</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-black/[0.06] space-y-1">
            <span className="text-xs font-mono text-zinc-500 uppercase block">Data Protection Officer (DPO)</span>
            <a href="mailto:info@devfinity.net?subject=Privacy%20Inquiry" className="font-bold text-zinc-800 hover:text-blue-600 block text-base">
              info@devfinity.net
            </a>
            <span className="text-xs text-zinc-500">Dedicated GDPR &amp; privacy compliance desk</span>
          </div>
        </div>
      </section>

      <section id="leadership" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-zinc-700" />
          3. Executive Leadership &amp; Representation
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Devfinity Studio is founded and directed by principal software architects:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-white border border-black/[0.06]">
            <strong className="text-zinc-900 font-bold block text-base">Heena</strong>
            <span className="text-xs font-mono text-blue-600">Co-Founder &amp; Lead Systems Architect</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-black/[0.06]">
            <strong className="text-zinc-900 font-bold block text-base">Devansh</strong>
            <span className="text-xs font-mono text-blue-600">Co-Founder &amp; Engineering Director</span>
          </div>
        </div>
      </section>

      <section id="tax-details" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <FileText className="w-5 h-5 text-emerald-600" />
          4. Tax &amp; Regulatory Information
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          All client invoices and formal statements of work provide full statutory Goods and Services Tax (GST) identification numbers and cross-border commercial invoicing codes. Commercial tax registration certificates are appended to formal client vendor onboarding packets upon SOW initialization.
        </p>
      </section>

      <section id="disclaimers" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          5. Content Liability &amp; External Links
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          As service providers, we are responsible for our own content on this website in accordance with general statutory legislation. We are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Our site may contain links to external third-party websites (e.g., GitHub, X, LinkedIn); we exercise no influence over the dynamic content of external sites and assume no liability for third-party practices.
        </p>
      </section>
    </LegalLayout>
  );
}
