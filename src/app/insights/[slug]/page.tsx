import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, UserCheck, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { insightsArticles } from "@/data/insightsData";

export async function generateStaticParams() {
  return insightsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const metaDesc = article.metaDescription || article.summary;

  return {
    title: `${article.title}`,
    description: metaDesc,
    alternates: {
      canonical: `/insights/${slug}`,
    },
    openGraph: {
      title: `${article.title} | Devfinity Studio`,
      description: metaDesc,
      url: `https://devfinity.net/insights/${slug}`,
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.lastUpdated,
      authors: ["Devansh", "Heena"],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.summary,
    "articleSection": article.category,
    "datePublished": "2026-10-10T00:00:00Z",
    "dateModified": "2026-10-18T00:00:00Z",
    "author": article.authors.map((a) => ({
      "@type": "Person",
      "name": a.name,
      "jobTitle": a.role,
    })),
    "publisher": {
      "@type": "Organization",
      "name": "Devfinity Studio",
      "url": "https://devfinity.net",
      "logo": "https://devfinity.net/devfinity.png",
    },
  };

  return (
    <article className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb navigation" className="mb-8">
        <Link
          href="/insights"
          className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase text-zinc-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-black/[0.03]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Architectural Insights</span>
        </Link>
      </nav>

      {/* Article Header */}
      <header className="space-y-6 pb-8 border-b border-black/[0.06]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
            {article.category}
          </span>
          <span className="text-xs font-mono text-zinc-600 flex items-center gap-1 font-semibold">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight">
          {article.title}
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-normal">
          {article.subtitle}
        </p>

        {/* Explicit Human Provenance & Anti-AI Accreditation */}
        <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-600">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              Authored by{" "}
              <strong className="text-zinc-900">
                {article.authors.map((a) => `${a.name} (${a.role})`).join(" & ")}
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-emerald-700 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% Devfinity Human Architecture</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-600">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
            <span>Published: {article.publishDate}</span>
          </div>
          <span>•</span>
          <div>Last Verified: {article.lastUpdated}</div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="py-10 space-y-12">
        {article.sections.map((section, idx) => (
          <section key={section.heading} aria-labelledby={`section-heading-${idx}`} className="space-y-4">
            <h2
              id={`section-heading-${idx}`}
              className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight"
            >
              {section.heading}
            </h2>

            <p className="text-base md:text-lg text-zinc-700 leading-relaxed font-normal">
              {section.content}
            </p>

            {section.highlights && (
              <ul className="space-y-2.5 my-4 list-none p-0">
                {section.highlights.map((h) => (
                  <li key={h} className="flex items-start space-x-3 text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.codeSnippet && (
              <div className="my-6 rounded-2xl bg-zinc-950 p-5 text-zinc-100 font-mono text-xs overflow-x-auto shadow-xl border border-zinc-800">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-[11px] text-zinc-400">
                  <span>{section.codeSnippet.caption || "TypeScript Implementation"}</span>
                  <span className="uppercase text-blue-400 font-bold">{section.codeSnippet.language}</span>
                </div>
                <pre className="m-0 leading-relaxed font-mono">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Article Footer & Call to Action */}
      <footer className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono font-medium border border-zinc-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link
          href="/connect"
          className="px-6 py-2.5 rounded-full font-mono text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
        >
          Discuss System Deployment 🚀
        </Link>
      </footer>
    </article>
  );
}
