import { portfolio } from "@/lib/data";
import { profile } from "console";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
        <div>
          <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">04 / Projects</p>
          <h2 className="font-display text-5xl md:text-6xl text-ink">Personal Projects</h2>
        </div>
        <a
          href={portfolio?.social?.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline font-mono text-sm text-muted hover:text-ink transition-colors"
        >
          All on GitHub ↗
        </a>
      </div>

      {/* Other projects row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper border-t-0">
        {portfolio?.projects?.map((project) => (
          <article
            key={project?.id}
            className="bg-paper p-8 group hover:bg-ink transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-muted group-hover:text-paper/50 transition-colors">
                {project?.category} · {project?.year}
              </span>
              <span
                className="font-display text-4xl text-border group-hover:text-paper/20 transition-colors"
              >
                {project?.id}
              </span>
            </div>

            <h3 className="font-display text-2xl text-ink group-hover:text-paper mb-3 transition-colors duration-300">
              {project?.title}
            </h3>

            <p className="font-body text-sm text-muted group-hover:text-paper/60 leading-relaxed mb-6 transition-colors duration-300">
              {project?.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project?.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-1 border border-border group-hover:border-paper/20 text-muted group-hover:text-paper/50 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project?.hasUrl && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-ink group-hover:text-paper border-b border-ink group-hover:border-paper pb-0.5 transition-colors duration-300"
                >
                  Live ↗
                </a>
              )}
              <a
                href={project?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted group-hover:text-paper/50 border-b border-muted group-hover:border-paper/30 pb-0.5 transition-colors duration-300"
              >
                GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
