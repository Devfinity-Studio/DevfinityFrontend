"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  FileText,
  Scale,
  Cookie,
  Building2,
  Printer,
  Mail,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  currentSlug: "privacy" | "terms" | "refund" | "cookies" | "legal";
  toc?: TocItem[];
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  currentSlug,
  toc = [],
  children,
}: LegalLayoutProps) {
  const pathname = usePathname();

  const legalNav = [
    {
      name: "Privacy Policy",
      href: "/privacy",
      slug: "privacy",
      icon: Shield,
      summary: "Data protection & privacy rights",
    },
    {
      name: "Terms of Service",
      href: "/terms",
      slug: "terms",
      icon: Scale,
      summary: "Service agreements & liability",
    },
    {
      name: "Refund Policy",
      href: "/refund",
      slug: "refund",
      icon: FileText,
      summary: "Digital delivery & milestones",
    },
    {
      name: "Cookie Policy",
      href: "/cookies",
      slug: "cookies",
      icon: Cookie,
      summary: "Cookie scopes & opt-out",
    },
    {
      name: "Legal Notice / Impressum",
      href: "/legal",
      slug: "legal",
      icon: Building2,
      summary: "Company registration & details",
    },
  ];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="w-full min-h-screen py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Breadcrumb Header */}
        <div className="mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-mono text-zinc-500 mb-3">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-500">Compliance &amp; Legal</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-600 font-bold">{title}</span>
          </nav>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase mb-3 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ GOVERNANCE &amp; ETHICAL COMPLIANCE ]</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900">
            {title}
          </h1>
          <p className="text-base md:text-lg text-zinc-600 mt-2 max-w-3xl leading-relaxed font-normal">
            {subtitle}
          </p>
          <div className="mt-3 text-xs font-mono text-zinc-500">
            Last Updated &amp; Effective: <strong className="text-zinc-800">{lastUpdated}</strong>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Sticky Sidebar Navigation (4 cols) */}
          <aside className="lg:col-span-4 sticky top-28 space-y-6">
            
            {/* Legal Documents Matrix */}
            <div className="glass-card rounded-3xl p-6 border border-white/80 shadow-lg space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 pb-2 border-b border-black/[0.06]">
                Compliance Documents
              </h2>
              <nav aria-label="Legal Documents Navigation" className="space-y-1.5">
                {legalNav.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || currentSlug === item.slug;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                        isActive
                          ? "bg-blue-50/90 text-blue-700 font-bold border border-blue-200/70 shadow-xs"
                          : "text-zinc-700 hover:text-zinc-900 hover:bg-black/[0.03] border border-transparent"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                            isActive
                              ? "bg-blue-600 text-white shadow-xs"
                              : "bg-black/[0.04] text-zinc-600"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{item.name}</div>
                          <div className="text-[11px] font-mono text-zinc-500 font-normal">
                            {item.summary}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-zinc-400"}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Document Table of Contents (if provided) */}
            {toc.length > 0 && (
              <div className="glass-card rounded-3xl p-6 border border-white/80 shadow-lg space-y-3 hidden lg:block">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 pb-2 border-b border-black/[0.06]">
                  On This Page
                </h3>
                <nav aria-label="Table of contents" className="space-y-1.5">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs font-medium text-zinc-600 hover:text-blue-600 hover:translate-x-1 transition-all py-1"
                    >
                      • {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Quick Action Utilities */}
            <div className="glass-card rounded-3xl p-5 border border-white/80 shadow-sm flex items-center justify-between gap-3 text-xs font-mono">
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center space-x-2 text-zinc-700 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-black/[0.03] cursor-pointer"
                aria-label="Print this legal document"
              >
                <Printer className="w-4 h-4" />
                <span>Print Document</span>
              </button>
              <a
                href="mailto:info@devfinity.net?subject=Legal%20Compliance%20Inquiry"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-bold p-2 rounded-xl hover:bg-blue-50 transition-colors"
                aria-label="Email legal team"
              >
                <Mail className="w-4 h-4" />
                <span>Legal Support</span>
              </a>
            </div>
          </aside>

          {/* Main Legal Document Article (8 cols) */}
          <article
            id="legal-content"
            className="lg:col-span-8 glass-panel rounded-3xl p-8 md:p-14 border border-white/80 shadow-xl space-y-8 text-zinc-800 leading-relaxed font-sans"
          >
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}
