"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Hello.", "Mabuhay.", "Loading.", "Building.", "Welcome."];

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setDimensions({ w: window.innerWidth, h: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index >= words.length) {
      const t = setTimeout(() => setDone(true), 300);
      return () => clearTimeout(t);
    }
    const delay = index === 0 ? 600 : 220;
    const t = setTimeout(() => setIndex((i) => i + 1), delay);
    return () => clearTimeout(t);
  }, [index]);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onDone, 900);
      return () => clearTimeout(t);
    }
  }, [done, onDone]);

  const { w, h } = dimensions;

  const initialPath = w > 0
    ? `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h + 320} 0 ${h} L0 0`
    : "M0 0";
  const exitPath = w > 0
    ? `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h} 0 ${h} L0 0`
    : "M0 0";

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "#111110" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {w > 0 && (
            <svg
              className="absolute top-0 -z-10 w-full pointer-events-none"
              style={{ height: `calc(100% + 320px)` }}
            >
              <motion.path
                fill="#111110"
                initial={{ d: initialPath }}
                animate={{ d: done ? exitPath : initialPath }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              />
            </svg>
          )}

          <motion.div
            className="flex items-center gap-4 text-white"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#c8f04a" }}
            />
            <p
              className="text-2xl md:text-4xl tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {words[Math.min(index, words.length - 1)]}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
