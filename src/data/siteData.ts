// ============================================================
//  TATTVAM AGRI EXPORT – Single Source of Truth Data Layer
// ============================================================

export const siteConfig = {
    brandName: "Tattvam Agri Export",
    tagline: "Pure From Earth. Trusted Globally.",
    description:
        "Premium Indian agricultural exporter specializing in spices, oil seeds, millets, dehydrated products, and agro commodities. Based in Visnagar, Gujarat — the heartland of Asia's largest spice trade.",
    location: {
        city: "Visnagar",
        district: "Mahesana",
        state: "Gujarat",
        country: "India",
        pincode: "384315",
        nearBy: "Unjha — Asia's Largest Spice Trading Centre",
        address: "Tattvam Agri Export, GIDC Industrial Area, Visnagar, Mahesana, Gujarat 384315",
    },
    contact: {
        phone: "+91 94265 XXXXX",
        email: "export@tattvam.in",
        whatsapp: "+91 94265 XXXXX",
    },
    social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
    },
};

export const products = [
    {
        slug: "whole-spices",
        name: "Whole Spices",
        description: "Premium sun-dried whole spices directly sourced from Gujarat's fertile farms: Ajwain, Cumin, Coriander, Fennel (Saunf), Fenugreek, Turmeric, Dry Ginger, and Red Chilli.",
        items: ["Ajwain (Carom Seeds)", "Cumin (Jeera)", "Coriander Seeds (Dhaniya)", "Fennel Seeds (Saunf)", "Fenugreek Seeds (Methi)", "Turmeric (Haldi)", "Dry Ginger", "Red Chilli"],
        seoKeywords: ["whole spices export India", "cumin export Gujarat", "ajwain export India", "bulk spice supplier India"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "blended-powders",
        name: "Blended Spices & Powders",
        description: "Custom-blended spice mixes and ground powders formulated to buyer specifications. Available in food-service and retail packaging with private label options.",
        items: ["Ground Cumin Powder", "Coriander Powder", "Turmeric Powder", "Red Chilli Powder", "Custom Spice Blends", "Dehydrated Ginger Powder"],
        seoKeywords: ["ground spices export India", "blended spice supplier", "private label spice exporter India"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "dehydrated-products",
        name: "Dehydrated Products",
        description: "High-quality dehydrated vegetable powders and flakes processed under hygienic conditions preserving natural flavour, colour and nutritional value.",
        items: ["Dehydrated Onion Flakes", "Dehydrated Garlic Powder", "Dehydrated Ginger Powder", "Dehydrated Green Chilli", "Dehydrated Tomato Flakes"],
        seoKeywords: ["dehydrated vegetable exporter India", "dehydrated spice powder export", "dry ginger powder exporter"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "oil-seeds",
        name: "Oil Seeds",
        description: "Export-grade oil seeds sourced from trusted farming communities in North Gujarat. Sortex cleaned, moisture-optimized and packed for global markets.",
        items: ["Sesame Seeds (White, Black, Hulled)", "Groundnuts / Peanuts", "Castor Seeds", "Mustard Seeds"],
        seoKeywords: ["oil seeds export India", "sesame seed exporter Gujarat", "peanut export India", "bulk oil seeds supplier"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "millets-cereals",
        name: "Millets & Cereals",
        description: "Nutrient-dense ancient millets and cereals gaining global demand for their health benefits. Compliant with organic and FSSAI standards.",
        items: ["Bajra (Pearl Millet)", "Jowar (Sorghum)", "Ragi (Finger Millet)", "Foxtail Millet", "Barnyard Millet", "Wheat"],
        seoKeywords: ["millets exporter India", "millet export Gujarat", "ancient grain exporter India"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "specialty",
        name: "Peanut Butter & Specialties",
        description: "Value-added specialty products including natural peanut butter and unique agro-processed offerings for health-conscious global markets.",
        items: ["Natural Peanut Butter", "Flavoured Peanut Butter", "Peanut Flour", "Specialty Agro Products"],
        seoKeywords: ["peanut butter export India", "specialty agro products India", "value added agri export"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
];

export const certifications = [
    { name: "FSSAI", fullName: "Food Safety & Standards Authority", icon: "🏛️" },
    { name: "HACCP", fullName: "Hazard Analysis Critical Control", icon: "🔬" },
    { name: "ISO 22000", fullName: "Food Safety Management", icon: "✅" },
    { name: "KOSHER", fullName: "Kosher Certified for Export", icon: "✡️" },
    { name: "Spices Board", fullName: "Govt of India Registered", icon: "🌿" },
];

export const exportMarkets = [
    { name: "USA", region: "North America", top: "28%", left: "14%", flag: "🇺🇸" },
    { name: "Canada", region: "North America", top: "22%", left: "16%", flag: "🇨🇦" },
    { name: "UK", region: "Europe", top: "27%", left: "47%", flag: "🇬🇧" },
    { name: "UAE", region: "Middle East", top: "46%", left: "60%", flag: "🇦🇪" },
    { name: "Oman", region: "Middle East", top: "50%", left: "63%", flag: "🇴🇲" },
    { name: "Qatar", region: "Middle East", top: "48%", left: "61%", flag: "🇶🇦" },
    { name: "Saudi Arabia", region: "Middle East", top: "50%", left: "58%", flag: "🇸🇦" },
    { name: "Africa", region: "Africa", top: "60%", left: "52%", flag: "🌍" },
    { name: "Bangladesh", region: "South Asia", top: "48%", left: "74%", flag: "🇧🇩" },
    { name: "Indonesia", region: "Southeast Asia", top: "60%", left: "82%", flag: "🇮🇩" },
    { name: "China", region: "East Asia", top: "38%", left: "78%", flag: "🇨🇳" },
];

export const whyChooseUs = [
    {
        title: "Sourced from Unjha",
        description: "Located minutes from Asia's largest spice market, ensuring first-hand access to the freshest origin materials.",
        icon: "MapPin",
    },
    {
        title: "Global Compliance",
        description: "Complete FSSAI, HACCP, ISO 22000 and KOSHER documentation ready for stringent international import protocols.",
        icon: "ShieldCheck",
    },
    {
        title: "Farm Traceability",
        description: "Direct partnerships with Mahesana farming communities provide transparent batch-level tracing.",
        icon: "Route",
    },
    {
        title: "Private Label Processing",
        description: "Flexible food-grade packaging from bulk sacks to retail pouches under buyer's own brand.",
        icon: "Box",
    },
];

export const exportProcess = [
    { step: 1, title: "Farm Sourcing", description: "Direct procurement from certified farmers in Gujarat's Mahesana district and verified FPOs." },
    { step: 2, title: "Quality Grading & Testing", description: "Sortex cleaning, physical inspection, lab testing for aflatoxin, pesticide residue, moisture and microbiological parameters." },
    { step: 3, title: "Processing & Packaging", description: "Hygienic processing in our HACCP-certified facility. Custom bulk/retail/private label packaging available." },
    { step: 4, title: "Certification & Documentation", description: "Phytosanitary certificate, COA from accredited labs, FSSAI certification, invoice, packing list and customs documentation." },
    { step: 5, title: "Shipping & Delivery", description: "Reliable freight forwarding with experienced logistics partners ensuring timely delivery to all global destinations." },
];

export const blogPosts = [
    {
        title: "Why Unjha is the World Capital of Cumin Trade",
        category: "Insights",
        date: "Jan 2024",
        excerpt: "Explore how the Gujarat spice belt powers India's $4B+ annual spice exports and why buyers worldwide source from this region.",
    },
    {
        title: "Aflatoxin Testing: What Importers Must Know",
        category: "Quality",
        date: "Feb 2024",
        excerpt: "A practical guide to aflatoxin limits, EU/US MRLs, and how to ensure clean spice shipments from India.",
    },
    {
        title: "Millets Go Global: Ancient Indian Grains",
        category: "Trends",
        date: "Mar 2024",
        excerpt: "As health-conscious markets drive millet demand worldwide, Indian exporters are scaling up for a global superfood surge.",
    },
    {
        title: "Private Label Spices: B2B Importer Guide",
        category: "Guide",
        date: "Mar 2024",
        excerpt: "How to work with an Indian exporter for private label packaging, MOQ, and brand customization for retail markets.",
    },
];
