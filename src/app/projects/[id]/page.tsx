import { notFound } from "next/navigation"
import { projectsData } from "@/data/projects"
import { ProjectDetailsContent } from "@/components/sections/project-details"

interface PageProps {
    params: Promise<{ id: string }>
}

export function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id,
    }))
}

export default async function ProjectDetails({ params }: PageProps) {
    const { id } = await params
    const project = projectsData.find((p) => p.id === id)

    if (!project) {
        notFound()
    }

    return <ProjectDetailsContent project={project} />
}
