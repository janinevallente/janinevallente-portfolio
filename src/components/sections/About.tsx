"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolio } from "@/lib/data";
import WordReveal from "@/components/ui/WordReveal";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-bg py-28 md:py-40">
      <div className="container max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Label */}
        <FadeUp>
          <p className="mb-16 text-xs tracking-[0.2em] uppercase font-body text-ink-muted">
            01 — About
          </p>
        </FadeUp>

        {/* Large word-reveal paragraph */}
        <div className="mb-20 md:mb-20">
          <WordReveal
            text="I build interfaces people remember — clean, responsive, and built with care."
            delay={0.05}
            className="font-display text-[clamp(1.65rem,3.6vw,3rem)] font-bold leading-[1.22] text-ink tracking-tighter"
          />
        </div>

        {/* Two-column: bio + skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio */}
          <FadeUp delay={0.1}>
            <div className="font-body text-base text-ink-muted leading-relaxed font-light">
              <p className="mb-5">
                I began as an Android developer working with Kotlin and Firebase,
                then expanded into frontend web development and built a strong interest
                in responsive, user-focused interfaces.
              </p>
              <p className="mb-5">
                Today I combine mobile and software development background with frontend
                expertise to build applications that are functional, intuitive, and reliable.
              </p>
              <p className="mb-5">
                I am currently open to full-time and contract opportunities.
              </p>
              <p className="text-ink-muted italic">
                When not pushing code, you'll find me building Gunpla kits, playing
                video games, or attending hobby conventions.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href={portfolio.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm transition-all duration-300 border-b border-ink pb-0.5 hover:gap-4 font-body text-ink"
                >
                  View Résumé
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Skills */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-xs tracking-[0.18em] uppercase mb-4 font-body text-ink-muted">
                  Technologies I've Worked With
                </p>
                <div className="flex flex-wrap gap-4">
                  {portfolio.skills.technologies.map((skill, index) => (
                    <div
                      key={skill}
                      className="relative group flex flex-col rounded-xl items-center gap-2 p-4 border border-color-ink-secondary bg-ink-secondary transition-colors duration-200 hover:border-ink font-body text-ink-muted"
                    >
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${portfolio.skills.icons[index]}.svg`}
                        alt={skill}
                        className="w-8 h-8"
                      />
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg">
                          {skill}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}