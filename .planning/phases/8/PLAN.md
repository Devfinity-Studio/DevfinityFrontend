# Phase 8: Enterprise Security, Ad-Readiness, Dynamic OG, Bespoke 3D & The Insights & Labs Architecture Hub

**Status:** Complete  
**Plan Date:** 2026-10-18  
**Completion Date:** 2026-10-18  
**Prerequisites:** [CONTEXT.md](file:///e:/work/DevfinityFrontend/.planning/phases/8/CONTEXT.md), [RESEARCH.md](file:///e:/work/DevfinityFrontend/.planning/phases/8/RESEARCH.md), [VALIDATION.md](file:///e:/work/DevfinityFrontend/.planning/phases/8/VALIDATION.md)  

---

## Goal Description

Harden Devfinity's digital platform with enterprise HTTP security headers (CSP, HSTS, X-Frame-Options), Google Consent Mode v2 via gtag.js, client-side UTM attribution capture on contact forms, a bespoke interactive 3D WebGL studio canvas, programmatic Edge OpenGraph image generation (`@vercel/og`), an editorial technical architecture hub (`/insights`) featuring three seed deep-dive articles (including defense-grade aerospace telemetry from the Def-Space internship), a dedicated Devfinity Labs route (`/labs`) for open-source experiments and hardware IoT bridges, and authentic media provenance (Fujifilm X-S20 workspace captures, GDG Baroda DevFest 2025, IIT Bombay Techfest Cozmoclench robotics).

---

## Execution Waves & Task Breakdown

### Wave 1: Enterprise Security Headers, Google Consent Mode v2 & UTM Tracking

- [x] **Task 8-01-01: Implement Strict Enterprise Security Headers in `next.config.ts`**
  - **Action:** Configure global HTTP headers in `next.config.ts` including Content Security Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options (DENY), X-Content-Type-Options (nosniff), Referrer-Policy, and Permissions-Policy.
  - **Files:**
    - `[MODIFY]` [`next.config.ts`](file:///e:/work/DevfinityFrontend/next.config.ts)
  - **Details:**
    - Ensure CSP allows Next.js runtime, GSAP, Three.js WebGL canvas, Tailwind styles, Google Fonts, and Google Tag Manager.
  - **Verification:** `pnpm exec tsc --noEmit`

- [x] **Task 8-01-02: Wire Google Consent Mode v2 via gtag.js into `CookieConsentBanner.tsx`**
  - **Action:** Implement Consent Mode v2 default initialization script in root layout and dispatch dynamic consent updates upon user acceptance, rejection, or customization.
  - **Files:**
    - `[MODIFY]` [`src/app/layout.tsx`](file:///e:/work/DevfinityFrontend/src/app/layout.tsx)
    - `[MODIFY]` [`src/components/CookieConsentBanner.tsx`](file:///e:/work/DevfinityFrontend/src/components/CookieConsentBanner.tsx)
  - **Details:**
    - Initialize `gtag('consent', 'default', { ... })` with all four Consent Mode v2 flags set to `denied`.
    - Update `ad_storage`, `ad_user_data`, `ad_personalization`, and `analytics_storage` dynamically.
  - **Verification:** `pnpm exec tsc --noEmit`

- [x] **Task 8-01-03: Implement Client-Side UTM Query Attribution Capture Hook and Wire to Contact Form**
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

### Wave 2: Bespoke 3D WebGL Studio Canvas & Programmatic Social Cards (`@vercel/og`)

- [x] **Task 8-02-01: Create Bespoke 3D WebGL Studio Canvas Component**
  - **Action:** Build an interactive Three.js WebGL canvas rendering a rotating glassmorphic isometric server core with refractive materials, cursor orbit physics, and ambient particle glow tied to Devfinity's brand aesthetic.
  - **Files:**
    - `[NEW]` [`src/components/Bespoke3DStudioCanvas.tsx`](file:///e:/work/DevfinityFrontend/src/components/Bespoke3DStudioCanvas.tsx)
    - `[MODIFY]` [`src/components/HeroFloating3D.tsx`](file:///e:/work/DevfinityFrontend/src/components/HeroFloating3D.tsx)
  - **Details:**
    - Lightweight procedural geometry + shaders; 60 FPS performance without bulky external assets.
  - **Verification:** `pnpm exec tsc --noEmit`

- [x] **Task 8-02-02: Create Dynamic Edge OpenGraph Image Generator for Case Studies**
  - **Action:** Implement `opengraph-image.tsx` inside `/projects/[id]` using Next.js `ImageResponse` running on Edge runtime.
  - **Files:**
    - `[NEW]` [`src/app/projects/[id]/opengraph-image.tsx`](file:///e:/work/DevfinityFrontend/src/app/projects/[id]/opengraph-image.tsx)
  - **Details:**
    - Renders 1200x630 branded graphic with project title, tech stack badges, and Devfinity Studio branding.
  - **Verification:** `pnpm exec tsc --noEmit`

- [x] **Task 8-02-03: Create Dynamic Edge OpenGraph Image Generator for Technical Insights & Labs**
  - **Action:** Implement `opengraph-image.tsx` inside `/insights/[slug]` using Next.js `ImageResponse`.
  - **Files:**
    - `[NEW]` [`src/app/insights/[slug]/opengraph-image.tsx`](file:///e:/work/DevfinityFrontend/src/app/insights/[slug]/opengraph-image.tsx)
  - **Details:**
    - Dynamically overlays article title, reading time, author provenance, and Devfinity brand logo.
  - **Verification:** `pnpm exec tsc --noEmit`

---

### Wave 3: The 'Insights' Technical Architecture Hub & Devfinity Labs (`/labs`)

- [x] **Task 8-03-01: Create `/insights` Hub Route and Layout with Explicit Human Attribution**
  - **Action:** Build dedicated `/insights` hub page featuring article cards, category filters, and clear author provenance to Devansh & Heena (zero AI accreditation).
  - **Files:**
    - `[NEW]` [`src/app/insights/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/insights/page.tsx)
    - `[NEW]` [`src/components/InsightsClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/InsightsClient.tsx)
  - **Details:**
    - Strict human authorship policy: zero AI tool accreditation.
  - **Verification:** `pnpm exec tsc --noEmit`

- [x] **Task 8-03-02: Create Centralized Insights Data Registry with 3 Deep-Dive Articles**
  - **Action:** Create `insightsData.ts` with complete architectural deep-dives:
    1. *"Migrating Enterprise Systems: Why We Choose the T3 Stack & Kinde Auth Over Vite"*
    2. *"High-Performance Workflows with Next.js, TypeScript, and Drizzle ORM"*
    3. *"Mission-Critical Telemetry & Aerospace Cybersecurity: Lessons from the Def-Space Internship"*
  - **Files:**
    - `[NEW]` [`src/data/insightsData.ts`](file:///e:/work/DevfinityFrontend/src/data/insightsData.ts)
    - `[NEW]` [`src/app/insights/[slug]/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/insights/[slug]/page.tsx)
  - **Details:**
    - Def-Space article details low-latency UAV/rocketry telemetry interfaces, zero-trust edge communications, and defense-grade AI infrastructure.
  - **Verification:** `pnpm exec tsc --noEmit`

- [x] **Task 8-03-03: Create Devfinity Labs Route (`/labs`) — Playground & Open Source Hub**
  - **Action:** Build dedicated `/labs` page showcasing hardware IoT bridges (ESP32 telemetry, Raspberry Pi clusters), digital concept illustrations (Procreate / Adobe Fresco vector schematics), and open-source packages.
  - **Files:**
    - `[NEW]` [`src/app/labs/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/labs/page.tsx)
    - `[NEW]` [`src/components/LabsClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/LabsClient.tsx)
  - **Details:**
    - Engineered to capture high-intent developer backlinks and technical credibility.
  - **Verification:** `pnpm exec tsc --noEmit`

- [x] **Task 8-03-04: Update Navigation in `Header.tsx` and Dynamic Sitemap in `sitemap.ts`**
  - **Action:** Add "Insights" and "Labs" to main navigation menu and sitemap.
  - **Files:**
    - `[MODIFY]` [`src/components/Header.tsx`](file:///e:/work/DevfinityFrontend/src/components/Header.tsx)
    - `[MODIFY]` [`src/app/sitemap.ts`](file:///e:/work/DevfinityFrontend/src/app/sitemap.ts)
  - **Details:**
    - Add `/insights`, `/labs`, and all insight articles to `sitemap.ts`.
  - **Verification:** `pnpm exec tsc --noEmit`

---

### Wave 4: Authentic Media Provenance, Community Authority & Verification

- [x] **Task 8-04-01: Create Community & Leadership Authority Section with Authentic Media Provenance**
  - **Action:** Build `CommunityLeadershipSection.tsx` highlighting real-world technical footprint:
    - Organizing **GDG Baroda DevFest 2025**.
    - Robotics telemetry at **IIT Bombay Techfest (Cozmoclench wireless bot challenge)**.
    - Authentic studio & hardware provenance: Vadodara headquarters, testing rigs captured on Fujifilm X-S20 (35mm f/1.4 clarity).
  - **Files:**
    - `[NEW]` [`src/components/CommunityLeadershipSection.tsx`](file:///e:/work/DevfinityFrontend/src/components/CommunityLeadershipSection.tsx)
    - `[MODIFY]` [`src/components/HomeClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/HomeClient.tsx)
    - `[MODIFY]` [`src/components/ServicesClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/ServicesClient.tsx)
  - **Verification:** `pnpm exec tsc --noEmit`

- [x] **Task 8-04-02: Enrich Root JSON-LD Schema in `layout.tsx` with `LocalBusiness` Entity Definition**
  - **Action:** Add `LocalBusiness` type to `@graph` schema in `layout.tsx` with headquarters in Vadodara, Gujarat, IN, and founders Devansh & Heena.
  - **Files:**
    - `[MODIFY]` [`src/app/layout.tsx`](file:///e:/work/DevfinityFrontend/src/app/layout.tsx)
  - **Details:**
    - Include geo-coordinates, postal address, and contact points.
  - **Verification:** `pnpm exec tsc --noEmit`

- [x] **Task 8-04-03: End-to-End Build & Validation Pipeline**
  - **Action:** Run complete TypeScript verification and Next.js production build.
  - **Command:** `pnpm exec tsc --noEmit && pnpm build`
  - **Expected Outcome:** 0 type errors, static pre-rendering of all 26+ routes including `/insights`, `/labs`, and dynamic OG endpoints.

