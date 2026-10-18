# Tech Stack

**Architecture Mapping Date:** 2026-10-18  
**Repository:** `AstronautGuy/DevfinityFrontend`  
**Root Path:** `e:\work\DevfinityFrontend`

---

## 1. Languages & Runtime

- **TypeScript:** `^5.0.0` — Strict compile-time type checking enabled (`strict: true` in [`tsconfig.json`](file:///e:/work/DevfinityFrontend/tsconfig.json)).
- **Node.js Runtime:** Bundler module resolution with ES2017 target and modern DOM/ESNext libraries.
- **Package Manager:** `pnpm@11.8.0` with workspace manifest ([`pnpm-workspace.yaml`](file:///e:/work/DevfinityFrontend/pnpm-workspace.yaml), [`pnpm-lock.yaml`](file:///e:/work/DevfinityFrontend/pnpm-lock.yaml)).

---

## 2. Core Frameworks

- **Next.js:** `16.2.9` — Next.js App Router with React Server Components (RSC) and Turbopack compiler (`next dev --turbopack`, `next build --turbopack`).
- **React & React DOM:** `19.1.0` — Utilizing React 19 modern hooks, server components, and streaming support.

---

## 3. Styling & Design System

- **Tailwind CSS:** `^4.0.0` — Configured via `@tailwindcss/postcss` in [`postcss.config.mjs`](file:///e:/work/DevfinityFrontend/postcss.config.mjs) and imported directly in [`src/app/globals.css`](file:///e:/work/DevfinityFrontend/src/app/globals.css).
- **CSS Theme Tokens:** Defined with `@theme inline` in [`src/app/globals.css`](file:///e:/work/DevfinityFrontend/src/app/globals.css) using OKLCH color models for baseline variables and hex/dark overrides for `.dark`.
- **Animation Utilities:** `tw-animate-css` (`^1.3.8`) for Tailwind CSS utility keyframes.
- **Typography:** Google Font `JetBrains_Mono` imported via `next/font/google` in [`src/app/layout.tsx`](file:///e:/work/DevfinityFrontend/src/app/layout.tsx).

---

## 4. UI Components & Motion

- **Motion & Physics Engine:** 
  - `gsap`: `^3.15.0` — GreenSock Animation Platform for complex timeline management, pinning, and scrubbing.
  - `@gsap/react`: `^2.1.2` — React hook integration (`useGSAP`) with context lifecycle management.
  - `ScrollTrigger` plugin registered globally in [`src/components/GSAPProvider.tsx`](file:///e:/work/DevfinityFrontend/src/components/GSAPProvider.tsx).
- **Component Primitives (shadcn/ui):**
  - Schema configuration: [`components.json`](file:///e:/work/DevfinityFrontend/components.json) using `new-york` style and Lucide icon library.
  - `radix-ui`: `^1.6.0` — Accessible headless primitive components.
  - `class-variance-authority`: `^0.7.1` — Type-safe component variant creation.
  - `clsx` (`^2.1.1`) & `tailwind-merge` (`^3.3.1`) via helper in [`src/lib/utils.ts`](file:///e:/work/DevfinityFrontend/src/lib/utils.ts).
- **Icons:** `lucide-react` (`^0.544.0`) and `lucide` (`^0.544.0`).

---

## 5. Forms & Data Validation

- **Form Management:** `react-hook-form` (`^7.79.0`).
- **Validation Engine:** `zod` (`^4.4.3`).
- **Resolver Bridge:** `@hookform/resolvers` (`^5.4.0`) linking React Hook Form with Zod schemas.

---

## 6. Build, Linting & Configuration Files

- [`package.json`](file:///e:/work/DevfinityFrontend/package.json): Root scripts, dependencies, and metadata.
- [`tsconfig.json`](file:///e:/work/DevfinityFrontend/tsconfig.json): TypeScript paths alias `@/*` -> `./src/*`.
- [`next.config.ts`](file:///e:/work/DevfinityFrontend/next.config.ts): Next.js compiler settings and customization point.
- [`eslint.config.mjs`](file:///e:/work/DevfinityFrontend/eslint.config.mjs): ESLint 9 Flat Config using `FlatCompat` extending `next/core-web-vitals` and `next/typescript`.
- [`postcss.config.mjs`](file:///e:/work/DevfinityFrontend/postcss.config.mjs): PostCSS pipeline binding `@tailwindcss/postcss`.
- [`components.json`](file:///e:/work/DevfinityFrontend/components.json): shadcn/ui configuration with aliases pointing to `@/components`, `@/lib/utils`, and `@/components/ui`.
