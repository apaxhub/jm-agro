"use client";

import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show CTA only after scrolling down 500px
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
                }`}
        >
            <div className="relative group">
                <div className="absolute -inset-1 bg-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <Button
                    size="lg"
                    className="relative rounded-full shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform"
                >
                    <MessageSquare className="h-5 w-5" />
                    <span className="hidden sm:inline">Request a Quote</span>
                </Button>
            </div>
        </div>
    );
}
