import { socials } from "../../types/resources";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const links = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur-md">
            <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
                <a href="#top" className="font-mono text-sm text-zinc-100">
                    kuyumjyan<span className="text-blue-400">.</span>
                </a>

                <ul className="hidden items-center gap-7 font-mono text-xs text-zinc-400 sm:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="transition-colors hover:text-zinc-50">
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3 text-zinc-400">
                    <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-zinc-50">
                        <AiFillGithub size={20} />
                    </a>
                    <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-zinc-50">
                        <AiFillLinkedin size={20} />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
