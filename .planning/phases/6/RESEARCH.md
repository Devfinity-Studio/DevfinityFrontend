# Phase 6: Global Compliance, Accessibility & Ethical UI Audit — Research

**Date:** 2026-10-18  
**Phase:** 6  

---

## 1. Regulatory & Compliance Standards

### 1.1 GDPR & ePrivacy Directive (EU)
- **Consent Rule:** Consent must be freely given, specific, informed, and unambiguous. Pre-ticked boxes for analytics or marketing are invalid under the CJEU Planet49 ruling.
- **Opt-Out Symmetrical Prominence:** The European Data Protection Board (EDPB) mandates that rejecting cookies must be as easy and visually prominent as accepting them (equal visual weight, no hidden secondary reject menus).
- **Right to Erasure (Article 17):** Users must have an explicit, frictionless path to request deletion of their personal information.
- **Minors Consent (Article 8):** Websites handling contracts or processing personal data must establish clear age eligibility (18+ for enterprise software service agreements).

### 1.2 CCPA / CPRA (California) & DPDP Act (India)
- **Notice at Collection:** Explicit notice before personal data is submitted via contact forms.
- **Data Minimization:** Only request data strictly necessary for fulfilling the user's inquiry (Name, Email, Project Briefing). Optional fields must not block submission.

---

## 2. WCAG 2.1 AA Accessibility Standards

### 2.1 Contrast Ratios
- **Normal Text (< 18pt or < 14pt bold):** Minimum contrast ratio of **4.5:1** against the background.
  - Background `#FAFAFA`:
    - `#0F172A` (Slate 900): 16.5:1 (Passes AAA)
    - `#334155` (Slate 700): 9.3:1 (Passes AAA)
    - `#475569` (Slate 600): 6.4:1 (Passes AA)
    - `#0A84FF` (Primary Blue): 4.6:1 on white (Passes AA for bold text)
- **Interactive Elements & Focus Rings:**
  - Standard focus indicator: `outline: 2px solid #0A84FF; outline-offset: 2px;`
  - High visibility for keyboard users without affecting mouse-click aesthetics using `:focus-visible`.

### 2.2 Screen Reader Landmarks & Navigation
- Provide a hidden-until-focused "Skip to main content" link at the top of the body.
- Every `<button>` lacking inner text must supply an `aria-label`.
- Dynamic banners (such as cookie consent or toast alerts) must declare `role="region"` or `role="status"` and `aria-live="polite"`.

---

## 3. Component Architecture & Patterns

### 3.1 Legal Document Layout (`LegalLayout.tsx`)
```tsx
<div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    {/* Sticky Sidebar (4 cols) */}
    <aside className="lg:col-span-4 sticky top-28 space-y-6">
      <nav aria-label="Legal Documents Navigation">
        {/* Links to Privacy, Terms, Refund, Cookies, Legal Notice */}
      </nav>
      {/* Table of contents for current document */}
    </aside>
    {/* Main Content (8 cols) */}
    <main id="legal-content" className="lg:col-span-8 glass-panel rounded-3xl p-8 md:p-12">
      {children}
    </main>
  </div>
</div>
```

### 3.2 Cookie Consent Banner (`CookieConsentBanner.tsx`)
- State stored in `localStorage` under `devfinity_cookie_consent`:
  ```json
  {
    "necessary": true,
    "analytics": false,
    "marketing": false,
    "timestamp": 1782225848000
  }
  ```
- Evaluates `navigator.doNotTrack` on initial mount; if active, automatically honors non-essential rejection.
- Includes "Customize" modal allowing granular control with non-essential toggles off by default.

### 3.3 Form Consent Checkbox in `StudioContactForm.tsx`
- Checkbox: `<input type="checkbox" id="consent" required checked={consent} onChange={...} />`
- Label: *"I consent to Devfinity processing my contact information to respond to this technical inquiry in accordance with the [Privacy Policy](/privacy)."*
- Blocks submission if unchecked with clear error message.
