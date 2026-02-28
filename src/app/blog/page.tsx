import type { Metadata } from "next";
import { blogPosts } from "@/data/siteData";
import { SEOTextBlock } from "@/components/sections/SEOTextBlock";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog | Agri Export Insights | Tattvam Agri Export",
    description:
        "Tattvam's blog covers spice market trends, export compliance, millet demand, private label sourcing, and buyer guides for Indian agricultural importers worldwide.",
};

export default function BlogPage() {
    return (
        <main className="pt-24 min-h-screen bg-bg">
            <SEOTextBlock
                title="Agri Export Insights & Buyer Guides"
                content="Stay informed with in-depth articles on Indian spice market trends, export compliance, quality testing standards, and sourcing guides from our Gujarat export team."
                className="py-20 bg-surface"
            />

            <section className="py-20 bg-bg">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.map((post, idx) => (
                            <div key={idx} className="group bg-surface border border-border rounded-3xl p-8 hover:border-primary/30 hover:shadow-soft transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-5">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                    <ArrowUpRight className="h-5 w-5 text-border group-hover:text-primary transition-colors" />
                                </div>
                                <p className="text-xs text-muted mb-3">{post.date}</p>
                                <h3 className="text-xl font-bold text-fg mb-3 group-hover:text-primary transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
