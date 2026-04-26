"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { portfolio } from "@/lib/data";
import WordReveal from "@/components/ui/WordReveal";
import SectionReveal from "@/components/ui/SectionReveal";

function RevealLine({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="overflow-hidden h-px w-full">
      <motion.div
        className="h-full w-full"
        style={{ backgroundColor: "rgba(255,255,255,0.08)", transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      />
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "0%"]);

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      style={{ y, backgroundColor: "#111110", color: "white" }}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">

        {/* Label */}
        <SectionReveal delay={0}>
          <p
            className="mb-12 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.3)" }}
          >
            04 — Contact
          </p>
        </SectionReveal>

        <RevealLine delay={0.05} />

        {/* Big headline */}
        <div className="mt-14 mb-14">
          <WordReveal
            text="Let's work"
            delay={0.05}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 11vw, 11rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "white",
            }}
          />
          {/* Second line: italic + accent dot */}
          <div className="flex items-end gap-4 md:gap-6 mt-1">
            <WordReveal
              text="together."
              delay={0.12}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 11vw, 11rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                color: "white",
                fontStyle: "italic",
              }}
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="mb-2 md:mb-4 w-10 h-10 md:w-14 md:h-14 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#c8f04a" }}
            />
          </div>
        </div>

        {/* CTA button */}
        <SectionReveal delay={0.2} direction="up">
          <div className="flex justify-center my-14 md:my-20">
            <a
              href={`mailto:${portfolio.email}`}
              className="group inline-flex items-center gap-3 px-10 py-4 border transition-all duration-400 hover:bg-white"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "white",
                borderColor: "rgba(255,255,255,0.2)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <span className="transition-colors duration-300 group-hover:text-ink">Get in touch</span>
              <motion.span
                className="transition-colors duration-300 group-hover:text-ink"
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                ↗
              </motion.span>
            </a>
          </div>
        </SectionReveal>

        <RevealLine />

        {/* Bottom row */}
        <SectionReveal delay={0.1} direction="fade">
          <div className="mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <p
                className="mb-2 text-xs tracking-[0.16em] uppercase"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.25)" }}
              >
                Email
              </p>
              <a
                href={`mailto:${portfolio.email}`}
                className="transition-colors duration-200 hover:text-[#c8f04a]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.88rem, 1.4vw, 1.1rem)",
                  color: "rgba(255,255,255,0.55)",
                  fontWeight: 300,
                }}
              >
                {portfolio.email}
              </a>
            </div>

            <div>
              <p
                className="mb-2 text-xs tracking-[0.16em] uppercase"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.25)" }}
              >
                Socials
              </p>
              <div className="flex gap-6">
                {Object.entries(portfolio.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm capitalize transition-colors duration-200 hover:text-[#c8f04a] border-b border-transparent hover:border-[#c8f04a] pb-0.5"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(255,255,255,0.35)",
                      fontWeight: 300,
                    }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </motion.section>
  );
}
