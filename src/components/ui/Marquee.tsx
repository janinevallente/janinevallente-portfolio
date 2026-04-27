import { portfolio } from "@/lib/data";

const ITEMS = [...Array(6)].map((_, i) => i);

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden>
      {ITEMS.map((i) => (
        <span
          key={i}
          className="pe-16 font-display font-medium text-white text-[clamp(4rem,12vw,12rem)] tracking-[-0.02em] leading-[0.9] whitespace-nowrap"
        >
          {portfolio.name}
          <span className="text-accent ml-6">—</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden select-none">
      <div
        className="flex w-max"
        style={{
          animation: "marquee-scroll 30s linear infinite",
          willChange: "transform",
        }}
      >
        {/* Two identical tracks — when the first scrolls fully offscreen the second seamlessly takes its place, then the animation loops */}
        <MarqueeTrack />
        <MarqueeTrack />
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}