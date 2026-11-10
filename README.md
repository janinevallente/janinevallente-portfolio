# Janine Vallente — Portfolio

A modern, animated developer portfolio built with **Next.js** and **Framer Motion**. It showcases projects, experience, and skills with smooth page transitions, scroll-driven animations, and a custom cursor. The current website is the 2nd iteration of my portfolio.

---

## Features

- **Animated preloader** — word-cycling multilingual greeting shown once per session; skipped on back-navigation from project pages
- **Marquee hero** — seamless infinite-scroll name display using CSS animation with no flicker or stutter
- **Typewriter contact headline** — "wanna …" cycles through phrases (connect?, collaborate?, chat?, build apps?, talk domains?) with a blinking accent cursor and screen-reader-friendly fallback text
- **Live local time** — a Cebu City, PH clock (Asia/Manila, PHT · UTC+8) beside a location pin, ticking every second without hydration mismatches
- **Circular hero portrait** — a zoomed, cropped profile photo above the contact links, sized responsively
- **Contact section** — Gmail compose link plus LinkedIn and GitHub buttons, with a parallax scroll effect and centered mobile layout
- **"What I Can Do" cards** — numbered accent-themed cards with a Lucide icon, a highlighted detail line, and a hover state that flips colors
- **Large word-reveal intro** — word-by-word scroll-triggered text animation in the About section
- **Animated reveal line footer** — a drawing divider with copyright and "Built with" credits at the end of the Contact section
- **Image lightbox gallery** — click any project image to open a full-screen lightbox with keyboard navigation (arrow keys), touch-friendly swipe controls, and an image counter
- **Skeleton loading placeholders** — project screenshots and contributor avatars show an animated skeleton while loading, then fade in
- **Custom cursor** — replaces the default cursor with a branded circle when hovering over projects
- **Floating image card** — follows the cursor across the projects list, previewing each project's screenshot
- **Project detail pages** — full-screen project view with image collage, metadata, overview, and prev/next navigation
- **Page curtain transition** — cursor-origin curtain that covers and reveals the page when navigating
- **Responsive navbar** — full-screen mobile drawer with staggered link animations
- **SEO metadata** — Open Graph, Twitter card, keywords, robots rules, and favicon set configured in the root layout
- **Responsive design** — works on mobile, tablet, and desktop

---

## Tech Stack

