# Phase 8: Enterprise Security, Ad-Readiness, Dynamic OG & The Insights Architecture Hub — Context

**Date:** 2026-10-18  
**Phase:** 8  
**Status:** Planning  

---

## 1. Executive Summary & Objective

Elevate Devfinity's digital platform into an enterprise-hardened, ad-ready production environment. This phase combines critical infrastructure security (HTTP security headers, Content Security Policy), compliance-first ad attribution (Google Consent Mode v2 via gtag.js, UTM query parameter capture), programmatic social card generation (`@vercel/og` ImageResponse API), an editorial technical architecture hub (`/insights`), and authoritative community leadership signals (GDG Baroda DevFest 2025, IIT Bombay Techfest Cozmoclench robotics).

All technical deep-dives and codebase documentation will feature strict, explicit human attribution directly to Devfinity founders Heena & Devansh, with zero AI tool accreditation.

---

## 2. Core Pillars & Architectural Scope

### 2.1 Infrastructure Security & Ad-Readiness
- **Strict HTTP Security Headers**: Update `next.config.ts` with Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy to safeguard enterprise ERP and healthcare data flows.
- **Google Consent Mode v2**: Wire `CookieConsentBanner.tsx` and gtag.js to support Consent Mode v2 signals (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`) dynamically adjusting based on user consent choices (Accept All, Reject Non-Essential, Customize).
- **UTM Query Attribution Capture**: Create a reusable client hook (`useUtmCapture`) using Next.js `useSearchParams` to capture `utm_source`, `utm_campaign`, `utm_medium`, `utm_term`, and `utm_content` automatically and pass them as hidden payload fields through `StudioContactForm.tsx` to `/api/contact`.

### 2.2 Programmatic Social Cards (`@vercel/og`)
- **Dynamic Case Study OpenGraph Cards**: Implement `src/app/projects/[id]/opengraph-image.tsx` using Next.js Edge Runtime `ImageResponse` to dynamically compose 1200x630 social share cards overlaying project title, verified tech stack tags, and Devfinity branding.
- **Dynamic Insights OpenGraph Cards**: Implement programmatic OpenGraph generation for `/insights` and individual article deep-dives.

### 2.3 The 'Insights' Technical Architecture Hub (`/insights`)
- **Route & Layout Architecture**: Build `/insights` hub and dynamic `/insights/[slug]` article reader using the established "Light Mode Plus" glassmorphic aesthetic.
- **Explicit Human Attribution Override**: Enforce zero mentions of AI generation; every article, schematic, and snippet is explicitly authored and architected by Heena (Lead Systems Architect) and Devansh (Principal Full-Stack Engineer).
- **Two Seed Technical Deep-Dives**:
  1. *"Migrating Enterprise Systems: Why We Choose the T3 Stack & Kinde Auth Over Vite"* (`/insights/migrating-enterprise-systems-t3-kinde`)
  2. *"High-Performance Workflows with Next.js, TypeScript, and Drizzle ORM"* (`/insights/high-performance-nextjs-drizzle`)
- **Navigation & Sitemap Integration**: Add `/insights` to site navigation and update `sitemap.ts` to index all insight articles.

### 2.4 Community Authority & Leadership Showcase
- **Real-World Footprint Section**: Build `CommunityLeadershipSection.tsx` highlighting Devfinity's verified technical footprint:
  - Organizing **GDG Baroda DevFest 2025** (spearheading web, cloud, and architecture community initiatives).
  - Competing in high-stakes robotics competitions: **Cozmoclench wireless bot challenge at IIT Bombay's Techfest** (wireless telemetry, real-time control systems).
- Embed this authority section on the website to cement genuine engineering credibility with enterprise prospects and AI answer engines.

### 2.5 LocalBusiness & Organization Schema Refinement
- Enrich the Schema.org JSON-LD graph in `layout.tsx` to include `LocalBusiness` alongside `Organization` and `ProfessionalService`, specifying Vadodara headquarters, geo-coordinates, and co-founders Devansh & Heena.

---

## 3. Success Metrics
1. `pnpm exec tsc --noEmit` exits with 0 errors.
2. `pnpm build` statically generates all routes including dynamic `sitemap.xml`, `robots.txt`, and `/insights` articles.
3. OpenGraph images render dynamically via Edge `ImageResponse` with valid PNG headers.
4. Security headers return on all route HTTP responses.
5. Google Consent Mode v2 dispatches compliant consent updates upon interaction with Cookie Consent Banner.
