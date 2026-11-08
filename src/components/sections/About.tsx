"use client";

import WordReveal from "@/components/animations/WordReveal";
import FadeUp from "@/components/animations/FadeUp";
import { portfolio } from "@/lib/data";
import SectionReveal from "../animations/SectionReveal";

const stats = [
  { value: "2+", label: "Years in Tech Industry" },
  { value: "15+", label: "Projects & Deployment" },
  { value: "20+", label: "Tools, Frameworks & Platforms" },
  { value: "900+", label: "Domain Processes Handled" },
];

export default function About() {
  return (
    <section id="about" className="bg-bg py-20 md:py-40">
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Label */}
        <FadeUp>
          <p className="mb-10 md:mb-16 font-display font-bold text-white text-[clamp(2.5rem,6vw,5.5rem)] tracking-[-0.03em] leading-none">
            About Me
            <span className="text-accent text-8xl ms-1">.</span>
          </p>
        </FadeUp>

        {/* Large word-reveal paragraph */}
        <div className="mb-14 md:mb-20"> 
          <WordReveal 
            text="Hello, I'm Jan. An IT professional based in Cebu City, Philippines, with experience building applications, troubleshooting technical issues, and supporting web hosting and domain operations." 
            delay={0.05} 
            className="font-display text-[clamp(1.45rem,3.2vw,2.75rem)] font-bold leading-[1.25] text-white tracking-tighter" 
          /> 
        </div>

        <div className="max-w-[1400px] mx-auto mb-2 py-20 md:py-28">
          {/* My background */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-24 mb-12 md:mb-16">
            <SectionReveal delay={0} direction="fade">
              <p className="font-body text-xs tracking-widest-5 uppercase pt-1 text-accent">
                My Background
              </p>
            </SectionReveal>


            <div className="font-display text-white/75 text-[clamp(0.95rem,1.4vw,1.1rem)] leading-[1.45] tracking-[-0.015em]">
                <FadeUp delay={0.3}>
                  <p className="mb-3">
                    I started my career in software development, specializing in front-end web
                    development. I built clean, responsive, and user-centered web applications
                    while developing a strong foundation in debugging, system design, and modern
                    development workflows.
                  </p>
                  <p className="mb-5">
                    Today, I work in domain operations with a focus on domain compliance, 
                    registration and renewals, ownership transfers, and DNS configurations 
                    such as updating nameservers and enabling DNSSEC records. This role has 
                    strengthened my attention to process accuracy and reliable support within 
                    the domain lifecycle.
                  </p>
                  <p className="mb-5">
                    Combining my software development background with domain operations has given 
                    me a broader view of how websites and online services are managed beyond the 
                    code. I value clear processes, dependable systems, and work that allows me to 
                    deliver consistent and accurate support.
                  </p>
                  </FadeUp>
            </div>
          </div>

          <div className="">
            {/* Skills + Open Roles */}
            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-10">

                {/* Capabilities */}
                <div>
                  <p className="text-[11px] tracking-widest-4 uppercase mb-5 font-body text-accent font-medium">
                    What I Can Do
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {portfolio.skills.whatICanDo.map(({ area, detail }, i) => (
                      <div
                        key={area}
                        className="group relative flex h-full min-h-[190px] flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 hover:bg-white/[0.06]"
                      >
                        {/* Top row: index + arrow */}
                        <div className="flex items-center justify-between">
                          <span className="font-body text-xs font-medium tracking-widest-4 text-accent">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-3">
                          <h3 className="font-display text-[clamp(1.05rem,1.4vw,1.3rem)] font-bold leading-tight tracking-tight text-white">
                            {area}
                          </h3>
                          <p className="font-body text-[clamp(0.8rem,1vw,0.9rem)] pb-5 leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/80">
                            {detail}
                          </p>
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
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 mt-12 md:mt-20 pt-12 md:pt-16 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5 mb-3.5 md:mb-0">
                <span className="font-display font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight text-white leading-none">
                  {stat.value}
                </span>
                <span className="font-body text-[11px] uppercase tracking-widest-3 text-accent leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
      </div>
    </section>
  );
}