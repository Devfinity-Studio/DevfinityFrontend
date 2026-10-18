# Phase 8: Enterprise Security, Ad-Readiness, Dynamic OG & The Insights Architecture Hub — Validation Plan

**Date:** 2026-10-18  
**Phase:** 8  

---

## 1. Automated Verification Commands

| Command | Expected Result | Gate |
|---|---|---|
| `pnpm exec tsc --noEmit` | 0 type errors | Must pass before build |
| `pnpm build` | Static generation of all routes, including `/insights`, `/insights/[slug]`, and dynamic OG images | Must pass before completion |
| `curl -I http://localhost:3000/` | HTTP response headers contain `X-Frame-Options`, `Content-Security-Policy`, and `Strict-Transport-Security` | Must return security headers |
| `curl http://localhost:3000/projects/virat-shivshakti-erp/opengraph-image` | Valid image binary response with `Content-Type: image/png` | Must return 200 OK |

---

## 2. Structural & Functional Quality Gates

1. **Security Headers Verification**:
   - `next.config.ts` includes `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy`.
   - `Content-Security-Policy` permits Next.js scripts, Tailwind styles, and required analytics/fonts without console violations.

2. **Google Consent Mode v2 Verification**:
   - Default consent state initialized as `denied` for `ad_storage`, `ad_user_data`, `ad_personalization`, and `analytics_storage`.
   - Interacting with `CookieConsentBanner` updates `gtag('consent', 'update', ...)` according to user selections.

3. **UTM Attribution Capture Verification**:
   - Navigating to `/contact?utm_source=google&utm_medium=cpc&utm_campaign=enterprise_erp` automatically parses query params via `useSearchParams`.
   - The form submission payload to `/api/contact` carries `utm_source`, `utm_medium`, and `utm_campaign`.

4. **Dynamic OpenGraph Image Verification**:
   - `src/app/projects/[id]/opengraph-image.tsx` generates dynamic 1200x630 cards with project title and tech stack pills.
   - HTML `<head>` contains `<meta property="og:image" content=".../opengraph-image" />`.

5. **Insights Architecture Hub Verification**:
   - `/insights` renders index of technical architecture articles.
   - Both seed articles exist and render complete typography-optimized technical deep dives:
     1. *"Migrating Enterprise Systems: Why We Choose the T3 Stack & Kinde Auth Over Vite"*
     2. *"High-Performance Workflows with Next.js, TypeScript, and Drizzle ORM"*
   - Author provenance explicitly states: *"Architected by Devansh & Heena"*, with zero references to AI generation tools.

6. **Community Leadership Verification**:
   - High-visibility showcase renders GDG Baroda DevFest 2025 and IIT Bombay Techfest Cozmoclench robotics challenge credentials.

7. **LocalBusiness Schema Verification**:
   - Root JSON-LD in `layout.tsx` contains `"@type": ["LocalBusiness", "ProfessionalService", "Organization"]` with Vadodara address and founders Devansh & Heena.
