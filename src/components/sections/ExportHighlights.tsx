"use client";

import { motion } from "framer-motion";
import { exportMarkets } from "@/data/siteData";
import Image from "next/image";

// Tweak label offsets based on map density to prevent overlapping
function getLabelOffset(marketName: string) {
    switch (marketName) {
        case "USA": return "-translate-x-full -translate-y-full -ml-2 -mt-2";
        case "Canada": return "-translate-x-1/2 -translate-y-full -mt-2";
        case "UK": return "-translate-x-1/2 -translate-y-full -mt-2";
        case "UAE": return "translate-x-3 -translate-y-full -mt-1";
        case "Oman": return "translate-x-3 translate-y-2";
        case "Qatar": return "-translate-x-full -translate-y-full -mt-1 -ml-2";
        case "Saudi Arabia": return "-translate-x-full translate-y-3 -ml-2";
        case "Africa": return "-translate-x-1/2 translate-y-3";
        case "Bangladesh": return "translate-x-3 -translate-y-4";
        case "Indonesia": return "translate-x-3 translate-y-2";
        case "China": return "translate-x-3 -translate-y-4";
        default: return "-translate-y-full -mt-2";
    }
}

export function ExportHighlights() {
    return (
        <section className="py-24 bg-surface relative overflow-hidden border-y border-border">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-[11px] font-bold tracking-widest text-primary uppercase mb-4">Export Infrastructure</p>
                    <h2 className="text-4xl md:text-5xl font-black text-fg mb-6 tracking-tight">
                        Global Importer Network
                    </h2>
                    <p className="text-muted text-base">
                        Every shipment originates from our processing facility in Unjha, ensuring absolute origin control before traversing established cargo routes to 11+ destination markets.
                    </p>
                </div>

                {/* Global Map with Meaningful Flow */}
                <div className="relative w-full aspect-[2/1] md:aspect-[2.2/1] max-w-5xl mx-auto rounded-3xl bg-bg border border-border overflow-hidden shadow-soft flex items-center justify-center p-4">

                    {/* Base World Map Image - INCREASED OPACITY AND CONTRAST */}
                    <div className="relative w-full h-full opacity-40 mix-blend-multiply">
                        {/* We apply a CSS filter to make the SVG map look darker and sharper against the soft bg */}
                        <Image
                            src="/assets/world-map.svg"
                            alt="World Map"
                            fill
                            className="object-cover filter contrast-125 saturate-50"
                        />
                    </div>

                    {/* Destination Pins and Always-Visible Labels with Flags */}
                    {exportMarkets.map((market, idx) => (
                        <motion.div
                            key={market.name}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                            className="absolute z-20 flex items-center justify-center"
                            style={{ top: market.top, left: market.left }}
                        >
                            {/* Destination core dot */}
                            <div className="relative flex items-center justify-center w-3 h-3 hover:scale-150 transition-transform duration-300">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-sm" />
                                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-40 animate-ping" />
                            </div>

                            {/* Visible text label explicitly positioned with FLAG */}
                            <div className={`absolute ${getLabelOffset(market.name)} flex items-center gap-1.5 bg-surface/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-card border border-border z-30`}>
                                {/* Fallback to country name if flag isn't typed properly, but we added them to siteData */}
                                <span className="text-sm leading-none drop-shadow-sm">{(market as any).flag || "📍"}</span>
                                <span className="text-[10px] text-fg font-bold tracking-wider uppercase whitespace-nowrap">
                                    {market.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}

                </div>

                {/* Footnote stats to reinforce the meaning of the map */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
                    <div className="flex gap-4 items-center px-6 py-4 bg-bg border border-border rounded-2xl shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="text-xl">🚢</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-fg">Direct Routes</span>
                            <span className="text-[10px] font-bold text-muted uppercase tracking-widest">No Intermediaries</span>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center px-6 py-4 bg-bg border border-border rounded-2xl shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="text-xl">📦</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-fg">100% Tracking</span>
                            <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Port to Port Visibility</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
