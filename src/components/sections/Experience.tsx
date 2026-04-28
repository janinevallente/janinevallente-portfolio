"use client";

import { portfolio } from "@/lib/data";
import WordReveal from "@/components/animations/WordReveal";
import FadeUp from "@/components/animations/FadeUp";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-ink text-white py-28 md:py-40">
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="container max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Label */}
        <FadeUp>
          <p className="mb-16 text-xs tracking-widest-5 uppercase font-body text-white/30">
            02 — Experience
          </p>
        </FadeUp>

        {/* Heading */}
        <div className="mb-10">
          <WordReveal
            text="Where I've Worked"
            className="font-display font-bold text-white text-[clamp(2.5rem,6vw,5.5rem)] tracking-[-0.03em] leading-none"
          />
        </div>

        {/* Subtext — body: 16–18px */}
        <FadeUp delay={0.18}>
          <p className="font-body font-light text-white/60 leading-relaxed text-[clamp(1rem,1.5vw,1.125rem)] italic">
            "I started my career as a Software Developer Intern, where I built a strong foundation
            in development workflows and debugging. I progressed into a Junior Software Developer
            role, contributing to enterprise-level systems and improving application reliability.
            Recently, I explored Oracle EPM Cloud, expanding my knowledge into financial systems
            and enterprise planning solutions."
          </p>
        </FadeUp>

        {/* Jobs */}
        <div>
          {portfolio.experience.map((job, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="group py-10 md:py-14 border-b border-white-14 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-6 md:gap-12 items-start">
                  {/* Period */}
                  <p className="font-body text-sm pt-3 tracking-wide text-accent/90">
                    {job.period}
                  </p>

                  {/* Role + description */}
                  <div>
                    <h3 className="mb-1 font-display font-semibold text-white text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.02em] transition-colors duration-200">
                      {job.role}
                    </h3>
                    <p className="mb-6 font-body text-md text-accent/90">
                      {job.company}
                    </p>

                    {/* Description bullets */}
                    <ul className="flex flex-col gap-2.5 mb-4">
                      {job.description.map((point, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-[10px] w-1 h-1 rounded-full flex-shrink-0 bg-accent" />
                          <span className="font-body text-md font-light leading-relaxed text-white-55">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
