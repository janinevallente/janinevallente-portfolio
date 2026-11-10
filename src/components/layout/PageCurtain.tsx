"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { getCursorPosition } from "@/lib/cursor-position";
import { registerCurtain } from "@/lib/curtain";

type State = {
  phase: "cover" | "waiting" | "reveal";
  x: number;
  y: number;
  r: number;
} | null;

export default function PageCurtain() {
  const pathname = usePathname();
  const pathRef = useRef(pathname);
  const startPath = useRef(pathname);
  const onCovered = useRef<(() => void) | null>(null);
  const [state, setState] = useState<State>(null);

  pathRef.current = pathname;

  // Register so any page can trigger the curtain
  useEffect(() => {
    return registerCurtain((cb) => {
      const { x, y } = getCursorPosition();
      const w = window.innerWidth;
      const h = window.innerHeight;
      const r = Math.hypot(Math.max(x, w - x), Math.max(y, h - y));

      onCovered.current = cb;
      startPath.current = pathRef.current;
      setState({ phase: "cover", x, y, r });
    });
  }, []);

  // New page arrived while covered -> reveal it
  useEffect(() => {
    if (state?.phase === "waiting" && pathname !== startPath.current) {
      setState((s) => (s ? { ...s, phase: "reveal" } : s));
    }
  }, [pathname, state?.phase]);

  // Safety net: never leave the screen covered if navigation stalls
  useEffect(() => {
    if (state?.phase !== "waiting") return;
    const t = setTimeout(
      () => setState((s) => (s ? { ...s, phase: "reveal" } : s)),
      3000
    );
    return () => clearTimeout(t);
  }, [state?.phase]);

  if (!state) return null;

  const full = `circle(${state.r + 2}px at ${state.x}px ${state.y}px)`;

  if (state.phase === "cover") {
    return (
      <motion.div
        key="cover"
        className="fixed inset-0 z-[300] bg-accent"
        initial={{ clipPath: `circle(0px at ${state.x}px ${state.y}px)` }}
        animate={{ clipPath: full }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => {
          setState((s) => (s ? { ...s, phase: "waiting" } : s));
          onCovered.current?.();
          onCovered.current = null;
        }}
      />
    );
  }

  if (state.phase === "waiting") {
    return (
      <div
        key="waiting"
        className="fixed inset-0 z-[300] bg-accent"
        style={{ clipPath: full }}
      />
    );
  }

  return (
    <motion.div
      key="reveal"
      className="pointer-events-none fixed inset-0 z-[300] bg-accent"
      style={{ clipPath: full }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onAnimationComplete={() => setState(null)}
    />
  );
}