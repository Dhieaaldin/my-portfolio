"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Project } from "@/data/projects"

interface ProjectDetailsContentProps {
    project: Project
}

export function ProjectDetailsContent({ project }: ProjectDetailsContentProps) {
    const router = useRouter()

    return (
        <SectionWrapper className="pt-24 pb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto space-y-8"
            >
                <Button variant="ghost" onClick={() => router.back()} className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Button>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border bg-muted shadow-lg">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-2 space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold">About this project</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </section>

                        {project.screenshots.length > 1 && (
                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold">Project Screenshots</h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {project.screenshots.filter(s => s !== project.image).map((screenshot, index) => (
                                        <div key={index} className="relative aspect-video overflow-hidden rounded-xl border bg-muted cursor-pointer transition-transform hover:scale-[1.02]">
                                            <Image
                                                src={screenshot}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="space-y-6">
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold">Links</h2>
                            <div className="flex flex-col gap-3">
                                <Button asChild className="w-full">
                                    <Link href={project.github} target="_blank">
                                        <Github className="mr-2 h-4 w-4" /> View Code
                                    </Link>
                                </Button>
                                {project.link && (
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href={project.link} target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold">Category</h2>
                            <Badge variant="outline" className="text-sm px-3 py-1">
                                {project.category}
                            </Badge>
                        </section>
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    )
}
