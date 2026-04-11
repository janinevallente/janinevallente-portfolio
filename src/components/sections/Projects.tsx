"use client";

import ProjectAccordion from "../ui/ProjectAccordion";
import { portfolio } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-6 pb-6 border-b border-paper/10">
          <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">04 / Projects</p>
          <h2 className="font-display text-5xl md:text-6xl text-paper">Featured Projects</h2>
        </div>

        {/* Accordion list */}
        <div>
          {portfolio.projects.map((project, i) => (
            <ProjectAccordion key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}