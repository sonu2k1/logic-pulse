import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import servicesData from "@/data/services.json";
import Link from "next/link";

const service = servicesData.services.find((s) => s.slug === "inventory-management")!;

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
};

export default function InventoryManagementPage() {
    return (
        <>
            <HeroSection
                title={service.title}
                subtitle="Our Services"
                description={service.shortDescription}
                ctaText="Get Started"
                ctaLink="/contact"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/#services"
                size="medium"
            />

            {/* Service Description */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                What is <span className="gradient-text">{service.title}?</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                            <div className="flex flex-wrap gap-3">
                                {service.benefits.map((benefit, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-600 text-sm"
                                    >
                                        {benefit}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="glass rounded-3xl p-8">
                            <div className="text-6xl mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our {service.title}?</h3>
                            <ul className="space-y-3">
                                {service.features.slice(0, 4).map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our <span className="gradient-text">{service.title}</span> Features
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Smart inventory solutions to optimize your stock levels and reduce costs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                                    <span className="text-cyan-500 font-bold">{idx + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-500 transition-colors">
                                    {feature}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Key <span className="gradient-text">Benefits</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Transform your inventory operations with our intelligent management system.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { value: "40%", label: "Cost Reduction", desc: "Reduce carrying costs" },
                            { value: "99%", label: "Accuracy", desc: "Order fulfillment rate" },
                            { value: "60%", label: "Time Saved", desc: "In manual processes" },
                            { value: "Real-Time", label: "Visibility", desc: "Stock tracking" },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center glass rounded-2xl p-6">
                                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                                <div className="text-gray-600 text-sm">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Optimize Your Inventory?
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Let&apos;s build a smart inventory management system for your business.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/#services"
                            className="px-8 py-4 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Explore Other Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
