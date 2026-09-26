# CutSync Media — Website Build Documentation
### Product Requirements Document (PRD) for Google Antigravity Agent

---

## 1. Project Overview

**Client / Brand:** CutSync Media
**Industry:** Video Editing Agency (post-production, content editing, motion graphics)
**Goal:** Build a modern, cinematic, highly-animated portfolio/agency website that showcases video editing work and converts visitors into leads/clients.

**Tone:** Premium, cinematic, energetic, trustworthy — the site itself should feel like it was "cut" by a professional editor: sharp transitions, rhythm, motion.

**Primary CTA:** "Book a Free Consultation" / "Get a Quote"
**Secondary CTA:** "View Our Work" / "Watch Showreel"

---

## 2. Brand Identity (derived from provided logo)

The logo is a "C" shaped play-button icon (camera-viewfinder brackets + circular arc + play triangle) in a blue-to-purple-to-magenta gradient, paired with the wordmark "CutSync" (navy → purple gradient) and "media" in solid purple below.

### Color Palette
| Role | Color | Hex (approx) |
|---|---|---|
| Deep Navy (base/bg) | Dark blue-black | `#0B0F2C` / `#0A0A18` |
| Primary Blue | Electric blue | `#2563EB` / `#3B82F6` |
| Sky Accent | Light cyan-blue | `#38BDF8` |
| Primary Purple | Royal purple | `#6D28D9` / `#7C3AED` |
| Magenta/Pink Accent | Vivid magenta | `#C026D3` / `#DB2777` |
| Neutral White | Text on dark | `#F5F5FA` |
| Muted Gray | Secondary text | `#A1A1B5` |

**Signature gradient (use everywhere — buttons, underlines, borders, glows):**
`linear-gradient(135deg, #38BDF8 0%, #6D28D9 50%, #DB2777 100%)`

### Typography
- **Headings:** A bold, modern geometric sans-serif (e.g. "Clash Display", "Sora", "General Sans", or "Poppins" as fallback) — should feel confident and cinematic.
- **Body:** Clean, highly readable sans-serif (e.g. "Inter", "Satoshi").
- Use tight letter-spacing on large hero headlines; generous line-height on body copy.

### Logo Usage
- Dark background = primary logo lockup (full color icon + wordmark).
- Use the icon alone (the "C" play-button) as a favicon, loading spinner, and scroll-progress indicator (the play triangle can "spin" or "fill" as a loader).
- Provide a monochrome/white version for footer or dark-on-dark placements.

---

## 3. Design Direction

- **Theme:** Dark mode by default (deep navy/black background) — makes video thumbnails and gradient accents pop, and reads as premium/cinematic.
- **Style:** Glassmorphism cards + soft gradient glows + subtle grain/noise texture overlay for a "film" feel.
- **Layout:** Full-bleed sections, generous whitespace, asymmetric grids for portfolio, large bold typography.
- **Cursor:** Custom cursor (a small ring or the play-triangle icon) that magnetizes toward buttons and morphs into a "Play" label when hovering video thumbnails.
- **Imagery:** Video thumbnails/reels should dominate — this is a video editing agency, so motion IS the portfolio.

---

## 4. Animation & Motion Requirements (Critical)

The site must feel **alive, cinematic, and premium** — not a static template. Use scroll-driven and interaction-driven motion throughout.

### 4.1 Load / Intro
- Animated logo intro on first load: the play-triangle "cuts in" with a quick wipe/slide transition (mimic a video edit cut), then reveals the homepage with a staggered fade/slide-up of hero elements.
- Optional: a brief "timeline scrub" loading bar styled like a video editing timeline (with a moving playhead) instead of a generic spinner.

### 4.2 Navigation
- Sticky, transparent navbar that gains a blurred glass background on scroll.
- Animated underline/gradient sweep on nav link hover.
- Mobile menu: full-screen overlay with staggered link reveal animation.

### 4.3 Hero Section
- Large looping background video or abstract animated gradient "aurora" blobs that slowly morph (using CSS/GSAP, not heavy video, for performance).
- Headline text with a staggered character/word reveal animation on load.
- Animated gradient text or a subtle glowing underline on key phrase (e.g. "We Cut. You Shine.").
- Floating/parallax mini video thumbnail cards that drift gently and react to mouse movement (parallax tilt).

### 4.4 Scroll Animations
- Scroll-triggered fade/slide-up reveals for each section (staggered children).
- Horizontal scrolling / drag-to-scroll portfolio carousel for showreels (like a film strip).
- Parallax depth on background gradient blobs and floating elements as user scrolls.
- Animated counters for stats (e.g. "500+ Videos Edited", "50+ Happy Clients") that count up when scrolled into view.
- Section transitions styled like video "cuts" or "wipes" (diagonal clip-path reveal) between major sections.

