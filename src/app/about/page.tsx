import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { company } from "@/data/company";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us – LogicPulse Innovation LLP",
    description: "At LogicPulse Innovation LLP, we believe that technology is not just about coding—it's about creating smart, scalable, and impactful solutions that help businesses grow in the digital world.",
};

export default function AboutPage() {
    return (
        <>
            <HeroSection
                title="About Us – LogicPulse Innovation LLP"
                subtitle="Who We Are"
                description="At LogicPulse Innovation LLP, we believe that technology is not just about coding—it's about creating smart, scalable, and impactful solutions that help businesses grow in the digital world."
                ctaText="Get In Touch"
                ctaLink="/contact"
                size="medium"
            />

            {/* About Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center group cursor-default">
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed transition-all duration-500 group-hover:text-gray-900 group-hover:scale-[1.02]">
                            {company.aboutIntro}
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section + Team Photo */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="group cursor-default">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-transform duration-500 group-hover:translate-x-2">
                                Who <span className="gradient-text">We Are</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 transition-all duration-500 group-hover:text-gray-800">
                                {company.whoWeAre}
                            </p>
                            <p className="text-gray-600 text-lg transition-all duration-500 group-hover:text-gray-800">
                                {company.whoWeAreExtra}
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                            <div className="relative glass rounded-3xl p-8">
                                <div className="grid grid-cols-2 gap-4">
                                    {company.stats.map((stat, idx) => (
                                        <div key={idx} className="glass rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 cursor-default">
                                            <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                                            <div className="text-gray-600 text-sm">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Photo */}
                    <div className="mt-16 group cursor-default">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 transition-transform duration-500 group-hover:scale-105">
                                Meet Our <span className="gradient-text">Team</span>
                            </h3>
                            <p className="text-gray-600 transition-all duration-500 group-hover:text-gray-800">
                                A team of developers, designers, and strategists working together to transform ideas into powerful digital products.
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-cyan-500/20 group-hover:scale-[1.01]">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image
                                src="/team.png"
                                alt="LogicPulse Innovation Team"
                                width={1200}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                unoptimized
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                <p className="text-white text-lg font-semibold">LogicPulse Innovation LLP Team</p>
                                <p className="text-gray-300 text-sm">Passion • Innovation • Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What We <span className="gradient-text">Do</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We offer a wide range of IT and digital solutions to help your business thrive.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {company.whatWeDo.map((service, idx) => (
                            <div
                                key={idx}
                                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 cursor-default"
                            >
                                <div className="text-4xl mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-cyan-600">{service.title}</h3>
                                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">{service.description}</p>
                                <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="relative group cursor-default">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl transition-all duration-500 group-hover:from-cyan-500/20 group-hover:to-blue-500/20"></div>
                            <div className="relative glass rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-xl group-hover:shadow-cyan-500/10 group-hover:-translate-y-1">
                                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:rounded-xl">
                                    🎯
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Our <span className="gradient-text">Mission</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                                    {company.mission}
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="relative group cursor-default">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl transition-all duration-500 group-hover:from-blue-500/20 group-hover:to-purple-500/20"></div>
                            <div className="relative glass rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/10 group-hover:-translate-y-1">
                                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:rounded-xl">
                                    🔭
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Our <span className="gradient-text">Vision</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                                    {company.vision}
                                </p>
                            </div>
                        </div>
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
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {company.whyChooseUs.map((item, idx) => (
                            <div
                                key={idx}
                                className="group text-center p-6 glass rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 cursor-default"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-cyan-500/30 group-hover:to-blue-500/30 group-hover:rounded-xl group-hover:rotate-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-cyan-600">{item.title}</h3>
                                <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-800">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="gradient-text">Approach</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We follow a simple yet effective approach to deliver the best results.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                        {company.approach.map((item, idx) => (
                            <div key={idx} className="flex items-center">
                                <div className="group flex flex-col items-center text-center p-6 glass rounded-2xl min-w-[160px] transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 cursor-default">
                                    <div className="w-14 h-14 mb-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-cyan-500/40">
                                        {item.step}
                                    </div>
                                    <div className="text-2xl mb-2 transition-transform duration-500 group-hover:scale-125">{item.icon}</div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-cyan-600">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                                {idx < company.approach.length - 1 && (
                                    <div className="hidden md:block mx-2">
                                        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
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
                                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 cursor-default"
                            >
                                <div className="text-4xl mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-cyan-600">{value.title}</h3>
                                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">{value.description}</p>
                                <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder's Message */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Founder&apos;s <span className="gradient-text">Message</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-[300px_1fr] gap-10 items-center">
                        {/* Founder Photo */}
                        <div className="group flex justify-center">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-50 blur-lg transition-all duration-500 group-hover:opacity-80 group-hover:blur-xl"></div>
                                <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 transition-all duration-500 group-hover:border-cyan-400/60 group-hover:scale-[1.02]">
                                    <Image
                                        src="/founder.png"
                                        alt="Founder of LogicPulse Innovation LLP"
                                        width={300}
                                        height={380}
                                        className="w-[260px] h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-white font-semibold text-lg">Founder</p>
                                    <p className="text-cyan-400 text-sm">LogicPulse Innovation LLP</p>
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="group cursor-default">
                            <div className="mb-6">
                                <svg className="w-12 h-12 text-cyan-500/40 transition-all duration-500 group-hover:text-cyan-400/70 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <blockquote className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-6 transition-all duration-500 group-hover:text-gray-200">
                                &ldquo;{company.founderMessage}&rdquo;
                            </blockquote>
                            <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 group-hover:w-32"></div>
                        </div>
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
