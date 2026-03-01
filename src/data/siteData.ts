// ============================================================
//  VENU OVERSEAS – Single Source of Truth Data Layer
// ============================================================

export const siteConfig = {
    brandName: "Venu Overseas",
    tagline: "Trusted Agriculture Exporter from Gujarat",
    subtext: "Delivering Quality Pulses, Spices, Rice and Fresh Produce to Global Markets since 2023",
    description:
        "Venu Overseas, based in Mahesana, Gujarat, is a dedicated exporter and supplier of agricultural commodities including pulses, premium spices, rice varieties, fresh fruits and vegetables. With end-to-end quality checks and export logistics capability, we work closely with international buyers to meet diverse market requirements with timely delivery and transparent trade practices.",
    location: {
        city: "Mahesana",
        district: "Mahesana",
        state: "Gujarat",
        country: "India",
        pincode: "384002",
        nearBy: "Gujarat",
        address: "F/20 Siddhi Vinayak Complex, Near Sarvodaya Bank, TB Road, Mahesana – 384002, Gujarat, India",
    },
    contact: {
        phone: "+91 7990262851",
        email: "venuoverseas57@gmail.com",
        whatsapp: "+91 7990262851",
    },
    social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
    },
};

export const products = [
    {
        slug: "pulses",
        name: "Pulses",
        description: "Moong Dal, Chana Dal, Toor Dal, Green Gram, White Urad Dal and Brown Chana",
        items: ["Moong Dal", "Chana Dal", "Toor Dal", "Green Gram", "White Urad Dal", "Brown Chana"],
        seoKeywords: ["pulses export", "moong dal export", "chana dal exporter"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-1.png",
    },
    {
        slug: "rice",
        name: "Basmati & Non-Basmati Rice",
        description: "Parboiled and Raw Basmati Rice, Golden Sella variants",
        items: ["Parboiled Basmati Rice", "Raw Basmati Rice", "Golden Sella"],
        seoKeywords: ["basmati rice export", "non-basmati rice export", "golden sella rice exporter"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-2.png",
    },
    {
        slug: "spices",
        name: "Spices",
        description: "Black Pepper, Dry Red Chilli, Cumin Seeds, Turmeric, Ginger and Seasonal Blends",
        items: ["Black Pepper", "Dry Red Chilli", "Cumin Seeds", "Turmeric", "Ginger", "Seasonal Blends"],
        seoKeywords: ["spices exporter", "black pepper export", "cumin seeds export", "turmeric export"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-3.png",
    },
    {
        slug: "fresh-produce",
        name: "Fresh Produce",
        description: "Fresh Dragon Fruit, Watermelon, Papaya, Banana, Green Grapes and Vegetables",
        items: ["Dragon Fruit", "Watermelon", "Papaya", "Banana", "Green Grapes", "Vegetables"],
        seoKeywords: ["fresh produce export", "fruits exporter", "vegetables export India"],
        color: "bg-surface",
        accent: "#E4E4E7",
        image: "/public/assets/products/product-4.png",
    },
];

export const certifications = [
    {
        name: "Export-Ready Quality Standards",
        fullName: "Adherence to food safety and export quality norms; buyer to verify specific certifications as required",
        icon: "✅",
        image: "/public/assets/certifications/cert-1.png"
    },
];

export const exportMarkets = [
    { name: "UAE", region: "Middle East", top: "46%", left: "60%", flag: "🇦🇪" },
    { name: "Saudi Arabia", region: "Middle East", top: "50%", left: "58%", flag: "🇸🇦" },
    { name: "Egypt", region: "Africa", top: "40%", left: "55%", flag: "🇪🇬" },
    { name: "Morocco", region: "Africa", top: "35%", left: "48%", flag: "🇲🇦" },
    { name: "Bangladesh", region: "South Asia", top: "48%", left: "74%", flag: "🇧🇩" },
    { name: "China", region: "East Asia", top: "38%", left: "78%", flag: "🇨🇳" },
    { name: "Thailand", region: "Southeast Asia", top: "55%", left: "80%", flag: "🇹🇭" },
    { name: "Turkey", region: "Europe", top: "35%", left: "55%", flag: "🇹🇷" },
    { name: "France", region: "Europe", top: "30%", left: "48%", flag: "🇫🇷" },
];

export const whyChooseUs = [
    {
        title: "Quality Control",
        description: "End-to-end quality checks emphasizing reliability in sourcing and export operations.",
        icon: "ShieldCheck",
    },
    {
        title: "Global Reach",
        description: "Supplying quality fresh produce and agricultural goods to global markets.",
        icon: "Globe",
    },
    {
        title: "Transparent Trade",
        description: "We work closely with international buyers to meet requirements with transparent practices.",
        icon: "Handshake",
    },
    {
        title: "Timely Delivery",
        description: "Ensuring timely delivery of all our commodities to diverse market requirements.",
        icon: "Clock",
    },
];

export const exportProcess = [
    { step: 1, title: "Sourcing", description: "Procuring directly from the best farms in Gujarat." },
    { step: 2, title: "Quality Check", description: "Rigorous quality checks for all fresh produce and agricultural goods." },
    { step: 3, title: "Processing & Packaging", description: "Ensuring all products are packaged to meet export requirements." },
    { step: 4, title: "Documentation", description: "Providing necessary certifications and export documentation." },
    { step: 5, title: "Timely Export", description: "Efficient logistics for reliable global delivery." },
];

export const blogPosts = [
    {
        title: "Expanding Spices to Global Markets",
        category: "Insights",
        date: "Jan 2024",
        excerpt: "Venu Overseas explores the potential of the growing demand for Indian spices in the Middle East.",
    },
    {
        title: "The Key to Quality Fresh Produce",
        category: "Quality",
        date: "Feb 2024",
        excerpt: "How end-to-end quality checks ensure only the best fresh produce makes it to our international partners.",
    },
    {
        title: "Navigating International Pulse Trade",
        category: "Trends",
        date: "Mar 2024",
        excerpt: "An overview of market requirements and export opportunities for Indian pulses in Europe and Asia.",
    },
    {
        title: "Sourcing from Mahesana, Gujarat",
        category: "Guide",
        date: "Mar 2024",
        excerpt: "Why the Mahesana region is becoming a hub for premium agricultural exports.",
    },
];
