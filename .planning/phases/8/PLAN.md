# Phase 8: Enterprise Security, Ad-Readiness, Dynamic OG & The Insights Architecture Hub

**Status:** Ready for execution  
**Plan Date:** 2026-10-18  
**Prerequisites:** [CONTEXT.md](file:///e:/work/DevfinityFrontend/.planning/phases/8/CONTEXT.md), [RESEARCH.md](file:///e:/work/DevfinityFrontend/.planning/phases/8/RESEARCH.md), [VALIDATION.md](file:///e:/work/DevfinityFrontend/.planning/phases/8/VALIDATION.md)  

---

## Goal Description

Harden Devfinity's digital platform with enterprise HTTP security headers (CSP, HSTS, X-Frame-Options), Google Consent Mode v2 via gtag.js, client-side UTM attribution capture on contact forms, programmatic Edge OpenGraph image generation (`@vercel/og`), an editorial technical architecture hub (`/insights`) featuring seed deep-dive articles with explicit human attribution to Devansh & Heena, and a high-visibility Community & Leadership authority showcase highlighting GDG Baroda DevFest 2025 and IIT Bombay Techfest Cozmoclench robotics.

---

## Execution Waves & Task Breakdown

### Wave 1: Enterprise Security Headers, Google Consent Mode v2 & UTM Tracking

- [ ] **Task 8-01-01: Implement Strict Enterprise Security Headers in `next.config.ts`**
  - **Action:** Configure global HTTP headers in `next.config.ts` including Content Security Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options (DENY), X-Content-Type-Options (nosniff), Referrer-Policy, and Permissions-Policy.
  - **Files:**
    - `[MODIFY]` [`next.config.ts`](file:///e:/work/DevfinityFrontend/next.config.ts)
  - **Details:**
    - Ensure CSP allows Next.js runtime, GSAP, Tailwind styles, Google Fonts, and Google Tag Manager.
  - **Verification:** `pnpm exec tsc --noEmit`

- [ ] **Task 8-01-02: Wire Google Consent Mode v2 via gtag.js into `CookieConsentBanner.tsx`**
  - **Action:** Implement Consent Mode v2 default initialization script in root layout and dispatch dynamic consent updates upon user acceptance, rejection, or customization.
  - **Files:**
    - `[MODIFY]` [`src/app/layout.tsx`](file:///e:/work/DevfinityFrontend/src/app/layout.tsx)
    - `[MODIFY]` [`src/components/CookieConsentBanner.tsx`](file:///e:/work/DevfinityFrontend/src/components/CookieConsentBanner.tsx)
  - **Details:**
    - Initialize `gtag('consent', 'default', { ... })` with all four Consent Mode v2 flags set to `denied`.
    - Update `ad_storage`, `ad_user_data`, `ad_personalization`, and `analytics_storage` dynamically.
  - **Verification:** `pnpm exec tsc --noEmit`

- [ ] **Task 8-01-03: Implement Client-Side UTM Query Attribution Capture Hook and Wire to Contact Form**
  - **Action:** Create `useUtmCapture` hook to extract `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, and `utm_content` from URL search parameters, passing them to the intake API.
  - **Files:**
    - `[NEW]` [`src/hooks/useUtmCapture.ts`](file:///e:/work/DevfinityFrontend/src/hooks/useUtmCapture.ts)
    - `[MODIFY]` [`src/components/StudioContactForm.tsx`](file:///e:/work/DevfinityFrontend/src/components/StudioContactForm.tsx)
    - `[MODIFY]` [`src/app/api/contact/route.ts`](file:///e:/work/DevfinityFrontend/src/app/api/contact/route.ts)
  - **Details:**
    - Wrap search param consumption in `<Suspense>` boundary to prevent de-optimizing page prerendering.
    - Submit captured UTM attributes seamlessly alongside form fields.
  - **Verification:** `pnpm exec tsc --noEmit`

---

### Wave 2: Programmatic Social Share Image Generation (`@vercel/og`)

- [ ] **Task 8-02-01: Create Dynamic Edge OpenGraph Image Generator for Case Studies**
  - **Action:** Implement `opengraph-image.tsx` inside `/projects/[id]` using Next.js `ImageResponse` running on Edge runtime.
  - **Files:**
    - `[NEW]` [`src/app/projects/[id]/opengraph-image.tsx`](file:///e:/work/DevfinityFrontend/src/app/projects/[id]/opengraph-image.tsx)
  - **Details:**
    - Renders 1200x630 branded graphic with project title, tech stack badges, and Devfinity Studio branding in "Light Mode Plus" styling.
  - **Verification:** `pnpm exec tsc --noEmit`

- [ ] **Task 8-02-02: Create Dynamic Edge OpenGraph Image Generator for Technical Insights**
  - **Action:** Implement `opengraph-image.tsx` inside `/insights/[slug]` using Next.js `ImageResponse`.
  - **Files:**
    - `[NEW]` [`src/app/insights/[slug]/opengraph-image.tsx`](file:///e:/work/DevfinityFrontend/src/app/insights/[slug]/opengraph-image.tsx)
  - **Details:**
    - Dynamically overlays article title, reading time, author provenance, and Devfinity brand logo.
  - **Verification:** `pnpm exec tsc --noEmit`

---

### Wave 3: The 'Insights' Technical Architecture Hub & Seed Content

- [ ] **Task 8-03-01: Create `/insights` Hub Route and Layout with Explicit Author Attribution**
  - **Action:** Build dedicated `/insights` hub page featuring article cards, category filters, and clear author provenance to Devansh & Heena.
  - **Files:**
    - `[NEW]` [`src/app/insights/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/insights/page.tsx)
    - `[NEW]` [`src/components/InsightsClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/InsightsClient.tsx)
  - **Details:**
    - Strict human authorship policy: zero AI tool accreditation.
  - **Verification:** `pnpm exec tsc --noEmit`

- [ ] **Task 8-03-02: Create Seed Article 1: T3 Stack & Kinde Auth Over Vite**
  - **Action:** Build deep-dive article route at `/insights/migrating-enterprise-systems-t3-kinde`.
  - **Files:**
    - `[NEW]` [`src/app/insights/[slug]/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/insights/[slug]/page.tsx)
    - `[NEW]` [`src/data/insightsData.ts`](file:///e:/work/DevfinityFrontend/src/data/insightsData.ts)
  - **Details:**
    - Article: *"Migrating Enterprise Systems: Why We Choose the T3 Stack & Kinde Auth Over Vite"* with architecture schematics, RBAC analysis, and benchmark data.
  - **Verification:** `pnpm exec tsc --noEmit`

- [ ] **Task 8-03-03: Create Seed Article 2: High-Performance Workflows with Next.js & Drizzle ORM**
  - **Action:** Add second deep-dive article *"High-Performance Workflows with Next.js, TypeScript, and Drizzle ORM"* to `insightsData.ts`.
  - **Files:**
    - `[MODIFY]` [`src/data/insightsData.ts`](file:///e:/work/DevfinityFrontend/src/data/insightsData.ts)
  - **Details:**
    - Detailed breakdown of sub-40ms query execution, compile-time schema safety, and migration guards.
  - **Verification:** `pnpm exec tsc --noEmit`

- [ ] **Task 8-03-04: Update Header Navigation & Sitemap with `/insights`**
  - **Action:** Add "Insights" to main navigation menu and sitemap.
  - **Files:**
    - `[MODIFY]` [`src/components/Header.tsx`](file:///e:/work/DevfinityFrontend/src/components/Header.tsx)
    - `[MODIFY]` [`src/app/sitemap.ts`](file:///e:/work/DevfinityFrontend/src/app/sitemap.ts)
  - **Details:**
    - Add `/insights` and the two seed articles to `sitemap.ts`.
  - **Verification:** `pnpm exec tsc --noEmit`

---

### Wave 4: Community Authority Showcase, Schema Refinement & Full Validation

- [ ] **Task 8-04-01: Create Community & Leadership Authority Section**
  - **Action:** Build `CommunityLeadershipSection.tsx` highlighting real-world technical footprint (GDG Baroda DevFest 2025 and IIT Bombay Techfest Cozmoclench robotics).
  - **Files:**
    - `[NEW]` [`src/components/CommunityLeadershipSection.tsx`](file:///e:/work/DevfinityFrontend/src/components/CommunityLeadershipSection.tsx)
    - `[MODIFY]` [`src/components/HomeClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/HomeClient.tsx)
    - `[MODIFY]` [`src/components/ServicesClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/ServicesClient.tsx)
  - **Details:**
    - Verified credentials, interactive badges, and links to technical deep-dives.
  - **Verification:** `pnpm exec tsc --noEmit`

- [ ] **Task 8-04-02: Enrich Root JSON-LD Schema in `layout.tsx` with `LocalBusiness` Entity Definition**
  - **Action:** Add `LocalBusiness` type to `@graph` schema in `layout.tsx` with headquarters in Vadodara, Gujarat, IN, and founders Devansh & Heena.
  - **Files:**
    - `[MODIFY]` [`src/app/layout.tsx`](file:///e:/work/DevfinityFrontend/src/app/layout.tsx)
  - **Details:**
    - Include geo-coordinates, postal address, and contact points.
  - **Verification:** `pnpm exec tsc --noEmit`

- [ ] **Task 8-04-03: End-to-End Build & Validation Pipeline**
  - **Action:** Run complete TypeScript verification and Next.js production build.
  - **Command:** `pnpm exec tsc --noEmit && pnpm build`
  - **Expected Outcome:** 0 type errors, static pre-rendering of all 24+ routes including `/insights` and dynamic OG endpoints.
