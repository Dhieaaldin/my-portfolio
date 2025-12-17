import { About } from "@/components/sections/about"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Me | Dhia Eddine Louati",
    description: "Learn more about my background, education, and journey in Data Science and AI.",
}

export default function AboutPage() {
    return (
        <div className="pt-14 min-h-screen">
            <About />
        </div>
    )
}
