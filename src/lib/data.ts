import LumiBoothImg from "@/assets/images/lumibooth.webp"
import FinanceVueImg from "@/assets/images/financevue.webp"
import AquafusionImg from "@/assets/images/aquafusion.webp"
import PortfolioImg from "@/assets/images/portfolio.webp"

export const portfolio = {
  name: "Janine Vallente",
  role: "Frontend Developer",
  tagline: "I build interfaces people remember.",
  email: "janinexvallente@gmail.com",
  location: "Cebu City, Philippines",
  resumeUrl: "https://drive.google.com/file/d/14BEugN8f90jUFlufpnyk82n15U4UZ7Ig/view?usp=sharing",

  social: {
    linkedin: "https://linkedin.com/in/janine-christine-vallente",
    github: "https://github.com/janinevallente",
  },

  skills: {
    core: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    frontend: ["JavaScript", "HTML", "CSS", "Bootstrap", "Material UI", "Ant Design"],
    mobile: ["Kotlin", "Firebase"],
    also: ["Vanilla JS", "Vite", "HTML", "CSS", "JavaScript", "Bootstrap", "Material UI", "Ant Design", "Java", "React Native", "Node.js", "MongoDB"],
  },

  projects: [
    {
      id: "01",
      title: "LumiBooth",
      category: "Web Application",
      description:
        "A soft and aesthetic photo strip booth web application that lets users capture photos, decorate them with stickers, choose a filter or strip theme, and download a polished photo strip.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      year: "2026",
      image: LumiBoothImg,
      hasUrl: true,
      url: "https://lumibooth.vercel.app/",
      hasGithub: true,
      github: "https://github.com/janinevallente/lumibooth-nextjs",
      featured: true,
      gradient: "from-emerald-50 to-teal-100",
      accent: "#2d7a5f",
    },
    {
      id: "02",
      title: "FinanceVue",
      category: "Frontend Dashboard",
      description:
        "A corporate financial monitoring dashboard providing insights into key metrics, transaction activity, and performance tracking through data visualization.",
      tags: ["React", "Vite", "TypeScript"],
      year: "2024",
      image: FinanceVueImg,
      hasUrl: false,
      url: "",
      hasGithub: true,
      github: "https://github.com/janinevallente/financevue-dashboard",
      featured: false,
      gradient: "from-stone-100 to-slate-100",
      accent: "#4a6fa5",
    },
    {
      id: "03",
      title: "Aquafusion Mobile",
      category: "Mobile Application",
      description:
        "An IoT-based aquaponics monitoring mobile application designed to track real-time aquaponic data — pH levels, TDS, water level, air humidity, water and air temperature with data visualization features to improve aquaponics farming efficiency and reduce manual monitoring.",
      tags: ["Kotlin", "Firebase", "Android Studio"],
      year: "2023 - 2024",
      image: AquafusionImg,
      hasUrl: false,
      url: "",
      hasGithub: true,
      github: "https://github.com/janinevallente/aquafusion-mobile-kotlin",
      featured: false,
      gradient: "from-amber-100 to-orange-100",
      accent: "#e8622a",
    },
    {
      id: "04",
      title: "Developer Portfolio",
      category: "Website",
      description:
        "A portfolio website that showcases my work, experience, and frontend expertise, featuring clean UI, smooth animations, and optimized performance using modern web technologies.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      year: "✦",
      image: PortfolioImg,
      hasUrl: false,
      url: "",
      hasGithub: false,
      github: "",
      featured: true,
      gradient: "from-emerald-50 to-teal-100",
      accent: "#e8622a",
    },
  ],

  experience: [
    {
      company: "MYT SoftDev Solutions, Inc.",
      role: "Junior Software Developer",
      period: "Jun 2024 — Oct 2025",
      description:
        "Developed and maintained frontend features for enterprise systems including ERP, EMR, Voting, and CTPL insurance platforms. Integrated REST APIs to ensure reliable data flow and resolved production issues to improve system stability and user experience. Collaborated with teams using Git to deliver consistent and high-quality releases.",
    },
    {
      company: "MYT SoftDev Solutions, Inc.",
      role: "Software Developer Intern",
      period: "Jan 2024 — Apr 2024",
      description:
        "Supported development and testing of web application modules while learning real-world workflows. Assisted in debugging issues and gained hands-on experience with version control, collaborative development, and production-level systems.",
    },
  ],

  marqueeItems: [
    "React", "Next.js", "TypeScript", "Tailwind", "Framer Motion",
    "GraphQL", "Node.js", "Figma", "Storybook", "Vitest",
    "Playwright", "WebGL", "PWA", "Accessibility", "Performance",
  ],
};
