export interface TimelineItemProps {
    id: number
    year: string
    title: string
    description: string
    current?: boolean
}

export default function TimelineItem({ props }: { props: TimelineItemProps }) {
    return (
        <li className="grid gap-1 py-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
            <time className="pt-1 font-mono text-xs text-zinc-500">{props.year}</time>
            <div>
                <h3 className="flex items-center gap-2 font-medium text-zinc-100">
                    {props.title}
                    {props.current && <span className="h-1.5 w-1.5 rounded-full bg-blue-400" aria-label="current" />}
                </h3>
                <p className="mt-1.5 leading-relaxed text-zinc-400">{props.description}</p>
            </div>
        </li>
    )
}
