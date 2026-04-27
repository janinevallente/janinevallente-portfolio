# Janine Vallente — Portfolio

A modern, animated developer portfolio built with **Next.js 15** and **Framer Motion**. Showcases projects, experience, and skills with smooth page transitions, scroll-driven animations, and a custom cursor. The current website is the 2nd iteration of my portfolio.

---

## Features

- **Animated preloader** — word-cycling intro screen shown once per session; skipped on back-navigation from project pages
- **Custom cursor** — replaces the default cursor with a branded circle when hovering over projects
- **Floating image card** — follows the cursor across the projects list, previewing each project's screenshot
- **Scroll-driven animations** — section reveals, word-by-word text animation, and parallax contact section powered by Framer Motion
- **Project detail pages** — full-screen project view with image collage, metadata, overview, and prev/next navigation
- **Marquee hero** — seamless infinite-scroll name display using CSS animation with no flicker or stutter
- **Responsive navbar** — full-screen mobile drawer with staggered link animations and an "Available" status pill
- **Open to work badge** — pulsing live-signal indicator displayed in both the hero and contact section
- **Contact section** — email and social links with a parallax scroll effect
- **Responsive design** — works on mobile, tablet, and desktop

---

## Tech Stack

| Layer      | Technology                                                        |
| ---------- | ----------------------------------------------------------------- |
| Framework  | [Next.js 15](https://nextjs.org) (App Router)                     |
| UI Library | [React 19](https://react.dev)                                     |
| Language   | TypeScript                                                        |
| Styling    | [Tailwind CSS v3](https://tailwindcss.com) (custom design tokens) |
| Animation  | [Framer Motion](https://www.framer-motion.com)                    |
| Icons      | [Lucide React](https://lucide.dev)                                |
| Fonts      | Migra (display) + Plus Jakarta Sans (body) via Next.js Font       |
| Deployment | [Vercel](https://vercel.com)                                      |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout with fonts and metadata
│   ├── page.tsx                    # Home page — sections + preloader logic
│   └── projects/
│       └── [slug]/
│           └── page.tsx            # Dynamic project detail page
├── assets/
│   └── images/                     # Project screenshots (.webp)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Fixed nav with mobile drawer
│   │   └── Footer.tsx              # Copyright footer
│   ├── sections/
│   │   ├── Hero.tsx                # Full-screen hero with marquee
│   │   ├── About.tsx               # Bio, skills, and tech icons
│   │   ├── Experience.tsx          # Work history with bullet descriptions
│   │   ├── Projects.tsx            # Project list with floating image preview
│   │   └── Contact.tsx             # Email, socials, and CTA
│   └── ui/
│       ├── CustomCursor.tsx        # Branded cursor overlay
│       ├── FadeUp.tsx              # Fade + slide-up scroll trigger
│       ├── FloatingImageCard.tsx   # Cursor-following project image card
│       ├── Marquee.tsx             # Infinite-scroll hero name strip
│       ├── PageTransition.tsx      # Curtain-drop page transition
│       ├── Preloader.tsx           # Word-cycling animated intro screen
│       ├── RevealLine.tsx          # Animated horizontal rule
│       ├── SectionReveal.tsx       # Scroll-triggered section entrance
│       └── WordReveal.tsx          # Word-by-word text reveal animation
├── lib/
│   └── data.ts                     # All portfolio content (projects, experience, skills)
└── globals.d.ts                    # Global type declarations
```

---

## Getting Started

### Prerequisites

- Node.js **18+**
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

### Preview Production Build

```bash
npm start
```

---

## Content Management

All portfolio data — projects, experience, skills, social links, and contact info — lives in a single file:

```
src/lib/data.ts
```

To update your portfolio content, edit this file. No other files need to change for content updates.

### Adding a Project

Add a new entry to the `projects` array in `data.ts`:

```ts
{
  id: "06",
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
  featured: true,
}
```

---

## Featured Projects

| #   | Project                                                | Category           | Year      |
| --- | ------------------------------------------------------ | ------------------ | --------- |
| 01  | [LumiBooth](https://lumibooth.vercel.app)              | Web Application    | 2026      |
| 02  | [Pokédex Hub](https://pokedexhub.vercel.app)           | Web Application    | 2026      |
| 03  | FinanceVue                                             | Web Dashboard      | 2024      |
| 04  | AquaFusion Mobile                                      | Mobile Application | 2023–2024 |
| 05  | [Portfolio Website](https://janinevallente.vercel.app) | Website            | 2026      |

---

## Deployment

This project is deployed on [Vercel](https://vercel.com). To deploy your own fork:

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com/new)
3. Vercel auto-detects Next.js — no configuration needed
4. Every push to `main` triggers a new deployment automatically

---

## Acknowledgements

- Animations powered by [Framer Motion](https://www.framer-motion.com)
- Tech stack icons from [Devicon](https://devicon.dev)
- Deployed and hosted on [Vercel](https://vercel.com)

---

_Built by Janine Vallente._
