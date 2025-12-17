"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <Link href="/" className="mr-6 flex items-center space-x-2 font-bold">
                    <span className="text-xl">Dhia.Dev</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            {item.name}
                        </Link>
                    ))}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
                        >
                            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            <span className="sr-only">Toggle theme</span>
                        </button>
                    )}
                </div>

                {/* Mobile Nav Toggle */}
                <div className="flex flex-1 items-center justify-end md:hidden">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="mr-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
                        >
                            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            <span className="sr-only">Toggle theme</span>
                        </button>
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-b border-border/40 bg-background">
                    <div className="container py-4 flex flex-col space-y-4 px-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
