"use client"

import * as React from "react"
import { MessageSquare, X, Send, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function PersistentChat() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isMinimized, setIsMinimized] = React.useState(false)

    // Close when minimized and clicking the main trigger
    const toggleChat = () => {
        if (isOpen && isMinimized) {
            setIsMinimized(false)
        } else {
            setIsOpen(!isOpen)
            setIsMinimized(false)
        }
    }

    return (
        <div className="fixed bottom-0 right-4 z-50 sm:right-8 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[90vw] max-w-[380px]"
                    >
                        <Card className="border shadow-2xl overflow-hidden flex flex-col h-[500px] border-primary/20 bg-background/95 backdrop-blur-md">
                            <CardHeader className="bg-primary text-primary-foreground p-4 flex flex-row items-center justify-between space-y-0">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                                            <MessageSquare className="h-5 w-5" />
                                        </div>
                                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-primary"></span>
                                    </div>
                                    <div className="flex flex-col">
                                        <CardTitle className="text-sm font-bold tracking-tight">Portfolio AI</CardTitle>
                                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">Online Assistant</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                                        onClick={() => setIsMinimized(true)}
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>
                            </CardHeader>

                            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/5">
                                <div className="flex flex-col gap-3">
                                    <div className="bg-muted/80 rounded-2xl rounded-tl-none p-4 self-start max-w-[90%] shadow-sm border border-border/50">
                                        <p className="text-sm leading-relaxed">
                                            👋 Welcome! I&apos;m Dhia&apos;s AI assistant.
                                        </p>
                                    </div>
                                    <div className="bg-muted/80 rounded-2xl rounded-tl-none p-4 self-start max-w-[90%] shadow-sm border border-border/50">
                                        <p className="text-sm leading-relaxed">
                                            How can I help you explore his portfolio today? I can tell you about his projects, skills, or help you get in touch.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="p-4 bg-background/50 border-t border-primary/10">
                                <form className="flex w-full gap-2" onSubmit={(e) => e.preventDefault()}>
                                    <Input
                                        placeholder="Ask a question..."
                                        className="h-11 bg-secondary/10 border-border/50 focus-visible:ring-primary focus-visible:ring-offset-0"
                                        disabled
                                    />
                                    <Button size="icon" className="h-11 w-11 shrink-0 shadow-lg" disabled>
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={false}
                animate={{
                    y: isOpen && !isMinimized ? 0 : -8,
                }}
                className="w-full flex justify-end"
            >
                <div
                    className={cn(
                        "bg-primary text-primary-foreground shadow-xl transition-all duration-300 ease-in-out cursor-pointer hover:brightness-110",
                        isOpen && !isMinimized
                            ? "h-1 w-24 rounded-t-full opacity-50 mb-0"
                            : "h-12 px-6 rounded-t-2xl flex items-center gap-2 border-x border-t border-primary/20 min-w-[160px]"
                    )}
                    onClick={toggleChat}
                >
                    {(!isOpen || isMinimized) && (
                        <>
                            <div className="relative">
                                <MessageSquare className="h-5 w-5" />
                                {!isOpen && <span className="absolute -top-1 -right-1 flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>}
                            </div>
                            <span className="font-bold text-sm tracking-tight whitespace-nowrap">
                                {isMinimized ? "Resume Chat" : "Talk to AI"}
                            </span>
                        </>
                    )}
                </div>
            </motion.div>
        </div>
    )
}
