import { portfolio } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {year} {portfolio.name} · Built with Next.js & Tailwind CSS
        </p>
        <p className="font-mono text-xs text-muted/50">
          {portfolio.location}
        </p>
      </div>
    </footer>
  );
}
