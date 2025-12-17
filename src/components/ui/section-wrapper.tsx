import { cn } from "@/lib/utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    id?: string
}

export function SectionWrapper({ className, children, id, ...props }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn("container mx-auto px-4 py-16 md:py-24 space-y-8", className)}
            {...props}
        >
            {children}
        </section>
    )
}
