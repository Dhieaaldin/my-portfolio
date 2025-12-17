"use client"

import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Contact() {
    return (
        <SectionWrapper id="contact">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto">
                    Have a question or want to work together? Feel free to drop me a message.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>
                                You can also reach me directly through these channels.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-muted-foreground" />
                                <a href="mailto:dhieaaldin70@gmail.com" className="hover:underline">dhieaaldin70@gmail.com</a>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <Button asChild variant="outline" size="icon">
                                    <Link href="https://github.com/Dhieaaldin" target="_blank">
                                        <Github className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="icon">
                                    <Link href="https://linkedin.com" target="_blank">
                                        <Linkedin className="h-5 w-5" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action="https://formspree.io/f/xpwapzgd" method="POST" className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                <Input id="name" name="name" placeholder="Your name" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                <Input id="email" name="_replyto" type="email" placeholder="Your email" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                <Textarea id="message" name="message" placeholder="Your message..." required />
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </SectionWrapper>
    )
}
