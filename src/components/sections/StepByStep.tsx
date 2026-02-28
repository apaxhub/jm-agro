"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Factory, PackageSearch, PackageCheck, Ship } from "lucide-react";

export function StepByStep() {
    const steps = [
        { title: "Sourcing from Certified Farms", icon: CheckCircle2, description: "Direct partnerships with farmers ensuring authentic and traceable raw materials." },
        { title: "Quality Grading & Testing", icon: Factory, description: "State-of-the-art sortex cleaning and stringent QA checks before processing." },
        { title: "Bulk & Custom Packaging", icon: PackageSearch, description: "Food-grade packaging tailored to buyer specifications and private label needs." },
        { title: "Documentation & Compliance", icon: PackageCheck, description: "FSSAI, APEDA, Phytosanitary, and customs documentation handled flawlessly." },
        { title: "Shipping & Delivery", icon: Ship, description: "Reliable freight forwarding ensuring prompt delivery to global ports." },
    ];

    return (
        <section className="py-24 bg-bg">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Seamless Operations</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-fg">Our Export Process</h3>
                </div>

                <div className="relative">
                    {/* Vertical line connecting steps */}
                    <div className="absolute left-[27px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-0.5 bg-border z-0"></div>

                    <div className="space-y-12">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"} pl-16 md:pl-0`}>
                                    <div className="bg-surface p-6 rounded-xl border border-border shadow-soft inline-block w-full">
                                        <h4 className="text-xl font-bold text-fg mb-2">{step.title}</h4>
                                        <p className="text-muted leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {/* Icon Circle */}
                                <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-glow border-4 border-bg z-10 transition-transform duration-300 hover:scale-110">
                                    <step.icon className="h-6 w-6" />
                                </div>

                                {/* Empty Side for alternating layout */}
                                <div className="hidden md:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
