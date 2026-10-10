const TechnologyItem = ({ name }: { name: string }) => (
    <span className="rounded-md border border-zinc-800 px-2.5 py-1 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-50">
        {name}
    </span>
);

export default TechnologyItem;
