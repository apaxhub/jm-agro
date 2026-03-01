import { Hero } from "@/components/sections/Hero";
import { FeaturedProductCategories } from "@/components/sections/FeaturedProductCategories";
import { ExportHighlights } from "@/components/sections/ExportHighlights";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SEOTextBlock } from "@/components/sections/SEOTextBlock";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProductCategories />
      <WhyChooseUs />
      <ExportHighlights />
      <SEOTextBlock
        title="India's Premium Agri Export — Backed by Compliance & Traceability"
        content="Tattvam Agri Export, based in Visnagar, Mahesana, Gujarat, is a certified exporter of premium Indian spices, oil seeds, millets, dehydrated products, and specialty agro commodities. Situated minutes from Unjha — Asia's largest cumin and fennel trading market — we offer unmatched sourcing access, farm-to-port traceability, and reliable bulk supply for global importers. Our products are certified under FSSAI, HACCP, ISO 22000, KOSHER, and Spices Board of India, meeting the stringent import requirements of USA, UK, Canada, UAE, and over 11 countries worldwide."
      />
    </main>
  );
}