### 4.5 Portfolio / Showreel Section
- Grid or carousel of video cards; on hover, thumbnail auto-plays a muted preview clip, scales slightly, and shows a gradient overlay with project name + category.
- Clicking opens a smooth modal/lightbox video player with fade + scale transition.
- Optional: filter tabs (e.g. "Reels", "YouTube", "Ads", "Wedding") with animated tab-indicator that slides between options.

### 4.6 Process / "How We Work" Section
- Animated step-by-step timeline (vertical or horizontal) where a gradient progress line "draws" itself as the user scrolls, connecting each step icon.

### 4.7 Testimonials
- Auto-playing draggable carousel with smooth spring-based sliding, subtle scale on the active/centered card.

### 4.8 Pricing / Packages
- Cards with hover lift + glow border animation; toggle switch (Monthly/One-time) with animated sliding pill.

### 4.9 Call-to-Action / Contact
- Animated gradient background that shifts slowly.
- Form fields with floating label animations and gradient focus-ring glow.
- Submit button with a loading/success micro-animation (checkmark morph).

### 4.10 Footer
- Large outlined/gradient "CutSync Media" wordmark as a decorative background element.
- Social icons with magnetic hover + gradient fill on hover.

### 4.11 Micro-interactions (apply everywhere)
- Buttons: magnetic pull toward cursor + gradient shimmer sweep on hover.
- Links: animated underline draw.
- Cards: 3D tilt-on-hover (subtle, mouse-position based).
- Page/section transitions: smooth easing (no jarring instant jumps) — use easing curves like `cubic-bezier(0.16, 1, 0.3, 1)`.

**Performance rule:** All animations must be GPU-accelerated (transform/opacity only where possible), respect `prefers-reduced-motion`, and not block Largest Contentful Paint. Lazy-load video previews.

---

## 5. Recommended Tech Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Animation libraries:**
  - Framer Motion — component/page transitions, scroll reveals, hover states
  - GSAP + ScrollTrigger — complex scroll-driven timelines, pinned sections, film-strip carousel
  - Lenis (or `studio-freight/lenis`) — smooth inertia scrolling
- **3D/extra polish (optional, if scope allows):** Three.js / React Three Fiber for an abstract animated gradient/particle background in the hero
- **Video handling:** `next/video` or a lightweight player (Plyr/Vidstack) with lazy-loaded, compressed MP4/WebM previews; Cloudinary or Mux for hosting/streaming if budget allows
- **Forms:** React Hook Form + Zod validation; connect to email service (Resend/SendGrid) or a form backend
- **Deployment:** Vercel
- **Fonts:** Google Fonts / self-hosted variable fonts (Sora, Inter or similar) for performance

---

## 6. Site Map / Pages & Sections

1. **Home**
   - Hero (headline, subheadline, CTA, animated visuals)
   - Trusted-by / client logo strip (marquee/auto-scroll)
   - Services overview (cards: Short-form/Reels editing, YouTube editing, Wedding films, Corporate/Ad videos, Motion graphics, Color grading)
   - Featured Work (video carousel/grid)
   - Process (How We Work — 4–5 step timeline)
   - Stats/Numbers (animated counters)
   - Testimonials
   - Pricing/Packages
   - FAQ (accordion with smooth expand animation)
   - Final CTA banner
   - Footer
2. **Portfolio / Work** — full filterable gallery of all video projects
3. **Services** — detailed breakdown per service with examples
4. **Pricing** — full package comparison
5. **About** — team, story, brand values
6. **Contact** — form + calendar booking embed (Calendly) + contact details

---

## 7. Content Placeholders Needed From Client
- Final logo files (SVG, transparent PNG in multiple sizes) ✅ provided
- Brand tagline (suggested: "We Cut. You Shine." / "Your Story, Perfectly Synced.")
- Showreel video + individual portfolio video clips (compressed, web-optimized)
- Client testimonials (text + optional name/photo)
- Pricing package details
- Team bios/photos (if to be shown)
- Contact info, social links, booking link

---

## 8. Deliverables Expected from the Build Agent

1. Fully responsive (mobile, tablet, desktop) Next.js + Tailwind codebase
2. All animations implemented per Section 4, with reduced-motion fallback
3. Optimized assets (compressed video previews, next/image for images, WebP/AVIF)
4. SEO basics: meta tags, Open Graph image, sitemap, semantic HTML
5. Lighthouse performance target: 90+ on Performance, Accessibility, SEO
6. Clean, componentized code structure (reusable UI components, animation variants extracted)
7. Deployment-ready on Vercel with environment variables documented

---

## 9. Reference Mood / Inspiration Direction
When building, aim for the aesthetic of: high-end video production studio sites, dark cinematic portfolios with gradient glow accents, and agencies like those seen on Awwwards under "video," "motion," or "agency" categories — bold type, generous motion, glassmorphism, and a strong sense of rhythm between sections (mirroring how a video editor cuts a sequence).

---

*End of documentation. This file is intended to be handed directly to an AI build agent (e.g., Google Antigravity) as the working specification for the CutSync Media website.*
