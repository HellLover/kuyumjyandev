import Button from "../ui/Button";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { socials } from "../../types/resources";

const Home = () => {
    return (
        <section id="top" className="flex min-h-[80vh] scroll-mt-20 flex-col justify-center pb-20 pt-16">
            <RevealOnScroll>
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-blue-400">Hello, I'm</p>
                <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
                    Samvel Kuyumjyan
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
                    Mid-level full-stack web developer specializing in Next.js and TypeScript. Passionate about building
                    scalable web applications, optimizing user experiences, and developing innovative solutions.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                    <Button href={socials.linkedin} external>Contact me</Button>
                    <Button href="#projects" variant="outline">View projects</Button>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Home;
