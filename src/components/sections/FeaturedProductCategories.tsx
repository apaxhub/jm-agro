"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/siteData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function FeaturedProductCategories() {
    return (
        <section className="py-24 bg-bg relative overflow-hidden">

            {/* Decorative floating bg elements */}
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-32 h-32  mix-blend-multiply pointer-events-none lg:block"
            >
                <Image src="/assets/spices/cinnamon.png" alt="" fill className="object-contain" />
            </motion.div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-fg mb-4">
                            Premium Export Categories
                        </h2>
                        <p className="text-muted text-lg max-w-xl leading-relaxed">
                            Certified, traced, and ready for international shipping. Explore our primary export lines sourced directly from Gujarat.
                        </p>
                    </div>
                    <Link href="/products" className="group flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-light transition-colors pb-2">
                        View full catalog <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Eye-catching Bento/Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((cat, idx) => {
                        // Make the first card spanning 2 columns on large screens for an editorial look
                        const isLarge = idx === 0;

                        return (
                            <motion.div
                                key={cat.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className={isLarge ? "lg:col-span-2" : "col-span-1"}
                            >
                                <Link href={`/products#${cat.slug}`} className="block h-full group">
                                    <div className="h-full bg-surface border border-border p-8 rounded-3xl group-hover:border-primary/30 transition-all duration-500 relative overflow-hidden group-hover:shadow-soft flex flex-col justify-between">

                                        {/* Background tint on hover based on the 3-color palette */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-bg to-surface opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Decorative Image hint for large cards */}
                                        {isLarge && (
                                            <div className="absolute -right-10 -bottom-10 w-64 h-64 opacity-50 mix-blend-multiply group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 pointer-events-none">
                                                <Image src="/assets/spices/anise.png" alt="Spices" fill className="object-cover" />
                                            </div>
                                        )}

                                        <div className="relative z-10">
                                            <div className="w-12 h-12 rounded-2xl bg-bg border border-border flex items-center justify-center mb-6 text-primary shadow-sm">
                                                🌱
                                            </div>
                                            <h3 className="text-2xl font-bold text-fg mb-3">{cat.name}</h3>
                                            <p className="text-muted text-sm mb-6 leading-relaxed max-w-md">{cat.description}</p>
                                        </div>

                                        <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                                            {cat.items.slice(0, isLarge ? 5 : 3).map((item) => (
                                                <span key={item} className="text-[11px] font-bold text-fg px-3 py-1.5 rounded-full bg-bg border border-border tracking-wide uppercase">
                                                    {item}
                                                </span>
                                            ))}
                                            {cat.items.length > (isLarge ? 5 : 3) && (
                                                <span className="text-[11px] text-primary font-bold py-1.5 px-2">+{cat.items.length - (isLarge ? 5 : 3)}</span>
                                            )}
                                        </div>

                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
