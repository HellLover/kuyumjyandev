const SectionHeading = ({ index, title }: { index: string; title: string }) => (
    <h2 className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
        <span className="text-blue-400">{index}</span>
        {title}
        <span className="h-px flex-1 bg-zinc-800" />
    </h2>
);

export default SectionHeading;
