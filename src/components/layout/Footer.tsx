import { portfolio } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink/70 text-center md:text-left">
          Built & designed by {portfolio.name}
          <br className="md:hidden" />
          {" "}· All rights reserved ©
        </p>
        <p className="font-mono text-xs text-ink/60 text-center md:text-left">
          {portfolio.location}
        </p>
      </div>
    </footer>
  );
}