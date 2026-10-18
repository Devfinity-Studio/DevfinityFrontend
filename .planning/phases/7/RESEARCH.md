# Phase 7: Technical SEO & Generative Engine Optimization (AIO/GEO) — Research

**Date:** 2026-10-18  
**Phase:** 7  

---

## 1. Generative Engine Optimization (GEO) & AI Answer Engine Dynamics

### 1.1 How AI Search Engines (Perplexity, ChatGPT Search, AI Overviews) Ingest Data
1. **DOM Tree Traversal & Landmark Parsing**: AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) prioritize text encapsulated in semantic landmarks (`<main>`, `<article>`, `<section>`) over unsemantic generic `<div>` nests.
2. **Answer-First (BLUF - Bottom Line Up Front)**:
   - AI search algorithms extract 40-60 word summaries directly following question-like or categorical `<h2>` headings.
   - Fluff and marketing filler decrease citation confidence scores.
   - Definitive assertions backed by metrics (e.g., *"Devfinity builds custom enterprise ERPs on the T3 Stack with sub-40ms database queries..."*) achieve top citation ranking.
3. **Structured Data Density**:
   - Tabular comparisons (`<table>`), numbered execution steps (`<ol>`), and feature bullet points (`<ul>`) provide structured snippets that Large Language Models parse into citation matrices.

---

## 2. Next.js App Router Metadata Architecture

### 2.1 Centralized Metadata Configuration
In Next.js App Router, using `metadataBase` in root `layout.tsx` guarantees that all relative OpenGraph image and canonical paths resolve into absolute URLs:
```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://devfinity.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Devfinity Studio | Creative Web Development & Digital Experiences",
    description: "Ultra-modern web development studio engineering interactive digital experiences, type-safe full-stack platforms, and bespoke software architectures.",
    url: "https://devfinity.net",
    siteName: "Devfinity Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devfinity Studio",
    description: "Type-safe full-stack platforms and bespoke software architectures.",
    creator: "@devfinity",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
```

### 2.2 Dynamic Route Metadata (`generateMetadata`)
For `/projects/[id]`, using `generateMetadata` produces unique titles, descriptions, and OpenGraph tags per case study:
```ts
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  return {
    title: `${project.title} Case Study | Devfinity Studio`,
    description: project.description,
    alternates: { canonical: `/projects/${id}` },
    openGraph: {
      title: `${project.title} — Architectural Case Study`,
      description: project.description,
      type: "article",
    },
  };
}
```

---

## 3. Dynamic Sitemap & Robots Configuration

Next.js provides native `sitemap.ts` and `robots.ts` in `src/app/`:
- **`src/app/sitemap.ts`**: Enumerates static routes (`/`, `/services`, `/work`, `/contact`, `/privacy`, `/terms`, `/refund`, `/cookies`, `/legal`) and dynamic case study routes (`/projects/asmee-pharma`, `/projects/virat-shivshakti-erp`, `/projects/rustechnet`).
- **`src/app/robots.ts`**: Defines crawl permissions, specifically welcoming Googlebot, Bingbot, GPTBot, ClaudeBot, and PerplexityBot, while referencing `https://devfinity.net/sitemap.xml`.

---

## 4. Advanced JSON-LD Schema.org Architecture

### 4.1 Schema Types Required
1. **`ProfessionalService` & `Organization`**:
   - Identity: `Devfinity Studio`
   - Founders: `Devansh` and `Heena`
   - Coordinates & Physical Address: `Vadodara, Gujarat, IN`
   - `knowsAbout`: Web Development, Next.js, TypeScript, PostgreSQL, ERP Systems, HIPAA Compliance.
2. **`FAQPage`**:
   - `mainEntity`: Array of `Question` and `acceptedAnswer` objects matching on-page FAQs.
3. **`SoftwareApplication` & `TechArticle`**:
   - Associated with production case studies (AsmeePharma, Virat ShivShakti ERP, Rustechnet).
   - Specifies `operatingSystem: "Cloud / Web"`, `applicationCategory: "EnterpriseSystem"`, and `programmingLanguage`.
