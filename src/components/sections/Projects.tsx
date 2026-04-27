"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import SectionReveal from "@/components/ui/SectionReveal";
import FadeUp from "@/components/ui/FadeUp";
import RevealLine from "@/components/ui/RevealLine";
import FloatingImageCard from "@/components/ui/FloatingImageCard";
import CustomCursor from "@/components/ui/CustomCursor";
import { portfolio } from "@/lib/data";

export default function Projects() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  });

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
  }, []);

  const handleProjectClick = useCallback(
    (slug: string) => {
      router.push(`/projects/${slug}`);
    },
    [router]
  );

  // Dismiss floating card + cursor when section scrolls out of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setHovered((prev) => ({ ...prev, active: false }));
        }
      },
      { threshold: 0 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-bg py-28 md:py-40"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setHovered((prev) => ({ ...prev, active: false }))}
    >
      <div className="container max-w-[1400px] mx-auto px-8 md:px-12">

        {/* Label */}
        <FadeUp>
          <p className="mb-16 text-xs tracking-widest-5 uppercase font-body text-ink-muted">
            03 — Projects
          </p>
        </FadeUp>

        {/* Heading */}
        <div className="mb-20">
          <WordReveal
            text="Featured Projects"
            delay={0.1}
            className="font-display font-bold text-ink text-[clamp(2.5rem,6vw,5.5rem)] tracking-[-0.03em] leading-[1.2]"
          />
        </div>

        {/* Column headers */}
        <SectionReveal delay={0.15} direction="fade">
          <div className="hidden md:flex items-center justify-between pb-4 cursor-default">
            <div className="flex items-center gap-5 flex-1 min-w-0">
              <span className="font-body text-xs tracking-widest-4 uppercase w-6 flex-shrink-0 text-ink-muted">
                #
              </span>
              <span className="font-body text-xs tracking-widest-4 uppercase text-ink-muted">
                Title
              </span>
            </div>
            <div className="flex items-center gap-8 flex-shrink-0">
              <span className="font-body text-xs tracking-widest-4 uppercase w-36 text-left text-ink-muted">
                Category
              </span>
              <span className="font-body text-xs tracking-widest-4 uppercase w-36 text-center text-ink-muted">
                Year
              </span>
            </div>
          </div>
        </SectionReveal>

        {/* Project list */}
        <ul
          className="group cursor-none"
          onPointerLeave={() => setHovered((prev) => ({ ...prev, active: false }))}
        >
          {portfolio.projects.map((project, i) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
            >
              <RevealLine />
              <div
                className="relative py-7 md:py-8 flex items-center justify-between gap-6 cursor-none transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100"
                onPointerEnter={() => setHovered({ active: true, index: i })}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Left: index + title */}
                <div className="flex items-baseline gap-5 min-w-0 flex-1">
                  <span className="font-body text-xs flex-shrink-0 tabular-nums text-ink-muted">
                    {project.id}
                  </span>
                  <h3 className="font-display font-semibold text-ink text-[clamp(1.6rem,3.5vw,3rem)] tracking-[-0.02em] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>

                {/* Right: meta (desktop only) */}
                <div className="hidden md:flex items-center gap-8 flex-shrink-0">
                  <span className="font-body text-xs w-36 text-left uppercase text-ink-muted">
                    {project.category}
                  </span>
                  <span className="font-body text-xs tabular-nums w-36 text-center text-ink-muted">
                    {project.year}
                  </span>
                </div>

                {/* Mobile arrow */}
                <span className="md:hidden text-sm flex-shrink-0 cursor-none text-ink-muted">
                  ↗
                </span>
              </div>
            </motion.li>
          ))}
          <RevealLine />
        </ul>
      </div>

      {/* Floating image card */}
      <FloatingImageCard
        x={cursor.x}
        y={cursor.y}
        active={hovered.active}
        index={hovered.index}
        projects={portfolio.projects}
      />

      {/* Custom cursor */}
      <CustomCursor
        x={cursor.x}
        y={cursor.y}
        active={hovered.active}
        label="View"
      />
    </section>
  );
}