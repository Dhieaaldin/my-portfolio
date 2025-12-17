import { Skills } from "@/components/sections/skills"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Skills | Dhia Eddine Louati",
    description: "Technical expertise in Data Science, Machine Learning, and Software Development.",
}

export default function SkillsPage() {
    return (
        <div className="pt-14 min-h-screen">
            <Skills />
        </div>
    )
}
