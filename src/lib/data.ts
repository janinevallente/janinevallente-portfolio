export const portfolio = {
  name: "Janine Vallente",
  role: "Frontend Developer",
  tagline: "I build interfaces people remember.",
  email: "janinexvallente@gmail.com",
  location: "Cebu City, Philippines",
  resumeUrl: "/resume.pdf",

  social: {
    linkedin: "https://linkedin.com/in/janine-christine-vallente",
    github: "https://github.com/janinevallente",
  },

  skills: {
    core: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    frontend: ["JavaScript", "HTML", "CSS", "Bootstrap", "Material UI", "Ant Design"],
    mobile: ["Kotlin", "Firebase"],
    also: ["Vanilla JS", "Vite", "HTML", "CSS", "Bootstrap", "Material UI", "Ant Design", "Java", "React Native", "Node.js", "MongoDB"],
  },

  projects: [
    {
      id: "01",
      title: "Palette Studio",
      category: "Design Tool",
      description:
        "A real-time collaborative color palette generator with WCAG contrast checking, export to CSS/Figma tokens, and a browser-based canvas built on WebGL.",
      tags: ["React", "WebGL", "TypeScript", "WebSockets"],
      year: "2024",
      url: "https://example.com",
      github: "https://github.com",
      featured: true,
      gradient: "from-amber-100 to-orange-100",
      accent: "#e8622a",
    },
    {
      id: "02",
      title: "Beacon CMS",
      category: "Full-Stack App",
      description:
        "Headless CMS with a custom block editor, drag-and-drop layout builder, and a CDN-backed media pipeline. Powers 40+ client sites.",
      tags: ["Next.js", "Prisma", "S3", "TipTap"],
      year: "2024",
      url: "https://example.com",
      github: "https://github.com",
      featured: true,
      gradient: "from-stone-100 to-slate-100",
      accent: "#4a6fa5",
    },
    {
      id: "03",
      title: "RunLog",
      category: "Mobile-First PWA",
      description:
        "Offline-first running tracker with GPS route visualization, interval timer, and social sharing. 4.8★ on Product Hunt.",
      tags: ["PWA", "Leaflet", "IndexedDB", "Vite"],
      year: "2023",
      url: "https://example.com",
      github: "https://github.com",
      featured: false,
      gradient: "from-emerald-50 to-teal-100",
      accent: "#2d7a5f",
    },
    {
      id: "04",
      title: "Tokenize DS",
      category: "Design System",
      description:
        "An accessible, themeable component library with 60+ components, dark mode, and auto-generated docs via Storybook.",
      tags: ["React", "Storybook", "Radix UI", "CSS-in-JS"],
      year: "2023",
      url: "https://example.com",
      github: "https://github.com",
      featured: false,
      gradient: "from-violet-50 to-purple-100",
      accent: "#6d3fa5",
    },
  ],

  experience: [
    {
      company: "Craft Digital",
      role: "Senior Frontend Engineer",
      period: "2022 — Present",
      description:
        "Lead frontend architecture for a SaaS analytics platform serving 200k users. Reduced bundle size by 45%, improved Core Web Vitals scores from C to A across all routes.",
    },
    {
      company: "Nimble Agency",
      role: "Frontend Developer",
      period: "2020 — 2022",
      description:
        "Built marketing sites and web apps for 30+ clients. Introduced component library and testing culture that cut QA time by 60%.",
    },
    {
      company: "Freelance",
      role: "Web Developer",
      period: "2018 — 2020",
      description:
        "Worked with early-stage startups on MVPs, landing pages, and e-commerce builds. Shipped 15+ projects solo.",
    },
  ],

  marqueeItems: [
    "React", "Next.js", "TypeScript", "Tailwind", "Framer Motion",
    "GraphQL", "Node.js", "Figma", "Storybook", "Vitest",
    "Playwright", "WebGL", "PWA", "Accessibility", "Performance",
  ],
};