| Layer         | Technology                                                               |
| ------------- | ------------------------------------------------------------------------ |
| Framework     | [Next.js](https://nextjs.org) (App Router, static export)                |
| UI Library    | [React 19](https://react.dev)                                            |
| Language      | TypeScript                                                               |
| Styling       | [Tailwind CSS v3](https://tailwindcss.com) (custom design tokens)        |
| Animation     | [Framer Motion](https://www.framer-motion.com)                           |
| UI Components | [Ant Design](https://ant.design) (`Skeleton.Image` loading placeholders) |
| Icons         | [Lucide React](https://lucide.dev)                                       |
| Fonts         | Syne (display) + Inter Tight (body) via Google Fonts                     |
| Deployment    | [Vercel](https://vercel.com)                                             |

> The site is configured with `output: "export"` in `next.config.ts`, so it builds to fully static HTML. Images use `unoptimized: true` and routes use trailing slashes.

---

## Design Tokens

Defined in `tailwind.config.ts` and mirrored as CSS variables in `src/app/globals.css`:

| Token    | Value     | Use                                 |
| -------- | --------- | ----------------------------------- |
| `bg`     | `#0B0B0C` | Main page background                |
| `accent` | `#B6FF2E` | Lime highlight color (links, cards) |
| `chalk`  | `#F3F2EE` | Off-white text                      |
| `ink`    | `#111110` | Dark text on accent surfaces        |

Custom letter-spacing scales (`widest-2` to `widest-5`) and a `2xs` font size are also available.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css                 # Tailwind layers, fonts, CSS variables
│   ├── layout.tsx                  # Root layout with metadata, cursor tracker, page curtain
│   ├── page.tsx                    # Home page — sections + preloader logic
│   └── projects/
│       └── [slug]/
│           ├── page.tsx            # Dynamic project detail route (static params)
│           └── ProjectDetailClient.tsx  # Client-side project detail view
├── assets/
│   └── images/                     # Project screenshots, contributor avatars, hero portrait (.webp)
├── components/
│   ├── animations/
│   │   ├── FadeUp.tsx              # Fade + slide-up scroll trigger
│   │   ├── PageTransition.tsx      # Page transition wrapper
│   │   ├── ScrollToSection.tsx     # Handles scroll to any section on back navigation
│   │   ├── SectionReveal.tsx       # Scroll-triggered section entrance
│   │   └── WordReveal.tsx          # Word-by-word text reveal animation
│   ├── layout/
│   │   ├── CursorTracker.tsx       # Initializes global cursor position tracking
│   │   ├── Footer.tsx              # Copyright footer (project detail pages - unused)
│   │   ├── Navbar.tsx              # Fixed nav with mobile drawer
│   │   └── PageCurtain.tsx         # Cursor-origin curtain page transition
│   ├── sections/
│   │   ├── Hero.tsx                # Full-screen hero with marquee
│   │   ├── About.tsx               # Bio, "What I Can Do" cards, and stats
│   │   ├── Experience.tsx          # Work history with bullet descriptions
│   │   ├── Projects.tsx            # Project list with floating image preview
│   │   └── Contact.tsx             # Typewriter CTA, local time, portrait, links, footer
│   └── ui/
│       ├── CustomCursor.tsx        # Branded cursor overlay
│       ├── Dot.tsx                 # Accent-colored period used in section titles
│       ├── FloatingImageCard.tsx   # Cursor-following project image card
│       ├── ImageWithSkeleton.tsx   # <img> wrapper with an antd Skeleton.Image loading state
│       ├── Lightbox.tsx            # Full-screen image gallery with swipe & keyboard nav
│       ├── Marquee.tsx             # Infinite-scroll hero name strip
│       ├── Preloader.tsx           # Word-cycling animated intro screen
│       └── RevealLine.tsx          # Animated horizontal rule (color and delay props)
├── lib/
│   ├── cursor-position.ts          # Shared cursor position tracking
│   ├── curtain.ts                  # Page curtain registration helpers
│   └── data.ts                     # All portfolio content (projects, experience, skills)
public/                             # Favicons (16px to 512px, .ico, Apple touch icon)
globals.d.ts                        # Global type declarations
next.config.ts                      # Static export configuration
tailwind.config.ts                  # Design tokens, animations, spacing
```

---

## Getting Started

### Prerequisites

- Node.js **20+** (required by the Next.js version in `package.json`)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/janinevallente/janinevallente-portfolio.git
cd janinevallente-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

Because of `output: "export"`, the static site is generated in the `out/` folder.

### Preview Production Build

```bash
npx serve out
```

> `next start` does not work with `output: "export"`, so serve the `out/` folder with any static file server.

### Lint

```bash
npm run lint
```

---

## Content Management

All portfolio data — name, email, location, social links, skills, experience, and projects — lives in a single file:

```
src/lib/data.ts
```

To update your portfolio content, edit this file. No other files need to change for content updates.

### Editing "What I Can Do" Cards

Each entry in `skills.whatICanDo` renders as a numbered card:

```ts
{
  id: "1",
  area: "Front-end Web Development",
  detail: "Building responsive and user-friendly web applications...",
}
```

Card icons are assigned by position from the `cardIcons` array at the top of `About.tsx`. Reorder or replace the Lucide icons there to match your cards.

### Editing Contact Phrases and Time

- The typed phrases after "wanna" are in the `PHRASES` array at the top of `Contact.tsx`.
- The clock uses the `Asia/Manila` time zone in the `PhTime` component. Change the `timeZone`, the "Cebu City, PH" label, and the "PHT · UTC+8" label there if you relocate.
- The portrait is `src/assets/images/hero-img.webp`.

### Adding a Project

Add a new entry to the `projects` array in `data.ts`:

```ts
{
  id: "05",
  title: "Your Project Name",
  category: "Web Application",
  description: "A short description of what you built and why.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  year: "2026",
  images: [YourProjectImg],
  hasUrl: true,
  url: "https://your-live-url.com",
  hasGithub: true,
  github: "https://github.com/you/your-repo",
  hasPublication: false,
  publication: "",
  featured: false,
  hasContibutors: true,
  contributors: ["ContributorName"],
  contributorsImg: [ContributorImg],
  contributorsLinkedIn: ["https://contributor-profile-url.com"],
}
```

The project `id` is used as the URL slug (`/projects/05/`), and detail pages are generated statically from the `projects` array.

> Note: the field is spelled `hasContibutors` (without the "r") in the code. Keep that spelling when adding entries.

---

## Featured Projects

| #   | Project                                         | Category                      | Year           |
| --- | ----------------------------------------------- | ----------------------------- | -------------- |
| 01  | [Rivo](https://rivo-tools.netlify.app)          | Web Utilities Platform        | 2026 - Present |
| 02  | [Portfolio Website](https://janinevallente.com) | Personal Portfolio            | 2026           |
| 03  | FinanceVue                                      | Financial Analytics Dashboard | 2024           |
| 04  | AquaFusion Mobile                               | IoT Monitoring Mobile App     | 2023 - 2024    |

---

## Deployment

This project is deployed on [Vercel](https://vercel.com) for backup purposes. To deploy your own fork:

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com/new)
3. Vercel auto-detects Next.js — no configuration needed
4. Every push to `main` triggers a new deployment automatically
   Since the site is a static export, it can also be hosted on any static host (Netlify, GitHub Pages, Cloudflare Pages) by publishing the `out/` folder.

---

## Acknowledgements

- Animations powered by [Framer Motion](https://www.framer-motion.com)
- Loading placeholders powered by [Ant Design](https://ant.design)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com) (Syne, Inter Tight)
- Deployed and hosted on [Vercel](https://vercel.com)

---

_Built by Janine Vallente._
