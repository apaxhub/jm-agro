// ============================================================
//  REAL HYGIENE – Single Source of Truth Data Layer
// ============================================================

export const siteConfig = {
    brandName: "JM Agro International",
    tagline: "Trusted Spice Exporter from Unjha, Gujarat",
    subtext: "Delivering High-Quality Whole Spices & Seeds Globally Since 1991",
    description:
        "Established in 1991, JM Agro International is a reliable exporter, manufacturer and supplier of premium whole spices and seeds from Unjha, Mahesana, Gujarat. The company sources coriander, cumin, sesame, fennel, mustard, carom, dill and other spices, ensuring hygienic processing and export readiness for international buyers seeking consistent quality, timely delivery and transparent trade partnerships. JM Agro International commits to quality assurance through rigorous checks, strong supply chain practices and professional export support.",
    location: {
        city: "Unjha",
        district: "Mahesana",
        state: "Gujarat",
        country: "India",
        pincode: "384170",
        nearBy: "Gujarat",
        address: "Opposite APMC Gate No 6, Visnagar Road, Gunj Bazar, Unjha, Mahesana, Gujarat - 384170, India",
    },
    contact: {
        phone: "+91-97257-76787",
        email: "",
        whatsapp: "+91-97257-76787",
    },
    social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
    },
};

export const products = [
    {
        slug: "coriander-seeds",
        name: "Coriander Seeds",
        description: "Premium export-grade coriander seeds sourced and processed for clean flavour and high purity.",
        items: ["Coriander Seeds"],
        seoKeywords: ["coriander seeds exporter", "whole spices", "premium seeds"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-1.png",
    },
    {
        slug: "cumin-seeds",
        name: "Cumin Seeds",
        description: "High-quality cumin seeds with strong aroma and rich taste, ideal for global spice markets.",
        items: ["Cumin Seeds"],
        seoKeywords: ["cumin seeds exporter", "spice supplier", "Indian spices"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-2.png",
    },
    {
        slug: "sesame-seeds",
        name: "Sesame Seeds",
        description: "White and brown sesame seeds processed for export markets with consistent quality and packaging.",
        items: ["White Sesame", "Brown Sesame"],
        seoKeywords: ["sesame seeds exporter", "oil seeds", "bulk spices"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-3.png",
    },
    {
        slug: "mustard-seeds",
        name: "Mustard Seeds",
        description: "Yellow and black mustard seeds suitable for culinary export and industrial uses.",
        items: ["Yellow Mustard", "Black Mustard"],
        seoKeywords: ["mustard seeds exporter", "spice export", "bulk seeds"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-4.png",
    },
    {
        slug: "fennel-seeds",
        name: "Fennel Seeds",
        description: "Top-grade fennel seeds with light aroma and premium quality for seasoning and export.",
        items: ["Fennel Seeds"],
        seoKeywords: ["fennel seeds manufacturer", "seasoning spices", "export ready spices"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-5.png",
    },
    {
        slug: "carom-ajwain-seeds",
        name: "Carom (Ajwain) Seeds",
        description: "Natural carom seeds with strong flavour profile, processed for bulk export.",
        items: ["Carom Seeds", "Ajwain"],
        seoKeywords: ["ajwain seeds exporter", "carom seeds supplier", "Indian whole spices"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-6.png",
    },
    {
        slug: "dill-seeds",
        name: "Dill Seeds",
        description: "Quality dill seeds with consistent size and aroma, packaged for international buyers.",
        items: ["Dill Seeds"],
        seoKeywords: ["dill seeds exporter", "aromatic spices", "global spice supply"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-7.png",
    }
];

export const certifications = [
    {
        name: "APEDA Export Certification",
        fullName: "Agricultural and Processed Food Products Export Development Authority",
        icon: "✅",
        image: "/public/assets/certifications/cert-1.png"
    },
    {
        name: "FSSAI Food Safety License",
        fullName: "Food Safety and Standards Authority of India",
        icon: "✅",
        image: "/public/assets/certifications/cert-2.png"
    },
    {
        name: "ISO Quality Management",
        fullName: "ISO",
        icon: "✅",
        image: "/public/assets/certifications/cert-3.png"
    },
    {
        name: "Spices Board of India Certification",
        fullName: "Spices Board of India",
        icon: "✅",
        image: "/public/assets/certifications/cert-4.png"
    }
];

export const exportMarkets = [
    { name: "UAE", region: "Middle East", location: [23.4241, 53.8478], size: 0.05, flag: "🇦🇪" },
    { name: "Saudi Arabia", region: "Middle East", location: [23.8859, 45.0792], size: 0.05, flag: "🇸🇦" },
    { name: "Kenya", region: "Africa", location: [-1.2921, 36.8219], size: 0.05, flag: "🇰🇪" },
    { name: "Nigeria", region: "Africa", location: [9.0820, 8.6753], size: 0.05, flag: "🇳🇬" },
    { name: "Bangladesh", region: "South Asia", location: [23.6850, 90.3563], size: 0.05, flag: "🇧🇩" },
    { name: "Sri Lanka", region: "South Asia", location: [7.8731, 80.7718], size: 0.05, flag: "🇱🇰" },
    { name: "Vietnam", region: "Southeast Asia", location: [14.0583, 108.2772], size: 0.05, flag: "🇻🇳" },
    { name: "Poland", region: "Eastern Europe", location: [51.9194, 19.1451], size: 0.05, flag: "🇵🇱" },
    { name: "Romania", region: "Eastern Europe", location: [45.9432, 24.9668], size: 0.05, flag: "🇷🇴" },
];

export const whyChooseUs = [
    {
        title: "Clinical Quality",
        description: "Strict quality control measures ensuring sterility and efficacy for medical use.",
        icon: "ShieldCheck",
    },
    {
        title: "Export Ready",
        description: "Supplying high-quality medical hygiene products to diverse international markets.",
        icon: "Globe",
    },
    {
        title: "Reliable Supply",
        description: "Consistent manufacturing capacity to meet distributor and hospital bulk requirements.",
        icon: "Handshake",
    },
    {
        title: "Industry Experience",
        description: "Providing trusted surgical and wound care solutions since 2001.",
        icon: "Clock",
    },
];

export const exportProcess = [
    { step: 1, title: "Manufacturing", description: "Hygienic and standardized production of medical supplies." },
    { step: 2, title: "Quality & Sterility Check", description: "Rigorous testing to ensure all products meet clinical standards." },
    { step: 3, title: "Secure Packaging", description: "Medical-grade packaging to maintain sterility and product integrity." },
    { step: 4, title: "Documentation", description: "Providing necessary export and compliance documentation for customs clearance." },
    { step: 5, title: "Timely Dispatch", description: "Reliable logistics to deliver globally without delays." },
];

export const blogPosts = [
    {
        title: "Advancements in Wound Care Management",
        category: "Insights",
        date: "Jan 2024",
        excerpt: "Exploring modern techniques and the role of high-quality surgical dressings.",
    },
    {
        title: "Ensuring Sterility in Medical Manufacturing",
        category: "Quality",
        date: "Feb 2024",
        excerpt: "A look into the rigorous quality checks behind our hygiene products.",
    },
    {
        title: "Global Supply Chains for Medical Consumables",
        category: "Trends",
        date: "Mar 2024",
        excerpt: "How Real Hygiene is meeting the rising international demand for medical bandages.",
    },
    {
        title: "Orthopedic Care and Plaster of Paris Bandages",
        category: "Guide",
        date: "Mar 2024",
        excerpt: "Best practices for using PoP bandages in fracture management and rehabilitation.",
    },
];

