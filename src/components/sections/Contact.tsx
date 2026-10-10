import { RevealOnScroll } from "../ui/RevealOnScroll";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { socials } from "../../types/resources";

const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-20 py-24">
            <RevealOnScroll>
                <SectionHeading index="04" title="Contact" />
                <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                    Let's build something together.
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
                    Got a project in mind, or just want to say hi? Reach out on LinkedIn or Discord.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button href={socials.linkedin} external>LinkedIn</Button>
                    <Button href={socials.discord} variant="outline" external>Discord</Button>
                    <Button href={socials.github} variant="outline" external>GitHub</Button>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Contact;
