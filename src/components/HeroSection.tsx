import Link from "next/link";

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    size?: "large" | "medium" | "small";
}

export default function HeroSection({
    title,
    subtitle,
    description,
    ctaText = "Get Started",
    ctaLink = "/contact",
    secondaryCtaText,
    secondaryCtaLink,
    size = "large",
}: HeroSectionProps) {
    const sizeClasses = {
        large: "py-32 md:py-40",
        medium: "py-24 md:py-32",
        small: "py-16 md:py-24",
    };

    return (
        <section className={`relative ${sizeClasses[size]} overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {subtitle && (
                    <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6 animate-fadeIn">
                        <span className="text-cyan-400 text-sm font-medium">{subtitle}</span>
                    </div>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
                    {title.split(" ").map((word, idx) => (
                        <span
                            key={idx}
                            className={
                                idx % 3 === 1
                                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                    : ""
                            }
                        >
                            {word}{" "}
                        </span>
                    ))}
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 animate-fadeIn delay-100">
                    {description}
                </p>

                <div className="flex flex-wrap justify-center gap-4 animate-fadeIn delay-200">
                    <Link
                        href={ctaLink}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                    >
                        {ctaText}
                    </Link>
                    {secondaryCtaText && secondaryCtaLink && (
                        <Link
                            href={secondaryCtaLink}
                            className="px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                        >
                            {secondaryCtaText}
                        </Link>
                    )}
                </div>

                {/* Scroll indicator for large hero */}
                {size === "large" && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <svg
                            className="w-6 h-6 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                )}
            </div>
        </section>
    );
}
