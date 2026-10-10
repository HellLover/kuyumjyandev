import React from "react";
import TechnologyItem from "../ui/TechnologyItem";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import SectionHeading from "../ui/SectionHeading";

const groups = [
    { label: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
    { label: "Frameworks", items: ["React", "Next.js", "Node.js", "Express"] },
    { label: "Styling", items: ["Tailwind CSS", "ChakraUI", "SCSS"] },
    { label: "Database", items: ["MongoDB"] },
    { label: "Tools", items: ["VSCode", "GitHub", "Windows"] },
];

const Technology: React.FC = () => {
    return (
        <section id="stack" className="scroll-mt-20 py-24">
            <RevealOnScroll>
                <SectionHeading index="02" title="Stack" />
                <dl className="divide-y divide-zinc-800/70 border-y border-zinc-800/70">
                    {groups.map((g) => (
                        <div key={g.label} className="grid gap-3 py-5 sm:grid-cols-[8rem_1fr] sm:gap-8">
                            <dt className="pt-1 font-mono text-xs text-zinc-500">{g.label}</dt>
                            <dd className="flex flex-wrap gap-2">
                                {g.items.map((name) => (
                                    <TechnologyItem key={name} name={name} />
                                ))}
                            </dd>
                        </div>
                    ))}
                </dl>
            </RevealOnScroll>
        </section>
    )
};

export default Technology;
