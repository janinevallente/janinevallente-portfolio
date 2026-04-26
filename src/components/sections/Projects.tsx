"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion} from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import SectionReveal from "@/components/ui/SectionReveal";
import FadeUp from "@/components/ui/FadeUp"
import RevealLine from "@/components/ui/RevealLine"
import FloatingImageCard from "@/components/ui/FloatingImageCard"
import CustomCursor from "@/components/ui/CustomCursor"
import { portfolio } from "@/lib/data";

export default function Projects() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  });

  // Track pointer position globally while inside the section
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
  }, []);

  const handleProjectClick = useCallback(
    (slug: string) => {
      router.push(`/projects/${slug}`);
    },
    [router]
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-bg py-28 md:py-40"
      onPointerMove={handlePointerMove}
    >
      <div className="container max-w-[1400px] mx-auto px-8 md:px-12">

        {/* Label */}
        <FadeUp>
          <p className="mb-16 text-xs tracking-[0.2em] uppercase font-body text-ink-muted">
            03 — Projects
          </p>
        </FadeUp>

        {/* Heading */}
        <div className="mb-20 md:mb-20">
          <WordReveal
            text="Featured Projects"
            delay={0.1}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              color: "var(--color-ink)",
            }}
          />
        </div>

        {/* ── Column headers ── */}
        <SectionReveal delay={0.15} direction="fade">
          <div
            className="hidden md:flex items-center justify-between pb-4"
            style={{ cursor: "default" }}
          >
            {/* Left: # + Title */}
            <div className="flex items-center gap-5 flex-1 min-w-0">
              <span
                className="text-xs tracking-[0.18em] uppercase w-6 flex-shrink-0"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
              >
                #
              </span>
              <span
                className="text-xs tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
              >
                Title
              </span>
            </div>
            {/* Right: Category + Year + Links */}
            <div className="flex items-center gap-8 flex-shrink-0">
              <span
                className="text-xs tracking-[0.18em] uppercase w-36 text-left"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
              >
                Category
              </span>
              <span
                className="text-xs tracking-[0.18em] uppercase w-36 text-center"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
              >
                Year
              </span>
            </div>
          </div>
        </SectionReveal>

        {/* ── Project list ── */}
        <ul
          className="group"
          style={{ cursor: "none" }}
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
                className="relative py-7 md:py-8 flex items-center justify-between gap-6 transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100"
                style={{ cursor: "none" }}
                onPointerEnter={() => setHovered({ active: true, index: i })}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Left: index + title */}
                <div className="flex items-baseline gap-5 min-w-0 flex-1">
                  <span
                    className="text-xs flex-shrink-0 tabular-nums"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                  >
                    {project.id}
                  </span>
                  <h3
                    className="transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      color: "var(--color-ink)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Right: meta (desktop only) */}
                <div className="hidden md:flex items-center gap-8 flex-shrink-0">
                  <span
                    className="text-xs w-36 text-left uppercase"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="text-xs tabular-nums w-36 text-center"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Mobile arrow */}
                <span
                  className="md:hidden text-sm flex-shrink-0"
                  style={{ color: "var(--color-ink-muted)", cursor: "none" }}
                >
                  ↗
                </span>
              </div>
            </motion.li>
          ))}
          <RevealLine />
        </ul>
      </div>

      {/* ── Floating image card (cursor-follow) ── */}
      <FloatingImageCard
        x={cursor.x}
        y={cursor.y}
        active={hovered.active}
        index={hovered.index}
        projects={portfolio.projects}
      />

      {/* ── Custom "View" cursor circle ── */}
      <CustomCursor
        x={cursor.x}
        y={cursor.y}
        active={hovered.active}
        label="View"
      />
    </section>
  );
}