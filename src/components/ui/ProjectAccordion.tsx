import { useState } from "react";
import Image from "next/image";
import { portfolio } from "@/lib/data";

type Project = (typeof portfolio.projects)[number];

export default function ProjectAccordion({ project, index }: { project: Project; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-paper/10 last:border-b-0">
            {/* ── Accordion trigger ── */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left group"
                aria-expanded={open}
            >
                <div className="flex items-center gap-6 py-6 md:py-7 px-1 transition-colors duration-200 hover:bg-paper/5">
                    {/* Number */}
                    <span className="font-display text-3xl md:text-4xl text-paper/40 w-14 shrink-0 select-none">
                        {project.id}
                    </span>

                    {/* Title + tags */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-display text-xl md:text-2xl text-paper mb-2 leading-tight">
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-mono text-[12px] px-2 py-0.5 border border-accent/80 text-accent/80 rounded-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Year + chevron */}
                    <div className="flex items-center gap-4 shrink-0">
                        <span
                            className="md:pe-5 text-paper/40 text-lg leading-none transition-transform duration-300 select-none"
                            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                        >
                            +
                        </span>
                    </div>
                </div>
            </button>

            {/* ── Accordion panel ── */}
            <div
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{
                    maxHeight: open ? "600px" : "0px",
                    opacity: open ? 1 : 0,
                    transition: "max-height 0.4s ease, opacity 0.3s ease",
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-6 border border-paper/10">
                    {/* LEFT — image */}
                    <div className="relative overflow-hidden min-h-[220px] md:min-h-[280px]">
                        <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                        {/* Subtle dark overlay so text on top stays readable */}
                        <div className="absolute inset-0 bg-ink/10" />
                    </div>


                    {/* RIGHT — description + links */}
                    <div className="flex flex-col justify-between p-6 md:p-8 border-t md:border-t-0 md:border-l border-paper/10">
                        <div>
                            {/* Category + year row */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="font-mono text-[10px] text-paper/40 uppercase tracking-widest">
                                    {project.category}
                                </span>
                                <span className="text-paper/20">·</span>
                                <span
                                    className={`font-mono text-[10px] ${project.id === "04" ? "text-accent" : "text-paper/40"
                                        }`}
                                >
                                    {project.year}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="font-body text-sm text-paper/70 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4 mt-6 pt-4 border-t border-paper/10">
                            {project.id === "04" && (
                                <span className="font-mono text-xs text-accent border-b border-accent pb-0.5">
                                    Current Live Site
                                </span>
                            )}
                            {project.hasGithub && project.id !== "04" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs text-paper/50 hover:text-accent border-b border-paper/20 hover:border-accent pb-0.5 transition-colors duration-200"
                                >
                                    GitHub ↗
                                </a>
                            )}
                            {project.hasUrl && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs text-paper hover:text-accent border-b border-paper/40 hover:border-accent pb-0.5 transition-colors duration-200"
                                >
                                    Live Site ↗
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}