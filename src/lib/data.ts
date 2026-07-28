import ByteflowImg from "@/assets/images/byteflow.webp";
import ByteflowImg2 from "@/assets/images/byteflow2.webp";
import ByteflowImg3 from "@/assets/images/byteflow3.webp";
import ByteflowImg4 from "@/assets/images/byteflow4.webp";
import ByteflowImg5 from "@/assets/images/byteflow5.webp";
import ByteflowImg6 from "@/assets/images/byteflow6.webp";
import FinanceVueImg from "@/assets/images/financevue.webp";
import AquafusionImg from "@/assets/images/aquafusion.webp";
import PortfolioImg from "@/assets/images/portfolio.webp";
import PortfolioImg2 from "@/assets/images/portfolio2.webp";
import PortfolioImg3 from "@/assets/images/portfolio3.webp";
import PortfolioImg4 from "@/assets/images/portfolio4.webp";
import PortfolioImg5 from "@/assets/images/portfolio5.webp";
import PortfolioImg6 from "@/assets/images/portfolio6.webp";
import ContibutorImg from "@/assets/images/contributor1.webp";
import ContibutorImg2 from "@/assets/images/contributor2.webp";

export const portfolio = {
  name: "Janine Vallente",
  role: "Frontend Developer",
  tagline: "Portfolio Website",
  email: "janinexvallente@gmail.com",
  location: "Cebu City, Philippines",
  social: {
    linkedIn: "https://linkedin.com/in/janine-christine-vallente",
    gitHub: "https://github.com/janinevallente",
  },

  skills: {
    // core: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    // frontend: ["JavaScript", "HTML", "CSS", "Bootstrap", "Material UI", "Ant Design"],
    // mobile: ["Kotlin", "Firebase"],
    // also: ["Vite", "Vue", "Nuxt", "HTML", "CSS", "JavaScript", "Bootstrap", "Material UI", "Ant Design", "Java", "React Native", "Node.js", "MongoDB"],
    // technologies: [
    //   "HTML",
    //   "CSS",
    //   "JavaScript",
    //   "TypeScript",
    //   "Bootstrap",
    //   "Tailwind CSS",
    //   "Material UI",
    //   "Ant Design",
    //   "Kotlin",
    //   "Firebase",
    //   "React",
    //   "Next.js",
    //   "Vue",
    //   "Nuxt",
    //   "Vite",
    //   "Node.js",
    //   "MongoDB",
    //   "Java",
    //   "React Native",
    //   "Git",
    //   "Figma",
    //   "Vercel",
    //   "Netlify",
    // ],
    // icons: [
    //   "html5/html5-original",
    //   "css3/css3-original",
    //   "javascript/javascript-original",
    //   "typescript/typescript-original",
    //   "bootstrap/bootstrap-original",
    //   "tailwindcss/tailwindcss-original",
    //   "materialui/materialui-original",
    //   "antdesign/antdesign-original",
    //   "kotlin/kotlin-original",
    //   "firebase/firebase-original",
    //   "react/react-original",
    //   "nextjs/nextjs-original",
    //   "vuejs/vuejs-original",
    //   "nuxtjs/nuxtjs-original",
    //   "vitejs/vitejs-original",
    //   "nodejs/nodejs-original",
    //   "mongodb/mongodb-original",
    //   "java/java-original",
    //   "react/react-original",
    //   "git/git-original",
    //   "figma/figma-original",
    //   "vercel/vercel-original",
    //   "netlify/netlify-original",
    // ],

    whatICanDo: [
      {
        id: "1",
        area: "Front-end Web Development",
        detail:
          "Building responsive and user-friendly web applications using modern front-end technologies with a focus on usability, performance, and clean UI implementation.",
      },
      {
        id: "2",
        area: "Mobile Application Development",
        detail:
          "Building Android and cross-platform mobile applications using Kotlin, React Native, Firebase, and MongoDB while learning application architecture and data flow.",
      },
      {
        id: "3",
        area: "Domain Operations & Compliance",
        detail:
          "Handling domain registration, renewals, ownership transfers, claims, and access recovery with a strong focus on process accuracy and compliance.",
      },
      {
        id: "4",
        area: "DNS & Web Hosting Support",
        detail:
          "Working with DNS configurations (including nameserver updates and DNSSEC), domain management, and web hosting environments such as cPanel for website deployment and basic troubleshooting.",
      },
      // {
      //   num: "05",
      //   area: "Systems & Infrastructure",
      //   detail:
      //     "Knowledgeable in networking fundamentals, system environments, deployment workflows, and how infrastructure components interact within modern IT operations.",
      // },
      // {
      //   num: "06",
      //   area: "Database & SQL",
      //   detail:
      //     "Comfortable writing SQL queries and managing relational databases such as MySQL through academic, personal, and development-related projects.",
      // },
    ],
  },

  projects: [
    {
      id: "01",
      title: "Byteflow",
      category: "Developer Toolkit",
      description:
        "A privacy-first toolkit for developers and IT professionals featuring browser-based utilities for image processing, design workflows, networking, domain operations, web performance, and security. Byteflow brings essential development and tech tools into a single fast, lightweight application built with React, Vite, and Tailwind CSS.",
      tags: ["React", "Vite", "Javascript", "Tailwind CSS", "Netlify"],
      year: "2026 - Present",
      images: [
        ByteflowImg,
        ByteflowImg2,
        ByteflowImg3,
        ByteflowImg4,
        ByteflowImg5,
        ByteflowImg6,
      ],
      hasUrl: true,
      url: "https://byteflow-tools.netlify.app/",
      hasGithub: true,
      github: "https://github.com/janinevallente/byteflow",
      hasPublication: false,
      publication: "",
      featured: true,
      hasContibutors: false,
      contributors: [],
      contributorsImg: [],
      contributorsLinkedIn: [],
    },
    {
      id: "02",
      title: "Portfolio Website",
      category: "Personal Portfolio",
      description:
        "This responsive portfolio website showcases my work, experience, and front-end expertise. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations, excellent performance, and a clean, professional user experience.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      year: "2026",
      images: [
        PortfolioImg,
        PortfolioImg2,
        PortfolioImg3,
        PortfolioImg4,
        PortfolioImg5,
        PortfolioImg6,
      ],
      hasUrl: false,
      url: "",
      hasGithub: true,
      github: "https://github.com/janinevallente/janinevallente-portfolio",
      hasPublication: false,
      publication: "",
      featured: true,
      hasContibutors: false,
      contributors: [],
      contributorsImg: [],
      contributorsLinkedIn: [],
    },
    {
      id: "03",
      title: "FinanceVue",
      category: "Financial Analytics Dashboard",
      description:
        "A corporate financial monitoring dashboard that visualizes key financial statements — income statement, balance sheet, and cash flow — through interactive charts and KPI summary cards. Supports multi-entity filtering, year-over-year comparisons, and Excel file uploads processed by a custom Flask API. Built with React, Vite, and TypeScript to deliver clear insights and data visualization for decision-making.",
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
      hasContibutors: true,
      contributors: ["Elijah Nicholas Esguerra (Backend Developer)"],
      contributorsImg: [ContibutorImg],
      contributorsLinkedIn: ["https://www.linkedin.com/in/en-esguerra/"],
    },
    {
      id: "04",
      title: "AquaFusion Mobile",
      category: "IoT Monitoring Mobile App",
      description:
        "An IoT-based aquaponics monitoring mobile app that tracks real-time sensor data (pH levels, TDS, water level, temperature, and humidity) with intuitive graphs and instant notifications. Developed in Kotlin with Firebase to help users improve farming efficiency and reduce manual monitoring.",
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
      hasContibutors: true,
      contributors: [
        "Junester Ursora II (IoT Integration Developer)",
        "Elijah Nicholas Esguerra (Web Developer for Aquafusion Web)",
      ],
      contributorsImg: [ContibutorImg2, ContibutorImg],
      contributorsLinkedIn: [
        "https://www.linkedin.com/in/junester/",
        "https://www.linkedin.com/in/en-esguerra/",
      ],
    },
  ],

  experience: [
    {
      company: "Newfold Digital Philippines Inc.",
      role: "Domain Support Associate",
      period: "Jun 2026 — Present",
      description: [
        "Manage end-to-end domain lifecycle operations, including registrations, renewals, transfers, ownership updates, and claims",
        "Provision domain services, activate domain add-ons, and facilitate secure domain access recovery",
        "Configure, validate, and troubleshoot DNS settings, including nameserver changes and DNSSEC implementation",
        "Maintain compliance with registry and registrar policies while ensuring accurate and efficient domain operations",
      ],
      technologies: [
        "DNS",
        "Web Hosting",
        "Domain Management",
        "Technical Support",
        "Customer Support",
        "Troubleshooting",
      ],
    },
    {
      company: "MYT SoftDev Solutions Inc.",
      role: "Junior Software Developer",
      period: "Jun 2024 — Oct 2025",
      description: [
        "Developed and enhanced front-end features for web platforms across enterprise, healthcare, logistics, insurance, and voting systems, improving usability, responsiveness, and overall user experience",
        " Integrated RESTful APIs to enable efficient data flow and enhance system reliability",
        " Resolved development and post-deployment issues to ensure stable and consistent application performance",
        " Assisted in deployment activities and gained exposure to cPanel environments, including basic hosting, deployment coordination, and production issue verification",
        " Contributed to writing documentation to support team knowledge sharing and project continuity",
      ],
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
        "AntDesign",
        "Git",
      ],
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
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "AntDesign",
        "Node.js",
        "PHP",
        "MySQL",
        "Git",
      ],
    },
  ],
};
