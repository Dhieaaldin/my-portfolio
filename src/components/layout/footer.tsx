export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built with Next.js & Tailwind CSS. © {new Date().getFullYear()} Dhia Eddine Louati.
                </p>
                <div className="flex items-center space-x-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    )
}
