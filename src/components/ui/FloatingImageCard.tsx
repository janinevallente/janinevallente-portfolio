import { motion} from "framer-motion";
import { portfolio } from "@/lib/data";

type Project = (typeof portfolio.projects)[number];

/**
 * Floating image card that follows the cursor.
 * Stacks all project images and slides vertically to show the active one.
 */
export default function FloatingImageCard({
  x,
  y,
  active,
  index,
  projects,
}: {
  x: number;
  y: number;
  active: boolean;
  index: number;
  projects: Project[];
}) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 overflow-hidden rounded-sm shadow-2xl"
      style={{
        width: 520,
        height: 260,
        top: 0,
        left: 0,
        x: x + 28,   // offset to the right of cursor
        y: y - 130,  // vertically centred on cursor
      }}
      animate={{ scale: active ? 1 : 0.85, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Slide stack — snaps to active project image */}
      <motion.div
        style={{ height: `${projects.length * 100}%` }}
        animate={{ y: `${(-index / projects.length) * 100}%` }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {projects.map((p) => (
          <div
            key={p.id}
            className="relative w-full"
            style={{ height: `${100 / projects.length}%` }}
          >
            <img
              src={p.images[0].src}
              alt={p.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}