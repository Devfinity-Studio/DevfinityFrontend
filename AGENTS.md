# Devfinity Frontend Project Guidelines & Standards

## 1. Domain & URL Canonicalization
- **Canonical Production Domain:** `https://devfinity.net`
- **Rule:** ALWAYS use `https://devfinity.net` for all canonical URLs, sitemaps, robots.txt, OpenGraph/Twitter cards, schema.org JSON-LD definitions, and external link references. Never use `.dev`, `.com`, or other extensions.

## 2. Brand & Human Attribution Standards
- **Founders & Key Authors:** Devansh & Heena
- **Attribution Policy:** Strict human craftsmanship. In all public UI, meta tags, and tech articles, attribute designs and engineering directly to Devansh & Heena. Never cite or accredit AI generation tools in customer-facing copy.

## 3. Design Aesthetics & Architecture
- **Theme:** "Light Mode Plus" glassmorphic studio aesthetic (`bg-stone-50`, `#FAFAFA`, translucent glass cards, crisp border rings, gradient glows).
- **Stack:** Next.js (App Router), React 19, TypeScript, Tailwind CSS, Lucide Icons, Three.js WebGL canvas.
- **Git Branch:** Active production branch is `prod`.

## 4. Git Push & Deployment Protocol
- **Rule:** NEVER execute `git push` unless the user explicitly requests or confirms a push. All commits and local testing must remain local until instructed.
