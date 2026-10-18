# Phase 6: Global Compliance, Accessibility & Ethical UI Audit — Validation Plan

**Date:** 2026-10-18  
**Phase:** 6  

---

## 1. Automated Verification Checks

1. **TypeScript Compilation:**
   ```bash
   pnpm exec tsc --noEmit
   ```
   - Must exit with code 0 and zero type errors across all newly generated legal pages and components.

2. **Next.js Production Build:**
   ```bash
   pnpm build
   ```
   - Must generate all static routes:
     - `/privacy`
     - `/terms`
     - `/refund`
     - `/cookies`
     - `/legal`
   - Must compile without hydration or SSR errors.

---

## 2. Manual & Functional Verification Matrix

| Area | Check | Expected Outcome | Status |
|------|-------|------------------|--------|
| **Legal Pages** | Navigate to `/privacy`, `/terms`, `/refund`, `/cookies`, `/legal` | All 5 pages render responsive typography, breadcrumbs, and sticky sidebar | Planned |
| **Data Deletion** | Click "Data Deletion Request" link on `/privacy` | Triggers pre-filled mailto to `info@devfinity.net` | Planned |
| **Minor Consent** | Inspect `/privacy` Age clause | Contains clear 18+ enterprise qualification | Planned |
| **Cookie Banner** | Initial load on clean browser session | Sticky banner displays with 'Accept All', 'Reject Non-Essential', 'Customize' | Planned |
| **Cookie Customization** | Click 'Customize' in Cookie Banner | Modal displays Functional (locked), Analytics (unchecked), Marketing (unchecked) | Planned |
| **Cookie Persistence** | Click 'Accept All' or 'Reject Non-Essential' and refresh | Banner dismisses and remains hidden; choice stored in `localStorage` | Planned |
| **Form Consent** | Submit `/contact` without checking consent box | Submission blocked with message: "Please consent to the processing of your details" | Planned |
| **WCAG Contrast** | Inspect text colors on light background | Minimum 4.5:1 ratio on body text, 3:1 on headers | Planned |
| **Keyboard Tab** | Tab through page from top | Skip-to-content appears, focus rings visible (`focus-visible:ring-2`), no focus trap | Planned |
| **Footer Links** | Inspect footer navigation matrix | Direct links to all 5 compliance pages render cleanly | Planned |
