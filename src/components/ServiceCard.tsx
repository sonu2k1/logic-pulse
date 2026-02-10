"use client";

import Link from "next/link";
import { CometCard } from "@/components/ui/comet-card";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    href: string;
    features?: string[];
}

export default function ServiceCard({
    title,
    description,
    icon,
    href,
    features,
}: ServiceCardProps) {
    return (
        <CometCard rotateDepth={12} translateDepth={15}>
            <Link href={href} className="group block h-full">
                <div className="relative h-full p-6 bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                    <div className="relative">
                        {/* Icon */}
                        <div className="w-14 h-14 mb-4 flex items-center justify-center text-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform">
                            {icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

                        {/* Features (optional) */}
                        {features && features.length > 0 && (
                            <ul className="space-y-1 mb-4">
                                {features.slice(0, 3).map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                        <svg
                                            className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Learn more link */}
                        <div className="flex items-center text-cyan-600 text-sm font-medium group-hover:text-cyan-700 transition-colors">
                            Learn More
                            <svg
                                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </CometCard>
    );
}
