"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { projectsData, type ProjectCategory } from "@/data/projects"
import { cn } from "@/lib/utils"

const categories: ProjectCategory[] = ["All", "Machine Learning", "Software Development", "Data Analysis", "SQL & Database"]

export function Projects() {
    const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("All")

    const filteredProjects = projectsData.filter(
        (project) => activeCategory === "All" || project.category === activeCategory
    )

    return (
        <SectionWrapper id="projects" className="bg-secondary/20">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto">

                    &ldquo;Ask my AI assistant about my projects, skills, or experience.&rdquo;

                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 pb-8">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        onClick={() => setActiveCategory(category)}
                        size="sm"
                        className="rounded-full"
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <motion.div
                layout
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-primary/10">
                                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                    <Link href={`/projects/${project.id}`}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                                        // Use unoptimized for legacy images if needed, but next.config.ts handles global unoptimized
                                        />
                                    </Link>
                                    {project.academicDetails && (
                                        <div className="absolute top-3 right-3 z-10">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 text-slate-800 border-slate-200/80 shadow-md">
                                                <span className="relative flex h-1.5 w-1.5">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-slate-500"></span>
                                                </span>
                                                End of Study Project
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <CardHeader>
                                    <Link href={`/projects/${project.id}`}>
                                        <CardTitle className="line-clamp-1 hover:text-primary transition-colors cursor-pointer">{project.title}</CardTitle>
                                    </Link>
                                    <CardDescription className="line-clamp-2 min-h-[2.5rem]">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-end">
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <Badge variant="secondary" className="text-xs">
                                                +{project.tags.length - 3}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-2 pt-0 mt-4">
                                    <Button asChild variant="outline" size="sm" className="w-full">
                                        <Link href={project.github} target="_blank">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Link>
                                    </Button>
                                    {project.link && (
                                        <Button asChild size="sm" className="w-full">
                                            <Link href={project.link} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                            </Link>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </SectionWrapper>
    )
}
