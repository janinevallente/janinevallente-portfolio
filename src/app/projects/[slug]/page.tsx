"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionReveal from "@/components/ui/SectionReveal";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import RevealLine from "@/components/ui/RevealLine";
import { portfolio } from "@/lib/data";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const project = portfolio.projects.find((p) => p.id === slug);

  useEffect(() => {
    if (!project) router.replace("/");
  }, [project, router]);

  if (!project) return null;

  const currentIndex = portfolio.projects.findIndex((p) => p.id === slug);
  const prevProject = portfolio.projects[currentIndex - 1] ?? null;
  const nextProject = portfolio.projects[currentIndex + 1] ?? null;

  return (
    <>
      {/* Page entrance curtain */}
      <motion.div
        className="fixed inset-0 z-[200] origin-top bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
      />

      <Navbar />

      <main className="min-h-screen bg-bg">

        {/* ── Header ── */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 pt-32 md:pt-40 pb-0">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="mb-14"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-body text-xs tracking-widest-3 uppercase text-ink-muted transition-all duration-200 hover:gap-3"
            >
              ← Back to Projects
            </Link>
          </motion.div>

          {/* Giant title */}
          <div className="mb-16 md:mb-20">
            <WordReveal
              text={project.title}
              delay={0.4}
              className="font-display font-bold text-ink text-[clamp(3rem,9vw,9rem)] tracking-[-0.03em] leading-[0.9]"
            />
          </div>

          {/* ── Three-column metadata ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 px-2">

            {/* Category */}
            <div className="py-6 md:pr-10">
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="font-body font-medium text-xs tracking-[0.05em] uppercase mb-4 text-ink-muted"
              >
                Category
              </motion.p>
              <RevealLine delay={0.6} />
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
                className="mt-5 font-display font-medium text-ink text-[clamp(1rem,1.4vw,1.2rem)] tracking-[-0.01em]"
              >
                {project.category}
              </motion.p>
            </div>

            {/* Tech stack */}
            <div className="py-6 md:px-10">
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="font-body font-medium text-xs tracking-[0.05em] uppercase mb-4 text-ink-muted"
              >
                Tech Stack
              </motion.p>
              <RevealLine delay={0.63} />
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
                className="mt-5 flex flex-wrap gap-1.5"
              >
                {project.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className="font-display font-medium text-ink text-[clamp(1rem,1.4vw,1.2rem)] tracking-[-0.01em]"
                  >
                    {tag}{i < project.tags.length - 1 && (
                      <span className="inline-block w-1.5 h-1.5 bg-ink/70 rounded-full ml-2 mb-0.5" />
                    )}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Year */}
            <div className="py-6 md:pl-10">
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="font-body font-medium text-xs tracking-[0.05em] uppercase mb-4 text-ink-muted"
              >
                Year
              </motion.p>
              <RevealLine delay={0.66} />
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.78 }}
                className="mt-5 font-display font-medium text-ink text-[clamp(1rem,1.4vw,1.2rem)] tracking-[-0.01em]"
              >
                {project.year}
              </motion.p>
            </div>
          </div>
        </div>

        {/* ── Image collage ── */}
        <div className="mt-16 md:mt-20 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto">
          <div className={`grid ${project?.images?.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-2 sm:gap-3`}>
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.65 + i * 0.1 }}
                className="relative overflow-hidden"
                style={{
                  aspectRatio: project?.images?.length === 1 ? "19/10" : "2/1",
                }}
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  priority={i === 0}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1400px) calc((100vw - 6rem) / 2), calc(1400px / 2)"
                  className="object-cover object-top"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Overview + Prev/Next ── */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-20 md:py-28">

          {/* Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-24 mb-12 md:mb-16">
            <SectionReveal delay={0} direction="fade">
              <p className="font-body text-xs tracking-widest-5 uppercase pt-1 text-ink-muted">
                Overview
              </p>
            </SectionReveal>
            <div>
              <WordReveal
                text={project.description}
                delay={0.05}
                className="font-display font-semibold text-ink text-[clamp(1.25rem,2.2vw,1.9rem)] leading-[1.45] tracking-[-0.015em]"
              />
              {/* Links */}
              <div className="mt-10">
                <FadeUp delay={0.05}>
                  <div className="flex items-center gap-3 mb-20 md:mb-28">
                    {project.title === "Portfolio Website" && (
                      <>
                        <div className="group bg-accent inline-flex items-center gap-2 px-5 py-2.5 transition-all duration-300 hover:opacity-80 font-body font-semibold uppercase text-black text-[0.75rem] tracking-[0.1em]">
                          Current Live Site
                        </div>
                      </>
                    )}
                    {project.hasUrl && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-accent inline-flex items-center gap-2 px-5 py-2.5 transition-all duration-300 hover:opacity-80 font-body font-semibold uppercase text-black text-[0.75rem] tracking-[0.1em]"
                      >
                        Live Site
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                      </a>
                    )}
                    {project?.hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-ink inline-flex items-center gap-2 px-5 py-2.5 transition-all duration-300 hover:opacity-80 font-body font-semibold uppercase text-white text-[0.75rem] tracking-[0.1em]"
                      >
                        GitHub
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                      </a>
                    )}
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          {(prevProject || nextProject) && (
            <div className="pt-7 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {prevProject ? (
                  <FadeUp delay={0.07}>
                    <Link
                      href={`/projects/${prevProject?.id}`}
                      className="group flex flex-col gap-2 py-8 md:pr-10 md:border-r border-border transition-colors duration-300 hover:bg-ink"
                    >
                      <span className="ms-3 font-body text-xs tracking-[0.15em] uppercase text-ink-muted transition-colors duration-300 group-hover:text-white/60">
                        ← Previous
                      </span>
                      <span className="ms-3 font-display font-bold text-ink text-[clamp(1.25rem,2.5vw,1.8rem)] tracking-[-0.02em] leading-[1.2] transition-colors duration-300 group-hover:text-white">
                        {prevProject?.title}
                      </span>
                    </Link>
                  </FadeUp>
                ) : (
                  <div />
                )}
                {nextProject ? (
                  <FadeUp delay={0.12}>
                    <Link
                      href={`/projects/${nextProject?.id}`}
                      className="group flex flex-col gap-2 py-8 md:pl-10 md:text-right transition-colors duration-300 hover:bg-ink"
                    >
                      <span className="me-3 font-body text-xs tracking-[0.15em] uppercase text-ink-muted transition-colors duration-300 group-hover:text-white/60">
                        Next →
                      </span>
                      <span className="me-3 font-display font-bold text-ink text-[clamp(1.25rem,2.5vw,1.8rem)] tracking-[-0.02em] leading-[1.2] transition-colors duration-300 group-hover:text-white">
                        {nextProject?.title}
                      </span>
                    </Link>
                  </FadeUp>
                ) : (
                  <div />
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}