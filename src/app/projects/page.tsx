import { Projects } from "@/components/sections/projects"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects | Dhia Eddine Louati",
    description: "Showcase of my data science, machine learning, and software development projects.",
}

export default function ProjectsPage() {
    return (
        <div className="pt-14 min-h-screen">
            <Projects />
        </div>
    )
}
