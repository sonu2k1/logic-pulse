import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Something",
    description: "Discover something amazing at LogicPulse Innovation LLP.",
};

export default function SomethingPage() {
    return (
        <>
            <HeroSection
                title="Something Amazing"
                subtitle="Explore"
                description="Discover what makes LogicPulse Innovation LLP stand out. We're building something incredible for you."
                ctaText="Get In Touch"
                ctaLink="/contact"
                size="medium"
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Coming <span className="gradient-text">Soon</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            We&apos;re working on something exciting. Stay tuned for updates!
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                        >
                            Contact Us
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
