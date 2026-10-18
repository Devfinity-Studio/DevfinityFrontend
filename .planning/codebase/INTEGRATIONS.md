# Integrations

**Architecture Mapping Date:** 2026-10-18  
**Repository:** `AstronautGuy/DevfinityFrontend`  
**Root Path:** `e:\work\DevfinityFrontend`

---

## 1. External APIs & Third-Party Services

### Web3Forms Contact Submission Pipeline
- **Endpoint:** `https://api.web3forms.com/submit`
- **Implemented In:** [`src/app/api/contact/route.ts`](file:///e:/work/DevfinityFrontend/src/app/api/contact/route.ts)
- **Environment Variable:** `WEB3FORMS_KEY` (configured in [`.env.local`](file:///e:/work/DevfinityFrontend/.env.local))
- **Payload Schema:**
  - `access_key`: Token authenticate request
  - `name`: Submitter's full name
  - `email`: Validated email address
  - `capacity`: Selected system capacity/budget
  - `scopes`: Comma-delimited list of operational scopes (e.g. ERP, CRM, Type-Safe API)
  - `message`: Detailed project briefing
  - `subject`: `[SYSTEM_INTAKE] New Pipeline from {name}`
- **Fallback / Mock Mode:** When `WEB3FORMS_KEY` is not present, the route logs the payload to the server console and returns a simulated HTTP 200 response with `{ message: "Successfully received message! (Simulated)" }`.

### Vercel Platform & Deployment
- **Integration Points:** [`.vercel/`](file:///e:/work/DevfinityFrontend/.vercel/) metadata directory and [`.env.local`](file:///e:/work/DevfinityFrontend/.env.local) variables (`VERCEL_OIDC_TOKEN`).
- **Production URL:** `https://devfinity.net`

### Google Fonts / Next.js Font Optimization
- **Font:** `JetBrains_Mono` imported via `next/font/google` in [`src/app/layout.tsx`](file:///e:/work/DevfinityFrontend/src/app/layout.tsx).
- **Behavior:** Zero layout shift, self-hosted at build time by Next.js to eliminate third-party runtime DNS lookup latency.

---

## 2. Structured Data & SEO Integrations

### Schema.org Microdata & JSON-LD
1. **ProfessionalService & WebPage Entity Graph:**
   - **Implemented In:** [`src/app/layout.tsx`](file:///e:/work/DevfinityFrontend/src/app/layout.tsx)
   - **ID:** `https://devfinity.net/#agency`
   - **Attributes:** Name (`Devfinity`), GeoCoordinates (`22.3072, 73.1812`), PostalAddress (Vadodara, Gujarat, IN), Wikipedia knowledge associations (`TypeScript`, `ERP`, `Web development`, `ORM`, `UI design`).
2. **FAQPage Entity Graph:**
   - **Implemented In:** [`src/components/AccordionFAQ.tsx`](file:///e:/work/DevfinityFrontend/src/components/AccordionFAQ.tsx)
   - **Attributes:** Dynamically injects questions and answers into Google-indexable schema markup.

---

## 3. Internal Application Endpoints & Routes

| Endpoint | Method | File Path | Description | Validation |
| :--- | :--- | :--- | :--- | :--- |
| `/api/contact` | `POST` | [`src/app/api/contact/route.ts`](file:///e:/work/DevfinityFrontend/src/app/api/contact/route.ts) | Receives project intake inquiries and forwards to Web3Forms | Zod schema validation for name, email, briefing, scopes |

---

## 4. UI Libraries & Animation Integrations

- **GSAP Suite:** Registered in [`src/components/GSAPProvider.tsx`](file:///e:/work/DevfinityFrontend/src/components/GSAPProvider.tsx) with `ScrollTrigger` and `useGSAP`. Global configuration disables aggressive resizing re-calculations on mobile devices (`ignoreMobileResize: true`).
- **External Web Presence Links:**
  - GitHub: [`src/components/Footer.tsx`](file:///e:/work/DevfinityFrontend/src/components/Footer.tsx)
  - Twitter / X: [`src/components/Footer.tsx`](file:///e:/work/DevfinityFrontend/src/components/Footer.tsx)
  - LinkedIn: [`src/components/Footer.tsx`](file:///e:/work/DevfinityFrontend/src/components/Footer.tsx)
