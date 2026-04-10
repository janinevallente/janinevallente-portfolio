import { portfolio } from "@/lib/data";
import { profile } from "console";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
          <div>
            <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">04 / Projects</p>
            <h2 className="font-display text-5xl md:text-6xl text-paper">Projects & Commissions</h2>
          </div>
          <a
            href={portfolio?.social?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline font-mono text-sm text-muted hover:text-accent transition-colors"
          >
            All on GitHub ↗
          </a>
        </div>

        {/* Other projects row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border-t-0">
          {portfolio?.projects?.map((project) => (
            <article
              key={project?.id}
              className="bg-ink p-8 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-xs text-muted">
                  {project?.category} · {project?.year}
                </span>
                <span
                  className="font-display text-4xl text-border transition-colors"
                >
                  {project?.id}
                </span>
              </div>

              <h3 className="font-display text-2xl text-paper mb-3">
                {project?.title}
              </h3>

              <p className="font-body text-sm text-paper/70 leading-relaxed mb-6">
                {project?.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 border border-accent text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted hover:text-accent border-b border-muted hover:border-accent pb-0.5 transition-colors duration-300"
                >
                  GitHub ↗
                </a>
                {project?.hasUrl && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-paper hover:text-accent border-b border-paper hover:border-accent pb-0.5 transition-colors duration-300"
                  >
                    Live Site ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
