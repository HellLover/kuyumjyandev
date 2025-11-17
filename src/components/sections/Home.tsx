import Button from "../ui/Button";
import Hero from "../ui/Hero";
import { RevealOnScroll } from "../ui/RevealOnScroll";

import { socials } from "../../types/resources";

const Home = () => {
    return (
        <>
            <img src="/background.png" className="absolute top-0 right-0 opacity-60 pointer-events-none" alt="Background" />

            <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_700px_20px_#e99b63] -rotate-[30deg]"></div>

            <Hero>
                <RevealOnScroll>
                    <h1 id="home" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                        👋 Hi, I'm <span className='bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent'>Samvel Kuyumjyan</span>
                    </h1>
                    <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl mb-8 mx-auto text-center">
                        Mid-level full-stack web developer specializing in Next.js and TypeScript. Passionate about building scalable web applications, optimizing user experiences, and developing innovative solutions
                    </p>
                    <div className='w-full mx-auto flex flex-row space-x-2 justify-center items-center'>
                        <Button
                            variant="primary"
                            onClick={() => window.location.href = `${socials.linkedin}`}
                        >
                            Contact Me
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => window.scrollTo({ top: document.getElementById("footer")?.offsetTop, behavior: "smooth" })}
                        >
                            Projects
                        </Button>
                    </div>
                </RevealOnScroll>
            </Hero>
        </>
    );
}

export default Home;
