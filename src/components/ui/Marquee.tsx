import { portfolio } from "@/lib/data";

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap select-none">
      <div
        className="inline-flex"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="pe-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 12vw, 12rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              color: "white",
            }}
          >
            {portfolio.name}
            <span style={{ color: "#c8f04a", marginLeft: "1.5rem" }}>—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
