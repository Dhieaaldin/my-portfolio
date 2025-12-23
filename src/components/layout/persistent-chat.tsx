"use client"

import * as React from "react"
import { MessageSquare, X, Send, Minus, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
  sources?: string[]  // optional sources for assistant messages
}

export function PersistentChat() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMinimized, setIsMinimized] = React.useState(false)

  const [messages, setMessages] = React.useState<ChatMessage[]>([
    { role: "assistant", content: "👋 Hi! I'm Dhia’s AI assistant." },
    { role: "assistant", content: "Ask me about his projects, skills, or experience." }
  ])

  const [input, setInput] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const toggleChat = () => {
    if (isOpen && isMinimized) setIsMinimized(false)
    else {
      setIsOpen(!isOpen)
      setIsMinimized(false)
    }
  }

  const sendMessage = async () => {
    if (!input.trim()) return
    if (!navigator.onLine) {
      setError("You appear to be offline.")
      return
    }

    setError(null)

    const userMessage: ChatMessage = { role: "user", content: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CHAT_API!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage.content })
      })

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`)
      }

      const data = await res.json()

      // data = { answer: string, sources: string[] }
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: data.answer,
        sources: data.sources
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (err) {
      setError("AI is currently unavailable. Please try again.")
      console.error(err)
    } finally {
      setIsTyping(false)
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
            <Card className="flex flex-col h-[500px]">
              <CardHeader className="flex flex-row justify-between">
                <CardTitle>Portfolio AI</CardTitle>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" onClick={() => setIsMinimized(true)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto space-y-3">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={cn(
                      "rounded-xl p-3 max-w-[85%]",
                      m.role === "user"
                        ? "bg-primary text-primary-foreground self-end ml-auto"
                        : "bg-muted"
                    )}
                  >
                    <div>{m.content}</div>
                    {m.sources && m.sources.length > 0 && (
                      <ul className="mt-2 ml-2 list-disc list-inside text-xs text-muted-foreground">
                        {m.sources.map((source, i) => (
                          <li key={i}>{source}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>AI is typing…</span>
                  </div>
                )}

                {error && (
                  <div className="text-red-500 text-sm">
                    {error}
                  </div>
                )}
              </CardContent>

              <CardFooter>
                <form
                  className="flex w-full gap-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    sendMessage()
                  }}
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something…"
                    disabled={isTyping}
                  />
                  <Button size="icon" disabled={isTyping || !input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="bg-primary text-primary-foreground px-6 py-3 rounded-t-xl cursor-pointer"
        onClick={toggleChat}
      >
        <MessageSquare className="inline mr-2" />
        {isMinimized ? "Resume Chat" : "Talk to AI"}
      </div>
    </div>
  )
}
