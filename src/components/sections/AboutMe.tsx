import { RevealOnScroll } from "../ui/RevealOnScroll";
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
        year: '2025',
        title: 'Building the Future',
        description: 'Just returned from the army and am now focused on building innovative web applications and contributing to open-source projects.',
    },
] satisfies TimelineItemProps[];

export default function AboutMe() {
    return (
        <RevealOnScroll>
            <section className="px-4 py-16 md:px-8 lg:px-16 bg-gray-800/90 font-sans">
                <div className="mx-auto max-w-5xl">
                    {/* Header */}
                    <div className="mb-16 space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight text-blue-600 lg:text-5xl">
                            About Me
                        </h1>
                    </div>

                    {/* Intro Text */}
                    <div className="mb-20 space-y-6 border-s dark:border-gray-700 pl-4">
                        <p className="text-base leading-relaxed text-foreground">
                            I'm a full-stack developer with a keen eye for design and a deep passion for creating accessible, user-centric web applications. My expertise spans modern front-end frameworks, backend architecture, and everything in between.
                        </p>
                        <p className="text-base leading-relaxed text-foreground">
                            What drives me is the intersection of beautiful design and robust engineering. I believe that great software should not only work flawlessly but also delight users with every interaction.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div>
                        {timelineData.map((item) => (
                            <TimelineItem key={item.id} props={item} />
                        ))}
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    )
}