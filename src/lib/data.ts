import LumiBoothImg from "@/assets/images/lumibooth.webp"
import LumiBoothImg2 from "@/assets/images/lumibooth2.webp"
import LumiBoothImg3 from "@/assets/images/lumibooth3.webp"
import LumiBoothImg4 from "@/assets/images/lumibooth4.webp"
import PokedexHubImg from "@/assets/images/pokedexhub.webp"
import PokedexHubImg2 from "@/assets/images/pokedexhub2.webp"
import FinanceVueImg from "@/assets/images/financevue.webp"
import AquafusionImg from "@/assets/images/aquafusion.webp"
import PortfolioImg from "@/assets/images/portfolio.webp"
import PortfolioImg2 from "@/assets/images/portfolio2.webp"
import PortfolioImg3 from "@/assets/images/portfolio3.webp"
import PortfolioImg4 from "@/assets/images/portfolio4.webp"
import PortfolioImg5 from "@/assets/images/portfolio5.webp"
import PortfolioImg6 from "@/assets/images/portfolio6.webp"

export const portfolio = {
  name: "Janine Vallente",
  role: "Frontend Developer",
  tagline: "I build interfaces people remember.",
  email: "janinexvallente@gmail.com",
  location: "Cebu City, Philippines",
  resumeUrl: "https://drive.google.com/file/d/1TcG5-064fDYwgyvobND2YveHSONgL-4p/view?usp=sharing",

  social: {
    linkedin: "https://linkedin.com/in/janine-christine-vallente",
    github: "https://github.com/janinevallente",
  },

  skills: {
    // core: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    // frontend: ["JavaScript", "HTML", "CSS", "Bootstrap", "Material UI", "Ant Design"],
    // mobile: ["Kotlin", "Firebase"],
    // also: ["Vite", "Vue", "Nuxt", "HTML", "CSS", "JavaScript", "Bootstrap", "Material UI", "Ant Design", "Java", "React Native", "Node.js", "MongoDB"],
    technologies: [
      "HTML", "CSS", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS",
      "Material UI", "Ant Design", "Kotlin", "Firebase", "React", "Next.js",
      "Vue", "Nuxt", "Vite", "Node.js", "MongoDB", "Java", "React Native", "Git", "Figma", "Vercel", "Netlify",
    ],
    icons: [
      "html5/html5-original",
      "css3/css3-original",
      "javascript/javascript-original",
      "typescript/typescript-original",
      "bootstrap/bootstrap-original",
      "tailwindcss/tailwindcss-original",
      "materialui/materialui-original",
      "antdesign/antdesign-original",
      "kotlin/kotlin-original",
      "firebase/firebase-original",
      "react/react-original",
      "nextjs/nextjs-original",
      "vuejs/vuejs-original",
      "nuxtjs/nuxtjs-original",
      "vitejs/vitejs-original",
      "nodejs/nodejs-original",
      "mongodb/mongodb-original",
      "java/java-original",
      "react/react-original",
      "git/git-original",
      "figma/figma-original",
      "vercel/vercel-original",
      "netlify/netlify-original",
    ],
  },

  projects: [
    {
      id: "01",
      title: "LumiBooth",
      category: "Web Application",
      description: "A beautiful and intuitive photo strip booth web application that lets users capture photos, decorate them with stickers and filters, choose creative strip formats, and download polished results. Built with Next.js, TypeScript and Tailwind CSS for a smooth, responsive experience with fast performance and clean state management.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      year: "2026",
      images: [LumiBoothImg, LumiBoothImg2, LumiBoothImg3, LumiBoothImg4],
      hasUrl: true,
      url: "https://lumibooth.vercel.app/",
      hasGithub: true,
      github: "https://github.com/janinevallente/lumibooth-nextjs",
      featured: true,
    },
    {
      id: "02",
      title: "Pokédex Hub",
      category: "Web Application",
      description: "A modern Pokédex web application powered by the PokéAPI, allowing users to browse more than 1,000 Pokémon with advanced filtering by type and generation, detailed stat views, evolution chains, and encounter information. Implemented with Nuxt, TypeScript, and optimized for fast loading and smooth navigation.",
      tags: ["Nuxt", "TypeScript", "CSS", "PokéAPI", "Vercel"],
      year: "2026",
      images: [PokedexHubImg, PokedexHubImg2],
      hasUrl: true,
      url: "https://pokedexhub.vercel.app/",
      hasGithub: true,
      github: "https://github.com/janinevallente/pokedex-app",
      hasPublication: false,
      publication: "",
      featured: true,
    },
    {
      id: "03",
      title: "Portfolio Website",
      category: "Website",
      description: "This responsive portfolio website showcases my work, experience, and frontend expertise. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations, excellent performance, and a clean, professional user experience.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      year: "2026",
      images: [PortfolioImg, PortfolioImg2, PortfolioImg3, PortfolioImg4, PortfolioImg5, PortfolioImg6],
      hasUrl: false,
      url: "",
      hasGithub: true,
      github: "https://github.com/janinevallente/janinevallente-portfolio",
      hasPublication: false,
      publication: "",
      featured: true,
    },
    {
      id: "04",
      title: "FinanceVue",
      category: "Web Dashboard",
      description: "A corporate financial monitoring dashboard that visualizes key financial statements — income statement, balance sheet, and cash flow — through interactive charts and KPI summary cards. Supports multi-entity filtering, year-over-year comparisons, and Excel file uploads processed by a custom Flask API. Built with React, Vite, and TypeScript to deliver clear insights and data visualization for decision-making.",
      tags: ["React", "Vite", "TypeScript", "Python"],
      year: "2024",
      images: [FinanceVueImg],
      hasUrl: false,
      url: "",
      hasGithub: true,
      github: "https://github.com/janinevallente/financevue-dashboard",
      hasPublication: false,
      publication: "",
      featured: false,
    },
    {
      id: "05",
      title: "AquaFusion Mobile",
      category: "Mobile Application",
      description: "An IoT-based aquaponics monitoring mobile app that tracks real-time sensor data (pH levels, TDS, water level, temperature, and humidity) with intuitive graphs and instant notifications. Developed in Kotlin with Firebase to help users improve farming efficiency and reduce manual monitoring.",
      tags: ["Kotlin", "Firebase", "Android Studio"],
      year: "2023 - 2024",
      images: [AquafusionImg],
      hasUrl: false,
      url: "",
      hasGithub: true,
      github: "https://github.com/janinevallente/aquafusion-mobile-kotlin",
      hasPublication: true,
      publication: "https://zenodo.org/records/14847793",
      featured: false,
    },
  ],

  experience: [
    {
      company: "Lennor Metier Consulting Philippines Inc.",
      role: "Oracle EPM Cloud Consultant (Trainee)",
      period: "Feb 2026 — Mar 2026",
      description: [
        "Participated in structured training on Oracle EPM Cloud Planning, focusing on enterprise financial and workforce planning concepts",
        "Explored configuration fundamentals of planning applications, including dimensions, metadata, forms, and business rules",
        "Made web forms and performed data validation within Oracle EPM metadata",
        "Gained hands-on exposure to enterprise financial systems and business application processes",
      ],
      technologies: [""],
    },
    {
      company: "MYT SoftDev Solutions Inc.",
      role: "Junior Software Developer",
      period: "Jun 2024 — Oct 2025",
      description: [
        "Developed and maintained frontend features for enterprise systems including ERP, EMR, Voting, and CTPL insurance platforms.",
        "Integrated REST APIs to ensure reliable data flow between frontend and backend services.",
        "Resolved production issues to improve system stability and overall user experience.",
        "Collaborated with cross-functional teams using Git to deliver consistent and high-quality releases.",
      ],
      technologies: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "AntDesign", "Git"],
    },
    {
      company: "MYT SoftDev Solutions Inc.",
      role: "Software Developer Intern",
      period: "Jan 2024 — Apr 2024",
      description: [
        "Supported development and testing of web application modules while learning real-world workflows.",
        "Assisted in debugging issues across the codebase to maintain system reliability.",
        "Gained hands-on experience with version control, collaborative development, and production-level systems.",
      ],
      technologies: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap", "AntDesign", "Node.js", "PHP", "MySQL", "Git"],
    },
  ],
};