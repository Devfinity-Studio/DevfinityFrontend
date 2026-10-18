# Phase 6: Global Compliance, Accessibility & Ethical UI Audit — Context

**Date:** 2026-10-18  
**Phase:** 6  
**Status:** Planning  

---

## 1. Executive Summary & Objective

Bring Devfinity's web platform into strict compliance with international legal standards (GDPR, CCPA, EU ePrivacy, Indian Digital Personal Data Protection Act), WCAG 2.1 AA accessibility guidelines, and ethical UI principles. This phase delivers dedicated legal and business documentation pages, a non-intrusive cookie consent mechanism with granular preferences, mandatory explicit form consents, complete keyboard focus rings, WCAG AA color contrast enhancements, and the elimination of dark patterns and fabricated social proof.

---

## 2. Specific Requirements & Scope

### 2.1 Legal & Compliance Hub
Create responsive, typography-optimized legal documents using Devfinity's light-mode aesthetic, equipped with a sticky sidebar table-of-contents navigation:
1. **Privacy Policy (`/privacy`)**:
   - Data collection scopes (technical telemetry, inquiry submissions).
   - Data retention periods and processing legal bases.
   - Dedicated "Data Deletion Requests" procedure with direct `mailto:info@devfinity.net?subject=Data%20Deletion%20Request` link.
   - Explicit "Age Consent for Minors" clause (services restricted to entities and individuals 18+).
2. **Terms of Service (`/terms`)**:
   - Scope of custom software architectural services.
   - Intellectual property ownership (100% codebase ownership transferred upon final milestone settlement).
   - Limitation of liability and uptime warranties.
   - Governing jurisdiction (Vadodara, Gujarat, India).
3. **Refund Policy (`/refund`)**:
   - Milestone-based billing and sprint acceptance criteria.
   - Cancellation terms for initial consultations and active architecture sprints.
   - Clear policy on digital assets and custom code delivery.
4. **Cookie Policy (`/cookies`)**:
   - Breakdown of Functional (essential session/UI state), Analytical (opt-in telemetry), and Marketing cookies.
   - Browser opt-out instructions and cookie lifespan disclosure.
5. **Business Details Hub / Impressum (`/legal`)**:
   - Official registered trade identity: Devfinity Studio.
   - Registered address: Vadodara, Gujarat, India.
   - Direct contact: `info@devfinity.net`.
   - Tax & Registration disclosure details.
6. **Shared Legal Layout Component**:
   - Sticky sidebar navigation with section highlighting.
   - Clean, readable typography with print and copy-link utilities.

### 2.2 Data Privacy & Consent UI
1. **Cookie Consent Banner (`CookieConsentBanner.tsx`)**:
   - Sticky bottom bar with non-blocking overlay.
   - Three equal-prominence actions: "Accept All", "Reject Non-Essential", and "Customize".
   - "Customize" modal with functional cookies locked as required, and marketing/analytical cookies UNCHECKED by default.
   - LocalStorage persistence (`devfinity_cookie_consent`) with 180-day expiry.
   - Respects browser `navigator.doNotTrack` / Global Privacy Control.
2. **Form Consents**:
   - In [`StudioContactForm.tsx`](file:///e:/work/DevfinityFrontend/src/components/StudioContactForm.tsx), add a mandatory, unchecked checkbox:
     *"I consent to the collection and processing of my details to handle this technical inquiry in accordance with Devfinity's Privacy Policy."*
   - Only strictly necessary fields marked required (`email`, `message`, `consent`).

### 2.3 Accessibility (WCAG 2.1 AA) Implementation
1. **Color Contrast Audit**:
   - Ensure all body copy and secondary text (`text-zinc-600` / `text-zinc-700`) maintain at least a 4.5:1 contrast ratio against light backgrounds (`#FFFFFF` and `#FAFAFA`).
   - Large headings maintain at least 3:1 contrast ratio.
2. **Screen Reader Optimization**:
   - Descriptive `aria-label` attributes on all icon-only buttons (navigation toggles, close buttons, social links).
   - Descriptive `alt` attributes on all images (e.g., logo, architecture previews).
   - Landmark roles (`role="region"`, `role="banner"`, `role="main"`, `role="contentinfo"`).
   - Skip-to-content accessibility anchor (`Skip to main content`).
3. **Keyboard Navigation & Focus Management**:
   - Standardized visible focus rings: `focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none`.
   - Trap-free sequential Tab key navigation throughout all pages, drawers, and modal dialogs.

### 2.4 Ethical UI & Trust Refactoring
1. **Dark Pattern Removal**:
   - Symmetrical visual weight between affirmative ("Accept") and opt-out ("Reject") actions in the Cookie Consent dialog.
   - No fake countdown timers, artificial scarcity indicators, or forced subscription loops.
2. **Authentic Social Proof**:
   - No fabricated client quotes or stock photos.
   - Direct attribution to verified Devfinity production platforms: **AsmeePharma**, **Virat ShivShakti ERP**, and **Rustechnet**.
3. **Footer Legal Navigation**:
   - Update [`Footer.tsx`](file:///e:/work/DevfinityFrontend/src/components/Footer.tsx) with a structured legal link matrix (Privacy, Terms, Cookies, Refund, Legal Notice).

---

## 3. Technical Stack & Architecture

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling:** Vanilla Tailwind CSS with custom focus-visible and typography tokens
- **Persistence:** LocalStorage for cookie consent with automated expiry
- **Icons:** Lucide React (`Shield`, `Lock`, `Scale`, `FileText`, `CheckCircle2`, `AlertCircle`, `X`)
