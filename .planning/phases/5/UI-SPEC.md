---
phase: 5
slug: studio-redesign
status: approved
shadcn_initialized: true
preset: light-mode-plus
created: 2026-10-18
---

# Phase 5 — UI Design Contract

> Visual and interaction contract for Phase 5: Ultra-Modern Studio Redesign (Multi-Page Light Theme & Creative Motion).

---

## Design System

| Property | Value |
| :--- | :--- |
| **Tool** | shadcn/ui (`new-york` style) |
| **Component Library** | Radix UI headless primitives |
| **Icon Library** | Lucide React |
| **Headings Font** | `Outfit` / `Space Grotesk` (`tracking-tighter font-bold`) |
| **Monospace / Accent Font** | `JetBrains_Mono` (`var(--font-jetbrains-mono)`) |

---

## Spacing Scale

Declared values (multiples of 4, with generous breathing room `py-24` and `gap-8`):

| Token | Value | Usage |
| :--- | :--- | :--- |
| **xs** | 4px | Micro gaps, inline badge padding |
| **sm** | 8px | Button inline gaps, icon offsets |
| **md** | 16px | Card internal padding, form input spacing |
| **lg** | 24px | Grid gaps, element groupings |
| **xl** | 32px | Section gap (`gap-8`), card margins |
| **2xl** | 48px | Bento grid padding, header separation |
| **3xl** | 96px | Major section breaks (`py-24`) |

---

## Typography

| Role | Font Family | Size | Weight | Tracking / Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **Display (Hero)** | Display Sans | 56px–72px (`text-5xl md:text-7xl`) | 800 (Extrabold) | `tracking-tighter leading-[1.05]` |
| **Heading 2** | Display Sans | 32px–44px (`text-3xl md:text-5xl`) | 700 (Bold) | `tracking-tight leading-tight` |
| **Heading 3** | Display Sans | 20px–24px (`text-xl md:text-2xl`) | 600 (Semibold) | `tracking-normal leading-snug` |
| **Body** | Sans | 16px–18px (`text-base md:text-lg`) | 400 (Regular) | `leading-relaxed text-zinc-600` |
| **Dev Accent / Tag** | JetBrains Mono | 12px–14px (`text-xs md:text-sm`) | 500 (Medium) | `font-mono tracking-wide uppercase text-zinc-500` |

---

## Color: "Light Mode Plus"

| Role | Value / Class | Usage |
| :--- | :--- | :--- |
| **Dominant (60%)** | `#FAFAFA`, `#F5F5F0` (`bg-stone-50/60`) | Page background, canvas container |
| **Secondary (30%)** | `#FFFFFF` (`bg-white/80 backdrop-blur-xl`) | Glassmorphic Bento cards, navbar shell, input surfaces |
| **Border / Frame** | `rgba(0, 0, 0, 0.07)`, `border-white/60` | Subtle glass outlines, divider rules |
| **Accent Primary (10%)** | `#0A84FF` to `#A855F7` (`electric blue to orchid`) | Hero gradient `"FUTURE"`, active glowing rings, CTA hover aura |
| **Accent Secondary** | `#F97316` to `#EC4899` (`sunset tangerine`) | Badge highlights, interactive tech icons, pipeline light trail |
| **Success / Confirm** | `#10B981` (`emerald-500`) | Form success checkmark, confetti accents |

**Accent Reserved For:**
- The word `"FUTURE"` in hero headline
- Primary Magnetic CTA (`"Let's Build 🚀"`)
- Interactive hover glow borders and custom cursor badges
- Scroll-linked light trail on "The Process" pipeline

---

## Copywriting Contract

| Element | Copy |
| :--- | :--- |
| **Primary Navbar CTA** | `"Let's Build 🚀"` |
| **Hero Eyebrow** | `"[ FORWARD-THINKING SOFTWARE STUDIO ]"` |
| **Hero Headline** | `"WE BUILD THE DIGITAL FUTURE"` |
| **Hero Description** | `"Devfinity designs and deploys bespoke, type-safe full-stack software tailored to the exact blueprints of modern enterprises. We turn operational friction into high-utility digital art."` |
| **Hero Secondary CTA** | `"View Work"` |
| **Bento Grid Header** | `"Who We Are & What We Use"` |
| **Process Eyebrow** | `"[ 02 / METHODOLOGY ]"` |
| **Process Pipeline** | `"Ideate" → "Design" → "Build" → "Launch"` |
| **Stat Counter 1** | `"91+" — Projects Shipped` |
| **Stat Counter 2** | `"< 150ms" — Average API Interaction Latency` |
| **Stat Counter 3** | `"100%" — Type-Safe Delivery Rate` |
| **Contact Headline** | `"Let's build together!"` |
| **Contact Subtitle** | `"Have an idea or need enterprise architecture? Submit your blueprint below."` |
| **Submit Button (Idle)** | `"Send Message 🚀"` |
| **Submit Button (Sending)** | `"Initializing Pipeline..."` |
| **Submit Button (Success)** | `"Success 🎉 We'll be in touch!"` |

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Registry Safety: PASS

**Approval:** Approved 2026-10-18
