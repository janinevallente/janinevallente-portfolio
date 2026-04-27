import { portfolio } from "@/lib/data";

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap select-none">
      <div className="inline-flex animate-marquee">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="pe-16 font-display font-medium text-white text-[clamp(4rem,12vw,12rem)] tracking-[-0.02em] leading-[0.9]"
          >
            {portfolio.name}
            <span className="text-accent ml-6">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
