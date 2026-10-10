import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../types/resources";

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-20 py-24">
            <RevealOnScroll>
                <SectionHeading index="03" title="Projects" />
                <div className="grid gap-6 sm:grid-cols-2">
                    {projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/30 p-3 transition-colors hover:border-zinc-600"
                        >
                            <div className="aspect-[16/10] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                            </div>
                            <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-lg font-medium text-zinc-50">{project.name}</h3>
                                    <ArrowUpRight
                                        size={18}
                                        className="mt-1 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-50"
                                    />
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>
                                <p className="mt-auto pt-5 font-mono text-xs leading-relaxed text-zinc-500">
                                    {project.tech.join("  ·  ")}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Projects;
