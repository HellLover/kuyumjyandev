import { RevealOnScroll } from "../ui/RevealOnScroll";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem, { TimelineItemProps } from "../ui/TimelineItem";

const timelineData = [
    {
        id: 1,
        year: '2020',
        title: 'Started My Journey',
        description: 'Began my journey with creating Discord bots. This sparked my passion for coding and I started to learn programming.',
    },
    {
        id: 2,
        year: '2021',
        title: 'Created My First Project',
        description: 'Created my first Discord bot and started my journey in web development by learning frontend basics.',
    },
    {
        id: 3,
        year: '2022',
        title: 'Full-Stack Developer',
        description: 'Dove deeper into web development, learning both frontend and backend technologies, and built my first full-stack project - Dolphin.',
    },
    {
        id: 4,
        year: '2025 - now',
        title: 'Building the Future',
        description: 'Just returned from the army and am now focused on building innovative web applications and contributing to open-source projects.',
        current: true,
    },
] satisfies TimelineItemProps[];

export default function AboutMe() {
    return (
        <section id="about" className="scroll-mt-20 py-24">
            <RevealOnScroll>
                <SectionHeading index="01" title="About" />
                <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-zinc-300">
                    <p>
                        I'm a full-stack developer with a keen eye for design and a deep passion for creating accessible,
                        user-centric web applications. My expertise spans modern front-end frameworks, backend architecture,
                        and everything in between.
                    </p>
                    <p className="text-zinc-400">
                        What drives me is the intersection of beautiful design and robust engineering. I believe that great
                        software should not only work flawlessly but also delight users with every interaction.
                    </p>
                </div>

                <ol className="mt-14 divide-y divide-zinc-800/70 border-y border-zinc-800/70">
                    {timelineData.map((item) => (
                        <TimelineItem key={item.id} props={item} />
                    ))}
                </ol>
            </RevealOnScroll>
        </section>
    )
}
