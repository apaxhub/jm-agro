"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function QualityDetails() {
    return (
        <section className="py-24 bg-bg">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-surface p-8 md:p-12 rounded-2xl shadow-soft border border-border"
                >
                    <h3 className="text-2xl font-bold text-fg mb-6">Quality Assurance Protocols</h3>

                    <div className="space-y-6 text-muted leading-relaxed">
                        <p>
                            Exporting agricultural commodities demands rigorous adherence to international standards. At Apaxhub, our quality assurance protocols ensure that our cargo is accepted across USA, EU, Middle East, and APAC markets without friction.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {[
                                "Aflatoxin & Ochratoxin Testing",
                                "Pesticide Residue Analysis (MRL)",
                                "Heavy Metal Screening",
                                "Microbiological Testing (Salmonella/E.coli)",
                                "Moisture Content Optimization",
                                "ETO / Steam Sterilization Options"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="font-medium text-fg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="pt-4">
                            All shipments are accompanied by a Certificate of Analysis (COA) from NABL/ISO 17025 accredited third-party laboratories to validate our quality claims.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
