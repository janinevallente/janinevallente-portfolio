"use client";

import { Code2, Smartphone, Server, Globe} from "lucide-react";
import WordReveal from "@/components/animations/WordReveal";
import FadeUp from "@/components/animations/FadeUp";
import SectionReveal from "../animations/SectionReveal";
import Dot from "../ui/Dot";
import { portfolio } from "@/lib/data";

const cardIcons = [Code2, Smartphone, Server, Globe];

const stats = [
  { value: "2+", label: "Years in Tech Industry" },
  { value: "15+", label: "Projects & Deployment" },
  { value: "20+", label: "Tools, Frameworks & Platforms" },
  { value: "900+", label: "Domain Processes Handled" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-bg pt-20 pb-12 md:pt-40 md:pb-20">
      {/* Blend from the hero section's black gradient into the section background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 lg:h-48 md:h-20 h-10 bg-gradient-to-b from-black to-transparent"
      />
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Label */}
        <FadeUp>
          <p className="mb-10 md:mb-16 font-display font-bold text-chalk text-[clamp(2.8rem,8vw,5.8rem)] tracking-[-0.03em] leading-none">
            about me
            <Dot />
          </p>
        </FadeUp>

        {/* Large word-reveal paragraph */}
        <div className="mb-14 md:mb-20"> 
          <WordReveal 
            text="Hello, I'm Jan. An IT professional based in Cebu City, Philippines, with experience building applications, troubleshooting technical issues, and supporting web hosting and domain operations." 
            delay={0.05} 
            className="font-display text-[clamp(1.45rem,3.2vw,2.75rem)] font-bold leading-[1.25] text-chalk tracking-tighter" 
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


            <div className="font-display text-chalk/95 text-[clamp(0.95rem,1.4vw,1.1rem)] leading-[1.45] tracking-[-0.015em]">
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
            {/* Skills + What I can do */}
            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-10">

                {/* Capabilities */}
                <div>
                  <p className="text-[11px] tracking-widest-4 uppercase mb-5 font-body text-accent font-medium">
                    What I Can Do
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {portfolio.skills.whatICanDo.map(({ area, detail }, i) => {
                      const Icon = cardIcons[i % cardIcons.length];

                      return (
                        <div
                          key={area}
                          className="group relative flex min-h-[300px] flex-col justify-between gap-10 overflow-hidden bg-bg border border-accent p-6 text-chalk transition-transform duration-500 hover:-translate-y-1 hover:bg-accent hover:text-ink md:min-h-[340px] md:p-8"
                        >
                          {/* Top row: icon + number */}
                          <div className="flex items-start justify-between">
                            <Icon
                              aria-hidden="true"
                              strokeWidth={1.25}
                              className="h-14 w-14 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 md:h-20 md:w-20"
                            />
                            <span className="font-display text-[clamp(2.5rem,4.5vw,3.75rem)] font-bold leading-none tracking-tight">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>

                          {/* Title + highlighted detail */}
                          <div className="flex flex-col gap-3">
                            <h3 className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold lowercase leading-none tracking-[-0.04em]">
                              {area}
                            </h3>
                            <p className="font-body text-[clamp(0.8rem,1vw,0.9rem)] font-medium leading-[2.1] text-bg italic">
                              <span className="box-decoration-clone bg-accent px-2.5 py-1 group-hover:bg-white">
                                {detail}
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </FadeUp>
          </div>

        {/* Stats row */}
        <FadeUp delay={0.05}>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 mt-12 md:mt-20 pt-12 md:pt-16 border-t border-accent/40">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5 mb-3.5 md:mb-0">
                <span className="font-display font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight text-chalk leading-none">
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