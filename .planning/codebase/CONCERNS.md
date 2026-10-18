# Concerns, Technical Debt & Architectural Risks

**Architecture Mapping Date:** 2026-10-18  
**Repository:** `AstronautGuy/DevfinityFrontend`  
**Root Path:** `e:\work\DevfinityFrontend`

---

## 1. Technical Debt & Codebase Inconsistencies

### 1. Missing Automated Test Suite
- **Issue:** No test framework (Vitest, Jest, Playwright) is installed or configured in [`package.json`](file:///e:/work/DevfinityFrontend/package.json).
- **Risk:** Refactoring complex GSAP animations, form validation schemas, or API handlers risks unnoticed regression bugs during production builds.
- **Remediation:** Install Vitest for utility/component testing and Playwright for critical intake flow and scroll verification.

### 2. ESLint 9 Script Target Definition
- **Issue:** The npm script `"lint": "eslint"` in [`package.json`](file:///e:/work/DevfinityFrontend/package.json) does not specify a target directory or file glob.
- **Risk:** Under ESLint 9 Flat Config, invoking `eslint` without arguments in non-interactive CI/CD or CLI environments can wait on standard input (stdin) or fail to inspect nested directories properly.
- **Remediation:** Update the script in `package.json` to `"lint": "eslint ."` or `"next lint"`.

### 3. Duplicate Contact Form Implementations
- **Issue:** Two distinct contact form components exist in the codebase:
  1. [`src/components/ContactSection.tsx`](file:///e:/work/DevfinityFrontend/src/components/ContactSection.tsx) — 3 fields (`name`, `email`, `message`) using `react-hook-form` + `zodResolver`.
  2. [`src/components/ConnectFormWizard.tsx`](file:///e:/work/DevfinityFrontend/src/components/ConnectFormWizard.tsx) — 4-step wizard (`name`, `email`, `scopes`, `capacity`, `briefing`) using custom state + GSAP slide.
- **Risk:** Redundant maintenance overhead and diverging payload shapes sent to [`src/app/api/contact/route.ts`](file:///e:/work/DevfinityFrontend/src/app/api/contact/route.ts).
- **Remediation:** Consolidate into a single canonical component or align field schemas.

### 4. Mock Data & Static Placeholders
- **Issue:**
  - [`src/app/projects/[id]/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/projects/[id]/page.tsx) uses hardcoded placeholder data for client, year, screenshots, and URLs regardless of the `[id]` parameter.
  - [`src/components/FeaturedProjectsSection.tsx`](file:///e:/work/DevfinityFrontend/src/components/FeaturedProjectsSection.tsx) displays placeholder dashboard mockup cards.
- **Risk:** Navigating to real production URLs yields generic mockup text (`[ SaaS Interface Mockup ]`, `[ Screenshot 1 ]`).
- **Remediation:** Introduce a structured static project data registry (e.g., `src/data/projects.ts`) and real case study screenshots.

---

## 2. Security & Infrastructure Concerns

### 1. Unprotected Public API Endpoint
- **Issue:** [`src/app/api/contact/route.ts`](file:///e:/work/DevfinityFrontend/src/app/api/contact/route.ts) has no rate limiting or bot protection (e.g. Cloudflare Turnstile, hCaptcha, or Upstash Ratelimit).
- **Risk:** Susceptible to automated spam scripts that can exhaust Web3Forms monthly submission quotas or flood client inbox.
- **Remediation:** Implement token-bucket rate limiting via Upstash/Vercel KV and integrate Cloudflare Turnstile verification.

### 2. Environment Secret Hygiene
- **Issue:** `WEB3FORMS_KEY` and `VERCEL_OIDC_TOKEN` are active in [`.env.local`](file:///e:/work/DevfinityFrontend/.env.local).
- **Status:** Verified that `.env*` files are strictly included in [`.gitignore`](file:///e:/work/DevfinityFrontend/.gitignore). Continue enforcing prevention of accidental secret commits.

---

## 3. Performance & Device Compatibility Risks

### 1. GSAP ScrollTrigger Heavy Viewport Pinning
- **Issue:** Pinned full-height sections with `scrub: 1` in [`src/components/HomeClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/HomeClient.tsx) and [`src/components/FeaturedProjectsSection.tsx`](file:///e:/work/DevfinityFrontend/src/components/FeaturedProjectsSection.tsx).
- **Risk:** Can introduce dropped frames or scroll stutter on low-power mobile devices or touchscreens.
- **Remediation:** Audit performance with Chrome DevTools Performance Profiler and apply `will-change: transform` or reduce scrub calculation on touch devices.

### 2. Hardcoded Dark Mode
- **Issue:** `<html lang="en" className="dark">` is hardcoded in [`src/app/layout.tsx`](file:///e:/work/DevfinityFrontend/src/app/layout.tsx).
- **Impact:** System-level light mode preference is ignored. While acceptable for a terminal/engineering aesthetic, dynamic toggling will require adding a ThemeProvider in future phases.
