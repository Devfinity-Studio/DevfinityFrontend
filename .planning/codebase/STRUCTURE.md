# Codebase Structure

**Architecture Mapping Date:** 2026-10-18  
**Repository:** `AstronautGuy/DevfinityFrontend`  
**Root Path:** `e:\work\DevfinityFrontend`

---

## 1. Directory Tree Overview

```
DevfinityFrontend/
├── .github/
│   └── dependabot.yml              # Automated dependency vulnerability updates
├── .planning/                      # GSD planning and codebase intelligence system
│   ├── codebase/                   # Structured codebase documentation
│   ├── phases/                     # Milestone and phase plans
│   ├── PROJECT.md                  # Project overview and goals
│   ├── REQUIREMENTS.md             # Functional and technical requirements
│   ├── ROADMAP.md                  # Development roadmaps
│   └── STATE.md                    # Current project status
├── public/                         # Publicly served static files
│   ├── devfinity.png               # Brand logo asset
│   └── favicons/                   # Multi-resolution favicon suite & manifest
├── src/
│   ├── app/                        # Next.js App Router entry points & routes
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts        # POST endpoint for contact & intake pipeline
│   │   ├── connect/
│   │   │   └── page.tsx            # Connect route (Consultation / Intake form)
│   │   ├── projects/
│   │   │   └── [id]/
│   │   │       └── page.tsx        # Dynamic route for individual project cases
│   │   ├── services/
│   │   │   └── page.tsx            # Services route (Capability deep dives & comparison)
│   │   ├── work/
│   │   │   └── page.tsx            # Work route (Production deployments & case studies)
│   │   ├── globals.css             # Tailwind v4 theme, tokens & OKLCH variables
│   │   ├── layout.tsx              # Root HTML layout, font setup, JSON-LD schemas
│   │   └── page.tsx                # Landing page route entry point
│   ├── components/                 # Reusable UI components & Client Orchestrators
│   │   ├── ui/                     # shadcn/ui headless Radix-based primitives
│   │   │   ├── button.tsx          # Button with variant styling via CVA
│   │   │   ├── card.tsx            # Card component container and subcomponents
│   │   │   ├── form.tsx            # React Hook Form bridge components
│   │   │   ├── input.tsx           # Form input element
│   │   │   ├── label.tsx           # Accessible form label primitive
│   │   │   └── textarea.tsx        # Multi-line text input
│   │   ├── AboutSection.tsx        # Mission statement and core philosophy section
│   │   ├── AccordionFAQ.tsx        # Accessible FAQ accordion with schema microdata
│   │   ├── ComparisonSlider.tsx    # Interactive before/after split slider
│   │   ├── ConnectClient.tsx       # Intake client wrapper with coordinate canvas
│   │   ├── ConnectFormWizard.tsx   # Multi-step intake form with sliding tracks
│   │   ├── ContactSection.tsx      # Standalone contact form section
│   │   ├── CoreCapabilitiesSection.tsx # 4-column capability feature matrix
│   │   ├── FeaturedProjectsSection.tsx # Horizontal pinned scroll project display
│   │   ├── Footer.tsx              # Global footer with social links and attribution
│   │   ├── GSAPProvider.tsx        # Global GSAP & ScrollTrigger provider
│   │   ├── Header.tsx              # Sticky navigation header with mobile drawer
│   │   ├── HeroSection.tsx         # Static hero section
│   │   ├── HomeClient.tsx          # Homepage interactive GSAP zoom/pinned controller
│   │   ├── MagneticLink.tsx        # Cursor-pulling micro-interaction link wrapper
│   │   ├── ServicesClient.tsx      # Services interactive controller
│   │   ├── TiltCard.tsx            # 3D interactive tilt container with perspective
│   │   └── WorkClient.tsx          # Work page interactive controller
│   └── lib/
│       └── utils.ts                # Class merging utility (clsx + tailwind-merge)
├── .env.local                      # Local environment secrets (WEB3FORMS_KEY, etc.)
├── .gitignore                      # Git exclusion rules
├── components.json                 # shadcn/ui CLI configuration
├── eslint.config.mjs               # ESLint 9 Flat Config
├── next.config.ts                  # Next.js configuration
├── package.json                    # Project dependencies and script runner commands
├── pnpm-lock.yaml                  # Lockfile for pnpm package manager
├── pnpm-workspace.yaml             # Workspace definition file
├── postcss.config.mjs              # PostCSS plugin bindings (@tailwindcss/postcss)
├── README.md                       # High-level repository instructions
└── tsconfig.json                   # TypeScript compiler configuration
```

---

## 2. Key Entry Points & Routes

| Route | File Path | Type | Role |
| :--- | :--- | :--- | :--- |
| `/` | [`src/app/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/page.tsx) | Server (RSC) | Renders [`HomeClient`](file:///e:/work/DevfinityFrontend/src/components/HomeClient.tsx) |
| `/services` | [`src/app/services/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/services/page.tsx) | Server (RSC) | Renders [`ServicesClient`](file:///e:/work/DevfinityFrontend/src/components/ServicesClient.tsx) |
| `/work` | [`src/app/work/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/work/page.tsx) | Server (RSC) | Renders [`WorkClient`](file:///e:/work/DevfinityFrontend/src/components/WorkClient.tsx) |
| `/connect` | [`src/app/connect/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/connect/page.tsx) | Server (RSC) | Renders [`ConnectClient`](file:///e:/work/DevfinityFrontend/src/components/ConnectClient.tsx) |
| `/projects/[id]` | [`src/app/projects/[id]/page.tsx`](file:///e:/work/DevfinityFrontend/src/app/projects/[id]/page.tsx) | Server (RSC) | Dynamic project detail viewer |
| `/api/contact` | [`src/app/api/contact/route.ts`](file:///e:/work/DevfinityFrontend/src/app/api/contact/route.ts) | API Route | Handles JSON intake submissions |

---

## 3. Component Categorization

### Client Page Orchestrators
- [`src/components/HomeClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/HomeClient.tsx): Dual-viewport pinned zoom effect, metric counters, capability integration.
- [`src/components/ServicesClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/ServicesClient.tsx): Pinned dashboard overview, active row scrubbing, vertical timeline.
- [`src/components/WorkClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/WorkClient.tsx): Case study breakdowns and architecture matrices.
- [`src/components/ConnectClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/ConnectClient.tsx): Coordinate canvas, intake wizard, and FAQ integration.

### Motion & Micro-Interaction Components
- [`src/components/MagneticLink.tsx`](file:///e:/work/DevfinityFrontend/src/components/MagneticLink.tsx): Elastic mouse-follow button/link physics.
- [`src/components/TiltCard.tsx`](file:///e:/work/DevfinityFrontend/src/components/TiltCard.tsx): 3D cursor-tracking card rotation with perspective depth.
- [`src/components/ComparisonSlider.tsx`](file:///e:/work/DevfinityFrontend/src/components/ComparisonSlider.tsx): Drag/touch-controlled clip-path image comparison.

### UI Primitives (`src/components/ui/`)
- All components built on top of Radix UI primitives and styled via Tailwind utility classes using `cva` and `cn()`.
