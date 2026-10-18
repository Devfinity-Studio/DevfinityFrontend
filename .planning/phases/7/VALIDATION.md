# Phase 7: Technical SEO & Generative Engine Optimization (AIO/GEO) — Validation Plan

**Date:** 2026-10-18  
**Phase:** 7  

---

## 1. Automated Verification Commands

| Command | Expected Result | Gate |
|---|---|---|
| `pnpm exec tsc --noEmit` | 0 type errors | Must pass before build |
| `pnpm build` | Static generation of all 13 routes + dynamic `sitemap.xml` and `robots.txt` | Must pass before completion |
| `curl http://localhost:3000/sitemap.xml` | Valid XML listing all static & dynamic case study URLs | Must return 200 OK |
| `curl http://localhost:3000/robots.txt` | Valid robots directives pointing to sitemap.xml | Must return 200 OK |

---

## 2. Structural & Semantic Quality Gates

1. **Semantic HTML5 Verification**:
   - `<header>`: Site brand bar and navigation.
   - `<nav aria-label="...">`: Accessible main navigation and footer legal links.
   - `<main id="main-content">`: Main content wrapper.
   - `<section aria-labelledby="...">`: Every distinct block on Home, Services, Work, and Contact.
   - `<article>`: Every case study deep dive and project card.
   - `<footer>`: Site footer and copyright attribution.

2. **Next.js Metadata Verification**:
   - `metadataBase` configured in root `layout.tsx`.
   - Every route exports unique `title`, `description`, `alternates.canonical`, and OpenGraph properties.
   - `/projects/[id]` dynamically exports `generateMetadata` with project-specific titles and descriptions.

3. **Schema.org Structured Data Verification**:
   - `Organization` / `ProfessionalService` schema on root and about.
   - `FAQPage` schema on Home and Services pages matching visual FAQs.
   - `SoftwareApplication` / `TechArticle` schema on `/projects/[id]` case studies.
   - All JSON-LD blocks parse validly without JSON syntax errors.

4. **AIO Content & Trust Signals Verification**:
   - 40-60 word direct answers directly below `<h2>` section headers.
   - Trust banner rendered near top of key landing pages with verifiable metrics ("91+ Projects Done", "99.98% Regulatory Uptime", "< 15ms RPC Response").
   - Case studies contain author attributions and "Last Updated" timestamps.
