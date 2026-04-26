"use client";

import { useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolio } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionReveal from "@/components/ui/SectionReveal";
import WordReveal from "@/components/ui/WordReveal";

// Staggered container
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const project = portfolio.projects.find((p) => p.id === slug);

  // Redirect if not found
  useEffect(() => {
    if (!project) router.replace("/");
  }, [project, router]);

  // Hero parallax
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  if (!project) return null;

  // Prev / next navigation
  const currentIndex = portfolio.projects.findIndex((p) => p.id === slug);
  const prevProject = portfolio.projects[currentIndex - 1] ?? null;
  const nextProject = portfolio.projects[currentIndex + 1] ?? null;

  return (
    <>
      {/* Page entrance — curtain lifts from top */}
      <motion.div
        className="fixed inset-0 z-[200] origin-top"
        style={{ backgroundColor: "#111110" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
      />

      <Navbar />

      <main style={{ backgroundColor: "var(--color-bg)" }}>

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className="relative h-[70vh] md:h-[85vh] overflow-hidden"
          style={{ backgroundColor: "#111110" }}
        >
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover"
              style={{ opacity: 0.5, objectPosition: "center 20%" }}
            />
          </motion.div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(17,17,16,0.3) 0%, rgba(17,17,16,0.15) 40%, rgba(17,17,16,0.75) 80%, rgba(17,17,16,1) 100%)",
            }}
          />

          {/* Hero content */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end px-8 md:px-12 pb-12 md:pb-16"
            style={{ opacity: heroOpacity }}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Back button */}
            <motion.div variants={fadeUp} className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:text-[#c8f04a]"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
              >
                <span>←</span> Back to Portfolio
              </Link>
            </motion.div>

            {/* Category + year */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <span
                className="text-xs tracking-[0.18em] uppercase px-3 py-1 border"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(255,255,255,0.5)",
                  borderColor: "rgba(255,255,255,0.15)",
                }}
              >
                {project.category}
              </span>
              <span
                className="text-xs"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.35)" }}
              >
                {project.year}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 9vw, 9rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                color: "white",
              }}
            >
              {project.title}
            </motion.h1>
          </motion.div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-20 md:py-28">

          {/* Top row: description + links */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24 mb-24">

            {/* Description */}
            <div>
              <SectionReveal delay={0}>
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-8"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                >
                  Overview
                </p>
              </SectionReveal>
              <WordReveal
                text={project.description}
                delay={0.05}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                  fontWeight: 600,
                  lineHeight: 1.35,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.015em",
                }}
              />
            </div>

            {/* Sidebar: tech + links */}
            <SectionReveal delay={0.15} direction="up">
              <div className="flex flex-col gap-10 lg:pt-12">

                {/* Tech stack */}
                <div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-5"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                  >
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 border"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-ink-muted)",
                          borderColor: "var(--color-border)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.hasUrl || project.hasGithub) && (
                  <div>
                    <p
                      className="text-xs tracking-[0.2em] uppercase mb-5"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                    >
                      Links
                    </p>
                    <div className="flex flex-col gap-3">
                      {project.hasUrl && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-between px-5 py-3.5 border transition-all duration-300 hover:bg-ink hover:border-ink"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.85rem",
                            color: "var(--color-ink)",
                            borderColor: "var(--color-border)",
                          }}
                        >
                          <span className="transition-colors duration-300 group-hover:text-bg">View Live Site</span>
                          <span className="transition-all duration-300 group-hover:text-bg group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                        </a>
                      )}
                      {project.hasGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-between px-5 py-3.5 border transition-all duration-300 hover:bg-ink hover:border-ink"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.85rem",
                            color: "var(--color-ink)",
                            borderColor: "var(--color-border)",
                          }}
                        >
                          <span className="transition-colors duration-300 group-hover:text-bg">View on GitHub</span>
                          <span className="transition-all duration-300 group-hover:text-bg group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </SectionReveal>
          </div>

          {/* Full-width project image */}
          <SectionReveal direction="scale" delay={0}>
            <div
              className="relative w-full overflow-hidden mb-24"
              style={{ aspectRatio: "16/9", borderRadius: 4 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={95}
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </SectionReveal>

          {/* ── Prev / Next navigation ── */}
          <div
            className="border-t pt-14"
            style={{ borderColor: "var(--color-border)" }}
          >
            <SectionReveal delay={0}>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-10"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
              >
                More Projects
              </p>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevProject ? (
                <SectionReveal delay={0.05} direction="up">
                  <Link
                    href={`/projects/${prevProject.id}`}
                    className="group flex flex-col gap-4 p-6 border transition-all duration-300 hover:border-ink hover:bg-ink"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <span
                      className="text-xs tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.4)]"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                    >
                      ← Previous
                    </span>
                    <span
                      className="transition-colors duration-300 group-hover:text-white"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        color: "var(--color-ink)",
                      }}
                    >
                      {prevProject.title}
                    </span>
                    <span
                      className="text-xs transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.35)]"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                    >
                      {prevProject.category}
                    </span>
                  </Link>
                </SectionReveal>
              ) : (
                <div />
              )}

              {nextProject ? (
                <SectionReveal delay={0.1} direction="up">
                  <Link
                    href={`/projects/${nextProject.id}`}
                    className="group flex flex-col gap-4 p-6 border text-right transition-all duration-300 hover:border-ink hover:bg-ink"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <span
                      className="text-xs tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.4)]"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                    >
                      Next →
                    </span>
                    <span
                      className="transition-colors duration-300 group-hover:text-white"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        color: "var(--color-ink)",
                      }}
                    >
                      {nextProject.title}
                    </span>
                    <span
                      className="text-xs transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.35)]"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                    >
                      {nextProject.category}
                    </span>
                  </Link>
                </SectionReveal>
              ) : (
                <div />
              )}
            </div>

            {/* Back to all projects */}
            <SectionReveal delay={0.15} direction="fade">
              <div className="mt-14 flex justify-center">
                <Link
                  href="/#projects"
                  className="group inline-flex items-center gap-2 text-sm border-b pb-0.5 transition-all duration-300 hover:gap-4"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-ink)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  View all projects
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
