'use client'

export interface TimelineItemProps {
    id: number
    year: string
    title: string
    description: string
}

export default function TimelineItem({ props }: { props: TimelineItemProps }) {
    return (
        <div className="relative border-s dark:border-gray-700">
            <div className="ms-4">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-blue-600/50"></div>
                <time className="text-sm font-normal leading-none text-body">{props.year}</time>
                <h3 className="text-lg font-semibold text-heading my-2">{props.title}</h3>
                <p className="pb-4 md:pb-8 text-base font-normal text-body">{props.description}</p>
            </div>
        </div>
    )
}
