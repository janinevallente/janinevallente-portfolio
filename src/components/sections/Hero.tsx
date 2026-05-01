"use client";

import { motion } from "framer-motion";
import HeroImg from "@/assets/images/hero-img.webp";
import Marquee from "@/components/ui/Marquee";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-hero relative h-screen overflow-hidden flex flex-col"
    >
      {/* Hero image */}
      <img
        src={HeroImg.src}
        alt="Janine Vallente"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-95"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black" />

      {/* Top-right descriptor */}
      <motion.div
        className="relative z-10 flex-1 flex items-end md:items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full px-8 md:px-12 pt-28 md:pt-32 flex flex-col md:flex-row md:items-start md:justify-end">
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent-25 bg-accent-5">
              <span className="relative flex h-2 w-2">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-accent"
                  animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-body text-xs tracking-[0.12em] uppercase font-normal text-accent">
                Available to work
              </span>
            </div>
 
            <p className="font-body font-light leading-relaxed text-[clamp(0.9rem,1.5vw,1.1rem)] text-white/55 text-right">
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

        {/* Scroll cue */}
        <motion.div
          className="flex items-end justify-between px-8 md:px-12 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div />
          <div className="hidden md:flex items-center gap-2 text-xs text-accent font-body tracking-wider uppercase">
            Scroll
            <div className="inline-block animate-bounce">
              <ArrowDown size={15}/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}