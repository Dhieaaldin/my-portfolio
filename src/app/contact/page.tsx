import { Contact } from "@/components/sections/contact"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact | Dhia Eddine Louati",
    description: "Get in touch for collaborations, opportunities, or just to say hi.",
}

export default function ContactPage() {
    return (
        <div className="pt-14 min-h-screen">
            <Contact />
        </div>
    )
}
