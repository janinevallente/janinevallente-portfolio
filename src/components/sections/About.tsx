"use client";

import WordReveal from "@/components/animations/WordReveal";
import FadeUp from "@/components/animations/FadeUp";
import { portfolio } from "@/lib/data";

const stats = [
  { value: "2+", label: "Professional Years of Exp." },
  { value: "15+", label: "Projects Delivered" },
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
          <WordReveal text="Hello, I'm Janine Vallente. An IT Professional based in Cebu City, PH with a background in building applications, troubleshooting systems, and supporting web hosting environments." delay={0.05} className="font-display text-[clamp(1.45rem,3.2vw,2.75rem)] font-bold leading-[1.25] text-ink tracking-tighter" /> 
        </div>

        {/* Two-column: bio + skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Bio */}
          <FadeUp delay={0.1}>
            <div className="font-body text-[clamp(0.95rem,1.4vw,1.1rem)] text-ink/75 leading-relaxed">
              <p className="text-[11px] tracking-widest-4 uppercase mb-5 font-body text-ink font-medium">
                My Background
              </p>

              <p className="mb-5"> I started my career in software development, 
                specializing front-end development. I built clean, responsive, and 
                user-centered interfaces while developing a strong foundation in debugging, 
                system logic, and modern development workflows. 
              </p>

              <p className="mb-5">
                Over time, my experience expanded beyond application development and
                into technical operations and support. I currently work in the web
                hosting industry, supporting domain and hosting-related services while
                troubleshooting technical issues across live production environments.
              </p>

              <p className="mb-5">
                This transition strengthened my understanding of how systems operate
                beyond development — from DNS and hosting configurations to technical
                troubleshooting, deployments, and customer-facing support. It also
                helped me develop a more practical and reliability-focused approach
                to technology.
              </p>
            </div>
          </FadeUp>

          {/* Skills + Open Roles */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col gap-10">

              {/* Capabilities */}
              <div>
                <p className="text-[11px] tracking-widest-4 uppercase mb-5 font-body text-ink font-medium">
                  What I Can Do
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {portfolio.skills.whatICanDo.map(({ area, detail }) => (
                    <div
                      key={area}
                      className="group relative flex flex-col justify-between gap-6 p-5 bg-hero hover:bg-hero/80 transition-all duration-300 overflow-hidden"
                    >
                      {/* Decorative circle */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/5 group-hover:scale-150 transition-transform duration-500" />

                      <div className="flex flex-col gap-1.5">
                        <span className="mt-5 font-display text-[clamp(0.82rem,1.2vw,0.95rem)] font-bold text-white/85 leading-tight tracking-tight">
                          {area}
                        </span>
                        <span className="font-body text-[clamp(0.72rem,1vw,0.82rem)] text-white/50 leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </FadeUp>
        </div>

        {/* Stats row */}
        <FadeUp delay={0.05}>
          <div className="grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-20 pt-12 md:pt-16 border-t border-ink/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5 mb-5 md:mb-0">
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