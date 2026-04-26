import { motion} from "framer-motion";

/**
 * Custom cursor circle — replaces the default cursor inside the project list.
 * Rendered in a portal-like fixed div so it's always on top.
 */
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
      className="fixed pointer-events-none z-[60] flex items-center justify-center rounded-full"
      style={{
        width: 90,
        height: 90,
        backgroundColor: "#c8f04a",
        top: 0,
        left: 0,
        x: x - 45,
        y: y - 45,
      }}
      animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <span
        className="text-xs tracking-widest uppercase"
        style={{ fontFamily: "var(--font-body)", color: "#111110" }}
      >
        {label}
      </span>
    </motion.div>
  );
}