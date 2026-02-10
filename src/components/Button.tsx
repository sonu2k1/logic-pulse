"use client";

import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
    className,
    type = "button",
}: ButtonProps) {
    const isPrimary = variant === "primary";

    const content = (
        <HoverBorderGradient
            containerClassName="rounded-full"
            as={href ? "span" : "button"}
            className={cn(
                "flex items-center space-x-2 px-6 py-3 font-semibold",
                isPrimary
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-slate-900 text-gray-300 border border-gray-600",
                className
            )}
            onClick={!href ? onClick : undefined}
            {...(!href && { type })}
        >
            {children}
        </HoverBorderGradient>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block">
                {content}
            </Link>
        );
    }

    return content;
}
