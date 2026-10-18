# Phase 7: Technical SEO & Generative Engine Optimization (AIO/GEO) Architecture — Context

**Date:** 2026-10-18  
**Phase:** 7  
**Status:** Planning  

---

## 1. Executive Summary & Objective

Upgrade Devfinity's Next.js web application into an authority platform optimized for both traditional Search Engine Optimization (Google Search, Bing) and Generative Engine Optimization / AI Optimization (ChatGPT, Perplexity, Google AI Overviews, Claude). 

Because Devfinity runs advertising campaigns, a technically flawless, lightning-fast website with crystal-clear semantic extraction structures directly improves Google Ads Quality Score, which lowers Cost Per Click (CPC) and dramatically increases conversion velocity.

---

## 2. Specific Requirements & Architectural Scope

### 2.1 Semantic HTML5 & Technical SEO Foundation
- **Semantic HTML5 Tags**: Replace generic `<div>` wrappers across layout wrappers and core sections with semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`. AI answer engines use these landmarks to discern content importance and hierarchy.
- **Next.js Metadata API**: Implement comprehensive, dynamic metadata across all routes (`/`, `/services`, `/work`, `/contact`, `/connect`, `/projects/[id]`, `/privacy`, `/terms`, `/refund`, `/cookies`, `/legal`). Include dynamic titles, meta descriptions, canonical URLs (`alternates.canonical`), OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:type`), and Twitter Cards.
- **Dynamic Crawl Directives**: Generate `sitemap.ts` and `robots.ts` in `src/app/` following Next.js App Router conventions with explicit crawl indexing rules.
- **Core Web Vitals Optimization**: Use Next.js `<Image>` for WebP/AVIF compression, explicit aspect ratios to eliminate Cumulative Layout Shift (CLS), and `priority` on above-the-fold assets to maximize Largest Contentful Paint (LCP).

### 2.2 AIO (Artificial Intelligence Optimization) Content Structure
AI answer engines index for direct extractability rather than raw keyword frequency:
- **Answer-First Format**: Place a concise 40-60 word definitive, fluff-free direct answer or summary immediately below every major `<h2>` heading on the Services and Work pages.
- **Extraction UI**: Structure complex details into bulleted lists for capabilities, numbered lists for step-by-step processes, and Markdown-style tabular cards for architectural comparisons.
- **Conversational FAQ Component**: Deploy sleek, accessible accordion FAQs at the bottom of the Home (`/`) and Services (`/services`) pages targeting conversational queries clients prompt AI with (e.g. *"What tech stack does Devfinity use for enterprise ERPs?"*, *"How does Devfinity ensure HIPAA and pharmaceutical compliance?"*).

### 2.3 Advanced JSON-LD Schema Markup
Inject dynamic `<script type="application/ld+json">` structured data blocks into `<head>`:
- **`Organization` / `ProfessionalService` Schema**: Entity identity, founders (Heena & Devansh), logo URL, social links, contact info, address (Vadodara, Gujarat, IN), and `knowsAbout` topics.
- **`FAQPage` Schema**: Wrap all FAQ components so Google and AI search engines can parse exact question-and-answer pairs.
- **`SoftwareApplication` / `CreativeWork` Schema**: Add structured schema to `/work` and `/projects/[id]` case studies (AsmeePharma, Virat ShivShakti ERP, Rustechnet), detailing application category, operating system, and tech stack.

### 2.4 Trust & Authority Signals (AI Citation Readiness)
- **Author & Provenance Metadata**: Visible author attributions ("Architected by Heena & Devansh"), publication dates, and "Last Updated" timestamps on case studies.
- **Landing Page Trust Banner**: High-visibility trust banner near the top of key pages highlighting verifiable metrics ("91+ Projects Completed", "99.98% Regulatory Uptime", "< 15ms RPC Response") and explicit verified tech stack mentions (PostgreSQL, Kinde Auth, tRPC, Drizzle ORM).

---

## 3. Success Metrics
1. `pnpm exec tsc --noEmit` exits with 0 errors.
2. `pnpm build` statically generates all routes including dynamic `sitemap.xml` and `robots.txt`.
3. Valid JSON-LD structured schemas parse cleanly without syntax errors on Schema.org validator.
4. Semantic HTML5 landmarks present on all pages.
