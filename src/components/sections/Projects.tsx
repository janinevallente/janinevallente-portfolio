"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/animations/SectionReveal";
import FadeUp from "@/components/animations/FadeUp";
import RevealLine from "@/components/ui/RevealLine";
import FloatingImageCard from "@/components/ui/FloatingImageCard";
import CustomCursor from "@/components/ui/CustomCursor";
import Dot from "../ui/Dot";
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
          <p className="mb-10 md:mb-16 font-display font-bold text-chalk text-[clamp(2.8rem,8vw,5.8rem)] tracking-[-0.03em] leading-none">
            featured projects
            <Dot />
          </p>
        </FadeUp>

        {/* Column headers */}
        <SectionReveal delay={0.15} direction="fade">
          <div className="hidden md:flex items-center justify-between pb-4 cursor-default">
            <div className="flex items-center gap-5 flex-1 min-w-0">
              <span className="font-body text-xs tracking-widest-4 uppercase text-accent">
                Title
              </span>
            </div>
            <div className="flex items-center gap-8 flex-shrink-0">
              <span className="font-body text-xs tracking-widest-4 uppercase w-36 text-left text-accent">
                Category
              </span>
              <span className="font-body text-xs tracking-widest-4 uppercase w-36 text-center text-accent">
                Year
              </span>
            </div>
          </div>
        </SectionReveal>

        {/* Project list */}
        <ul
          className="cursor-none"
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
              <RevealLine color={'bg-accent/30'}/>
              <div
                className="group/row relative py-7 md:py-8 flex items-center justify-between gap-6 cursor-none"
                onPointerEnter={() => setHovered({ active: true, index: i })}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Left: index + title */}
                <div className="flex items-baseline gap-5 min-w-0 flex-1">
                  <h3 className="font-display font-semibold text-chalk text-[clamp(1.65rem,3.6vw,3rem)] tracking-[-0.02em] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-300 group-hover/row:text-accent">
                    {project.title}
                  </h3>
                </div>

                {/* Right: meta (desktop only) */}
                <div className="hidden md:flex items-center gap-8 flex-shrink-0">
                  <span className="font-display font-medium text-chalk/95 text-[clamp(1rem,1.5vw,1.125rem)] text-left tracking-[-0.01em] w-36 transition-colors duration-300 group-hover/row:text-accent">
                    {project.category}
                  </span>
                  <span className="font-display font-medium text-chalk/95 text-[clamp(1rem,1.5vw,1.125rem)] text-center tracking-[-0.01em] w-36 transition-colors duration-300 group-hover/row:text-accent">
                    {project.year}
                  </span>
                </div>

                {/* Mobile arrow */}
                <div className="md:hidden flex-shrink-0 cursor-none text-ink">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </motion.li>
          ))}
          <RevealLine color={'bg-accent/30'}/>
        </ul>

        {/* View More on GitHub Button */}
        <FadeUp delay={0.18}>
          <div className="mt-16 flex justify-center">
              <a
                href={portfolio?.social?.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg rounded-3xl group inline-flex items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 border border-accent font-body text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:bg-accent hover:border-ink"
              >
                <span className="text-accent transition-colors duration-300 group-hover:text-ink">
                  View More on GitHub
                </span>
                <motion.span
                  className="text-accent transition-colors duration-300 group-hover:text-ink"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowUpRight size={15} />
                </motion.span>
              </a>
          </div>
        </FadeUp>
      </div>

      {/* Floating image card & cursor - desktop only */}
      <div className="hidden lg:block">
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
      </div>
    </section>
  );
}