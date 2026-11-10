"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  threshold?: number;
  suffix?: React.ReactNode; // rendered right after the last word
}

export default function WordReveal({
  text,
  className = "",
  style = {},
  delay = 0,
  threshold = 0.3,
  suffix,
}: WordRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={{ ...style, display: "block" }}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "bottom",
              paddingBottom: "0.2em",
              marginBottom: "-0.2em",
            }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: "110%", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * 0.04,
              }}
            >
              {word}
              {!isLast && "\u00A0"}
              {isLast && suffix}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}