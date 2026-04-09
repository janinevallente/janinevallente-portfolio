import { portfolio } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 pb-6 border-b border-paper/10">
          <p className="font-mono text-xs text-paper/40 tracking-widest uppercase mb-2">02 / About</p>
          <h2 className="font-display text-5xl md:text-6xl text-paper">A Bit About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div>
            <p className="font-body text-lg text-paper/70 leading-relaxed mb-6">
              I began my journey as an aspiring Android developer, working with Kotlin and Firebase.
              Overtime, I expanded into frontend web development and developed a strong interest in building
              responsive, user-focused interfaces. < br />
            </p>
            <p className="font-body text-lg text-paper/70 leading-relaxed mb-6">
              Now, I work with technologies like React and TypeScript
              while remaining open to mobile development opportunities.
            </p>
            <p className="font-body text-paper/50 leading-relaxed mb-8">
              Outside work, you&apos;ll find me building <em>Gunpla</em> kits, playing video games, or attending anime conventions.
            </p>
            <div className="flex gap-4 flex-wrap">
              {Object.entries(portfolio.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-paper/40 border-b border-paper/20 pb-0.5 hover:text-accent hover:border-accent transition-colors capitalize"
                >
                  {platform} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="mb-8">
              <h3 className="font-mono text-xs text-paper/40 tracking-widest uppercase mb-4">
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {portfolio.skills.core.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm px-3 py-1.5 border border-accent text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-mono text-xs text-paper/40 tracking-widest uppercase mb-4">
                Mobile Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {portfolio.skills.mobile.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm px-3 py-1.5 border border-accent text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs text-paper/40 tracking-widest uppercase mb-4">
                Also Comfortable With
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolio.skills.also.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm px-3 py-1.5 border border-paper/15 text-paper/50 hover:border-paper/40 hover:text-paper/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row - need these for the future */}
        {/* <div className="mt-20 pt-16 border-t border-paper/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "1+", label: "Years of experience" },
            { value: "20+", label: "Projects" },
            { value: "15+", label: "Happy clients" },
            { value: "∞", label: "Cups of coffee" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl text-accent mb-2">{stat.value}</p>
              <p className="font-mono text-xs text-paper/40 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
