import { motion } from "framer-motion";

export default function CustomCursor({
  x,
  y,
  active,
  label,
}: {
  x: number;
  y: number;
  active: boolean;
  label: string;
}) {
  return (
    <motion.div
      className="fixed pointer-events-none z-[60] flex items-center justify-center rounded-full bg-accent w-[90px] h-[90px]"
      style={{
        top: 0,
        left: 0,
        x: x - 45,
        y: y - 45,
      }}
      animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="font-body text-xs tracking-widest uppercase text-ink">
        {label}
      </span>
    </motion.div>
  );
}