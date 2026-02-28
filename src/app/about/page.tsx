import type { Metadata } from "next";
import { BrandStory } from "@/components/sections/BrandStory";

export const metadata: Metadata = {
    title: "About Us | Tattvam Agri Export — Gujarat's Agri Heritage",
    description:
        "Tattvam Agri Export is rooted in Visnagar, Mahesana, near Unjha — Asia's spice hub. Learn about our heritage, values, and commitment to quality agricultural exports.",
};

export default function AboutPage() {
    return (
        <main className="pt-24 min-h-screen bg-surface">
            <BrandStory />
        </main>
    );
}
