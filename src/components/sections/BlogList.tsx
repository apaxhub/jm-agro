import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BlogList() {
    const posts = [
        {
            title: "Understanding Apeda Documentation for Bulk Export",
            category: "Compliance",
            date: "Nov 12, 2023",
            excerpt: "Step-by-step guide to mastering the export documentation for Indian agricultural products...",
            height: "h-72"
        },
        {
            title: "Top 5 Indian Spices Driving Global Demand in 2024",
            category: "Market Trends",
            date: "Dec 05, 2023",
            excerpt: "An analysis of cumin, turmeric, and cardamom export volumes across Europe and NA.",
            height: "h-96"
        },
        {
            title: "Sortex Cleaning vs Manual Grading in Oil Seeds",
            category: "Quality Assurance",
            date: "Jan 18, 2024",
            excerpt: "Why the shift towards mechanized cleaning is mandatory for European pesticide residue limits.",
            height: "h-80"
        },
        {
            title: "How to Choose the Right Freight Forwarder for Perishables",
            category: "Logistics",
            date: "Feb 02, 2024",
            excerpt: "Minimizing transit delays and maintaining temperature control for agricultural cargo.",
            height: "h-72"
        }
    ];

    return (
        <section className="py-20 bg-bg">
            <div className="container mx-auto px-4 md:px-6">

                {/* Simple Tags */}
                <div className="flex flex-wrap gap-2 mb-12 justify-center">
                    {["All", "Compliance", "Market Trends", "Quality Assurance", "Logistics"].map((tag, i) => (
                        <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-primary text-white" : "bg-surface text-fg hover:bg-border"}`}>
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Masonry-like Grid Layout */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {posts.map((post, idx) => (
                        <div key={idx} className="break-inside-avoid">
                            <Link href="#" className="block group">
                                <Card className={`${post.height} flex flex-col justify-between overflow-hidden relative border-border/50 hover:border-primary/50 transition-colors`}>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface z-0 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

                                    <CardContent className="relative z-10 flex flex-col h-full p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                {post.category}
                                            </span>
                                            <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-primary transition-colors" />
                                        </div>

                                        <div className="mt-auto">
                                            <p className="text-sm text-muted mb-2">{post.date}</p>
                                            <h3 className="text-xl font-bold text-fg mb-3 group-hover:underline underline-offset-4 decoration-primary">{post.title}</h3>
                                            <p className="text-muted text-sm line-clamp-3">{post.excerpt}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
