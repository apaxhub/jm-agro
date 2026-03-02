// ============================================================
//  REAL HYGIENE – Single Source of Truth Data Layer
// ============================================================

export const siteConfig = {
    brandName: "Real Hygiene",
    tagline: "Reliable Manufacturer & Exporter of Medical Hygiene Supplies",
    subtext: "Quality Surgical & Wound Care Products from Mahesana, Gujarat",
    description:
        "Real Hygiene Pvt. Ltd. is a trusted manufacturer, supplier and exporter of medical and hygiene products from Mahesana, Gujarat. Operating since 2001, we produce clinical dressings, surgical bandages, orthopedic bandages and related supplies. Our product range is designed for healthcare facilities, distributors and international buyers seeking consistent quality, hygienic manufacturing and reliable delivery.",
    location: {
        city: "Vijapur",
        district: "Mahesana",
        state: "Gujarat",
        country: "India",
        pincode: "382028",
        nearBy: "Gujarat",
        address: "D-246/247, GIDC Ranasan, Ta-Vijapur, Dist. Mehsana, Gujarat - 382028, India",
    },
    contact: {
        phone: "+91-2763-2284413",
        email: "contact@realhygiene.com",
        whatsapp: "+91-2763-2284413",
    },
    social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
    },
};

export const products = [
    {
        slug: "elastic-adhesive-bandage",
        name: "Elastic Adhesive Bandage",
        description: "Flexible and skin-friendly elastic adhesive bandages suitable for surgical and wound support applications.",
        items: ["Elastic Adhesive Bandage"],
        seoKeywords: ["elastic adhesive bandage exporter", "medical bandages", "surgical bandages"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-1.png",
    },
    {
        slug: "cotton-crepe-bandage",
        name: "Cotton Crepe Bandage",
        description: "High-quality cotton crepe bandages offering uniform pressure and breathability, ideal for clinical use.",
        items: ["Cotton Crepe Bandage"],
        seoKeywords: ["cotton crepe bandage manufacturer", "medical dressings", "wound care"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-2.png",
    },
    {
        slug: "plaster-of-paris-bandage",
        name: "Plaster Of Paris Bandage",
        description: "Fast-setting plaster of Paris bandages designed for orthopedic and fracture care applications.",
        items: ["Plaster Of Paris Bandage"],
        seoKeywords: ["plaster of paris bandage supplier", "orthopedic bandages", "fracture care"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-3.png",
    },
    {
        slug: "surgical-gauze",
        name: "Surgical Gauze & Dressings",
        description: "Sterile and absorbent gauze dressings for surgical sites and wound care.",
        items: ["Surgical Gauze", "Surgical Dressings", "Absorbent Gauze"],
        seoKeywords: ["surgical gauze exporter", "sterile dressings", "wound care supplies India"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-4.png",
    },
    {
        slug: "eye-pads-combine-dressings",
        name: "Eye Pads & Combine Dressings",
        description: "Comfortable eye pads and combined sterile dressings for clinical and surgical protection.",
        items: ["Eye Pads", "Combine Dressings", "Sterile Eye Pads"],
        seoKeywords: ["eye pads exporter", "combine dressings manufacturer", "sterile eye pads India"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-5.png",
    }
];

export const certifications = [
    {
        name: "Sterility & Quality Compliance",
        fullName: "Internal Quality Checks",
        icon: "✅",
        image: "/public/assets/certifications/cert-1.png"
    },
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

