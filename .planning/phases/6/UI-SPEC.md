# Phase 6: Global Compliance, Accessibility & Ethical UI Audit — UI Design Contract

**Date:** 2026-10-18  
**Phase:** 6  

---

## 1. Design Tokens & Accessibility System

### 1.1 Color Contrast Tokens (WCAG AA Compliant)
- **Background Surface:** `#FAFAFA` (Zinc 50)
- **Card Background:** `rgba(255, 255, 255, 0.88)`
- **Primary Body Text:** `#0F172A` (Slate 900) — Ratio `16.5:1` (Passes AAA)
- **Secondary / Metadata Text:** `#334155` (Slate 700) — Ratio `9.3:1` (Passes AAA)
- **Muted Text / Dates:** `#475569` (Slate 600) — Ratio `6.4:1` (Passes AA)
- **Focus Indicator Ring:** `#0A84FF` with 2px offset

### 1.2 Typography Hierarchy for Legal Documents
- **Document Title (`h1`):** `text-4xl md:text-5xl font-black tracking-tight text-zinc-900`
- **Section Heading (`h2`):** `text-2xl font-bold tracking-tight text-zinc-900 mt-8 mb-4 border-b border-black/[0.06] pb-2`
- **Sub-clause (`h3`):** `text-lg font-semibold text-zinc-800 mt-6 mb-2`
- **Paragraph Body:** `text-sm md:text-base text-zinc-700 leading-relaxed font-normal mb-4`
- **Notice / Callout Box:** `rounded-2xl p-5 border border-blue-200 bg-blue-50/70 text-zinc-800`

---

## 2. Component Visual Contracts

### 2.1 Sticky Cookie Consent Banner
- **Container:** `fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50 max-w-4xl mx-auto rounded-3xl p-6 bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-2xl shadow-blue-500/10`
- **Buttons (Equal Visual Weight & Accessibility):**
  - **Accept All:** `px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500`
  - **Reject Non-Essential:** `px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 font-mono text-xs font-bold transition-all focus-visible:ring-2 focus-visible:ring-blue-500`
  - **Customize:** `px-5 py-2.5 rounded-full bg-transparent hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 font-mono text-xs font-semibold underline underline-offset-4 transition-all focus-visible:ring-2 focus-visible:ring-blue-500`

### 2.2 Legal Sidebar Navigation (`LegalLayout.tsx`)
- **Card Wrapper:** `sticky top-28 rounded-3xl p-6 glass-card border border-white/80 shadow-lg space-y-6`
- **Active Navigation Item:** `bg-blue-50 text-blue-600 font-bold border-l-4 border-blue-600 pl-3`
- **Inactive Navigation Item:** `text-zinc-600 hover:text-zinc-900 hover:bg-black/[0.03] pl-4`

### 2.3 Skip-to-Content Link
- **Style:** `sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:shadow-xl focus:font-mono focus:text-xs`

---

## 3. Form Consent Checkbox Contract (`StudioContactForm.tsx`)
- **Container:** `flex items-start space-x-3 pt-2 text-xs text-zinc-600`
- **Checkbox:** `h-4 w-4 rounded-md border-zinc-300 text-blue-600 focus:ring-blue-500 cursor-pointer`
- **Label:** `leading-relaxed select-none` with clickable link to `/privacy`
- **Validation Message:** `text-rose-600 text-xs font-mono mt-1` if submitted without consent
