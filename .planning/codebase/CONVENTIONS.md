# Code Conventions & Patterns

**Architecture Mapping Date:** 2026-10-18  
**Repository:** `AstronautGuy/DevfinityFrontend`  
**Root Path:** `e:\work\DevfinityFrontend`

---

## 1. Coding & Naming Conventions

### File Naming
- **React Components:** PascalCase with `.tsx` extension (e.g., [`src/components/ConnectFormWizard.tsx`](file:///e:/work/DevfinityFrontend/src/components/ConnectFormWizard.tsx), [`src/components/TiltCard.tsx`](file:///e:/work/DevfinityFrontend/src/components/TiltCard.tsx)).
- **Client Page Orchestrators:** Named with the suffix `Client.tsx` (e.g., [`src/components/HomeClient.tsx`](file:///e:/work/DevfinityFrontend/src/components/HomeClient.tsx)).
- **UI Primitives:** lowercase kebab-case (e.g., [`src/components/ui/button.tsx`](file:///e:/work/DevfinityFrontend/src/components/ui/button.tsx)).
- **App Router Pages & Handlers:** Standard Next.js file conventions (`page.tsx`, `layout.tsx`, `route.ts`).
- **Utilities & Configurations:** camelCase or lowercase with configuration extensions (`utils.ts`, `next.config.ts`, `eslint.config.mjs`).

### Component Design & Structure
- **Export Syntax:** Standard named function exports for modular components (`export function Header()`), and default exports for page routes and client controllers (`export default function HomeClient()`).
- **Server Component Boundary:** Every `page.tsx` must remain a React Server Component that generates metadata and delegates client rendering to a `*Client.tsx` component.
- **Client Directives:** Files using React hooks, GSAP timelines, browser window events, or user input state must start with `"use client";` at line 1.

---

## 2. Animation & GSAP Lifecycle Standards

1. **Explicit Ref Scoping:**
   Never query arbitrary global DOM elements. Always scope `useGSAP` to a parent container ref:
   ```tsx
   const containerRef = useRef<HTMLDivElement>(null);
   useGSAP(() => {
     gsap.from(".hero-text", { y: 100, opacity: 0, duration: 1 });
   }, { scope: containerRef });
   ```
2. **Context-Safe Event Listeners:**
   When firing animations inside user interaction handlers (`onClick`, `onMouseMove`, `onMouseLeave`), wrap the callback using `contextSafe`:
   ```tsx
   const { contextSafe } = useGSAP({ scope: containerRef });
   const handleMouseMove = contextSafe((e: React.MouseEvent) => {
     gsap.to(containerRef.current, { x: 10, duration: 0.5 });
   });
   ```
3. **ScrollTrigger Cleanup:**
   Register plugins globally once in [`src/components/GSAPProvider.tsx`](file:///e:/work/DevfinityFrontend/src/components/GSAPProvider.tsx). Ensure all pinned triggers define distinct start/end thresholds to prevent layout collisions.

---

## 3. Styling & Theming Patterns

- **Tailwind 4 CSS Variables:** Colors are mapped using CSS variables defined in [`src/app/globals.css`](file:///e:/work/DevfinityFrontend/src/app/globals.css) using OKLCH models and theme overrides for `.dark`.
- **Dynamic Class Merging:** Always use the `cn(...)` utility helper from [`src/lib/utils.ts`](file:///e:/work/DevfinityFrontend/src/lib/utils.ts) when combining conditional styles or merging incoming `className` props:
  ```tsx
  import { cn } from "@/lib/utils";
  
  export function Button({ className, variant, ...props }: ButtonProps) {
    return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
  }
  ```
- **Monospace Typography:** The application utilizes `font-mono` styling across headers, metrics, and labels to reinforce an engineering-first, terminal-inspired aesthetic.

---

## 4. Form Handling & Validation Conventions

- **Validation Schemas:** Every form must define a Zod validation schema.
- **Client-Side Form Validation:** Use `react-hook-form` with `@hookform/resolvers/zod`:
  ```tsx
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" }
  });
  ```
- **Server-Side API Validation:** API route handlers must validate incoming payloads with `schema.safeParse(body)` before invoking external services:
  ```tsx
  const validatedData = contactSchema.safeParse(body);
  if (!validatedData.success) {
    return NextResponse.json(
      { error: "Invalid data provided", details: validatedData.error.issues },
      { status: 400 }
    );
  }
  ```

---

## 5. SEO & Structured Data Standards

- **Semantic Layout:** Every page defines an `<h1>` element within its primary hero viewport.
- **Schema Graphs:** High-value pages must embed JSON-LD `<script type="application/ld+json">` tags representing valid Schema.org entities (`ProfessionalService`, `WebPage`, `FAQPage`).
