"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Clock, UserCheck, BookOpen, ShieldCheck } from "lucide-react";
import { insightsArticles } from "@/data/insightsData";
import { TrustBanner } from "@/components/TrustBanner";

export default function InsightsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Enterprise Architecture", "Database Engineering", "Aerospace & High-Reliability Systems"];

  const filteredArticles =
    selectedCategory === "All"
      ? insightsArticles
      : insightsArticles.filter((a) => a.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section
        aria-labelledby="insights-heading"
        className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 text-center overflow-hidden"
      >
        <div className="container mx-auto max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ 05 / ARCHITECTURAL BLUEPRINTS &amp; INSIGHTS ]</span>
          </div>
          <h1 id="insights-heading" className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 uppercase">
            SYSTEMS &amp; <span className="text-gradient-future">ARCHITECTURES</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Technical deep-dives written directly by Devfinity engineering leadership. Real-world solutions covering multi-facility enterprise ERP migrations, sub-40ms relational schemas, and aerospace telemetry protocols.
          </p>
        </div>
      </section>

      {/* Verified Authority & Trust Banner */}
      <TrustBanner />

      {/* Main Insights Grid */}
      <section aria-labelledby="articles-heading" className="w-full py-16 px-4 md:px-8 relative z-10">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white/80 hover:bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <h2 id="articles-heading" className="sr-only">
            Published Technical Architecture Articles
          </h2>

          {/* Articles Feed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="glass-card rounded-3xl p-7 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200/60">
                      {article.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-600 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-zinc-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[11px] font-mono font-medium border border-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Devansh &amp; Heena</span>
                  </div>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-blue-600 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
