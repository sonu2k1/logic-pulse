import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { company } from "@/data/company";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Logicpulse Innovation - a leading custom software development company building innovative solutions for businesses.",
};

export default function AboutPage() {
    return (
        <>
            <HeroSection
                title="Building Custom Software Solutions Through New-Age Technology"
                subtitle="About Logicpulse Innovation"
                description="We are constantly thriving to become a world-class custom software development company, transforming businesses through innovative digital solutions."
                ctaText="Get In Touch"
                ctaLink="/contact"
                size="medium"
            />

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our <span className="gradient-text">Mission</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">
                                {company.mission}
                            </p>
                            <p className="text-gray-600 mb-8">
                                Since our founding in {company.founded}, we have been dedicated to delivering exceptional software solutions that help businesses thrive in the digital age. Our team of experts combines technical excellence with creative thinking to solve complex challenges.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {company.stats.map((stat, idx) => (
                                    <div key={idx} className="glass rounded-xl p-4 text-center">
                                        <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                                        <div className="text-gray-600 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                            <div className="relative glass rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                                <p className="text-gray-600 mb-6">
                                    To be the global leader in custom software development, known for innovation, quality, and client satisfaction. We envision a world where every business has access to cutting-edge technology solutions.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Innovation-driven approach
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Client-centric solutions
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Continuous improvement
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            These principles guide everything we do and define how we work with our clients and each other.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {company.values.map((value, idx) => (
                            <div
                                key={idx}
                                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why <span className="gradient-text">Choose Us</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Delivering multidimensional services with our unmatched core principles.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {company.whyChooseUs.map((item, idx) => (
                            <div
                                key={idx}
                                className="text-center p-6 glass rounded-2xl hover:border-cyan-500/50 transition-colors"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-3xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Work Together?
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Let&apos;s discuss how we can help transform your business with our innovative solutions.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                    >
                        Contact Us Today
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    );
}
