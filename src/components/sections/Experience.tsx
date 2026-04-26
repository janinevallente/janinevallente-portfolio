"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolio } from "@/lib/data";
import WordReveal from "@/components/ui/WordReveal";
import SectionReveal from "@/components/ui/SectionReveal";

function RevealLine({ delay = 0, dark = false }: { delay?: number; dark?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="overflow-hidden h-px w-full">
      <motion.div
        className="h-full w-full"
        style={{
          backgroundColor: dark ? "rgba(255,255,255,0.08)" : "var(--color-border)",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      />
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 md:py-40"
      style={{ backgroundColor: "#111110", color: "white" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">

        {/* Label */}
        <SectionReveal delay={0}>
          <p
            className="mb-12 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.3)" }}
          >
            02 — Experience
          </p>
        </SectionReveal>

        <RevealLine delay={0.05} dark />

        {/* Heading */}
        <div className="mt-14 mb-20 md:mb-28 max-w-2xl">
          <WordReveal
            text="Where I've Worked"
            delay={0.1}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "white",
            }}
          />
        </div>

        {/* Jobs — each row slides up with stagger */}
        <div>
          {portfolio.experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
            >
              <RevealLine dark />
              <div
                className="group py-10 md:py-14 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-6 md:gap-12 items-start">
                  {/* Period */}
                  <p
                    className="text-xs pt-1 tracking-wide"
                    style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.3)" }}
                  >
                    {job.period}
                  </p>

                  {/* Role + content */}
                  <div>
                    <h3
                      className="mb-1 transition-colors duration-300 group-hover:text-[#c8f04a]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        color: "white",
                      }}
                    >
                      {job.role}
                    </h3>
                    <p
                      className="mb-6 text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.35)" }}
                    >
                      {job.company}
                    </p>

                    <ul className="flex flex-col gap-2.5 mb-8">
                      {job.description.map((point, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span
                            className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "#c8f04a" }}
                          />
                          <span
                            className="text-sm leading-relaxed"
                            style={{
                              fontFamily: "var(--font-body)",
                              color: "rgba(255,255,255,0.45)",
                              fontWeight: 300,
                            }}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 border"
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "rgba(255,255,255,0.3)",
                            borderColor: "rgba(255,255,255,0.1)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow — appears on hover */}
                  <div
                    className="hidden md:block text-xl transition-all duration-300 opacity-0 translate-x-0 translate-y-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: "#c8f04a" }}
                  >
                    ↗
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <RevealLine dark />
        </div>
      </div>
    </section>
  );
}
