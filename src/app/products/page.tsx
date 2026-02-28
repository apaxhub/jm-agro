import type { Metadata } from "next";
import { products } from "@/data/siteData";
import { SEOTextBlock } from "@/components/sections/SEOTextBlock";

export const metadata: Metadata = {
    title: "Export Products | Spices, Oil Seeds & Millets | Tattvam Agri Export",
    description:
        "Browse Tattvam's full range of export-ready Indian agricultural products: whole spices, ground spices, oil seeds, millets, dehydrated vegetables, and specialty products. FSSAI & HACCP certified.",
};

export default function ProductsPage() {
    return (
        <main className="pt-24 bg-bg min-h-screen">
            <SEOTextBlock
                title="Premium Indian Agricultural Export Products"
                content="Explore our export-ready range of Indian spices, oil seeds, millets, cereals, dehydrated vegetables, and specialty products — sourced directly from Gujarat farms, processed in HACCP-certified facilities, and exported with full documentation to global markets."
                className="py-20 bg-surface"
            />

            <section className="py-20 bg-bg">
                <div className="container mx-auto px-4 md:px-8 space-y-24">
                    {products.map((cat) => (
                        <div key={cat.slug} id={cat.slug} className="scroll-mt-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 text-white" style={{ background: cat.accent }}>
                                        {cat.name}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4">{cat.name}</h2>
                                    <p className="text-muted text-lg leading-relaxed mb-6">{cat.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.items.map((item) => (
                                            <span key={item} className="text-sm bg-surface border border-border text-fg px-4 py-2 rounded-full font-medium hover:border-primary/40 transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {cat.seoKeywords.map((kw) => (
                                            <span key={kw} className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full border border-primary/20">
                                                {kw}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={`${cat.color} rounded-3xl h-72 border border-border flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 30% 50%, ${cat.accent}, transparent 70%)` }} />
                                    <span className="text-7xl font-black opacity-5 uppercase tracking-widest text-center px-4">{cat.name}</span>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-surface rounded-2xl border border-border">
                                <h3 className="font-semibold text-fg mb-3 text-sm uppercase tracking-wider">Export & Quality Notes</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    All {cat.name.toLowerCase()} are sourced from verified farming partners in the Mahesana &amp; Unjha belt of Gujarat. Each consignment undergoes physical inspection, lab testing for pesticide residue (MRL), aflatoxin, moisture content, and is packed in food-grade, export-compliant packaging. Certificates of Analysis (COA) issued by NABL-accredited third-party labs accompany every shipment.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
