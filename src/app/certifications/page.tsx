import type { Metadata } from "next";
import { CertCarousel } from "@/components/sections/CertCarousel";
import { QualityDetails } from "@/components/sections/QualityDetails";
import { SEOTextBlock } from "@/components/sections/SEOTextBlock";

export const metadata: Metadata = {
    title: "Certifications | FSSAI, HACCP, ISO, KOSHER | Tattvam Agri Export",
    description:
        "Tattvam Agri Export holds FSSAI, HACCP, ISO 22000, KOSHER, and Spices Board of India certifications — ensuring our products meet global import standards for USA, UK, EU, UAE, and more.",
};

export default function CertificationsPage() {
    return (
        <main className="pt-24 min-h-screen bg-surface">
            <SEOTextBlock
                title="Our Global Certifications & Quality Standards"
                content="Tattvam Agri Export is certified by FSSAI, HACCP, ISO 22000, KOSHER, and Spices Board of India. Our quality assurance protocols ensure zero-rejection imports across USA, UK, Canada, UAE, and 7+ more countries."
                className="py-20 bg-surface"
            />
            <CertCarousel />
            <QualityDetails />
        </main>
    );
}
