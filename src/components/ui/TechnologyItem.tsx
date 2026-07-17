type TechProps = {
    name: string;
    icon: string;
    type: string;
}

type Category = "language" | "framework" | "styling" | "database" | "tooling" | "os";

const CATEGORY_MAP: Record<string, Category> = {
    "Language": "language",
    "Framework": "framework",
    "Web App Framework": "framework",
    "CSS Framework": "styling",
    "CSS Preprocessor": "styling",
    "Database": "database",
    "Editor": "tooling",
    "Version Control": "tooling",
    "OS": "os",
};

const CATEGORY_STYLES: Record<Category, { accent: string; label: string }> = {
    language: { accent: "#F59E0B", label: "Language" },
    framework: { accent: "#3B82F6", label: "Framework" },
    styling: { accent: "#EC4899", label: "Styling" },
    database: { accent: "#10B981", label: "Database" },
    tooling: { accent: "#8B5CF6", label: "Tooling" },
    os: { accent: "#06B6D4", label: "OS" },
};

const getCategory = (type: string): Category => CATEGORY_MAP[type] ?? "tooling";

const TechnologyItem = ({ name, icon, type }: TechProps) => {
    const category = getCategory(type);
    const { accent } = CATEGORY_STYLES[category];

    return (
        <div
            style={{ ["--accent" as string]: accent }}
            className="group relative flex w-full items-center gap-4 overflow-hidden rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/60 hover:bg-slate-900"
        >
            <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-[3px] bg-[var(--accent)]/70 transition-opacity duration-300"
            />

            <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[var(--accent)]/0 blur-2xl transition-all duration-300 group-hover:bg-[var(--accent)]/20"
            />

            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-800 bg-slate-950/80 transition-colors duration-300 group-hover:border-[var(--accent)]/50">
                <img
                    src={icon}
                    alt={`${name} logo`}
                    className="h-6 w-6 object-contain"
                    loading="lazy"
                />
            </div>

            <div className="relative min-w-0 flex-1">
                <p className="truncate text-base font-semibold leading-tight text-slate-100">
                    {name}
                </p>
                <p className="mt-0.5 truncate font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    {type}
                </p>
            </div>
        </div>
    )
}

export default TechnologyItem;