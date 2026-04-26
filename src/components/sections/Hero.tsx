"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/lib/data";
import HeroImg from "@/assets/images/hero-img.png";
import Marquee from "@/components/ui/Marquee";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero relative h-screen overflow-hidden flex flex-col"
      // style={{ backgroundColor: "#4d060f" }}
    >
      {/* Hero image */}
      <div className="absolute inset-0">
        <Image
          src={HeroImg}
          alt="Janine Vallente"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-top opacity-95"
        />
        {/* Gradient to darken bottom for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black"
        />
      </div>

      {/* Top-right descriptor */}
      <motion.div
        className="relative z-10 flex-1 flex items-end md:items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full px-8 md:px-12 pt-28 md:pt-32 flex flex-col md:flex-row md:items-start md:justify-end">
          <div
            className="text-right max-w-xs text-white/55"
          >
            <div
              className="flex items-center justify-end gap-2 mb-3 text-white/40 text-xs tracking-wider uppercase font-body"
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse bg-accent"
              />
              Available for work
            </div>
            <p
              className="font-body font-light leading-relaxed"
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              }}
            >
              Software Developer <br />
              Based in Cebu City, Philippines
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom — big scrolling name */}
      <div className="relative z-10 pb-8 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Marquee />
        </motion.div>

        {/* Bottom row: scroll cue */}
        <motion.div
          className="flex items-end justify-between px-8 md:px-12 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div />
          <div
            className="hidden md:flex items-center gap-2 text-xs text-accent font-body tracking-wider uppercase"
          >
            Scroll
            <span className="inline-block animate-bounce">↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}