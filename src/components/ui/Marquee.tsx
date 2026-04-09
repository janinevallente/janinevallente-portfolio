import { portfolio } from "@/lib/data";

export default function Marquee() {
  const items = [...portfolio.marqueeItems, ...portfolio.marqueeItems];

  return (
    <div className="border-y border-border py-4 overflow-hidden bg-ink">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6">
            <span className="font-mono text-sm text-paper/70 tracking-widest uppercase">
              {item}
            </span>
            <span className="text-accent font-display text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
