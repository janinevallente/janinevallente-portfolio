import { portfolio } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
        <div>
          <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">03 / Experience</p>
          <h2 className="font-display text-5xl md:text-6xl text-ink">Where I&apos;ve Worked</h2>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="flex flex-col gap-0">
          {portfolio.experience.map((job, i) => (
            <div
              key={i}
              className="md:pl-12 relative group"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-0 top-6 w-2 h-2 rounded-full bg-border group-hover:bg-accent -translate-x-[3.5px] transition-colors duration-200" />

              <div className="border-b border-border py-10 grid grid-cols-1 md:grid-cols-[200px,1fr] gap-4 md:gap-12">
                {/* Left: period */}
                <div>
                  <p className="font-mono text-xs text-muted tracking-wide">{job.period}</p>
                </div>

                {/* Right: content */}
                <div>
                  <h3 className="font-display text-2xl text-ink mb-1 group-hover:text-accent transition-colors duration-200">
                    {job.role}
                  </h3>
                  <p className="font-mono text-sm text-muted mb-4">{job.company}</p>
                  <p className="font-body text-muted leading-relaxed text-sm">{job.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
