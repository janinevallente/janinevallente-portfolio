"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
            text="Hello, I'm Janine Vallente. I'm a Software Developer based in Cebu City, PH. I build interfaces people remember — clean, responsive, and built with care."
            delay={0.05}
            className="font-display text-[clamp(1.65rem,3.6vw,3rem)] font-bold leading-[1.22] text-ink tracking-tighter"
          />
        </div>

        {/* Two-column: bio + skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio */}
          <FadeUp delay={0.1}>
            <div className="font-body text-[clamp(1rem,1.5vw,1.125rem)] text-ink/80 leading-relaxed">
              <p className="text-xs tracking-widest-4 uppercase mb-4 font-body text-ink">
                My Bio
              </p>
              <p className="mb-5">
                I began my journey as an aspiring Android developer, working with Kotlin and Firebase on our thesis project.
                Overtime, I expanded into frontend web development and developed a strong interest in building
                responsive, user-focused interfaces.
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
            </div>
          </FadeUp>

          {/* Skills */}
          <FadeUp delay={0.2}>
            <div>
              <p className="ps-0 lg:ps-5 text-xs tracking-widest-4 uppercase mb-4 font-body text-ink">
                Technologies I&apos;ve Worked With
              </p>
              <div className="flex flex-wrap gap-2">
                {portfolio.skills.technologies.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex flex-col items-center justify-center gap-2 p-1 w-[90px] h-[90px] bg-bg transition-colors duration-200 hover:border-ink/50"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${portfolio.skills.icons[index]}.svg`}
                      alt={skill}
                      className="w-10 h-10"
                    />
                    <span className="text-[12px] text-ink/90 p-1 truncate w-full text-center">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/*View resume btn */}
        <div>
          <FadeUp>
              <div className="mt-10 md:mt-0">
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
                    <ArrowUpRight size={15} />
                  </motion.span>
                </a>
              </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}