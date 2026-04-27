"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolio } from "@/lib/data";
import WordReveal from "@/components/ui/WordReveal";
import SectionReveal from "@/components/ui/SectionReveal";
import FadeUp from "@/components/ui/FadeUp";

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
      style={{ y }}
      className="relative bg-ink text-white py-28 md:py-40 overflow-hidden"
    >
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative">

        {/* Top row: label + open to work badge */}
        <FadeUp>
          <div className="mb-16 flex items-center justify-between flex-wrap gap-4">
            <p className="text-xs tracking-widest-5 uppercase font-body text-white/30">
              04 — Contact
            </p>

            {/* Open to work pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent-25 bg-accent-5"
            >
              {/* Pulsing dot */}
              <span className="relative flex h-2 w-2">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-accent"
                  animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-body text-xs tracking-[0.12em] uppercase font-normal text-accent">
                Available to work
              </span>
            </motion.div>
          </div>
        </FadeUp>

        {/* Big headline */}
        <div className="mt-12 mb-6">
          <WordReveal
            text="Let's build something together."
            delay={0.1}
            className="font-display font-bold text-white text-[clamp(2.5rem,6vw,5.5rem)] tracking-[-0.03em] leading-[1.2]"
          />
        </div>

        {/* Subtext */}
        <FadeUp delay={0.18}>
          <p className="font-body font-light text-white/60 leading-relaxed text-[clamp(1rem,1.7vw,1.3rem)]">
            Whether you have a project in mind, an open role, or just want to say
            hello — my inbox is always open.
          </p>
        </FadeUp>

        {/* CTA button */}
        <FadeUp delay={0.26}>
          <div className="mt-10 mb-20">
            <a
              href={`mailto:${portfolio.email}`}
              className="group inline-flex items-center gap-3 px-8 py-3.5 border border-accent font-body text-[0.78rem] tracking-widest-2 uppercase transition-all duration-300 hover:bg-accent hover:border-accent"
            >
              <span className="text-accent transition-colors duration-300 group-hover:text-ink">
                Get in touch
              </span>
              <motion.span
                className="text-accent transition-colors duration-300 group-hover:text-ink"
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                ↗
              </motion.span>
            </a>
          </div>
        </FadeUp>

        {/* Bottom row — email + socials */}
        <SectionReveal delay={0.12} direction="fade">
          <div className="mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            {/* Email */}
            <div>
              <p className="mb-3 text-xs font-body text-accent/80 tracking-widest-3 uppercase">
                Email
              </p>
              <a
                href={`mailto:${portfolio.email}`}
                className="font-body font-light text-white-55 text-[clamp(0.88rem,1.4vw,1.05rem)] transition-colors duration-200 hover:text-accent border-b border-transparent hover:border-accent pb-0.5"
              >
                {portfolio.email}
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="mb-3 text-xs font-body text-accent/80 tracking-widest-3 uppercase">
                Socials
              </p>
              <div className="flex gap-6">
                {Object.entries(portfolio.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-light text-sm capitalize text-white-55 transition-colors duration-200 hover:text-accent border-b border-transparent hover:border-accent pb-0.5"
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