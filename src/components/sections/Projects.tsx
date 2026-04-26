"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { portfolio } from "@/lib/data";
import WordReveal from "@/components/ui/WordReveal";
import SectionReveal from "@/components/ui/SectionReveal";

type Project = (typeof portfolio.projects)[number];

function RevealLine({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="overflow-hidden h-px w-full">
      <motion.div
        className="h-full w-full"
        style={{ backgroundColor: "var(--color-border)", transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      />
    </div>
  );
}

/**
 * Custom cursor circle — replaces the default cursor inside the project list.
 * Rendered in a portal-like fixed div so it's always on top.
 */
function CustomCursor({
  x,
  y,
  active,
  label,
}: {
  x: number;
  y: number;
  active: boolean;
  label: string;
}) {
  return (
    <motion.div
      className="fixed pointer-events-none z-[60] flex items-center justify-center rounded-full"
      style={{
        width: 90,
        height: 90,
        backgroundColor: "#c8f04a",
        top: 0,
        left: 0,
        x: x - 45,
        y: y - 45,
      }}
      animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ fontFamily: "var(--font-body)", color: "#111110" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

/**
 * Floating image card that follows the cursor.
 * Stacks all project images and slides vertically to show the active one.
 */
function FloatingImageCard({
  x,
  y,
  active,
  index,
  projects,
}: {
  x: number;
  y: number;
  active: boolean;
  index: number;
  projects: Project[];
}) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 overflow-hidden rounded-sm shadow-2xl"
      style={{
        width: 320,
        height: 210,
        top: 0,
        left: 0,
        x: x + 24,   // offset to the right of cursor
        y: y - 105,  // vertically centred on cursor
      }}
      animate={{ scale: active ? 1 : 0.85, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Slide stack — snaps to active project image */}
      <motion.div
        style={{ height: `${projects.length * 100}%` }}
        animate={{ y: `${(-index / projects.length) * 100}%` }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {projects.map((p) => (
          <div
            key={p.id}
            className="relative w-full"
            style={{ height: `${100 / projects.length}%` }}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

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
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">

        {/* Label */}
        <SectionReveal delay={0}>
          <p
            className="mb-12 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
          >
            03 — Projects
          </p>
        </SectionReveal>

        <RevealLine delay={0.05} />

        {/* Heading */}
        <div className="mt-14 mb-16 md:mb-20 max-w-2xl">
          <WordReveal
            text="Selected Work"
            delay={0.1}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--color-ink)",
            }}
          />
        </div>

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
                      fontSize: "clamp(2rem, 5.5vw, 5.5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
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
                    className="text-sm"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="text-sm tabular-nums"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                  >
                    {project.year}
                  </span>
                  {/* Small link buttons — stop click propagation so they open separately */}
                  <div
                    className="flex gap-2"
                    onClick={(e) => e.stopPropagation()}
                    style={{ cursor: "auto" }}
                    onPointerEnter={() => setHovered((prev) => ({ ...prev, active: false }))}
                    onPointerLeave={() => setHovered((prev) => ({ ...prev, active: true }))}
                  >
                    {project.hasUrl && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 border transition-all duration-200 hover:bg-ink hover:text-bg hover:border-ink"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-ink-muted)",
                          borderColor: "var(--color-border)",
                          cursor: "auto",
                        }}
                      >
                        Live ↗
                      </a>
                    )}
                    {project.hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 border transition-all duration-200 hover:bg-ink hover:text-bg hover:border-ink"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-ink-muted)",
                          borderColor: "var(--color-border)",
                          cursor: "auto",
                        }}
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
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
