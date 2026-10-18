---
phase: 5
slug: studio-redesign
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-10-18
---

# Phase 5 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
| :--- | :--- |
| **Framework** | TypeScript Compiler (`tsc`) & Next.js Build Engine |
| **Config file** | [`tsconfig.json`](file:///e:/work/DevfinityFrontend/tsconfig.json), [`eslint.config.mjs`](file:///e:/work/DevfinityFrontend/eslint.config.mjs) |
| **Quick run command** | `pnpm exec tsc --noEmit` |
| **Full suite command** | `pnpm exec tsc --noEmit && pnpm build` |
| **Estimated runtime** | ~10 seconds |

---

## Sampling Rate

- **After every task commit:** Run `pnpm exec tsc --noEmit`
- **After every plan wave:** Run `pnpm build`
- **Before `/gsd-verify-work`:** Full build and typecheck must be green
- **Max feedback latency:** ~10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 5-01-01 | 01 | 1 | Design System & Token Setup | static | `pnpm exec tsc --noEmit` | ✅ | 🟡 pending |
| 5-01-02 | 01 | 1 | Global Shell, Custom Cursor & Navbar | static | `pnpm exec tsc --noEmit` | ✅ | 🟡 pending |
| 5-02-01 | 02 | 2 | Page 1 Hero & Floating 3D Blocks | static | `pnpm exec tsc --noEmit` | ✅ | 🟡 pending |
| 5-02-02 | 02 | 2 | Page 1 3x2 Bento Grid | static | `pnpm exec tsc --noEmit` | ✅ | 🟡 pending |
| 5-03-01 | 03 | 3 | Page 2 Process Pipeline Light Trail | static | `pnpm exec tsc --noEmit` | ✅ | 🟡 pending |
| 5-03-02 | 03 | 3 | Page 2 Stat Counters & Works Showcase | static | `pnpm exec tsc --noEmit` | ✅ | 🟡 pending |
| 5-04-01 | 04 | 4 | Page 3 Dynamic Form & Confetti | static | `pnpm exec tsc --noEmit` | ✅ | 🟡 pending |
| 5-04-02 | 04 | 4 | Page 3 Interactive Particle Canvas & Socials | static | `pnpm exec tsc --noEmit` | ✅ | 🟡 pending |

---

## Wave 0 Requirements

- [ ] Install `canvas-confetti` and `@types/canvas-confetti`
- [ ] Configure `globals.css` with Light Mode Plus theme variables and soft dot pattern
- [ ] Ensure `layout.tsx` removes hardcoded `dark` class

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
| :--- | :--- | :--- | :--- |
| Glassmorphism & Light Palette | "Light Mode Plus" theme | Visual aesthetic | Open browser and verify `#FAFAFA` background, frosted glass navbar, and ambient colored blurs |
| 3D Tilt & Floating Animation | Hero interactive blocks | Realtime physics/motion | Hover over floating brackets/cards and verify 3D perspective rotation and idle bobbing |
| Custom Cursor Cues | Contextual cursor | Mouse coordinates | Hover over cards and verify custom cursor displays "View" / "Drag" badges |
| Process Light Trail | Scroll-linked SVG path | ScrollTrigger interaction | Scroll through Services and verify light trail traces along the milestone path |
| Form Submission & Confetti | Contact state machine | Dynamic UI event | Submit message on `/connect` and observe paper airplane animation followed by confetti burst |

---

## Validation Sign-Off

- [x] All tasks have automated type verification
- [x] Sampling continuity: every task verified via `tsc --noEmit`
- [x] Wave 0 covers package installation
- [x] No watch-mode flags
- [x] Feedback latency < 10s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** Approved 2026-10-18
