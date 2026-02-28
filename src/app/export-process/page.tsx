import type { Metadata } from "next";
import { StepByStep } from "@/components/sections/StepByStep";
import { SEOTextBlock } from "@/components/sections/SEOTextBlock";

export const metadata: Metadata = {
    title: "Export Process | Farm to Port | Tattvam Agri Export",
    description:
        "Tattvam's 5-step export process: certified farm sourcing in Gujarat, HACCP lab testing, food-grade packaging, full documentation, and global shipping — ensuring compliance for all international imports.",
};

export default function ExportProcessPage() {
    return (
        <main className="pt-24 min-h-screen bg-bg">
            <SEOTextBlock
                title="Our Farm-to-Port Export Process"
                content="From certified farms in Mahesana's Unjha belt to your destination port — every step of our export process is documented, tested, and compliant with international import standards."
                className="py-20 bg-surface"
            />
            <StepByStep />
        </main>
    );
}
