"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <SectionWrapper className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Dhia Eddine Louati
                </h1>
                <h2 className="text-xl text-muted-foreground sm:text-2xl md:text-3xl font-medium">
                    Data Science & AI Enthusiast
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Embark on a data science journey where numbers tell stories and insights spark innovation.
                    Solving real-world challenges through creative data analysis.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-4 sm:flex-row mt-8"
            >
                <Button asChild size="lg">
                    <Link href="projects">
                        View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="https://github.com/Dhieaaldin" target="_blank">
                        <Github className="mr-2 h-4 w-4" /> GitHub Profile
                    </Link>
                </Button>
            </motion.div>
        </SectionWrapper>
    )
}
