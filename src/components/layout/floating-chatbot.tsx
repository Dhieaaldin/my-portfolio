"use client"

import * as React from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function FloatingChatbot() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 right-4 z-50 w-[90vw] max-w-[350px] sm:right-8"
                    >
                        <Card className="border shadow-2xl overflow-hidden flex flex-col h-[450px]">
                            <CardHeader className="bg-primary text-primary-foreground p-4 flex flex-row items-center justify-between space-y-0">
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                                            <MessageSquare className="h-5 w-5" />
                                        </div>
                                        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-primary"></span>
                                    </div>
                                    <div className="flex flex-col">
                                        <CardTitle className="text-sm font-medium leading-none">Portfolio AI</CardTitle>
                                        <span className="text-xs text-primary-foreground/80">Online</span>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </CardHeader>

                            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/10">
                                <div className="flex flex-col gap-2">
                                    <div className="bg-muted rounded-2xl rounded-tl-none p-3 self-start max-w-[85%] shadow-sm">
                                        <p className="text-sm">
                                            👋 Hi there! I&apos;m Dhia&apos;s AI assistant.
                                        </p>
                                    </div>
                                    <div className="bg-muted rounded-2xl rounded-tl-none p-3 self-start max-w-[85%] shadow-sm">
                                        <p className="text-sm">
                                            I can help you navigate projects, skills, or get in touch. What can I do for you today?
                                        </p>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="p-3 bg-background border-t">
                                <form className="flex w-full gap-2" onSubmit={(e) => e.preventDefault()}>
                                    <Input placeholder="Type a message..." className="h-10 focus-visible:ring-1" disabled />
                                    <Button size="icon" className="h-10 w-10 shrink-0" disabled>
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <Button
                    size="lg"
                    className="h-14 px-6 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground gap-2 transition-transform hover:scale-105"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? (
                        <>
                            <MessageSquare className="h-5 w-5" />
                            <span className="font-semibold">Chat with AI</span>
                        </>
                    ) : (
                        <>
                            <X className="h-5 w-5" />
                            <span className="font-semibold">Close</span>
                        </>
                    )}
                </Button>
            </motion.div>
        </>
    )
}
