import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealLineProps {
  delay?: number;
  color?: string;
}

export default function RevealLine({ delay = 0, color = "white-14" }: RevealLineProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <div ref={ref} className="overflow-hidden h-px w-full">
      <motion.div
        className={`h-1/3 w-full bg-${color} origin-left`}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      />
    </div>
  );
}