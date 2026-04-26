"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/lib/data";
import HeroImg from "@/assets/images/hero-img.png";

function HorizontalMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap select-none">
      <div
        className="inline-flex"
        style={{ animation: "marquee 22s linear infinite" }}
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="pe-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 12vw, 12rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              color: "white",
            }}
          >
            Janine Vallente
            <span style={{ color: "#c8f04a", marginLeft: "1.5rem" }}>—</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden flex flex-col"
      // style={{ backgroundColor: "#4d060f" }}
      style={{ backgroundColor: "#20201e" }}
    >
      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <Image
          src={HeroImg}
          alt="Janine Vallente"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-top"
          style={{ opacity: 0.95 }}
        />
        {/* Gradient to darken bottom for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(17,17,16,0.3) 0%, rgba(17,17,16,0.2) 40%, rgba(17,17,16,0.7) 75%, rgba(17,17,16,1) 100%)",
          }}
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
            className="text-right max-w-xs"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <div
              className="flex items-center justify-end gap-2 mb-3"
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#c8f04a" }}
              />
              Available for work
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              Frontend Developer <br />
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
          <HorizontalMarquee />
        </motion.div>

        {/* Bottom row: tagline + scroll cue */}
        <motion.div
          className="flex items-end justify-between px-8 md:px-12 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div />
          {/* <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
              color: "rgba(255,255,255,0.4)",
              fontWeight: 300,
              fontStyle: "italic",
              maxWidth: "28ch",
            }}
          >
            {portfolio.tagline}
          </p> */}
          <div
            className="hidden md:flex items-center gap-2 text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Scroll
            <span className="inline-block animate-bounce">↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}