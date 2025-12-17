"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillsData = [
    {
        category: "Programming",
        skills: ["Python", "JavaScript", "C/C++", "PHP"],
    },
    {
        category: "Data Science",
        skills: ["SQL", "Machine Learning", "Data Visualization", "Data Analysis"],
    },
    {
        category: "Multimedia",
        skills: ["Video Editing", "Motion Graphics", "Photo Editing"],
    },
    {
        category: "Security",
        skills: ["Cyber Security", "Kali Linux"],
    },
]

export function Skills() {
    return (
        <SectionWrapper id="skills">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Expertise</h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto">
                    A broad range of skills spanning software development, data science, and creative media.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-8">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle>{category.category}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2 content-start">
                                {category.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}
