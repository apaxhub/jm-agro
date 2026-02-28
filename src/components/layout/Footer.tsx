import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export function Footer() {
    return (
        <footer className="bg-bg border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link href="/" className="flex flex-col leading-tight">
                            <span className="text-xl font-bold text-fg">Tattvam.</span>
                            <span className="text-[10px] uppercase tracking-widest text-muted">Agri Export</span>
                        </Link>
                        <p className="text-muted text-sm max-w-sm leading-relaxed">
                            Premium agricultural exports from Visnagar, Gujarat. Certified, traced, and globally compliant.
                        </p>
                        <div className="flex flex-col gap-1 text-sm text-fg font-medium">
                            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">{siteConfig.contact.email}</a>
                            <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">{siteConfig.contact.phone}</a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-fg mb-6 text-sm">Navigation</h4>
                        <ul className="space-y-4 text-sm text-muted">
                            {[
                                { name: "Products", href: "/products" },
                                { name: "Process", href: "/export-process" },
                                { name: "About", href: "/about" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-fg transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="font-semibold text-fg mb-6 text-sm">Headquarters</h4>
                        <address className="text-sm text-muted not-italic leading-relaxed">
                            Tattvam Agri Export<br />
                            GIDC Industrial Area<br />
                            Visnagar, Mahesana<br />
                            Gujarat 384315, India<br /><br />
                            <span className="text-xs font-semibold text-fg uppercase tracking-wider">Near Unjha</span>
                        </address>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-fg transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-fg transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
