import { portfolio } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">05 / Contact</p>
          <h2 className="font-display text-5xl md:text-6xl text-ink mb-6 leading-tight">
            Let&apos;s Build<span className="text-accent italic"> Something</span> Together.
          </h2>

          <p className="font-body text-muted text-lg leading-relaxed mb-10">
            Whether you have a project in mind, an open role, or just want to say hello — my inbox is always open.
          </p>

          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex items-center gap-3 group mb-12"
          >
            <span className="font-display text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors duration-200 border-b-2 border-ink group-hover:border-accent pb-1">
              {portfolio.email}
            </span>
            <span className="font-mono text-muted group-hover:translate-x-2 transition-transform duration-200 text-xl">→</span>
          </a>

          <div className="flex gap-6 flex-wrap">
            {Object.entries(portfolio.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted hover:text-ink transition-colors capitalize border-b border-transparent hover:border-ink pb-0.5"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Large decorative text */}
        <div
          className="hidden lg:block absolute right-0 bottom-0 font-display text-[18rem] text-border/30 select-none leading-none pointer-events-none overflow-hidden"
          aria-hidden
        >
          Hello.
        </div>
      </div>
    </section>
  );
}
