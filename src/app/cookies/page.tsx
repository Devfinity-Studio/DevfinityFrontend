import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { Cookie, CheckCircle2, Shield, Settings, Sliders } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Devfinity's transparent cookie policy, category classifications, telemetry opt-out guidance, and consent controls.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Cookie Policy | Devfinity Studio",
    description: "Devfinity's transparent cookie policy, category classifications, telemetry opt-out guidance, and consent controls.",
    url: "https://devfinity.net/cookies",
  },
};

export default function CookiesPage() {
  const toc = [
    { id: "what-are-cookies", label: "1. What Are Cookies" },
    { id: "categories", label: "2. Cookie Categories We Use" },
    { id: "table", label: "3. Detailed Cookie Inventory" },
    { id: "dnt", label: "4. Do-Not-Track & GPC Respect" },
    { id: "management", label: "5. Managing Your Preferences" },
  ];

  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Complete transparency regarding cookie classifications, telemetry usage, and granular privacy controls."
      lastUpdated="October 18, 2026"
      currentSlug="cookies"
      toc={toc}
    >
      <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 flex items-start space-x-3.5">
        <Cookie className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-sm leading-relaxed">
          <strong className="font-bold block text-amber-900 mb-0.5">Zero Cross-Site Tracking Guarantee</strong>
          Devfinity does not employ invasive cross-site advertising trackers or data-broker surveillance pixels. Only strictly necessary functional cookies and optional anonymous aggregated performance telemetry are utilized.
        </div>
      </div>

      <section id="what-are-cookies" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          1. What Are Cookies
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Cookies are compact text files stored on your device by your web browser when visiting websites. They allow web platforms to remember preferences (such as light theme states or cookie dismissals) and verify system health.
        </p>
      </section>

      <section id="categories" className="space-y-4 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          2. Cookie Categories We Use
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-black/[0.06]">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 inline-block mb-1">
              Strictly Necessary (Always Active)
            </span>
            <p className="text-zinc-600 text-xs md:text-sm mt-1 leading-relaxed">
              Essential for the core security, firewall integrity, and route navigation of our Next.js application. These cannot be disabled as the site cannot function properly without them.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-black/[0.06]">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200 inline-block mb-1">
              Analytics &amp; Performance (Opt-In Only)
            </span>
            <p className="text-zinc-600 text-xs md:text-sm mt-1 leading-relaxed">
              Provides aggregated, anonymized metrics on page response latency and scroll depth to help us optimize UI rendering speeds. Disabled by default unless you choose to accept them.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-black/[0.06]">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-bold border border-purple-200 inline-block mb-1">
              Marketing &amp; Targeting (Disabled / Opt-In Only)
            </span>
            <p className="text-zinc-600 text-xs md:text-sm mt-1 leading-relaxed">
              Used strictly for measuring the effectiveness of Devfinity announcements. We never use third-party behavioral advertising or selling mechanisms. Disabled by default.
            </p>
          </div>
        </div>
      </section>

      {/* Structured Cookie Inventory Table */}
      <section id="table" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2">
          3. Detailed Cookie Inventory
        </h2>
        
        <div className="overflow-x-auto rounded-2xl border border-black/[0.06]">
          <table className="w-full text-left border-collapse text-xs md:text-sm font-sans">
            <thead>
              <tr className="bg-zinc-50 border-b border-black/[0.06] font-mono text-xs uppercase text-zinc-600">
                <th className="p-3.5 font-bold">Cookie Key</th>
                <th className="p-3.5 font-bold">Category</th>
                <th className="p-3.5 font-bold">Purpose</th>
                <th className="p-3.5 font-bold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04] text-zinc-800">
              <tr className="hover:bg-blue-50/20">
                <td className="p-3.5 font-mono text-blue-600 font-bold">devfinity_cookie_consent</td>
                <td className="p-3.5"><span className="text-emerald-700 font-semibold">Necessary</span></td>
                <td className="p-3.5 text-zinc-600">Remembers your cookie banner preferences and opt-out choices.</td>
                <td className="p-3.5 font-mono text-zinc-500">180 Days</td>
              </tr>
              <tr className="hover:bg-blue-50/20">
                <td className="p-3.5 font-mono text-blue-600 font-bold">__Host-session</td>
                <td className="p-3.5"><span className="text-emerald-700 font-semibold">Necessary</span></td>
                <td className="p-3.5 text-zinc-600">Maintains cryptographic session security and CSRF protection.</td>
                <td className="p-3.5 font-mono text-zinc-500">Session</td>
              </tr>
              <tr className="hover:bg-blue-50/20">
                <td className="p-3.5 font-mono text-blue-600 font-bold">_df_analytics</td>
                <td className="p-3.5"><span className="text-blue-700 font-semibold">Analytics</span></td>
                <td className="p-3.5 text-zinc-600">Collects anonymous page load timing benchmarks (only if accepted).</td>
                <td className="p-3.5 font-mono text-zinc-500">30 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="dnt" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-600" />
          4. Do-Not-Track (DNT) &amp; Global Privacy Control (GPC)
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          Our website automatically inspects your browser&apos;s <code>navigator.doNotTrack</code> and Global Privacy Control (GPC) signals. If your browser broadcasts an opt-out preference signal, non-essential cookies and analytics are automatically disabled across your session without requiring manual configuration.
        </p>
      </section>

      <section id="management" className="space-y-3 pt-2">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight border-b border-black/[0.06] pb-2 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-zinc-800" />
          5. Managing Your Preferences
        </h2>
        <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
          You can adjust or revoke your cookie choices at any time. You can clear the stored consent cookie in your browser&apos;s Developer Tools or block all cookies directly within your browser settings (Chrome, Safari, Firefox, Edge).
        </p>
      </section>
    </LegalLayout>
  );
}
