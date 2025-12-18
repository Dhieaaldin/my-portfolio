"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const languages = [
    { name: "English", level: "C2 Level" },
    { name: "French", level: "Proficient" },
    { name: "Arabic", level: "Native" },
    { name: "German", level: "Learning" },
]

export function About() {
    return (
        <SectionWrapper id="about" className="bg-secondary/20">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl border-2 border-border/50 shadow-xl"
                >
                    <Image
                        src="/my-portfolio/me_ai_generated.png"
                        alt="Dhia Eddine Louati"
                        fill
                        className="object-cover"
                        priority={false}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                        <p className="text-muted-foreground text-lg">
                            Third-Year Computer Science & Multimedia Student
                        </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                        I have a passion for data science and artificial intelligence. Currently focused on developing
                        innovative solutions through data analysis and machine learning. I enjoy creating impactful
                        solutions through technology and continuously expanding my knowledge in the field.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Education</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">CS & Multimedia Student</p>
                                <p className="text-xs text-muted-foreground mt-1">Specializing in Data & AI</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Languages</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {languages.map((lang) => (
                                    <Badge key={lang.name} variant="secondary">
                                        {lang.name}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    )
}
