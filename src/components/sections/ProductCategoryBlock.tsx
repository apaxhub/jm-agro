"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";

export function ProductCategoryBlock() {
    const categories = [
        {
            slug: "spices",
            name: "Spices",
            description: "Premium Indian spices including cumin, turmeric, coriander, and chili.",
            color: "bg-red-50"
        },
        {
            slug: "oil-seeds",
            name: "Oil Seeds",
            description: "High-quality sesame, peanuts, and other oil seeds.",
            color: "bg-amber-50"
        },
        {
            slug: "millets-pulses",
            name: "Millets & Pulses",
            description: "Nutritious millets and pulses exported globally.",
            color: "bg-yellow-50"
        },
        {
            slug: "specialty-products",
            name: "Specialty Products",
            description: "Dehydrated veggies, blends, and custom offerings.",
            color: "bg-emerald-50"
        }
    ];

    return (
        <section className="py-20 bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.slug}
                            id={cat.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full overflow-hidden group border-border">
                                {/* Simulated Image Top */}
                                <div className={`h-48 w-full ${cat.color} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                    <span className="text-4xl opacity-20 font-bold uppercase tracking-widest absolute transform rotate-12 scale-150 text-black">
                                        {cat.name}
                                    </span>
                                </div>
                                <CardContent className="p-6">
                                    <h4 className="text-xl font-bold text-fg mb-3 group-hover:text-primary transition-colors">{cat.name}</h4>
                                    <p className="text-muted text-sm">{cat.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
