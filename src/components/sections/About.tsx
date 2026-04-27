"use client";

import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { portfolio } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-bg py-28 md:py-40">
      <div className="container max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Label */}
        <FadeUp>
          <p className="mb-16 text-xs tracking-widest-5 uppercase font-body text-ink-muted">
            01 — About
          </p>
        </FadeUp>

        {/* Large word-reveal paragraph */}
        <div className="mb-20">
          <WordReveal
            text="Hello, I'm Janine Vallente. I'm a Software Developer specializing Front-end Web Development & Mobile Development. I build interfaces people remember — clean, responsive, and built with care."
            delay={0.05}
            className="font-display text-[clamp(1.65rem,3.6vw,3rem)] font-bold leading-[1.22] text-ink tracking-tighter"
          />
        </div>

        {/* Two-column: bio + skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio */}
          <FadeUp delay={0.1}>
            <div className="font-body text-[clamp(1rem,1.5vw,1.125rem)] text-ink/80 leading-relaxed">
              <p className="mb-5">
                I began as an Android developer working with Kotlin and Firebase,
                then expanded into frontend web development and built a strong interest
                in responsive, user-focused interfaces.
              </p>
              <p className="mb-5">
                Today, I combine mobile and software development background with frontend
                expertise to build applications that are functional, intuitive, and reliable.
              </p>
              <p className="mb-5">
                I am currently open to full-time and contract opportunities.
              </p>
              <p className="text-ink/80 italic">
                &quot;When not pushing code, you&apos;ll find me building Gunpla kits, playing
                video games, or attending hobby conventions.&quot;
              </p>

              <div className="mt-10">
                <a
                  href={portfolio.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink group inline-flex items-center gap-3 px-6 py-3.5 border border-ink font-body text-sm tracking-wide uppercase transition-all duration-300 hover:bg-bg hover:border-ink"
                >
                  <span className="text-white transition-colors duration-300 group-hover:text-ink">
                    View Resume
                  </span>
                  <motion.span
                    className="text-white transition-colors duration-300 group-hover:text-ink"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    ↗
                  </motion.span>
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Skills */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-xs tracking-widest-4 uppercase mb-4 font-body text-ink">
                  Technologies I&apos;ve Worked With
                </p>
                <div className="flex flex-wrap gap-4">
                  {portfolio.skills.technologies.map((skill, index) => (
                    <div
                      key={skill}
                      className="relative group flex flex-col rounded-lg items-center gap-2 p-4 border border-ink/40 bg-bg transition-colors duration-200 hover:border-ink/40 font-body text-ink-muted"
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${portfolio.skills.icons[index]}.svg`}
                        alt={skill}
                        className="w-8 h-8"
                      />
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
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