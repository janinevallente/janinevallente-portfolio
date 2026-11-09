"use client";

import { portfolio } from "@/lib/data";
import FadeUp from "@/components/animations/FadeUp";
import Dot from "../ui/Dot";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-28 md:py-40">

      <div className="container max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Label */}
        <FadeUp>
          <p className="mb-10 md:mb-16 font-display font-bold text-chalk text-[clamp(2.8rem,8vw,5.8rem)] tracking-[-0.03em] leading-none">
            my work experience
            <Dot />
          </p>
        </FadeUp>
        
        {/* Jobs */}
        <div>
          {portfolio.experience.map((job, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="group py-10 md:py-14 border-b border-accent/30 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-6 md:gap-12 items-start">
                  {/* Period */}
                  <p className="font-body text-sm pt-3 tracking-wide text-accent/90">
                    {job.period}
                  </p>

                  {/* Role + description */}
                  <div>
                    <h3 className="mb-1 font-display font-semibold text-chalk text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.02em] transition-colors duration-200">
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
                          <span className="font-body text-md font-light leading-relaxed text-chalk/95">
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
