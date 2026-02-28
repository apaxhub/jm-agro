import { cn } from "@/lib/utils";

interface SEOTextBlockProps {
    title?: string;
    content: string;
    className?: string;
}

export function SEOTextBlock({ title, content, className }: SEOTextBlockProps) {
    return (
        <section className={cn("py-16 bg-surface", className)}>
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                {title && <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">{title}</h2>}
                <p className="text-muted leading-relaxed">
                    {content}
                </p>
            </div>
        </section>
    );
}
