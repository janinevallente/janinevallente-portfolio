"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolio } from "@/lib/data";
import WordReveal from "@/components/ui/WordReveal";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 md:py-40"
      style={{ backgroundColor: "#111110", color: "white" }}
    >
      <div className="container max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Label */}
        <FadeUp>
          <p
            className="mb-16 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.3)" }}
          >
            02 — Experience
          </p>
        </FadeUp>

        {/* Heading */}
        <div className="mb-20 md:mb-20">
          <WordReveal
            text="Where I've Worked"
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

        {/* Jobs */}
        <div>
          {portfolio.experience.map((job, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                className="group py-10 md:py-14 border-t transition-all duration-300"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-6 md:gap-12 items-start">
                  {/* Period */}
                  <p
                    className="text-xs pt-1 tracking-wide"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {job.period}
                  </p>

                  {/* Role + description */}
                  <div>
                    <h3
                      className="mb-1 transition-colors duration-200 group-hover:text-[#c8f04a]"
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

                    {/* Description bullets */}
                    <ul className="flex flex-col gap-2.5 mb-4">
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

                    {/* Tech tags */}
                    {/* <div className="flex flex-wrap gap-2">
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
                    </div> */}
                  </div>

                  {/* Arrow */}
                  <div
                    className="hidden md:block text-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: "#c8f04a" }}
                  >
                    ↗
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
          {/* Bottom border */}
          <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }} />
        </div>
      </div>
    </section>
  );
}
