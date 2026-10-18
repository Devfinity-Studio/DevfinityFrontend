# Testing Strategy & Quality Assurance

**Architecture Mapping Date:** 2026-10-18  
**Repository:** `AstronautGuy/DevfinityFrontend`  
**Root Path:** `e:\work\DevfinityFrontend`

---

## 1. Current State of Automated Testing

- **Test Runner Framework:** No automated unit or end-to-end test framework (e.g., Vitest, Jest, Playwright, Cypress) is currently configured in [`package.json`](file:///e:/work/DevfinityFrontend/package.json).
- **Static Type Checking:**
  - Strict TypeScript 5 verification is active.
  - Command: `pnpm exec tsc --noEmit`
  - Current status: Clean compile with 0 type errors across the entire codebase.
- **Linting & Code Quality:**
  - Configured via [`eslint.config.mjs`](file:///e:/work/DevfinityFrontend/eslint.config.mjs) utilizing ESLint 9 Flat Config extending `next/core-web-vitals` and `next/typescript`.

---

## 2. Testing Gap Analysis

| Layer | Coverage Status | Risk Level | Key Uncovered Components |
| :--- | :--- | :--- | :--- |
| **Unit Tests** | None | Low-Medium | [`src/lib/utils.ts`](file:///e:/work/DevfinityFrontend/src/lib/utils.ts), Form validation logic |
| **Component Tests** | None | Medium | [`src/components/ConnectFormWizard.tsx`](file:///e:/work/DevfinityFrontend/src/components/ConnectFormWizard.tsx), [`src/components/AccordionFAQ.tsx`](file:///e:/work/DevfinityFrontend/src/components/AccordionFAQ.tsx), [`src/components/ComparisonSlider.tsx`](file:///e:/work/DevfinityFrontend/src/components/ComparisonSlider.tsx) |
| **API Integration** | None | Medium-High | [`src/app/api/contact/route.ts`](file:///e:/work/DevfinityFrontend/src/app/api/contact/route.ts) (Web3Forms upstream integration & fallback) |
| **E2E / Visual Tests** | None | Medium | GSAP pinned ScrollTriggers, horizontal scroll panels, mobile navigation menu |

---

## 3. Recommended Implementation Roadmap

### Phase A: Unit & Component Testing (Vitest + React Testing Library)
1. **Dependencies:**
   ```bash
   pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
   ```
2. **Priority Test Suites:**
   - **Utility Functions:** Test `cn()` class merging, duplicate removal, and falsy condition handling.
   - **Form Wizard:** Verify that wizard advances through steps, prevents progressing without required input, and triggers error states.
   - **FAQ Accordion:** Test ARIA attribute toggling, expanded state, and FAQ schema JSON generation.

### Phase B: API Route Integration Testing
1. **Target:** [`src/app/api/contact/route.ts`](file:///e:/work/DevfinityFrontend/src/app/api/contact/route.ts)
2. **Scenarios to Cover:**
   - Invalid payload rejection: Missing `name`, invalid `email`, or short `briefing` must return HTTP 400 with Zod issue details.
   - Missing `WEB3FORMS_KEY`: Verify fallback simulation mode logs warning and returns HTTP 200.
   - Upstream failure: Mock Web3Forms API returning HTTP 500 and verify graceful error JSON response.

### Phase C: End-to-End Testing (Playwright)
1. **Dependencies:**
   ```bash
   pnpm add -D @playwright/test
   ```
2. **Critical User Journeys:**
   - **Navigation & Layout:** Verify header sticky state and mobile drawer open/close.
   - **Pinned Scroll Animation:** Validate that pinned viewports trigger without causing scroll locks or layout breaks on mobile viewports.
   - **Contact Intake Flow:** Complete full submission through [`ConnectFormWizard`](file:///e:/work/DevfinityFrontend/src/components/ConnectFormWizard.tsx) and verify success view displays.
