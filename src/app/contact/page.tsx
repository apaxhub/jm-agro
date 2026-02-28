import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Get a Quote | Tattvam Agri Export",
    description:
        "Contact Tattvam Agri Export for bulk spice inquiries, export pricing, private label options, and documentation support. We export from Visnagar, Gujarat to 11+ countries.",
};

export default function ContactPage() {
    return (
        <main className="pt-24 min-h-screen bg-surface">
            <ContactForm />
        </main>
    );
}
