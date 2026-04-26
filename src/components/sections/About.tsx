"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolio } from "@/lib/data";
import WordReveal from "@/components/ui/WordReveal";
import SectionReveal from "@/components/ui/SectionReveal";

/** Animated line that grows from left to right on scroll */
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
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      />
    </div>
  );
}

export default function About() {
  const phrase =
    "I build interfaces people remember — clean, responsive, and built with care. From enterprise dashboards to photo booth apps, I bring both craft and reliability to every project.";

  return (
    <section id="about" className="bg-bg py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">

        {/* Label */}
        <SectionReveal delay={0}>
          <p
            className="mb-12 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
          >
            01 — About
          </p>
        </SectionReveal>

        <RevealLine delay={0.05} />

        {/* Hero phrase — word reveal */}
        <div className="mt-14 mb-20 md:mb-28 max-w-4xl">
          <WordReveal
            text={phrase}
            delay={0.1}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.55rem, 3.2vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.25,
              color: "var(--color-ink)",
              letterSpacing: "-0.02em",
            }}
          />
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Bio */}
          <SectionReveal delay={0.05} direction="up">
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--color-ink-muted)",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              <p className="mb-5">
                I began as an Android developer working with Kotlin and Firebase,
                then expanded into frontend web development and built a strong interest
                in responsive, user-focused interfaces.
              </p>
              <p className="mb-5">
                Today I combine mobile and software development background with frontend
                expertise to build applications that are functional, intuitive, and reliable.
              </p>
              <p style={{ fontStyle: "italic" }}>
                When not pushing code, you'll find me building Gunpla kits, playing
                video games, or attending hobby conventions.
              </p>

              <div className="mt-10">
                <a
                  href={portfolio.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm transition-all duration-300 border-b pb-0.5"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-ink)",
                    borderColor: "var(--color-ink)",
                  }}
                >
                  View Résumé
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">↗</span>
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Skills */}
          <SectionReveal delay={0.15} direction="up">
            <div className="flex flex-col gap-10">
              {[
                { label: "Core Stack", items: portfolio.skills.core },
                { label: "Mobile", items: portfolio.skills.mobile },
                { label: "Also Comfortable With", items: portfolio.skills.also.slice(0, 8) },
              ].map((group, gi) => (
                <div key={group.label}>
                  <p
                    className="text-xs tracking-[0.18em] uppercase mb-4"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-muted)" }}
                  >
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: gi * 0.1 + si * 0.03 }}
                        className="text-xs px-3 py-1.5 border transition-colors duration-200 hover:border-ink hover:text-ink"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-ink-muted)",
                          borderColor: "var(--color-border)",
                          display: "inline-block",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
