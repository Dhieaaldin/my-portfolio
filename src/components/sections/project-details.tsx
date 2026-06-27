"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, ArrowLeft, GraduationCap, Building, Users, Calendar, FileText, Download, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Project } from "@/data/projects"

interface ProjectDetailsContentProps {
    project: Project
}

export function ProjectDetailsContent({ project }: ProjectDetailsContentProps) {
    const router = useRouter()
    const [activeScreenshot, setActiveScreenshot] = React.useState<string | null>(null)

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

                <div 
                    className="relative aspect-video w-full overflow-hidden rounded-2xl border bg-muted shadow-lg cursor-pointer group"
                    onClick={() => setActiveScreenshot(project.image)}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-black/60 text-white rounded-full p-3 backdrop-blur-sm shadow-lg transform scale-95 group-hover:scale-100 transition-transform">
                            <Maximize2 className="h-6 w-6" />
                        </div>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-2 space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold">About this project</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </section>

                        {/* Custom Features List */}
                        {project.featuresList && (
                            <section className="space-y-6 pt-4 animate-in fade-in slide-in-from-bottom-3 duration-500">
                                <h2 className="text-2xl font-bold">Key Modules & Features</h2>
                                <div className="grid gap-4">
                                    {project.featuresList.map((feature, idx) => (
                                        <div key={idx} className="p-5 rounded-xl border bg-card/60 backdrop-blur-xs text-card-foreground shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 duration-200">
                                            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-primary" />
                                                {feature.title}
                                            </h3>
                                            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {project.screenshots.length > 1 && (
                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold">Project Screenshots</h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {project.screenshots.filter(s => s !== project.image).map((screenshot, index) => (
                                        <div 
                                            key={index} 
                                            className="relative aspect-video overflow-hidden rounded-xl border bg-muted cursor-pointer transition-all hover:scale-[1.02] group shadow-sm hover:shadow-md duration-200"
                                            onClick={() => setActiveScreenshot(screenshot)}
                                        >
                                            <Image
                                                src={screenshot}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="bg-black/60 text-white rounded-full p-2.5 backdrop-blur-sm shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                                                    <Maximize2 className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="space-y-6">
                        {/* Custom Academic details card */}
                        {project.academicDetails && (
                            <section className="p-6 rounded-2xl border bg-gradient-to-br from-card/85 to-card/25 backdrop-blur-md shadow-sm space-y-4 hover:shadow-md transition-shadow duration-300">
                                <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                                    <GraduationCap className="h-5.5 w-5.5 text-primary shrink-0" />
                                    Academic Internship
                                </h2>
                                <div className="space-y-4 text-sm pt-2">
                                    <div className="flex gap-3">
                                        <Building className="h-4 w-4 text-primary/75 shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-foreground">Host Company</div>
                                            <div className="text-muted-foreground text-xs">{project.academicDetails.company}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Users className="h-4 w-4 text-primary/75 shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-foreground">Supervisors</div>
                                            <div className="text-muted-foreground text-xs space-y-1 mt-0.5">
                                                <div><span className="font-medium text-foreground/80">Academic:</span> {project.academicDetails.supervisorAcademic}</div>
                                                <div><span className="font-medium text-foreground/80">Professional:</span> {project.academicDetails.supervisorProfessional}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <GraduationCap className="h-4 w-4 text-primary/75 shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-foreground">Institution</div>
                                            <div className="text-muted-foreground text-xs leading-normal">{project.academicDetails.institution}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Calendar className="h-4 w-4 text-primary/75 shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-foreground">Academic Year</div>
                                            <div className="text-muted-foreground text-xs">{project.academicDetails.year}</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Custom PDF report download card */}
                        {project.pdfReport && (
                            <section className="p-6 rounded-2xl border bg-gradient-to-br from-card/85 to-card/25 backdrop-blur-md shadow-sm space-y-4 hover:shadow-md transition-shadow duration-300">
                                <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                                    <FileText className="h-5.5 w-5.5 text-primary shrink-0" />
                                    PFE Report
                                </h2>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Full 100-page academic thesis detailing the system design, NestJS & Next.js implementation, Scrum method, database models, and LLM features.
                                </p>
                                <div className="text-xs text-muted-foreground space-y-1.5 bg-muted/60 p-3.5 rounded-xl border">
                                    <div><span className="font-semibold text-foreground/80">File name:</span> Dhia_eddine_louati.pdf</div>
                                    <div><span className="font-semibold text-foreground/80">File size:</span> 1.43 MB</div>
                                    <div><span className="font-semibold text-foreground/80">Format:</span> PDF Document</div>
                                    <div><span className="font-semibold text-foreground/80">Pages:</span> 100 pages</div>
                                </div>
                                <Button asChild className="w-full shadow-sm hover:shadow-md transition-all duration-200" variant="secondary">
                                    <Link href={project.pdfReport} target="_blank" download>
                                        <Download className="mr-2 h-4 w-4" /> Download Report
                                    </Link>
                                </Button>
                            </section>
                        )}

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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {activeScreenshot && (
                    <div 
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xs cursor-zoom-out p-4 md:p-8" 
                        onClick={() => setActiveScreenshot(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveScreenshot(null)}
                                className="absolute -top-12 right-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors z-50 focus:outline-none"
                                aria-label="Close image viewer"
                            >
                                <X className="h-6 w-6" />
                            </button>
                            <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                                <Image
                                    src={activeScreenshot}
                                    alt="Zoomed screenshot"
                                    fill
                                    className="object-contain"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    )
}
