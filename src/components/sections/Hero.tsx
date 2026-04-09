"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolio } from "@/lib/data";
import HeroImage from "@/assets/images/hero-img.webp";

const roles = ["Frontend Developer", "Mobile Developer"];

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
    <section className="min-h-screen flex flex-col md:flex-row items-center px-6 pt-24 pb-16 max-w-6xl mx-auto">

      {/* RIGHT IMAGE (first on mobile) */}
      <div className="relative flex justify-center mb-12 md:mb-0 md:order-2">
        {/* image frame */}
        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[470px] lg:h-[470px] rounded-full overflow-hidden border border-border/30">
          <Image
            src={HeroImage}
            alt="Janine"
            fill
            priority
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 470px"
            quality={100}
            className="object-cover"
          />
        </div>
      </div>

      {/* LEFT CONTENT */}
      <div className="flex-1 text-center md:text-left md:order-1">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 mb-8 md:mb-12 px-3 py-1.5 border border-border font-mono text-xs text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for work
        </div>

        {/* Name */}
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] mb-6 tracking-tight">
          {portfolio.name.split(" ")[0]}
          <br />
          <span className="text-muted">
            {portfolio.name.split(" ")[1]}
          </span>
          <span className="text-accent">.</span>
        </h1>

        {/* Typewriter role*/}
        <div className="font-mono text-xl md:text-2xl text-muted mb-6 md:mb-8 h-8 flex items-center justify-center md:justify-start">
          <span className="text-ink">{displayed}</span>
          <span className="animate-blink ml-0.5 text-accent">|</span>
        </div>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-8 md:mb-12 mx-auto md:mx-0">
          {portfolio.tagline}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 md:px-8 py-3.5 bg-ink text-paper font-mono text-sm hover:bg-accent transition"
          >
            View Projects →
          </a>

          <a
            href={`mailto:${portfolio.email}`}
            className="px-6 md:px-8 py-3.5 border border-ink text-ink font-mono text-sm hover:bg-ink hover:text-paper transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}