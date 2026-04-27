"use client";

import { portfolio } from "@/lib/data";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp"

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-ink py-28 md:py-40"
      style={{ color: "white" }}
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

      <div className="container max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Label */}
        <FadeUp>
          <p className="mb-16 text-xs tracking-[0.2em] uppercase font-body text-white/30">
            02 — Experience
          </p>
        </FadeUp>

        {/* Heading */}
        <div className="mb-20 md:mb-20">
          <WordReveal
            text="Where I've Worked"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "white",
            }}
          />
        </div>

        {/* Jobs */}
        <div>
          {portfolio.experience.map((job, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                className="group py-10 md:py-14 border-t transition-all duration-300"
                style={{ borderColor: "#ffffff14" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-6 md:gap-12 items-start">
                  {/* Period */}
                  <p
                    className="text-xs pt-1 tracking-wide"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "#ffffff4d",
                    }}
                  >
                    {job.period}
                  </p>

                  {/* Role + description */}
                  <div>
                    <h3
                      className="mb-1 transition-colors duration-200 group-hover:text-[#c8f04a]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        color: "white",
                      }}
                    >
                      {job.role}
                    </h3>
                    <p
                      className="mb-6 text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.35)" }}
                    >
                      {job.company}
                    </p>

                    {/* Description bullets */}
                    <ul className="flex flex-col gap-2.5 mb-4">
                      {job.description.map((point, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span
                            className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "#c8f04a" }}
                          />
                          <span
                            className="text-sm leading-relaxed"
                            style={{
                              fontFamily: "var(--font-body)",
                              color: "#ffffff73",
                              fontWeight: 300,
                            }}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  <div
                    className="hidden md:block text-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: "#c8f04a" }}
                  >
                    ↗
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
          {/* Bottom border */}
          <div className="border-t" style={{ borderColor: "#ffffff14" }} />
        </div>
      </div>
    </section>
  );
}
