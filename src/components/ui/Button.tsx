import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-white shadow hover:bg-primaryLight hover:shadow-glow": variant === "default",
                        "border border-border bg-transparent hover:bg-surfaceHover text-fg": variant === "outline",
                        "hover:bg-surfaceHover text-fg": variant === "ghost",
                        "text-primary underline-offset-4 hover:underline": variant === "link",
                        "h-10 px-6 py-2": size === "default",
                        "h-8 rounded-md px-3 text-xs": size === "sm",
                        "h-12 rounded-md px-8 text-base": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
