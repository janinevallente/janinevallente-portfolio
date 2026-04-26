import { portfolio } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t px-8 md:px-12 py-7 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{
        backgroundColor: "#111110",
        borderColor: "rgba(255,255,255,0.07)",
        fontFamily: "var(--font-body)",
        fontSize: "0.72rem",
        color: "rgba(255,255,255,0.25)",
        letterSpacing: "0.06em",
      }}
    >
      <p>© {year} {portfolio.name}. All rights reserved.</p>
      <p>Built with Next.js & Framer Motion</p>
    </footer>
  );
}
