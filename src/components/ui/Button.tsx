import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    href: string;
    variant?: "primary" | "outline";
    external?: boolean;
}

const base =
    "inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

const variants = {
    primary: "bg-zinc-100 text-zinc-950 hover:bg-white",
    outline: "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white",
};

const Button: React.FC<ButtonProps> = ({ children, href, variant = "primary", external = false }) => (
    <a
        href={href}
        className={`${base} ${variants[variant]}`}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
        {children}
        {external && <ArrowUpRight size={15} />}
    </a>
);

export default Button;
