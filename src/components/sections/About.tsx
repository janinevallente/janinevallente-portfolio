"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import WordReveal from "@/components/animations/WordReveal";
import FadeUp from "@/components/animations/FadeUp";
import { portfolio } from "@/lib/data";

const stats = [
  { value: "1.5+", label: "Years of Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "∞", label: "Console.log Debug Sessions" },
];

export default function About() {
  return (
    <section id="about" className="bg-bg py-20 md:py-40">
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Label */}
        <FadeUp>
          <p className="mb-10 md:mb-16 text-xs tracking-widest-5 uppercase font-body text-ink-muted">
            01 — About
          </p>
        </FadeUp>

        {/* Large word-reveal paragraph */}
        <div className="mb-14 md:mb-20">
          <WordReveal
            text="Hello, I'm Janine Vallente. I'm a Software Developer based in Cebu City, PH. I build interfaces people remember — clean, responsive, and built with care."
            delay={0.05}
            className="font-display text-[clamp(1.45rem,3.2vw,2.75rem)] font-bold leading-[1.25] text-ink tracking-tighter"
          />
        </div>

        {/* Two-column: bio + skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Bio */}
          <FadeUp delay={0.1}>
            <div className="font-body text-[clamp(0.95rem,1.4vw,1.1rem)] text-ink/75 leading-relaxed">
              <p className="text-[11px] tracking-widest-4 uppercase mb-5 font-body text-ink font-medium">
                My Bio
              </p>
              <p className="mb-5">
                I began my journey as an aspiring Android developer, working with Kotlin
                and Firebase on our thesis project. Over time, I expanded into frontend
                web development and developed a strong interest in building responsive,
                user-focused interfaces.
              </p>
              <p className="mb-5">
                Today, I combine my mobile and software development background with
                frontend expertise to build applications that are functional, intuitive,
                and reliable.
              </p>
              <p className="mb-5">
                I am currently open to full-time and contract opportunities.
              </p>
              <p className="text-ink/60 italic text-[clamp(0.85rem,1.2vw,1rem)]">
                &quot;When I'm not pushing code, you&apos;ll find me building Gunpla kits,
                playing video games, or attending hobby conventions.&quot;
              </p>
            </div>
          </FadeUp>

          {/* Skills */}
          <FadeUp delay={0.2}>
            <div>
              <p className="text-[11px] tracking-widest-4 uppercase mb-5 font-body text-ink font-medium">
                Technologies I&apos;ve Worked With
              </p>
              <div className="flex flex-wrap gap-2 justify-start">
                {portfolio.skills.technologies.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex flex-col items-center justify-center gap-2 w-[76px] h-[76px] sm:w-[82px] sm:h-[82px] bg-bg border border-ink/12 rounded-lg transition-colors duration-200 hover:border-ink/30"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${portfolio.skills.icons[index]}.svg`}
                      alt={skill}
                      className="w-8 h-8 sm:w-9 sm:h-9"
                    />
                    <span className="font-body text-[10px] text-ink/70 truncate w-full text-center px-1 leading-tight">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Stats row */}
        <FadeUp delay={0.05}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 mt-12 md:mt-20 pt-12 md:pt-16 border-t border-ink/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
                <span className="font-display font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight text-ink leading-none">
                  {stat.value}
                </span>
                <span className="font-body text-[11px] uppercase tracking-widest-3 text-ink-muted leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}