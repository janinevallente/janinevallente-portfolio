"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/lib/data";

const roles = [
  "Frontend Developer",
  "Mobile Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      {/* Availability badge */}
      <div
        className="opacity-0-init animate-fade-in delay-100 inline-flex items-center gap-2 w-fit mb-12 px-3 py-1.5 border border-border font-mono text-xs text-muted"
        style={{ animationFillMode: "forwards" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        Available for work
      </div>

      {/* Main heading */}
      <h1
        className="opacity-0-init animate-fade-up delay-200 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-ink mb-6 tracking-tight"
        style={{ animationFillMode: "forwards" }}
      >
        {portfolio.name.split(" ")[0]}
        <br />
        <span className="text-muted">{portfolio.name.split(" ")[1]}</span>
        <span className="text-accent">.</span>
      </h1>

      {/* Typewriter role */}
      <div
        className="opacity-0-init animate-fade-up delay-300 font-mono text-xl md:text-2xl text-muted mb-8 h-8 flex items-center"
        style={{ animationFillMode: "forwards" }}
      >
        <span className="text-ink">{displayed}</span>
        <span className="animate-blink ml-0.5 text-accent">|</span>
      </div>

      {/* Tagline */}
      <p
        className="opacity-0-init animate-fade-up delay-400 font-body text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-12"
        style={{ animationFillMode: "forwards" }}
      >
        {portfolio.tagline}
      </p>

      {/* CTAs */}
      <div
        className="opacity-0-init animate-fade-up delay-500 flex flex-wrap gap-4"
        style={{ animationFillMode: "forwards" }}
      >
        <a
          href="#work"
          className="px-8 py-3.5 bg-ink text-paper font-mono text-sm hover:bg-accent transition-colors duration-200"
        >
          View Work →
        </a>
        <a
          href={`mailto:${portfolio.email}`}
          className="px-8 py-3.5 border border-ink text-ink font-mono text-sm hover:bg-ink hover:text-paper transition-all duration-200"
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="opacity-0-init animate-fade-in delay-700 absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        style={{ animationFillMode: "forwards" }}
      >
        <span className="font-mono text-xs text-muted/60 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
      </div>

      {/* Decorative large number */}
      <div
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 font-display text-[20rem] text-border/40 select-none leading-none pointer-events-none"
        aria-hidden
      >
        01
      </div>
    </section>
  );
}
