const images = "static/images";

export class Assets {
    static react = images + "/reactjs.png";
    static next = images + "/nextjs.png";
    static css = images + "/css.png";
    static html = images + "/html.png";
    static js = images + "/javascript.png";
    static ts = images + "/typescript.png";
    static mongodb = images + "/mongodb.png";
    static nodejs = images + "/nodejs.png";
    static tailwind = images + "/tailwindcss.png";
    static chakraui = images + "/chakra-ui.png";
    static sass = images + "/sass.png";
    static vscode = images + "/vscode.png";
    static windows = images + "/windows.png";
    static expressjs = images + "/express-js.png";
    static github = images + "/github.png";

    static previewDolphin = "/dolphin_preview.png";
    static previewPortfolio = "/portfolio_preview.png"
}

export const projects = [
    {
        name: "Dolphin Bot",
        description: "A versatile Discord bot with a sleek web dashboard that simplifies server management!",
        tech: ["React", "Next", "TypeScript", "discord.js", "Tailwind CSS"],
        url: "https://dolphinbot.fun",
        image: Assets.previewDolphin
    },
    {
        name: "Portfolio",
        description: "My personal portfolio website",
        tech: ["React", "Tailwind CSS", "TypeScript", "Vite"],
        url: "https://kuyumjyan.xyz",
        image: Assets.previewPortfolio
    }
]

export const socials = {
    github: "https://github.com/HellLover",
    discord: "https://discord.gg/TYhSGhWGvm",
    linkedin: "https://www.linkedin.com/in/samvel-kuyumjyan-5465782a6/"
}