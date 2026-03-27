"use client";
import Link from "next/link";
import Image from "next/image";
import { company, navigation } from "@/data/company";
import ContactForm from "./ContactForm";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandLinkedin,
    IconBrandInstagram,
} from "@tabler/icons-react";

export default function Footer() {
    // Social media links for FloatingDock
    const socialLinks = [
        {
            title: "Facebook",
            icon: (
                <IconBrandFacebook className="h-full w-full text-[#1877F2] dark:text-[#1877F2]" />
            ),
            href: company.social.facebook,
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandTwitter className="h-full w-full text-[#1DA1F2] dark:text-[#1DA1F2]" />
            ),
            href: company.social.twitter,
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-[#0A66C2] dark:text-[#0A66C2]" />
            ),
            href: company.social.linkedin,
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-[#E1306C] dark:text-[#E1306C]" />
            ),
            href: company.social.instagram,
        },
    ];

    return (
        <footer className="bg-white border-t border-gray-200">
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Ready to Get Started?
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Are you looking for trusted experts for your business needs? Consult with top IT experts, just a click away.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact">
                                    <HoverBorderGradient
                                        containerClassName="rounded-full"
                                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 font-medium"
                                    >
                                        Get Quote
                                    </HoverBorderGradient>
                                </Link>
                                <Link href="/about">
                                    <HoverBorderGradient
                                        containerClassName="rounded-full"
                                        className="bg-white border border-gray-200 text-cyan-600 px-6 py-3 font-medium"
                                    >
                                        Learn More
                                    </HoverBorderGradient>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                            <ContactForm compact />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="block mb-6">
                            <Image
                                src="/logo.png"
                                alt="Logicpulse Innovation Logo"
                                width={180}
                                height={50}
                                className="h-14 w-auto object-contain"
                                unoptimized
                            />
                        </Link>
                        <p className="text-gray-600 text-sm mb-4">
                            {company.description}
                        </p>
                        {/* Floating Dock for Social Media */}
                        <FloatingDock
                            items={socialLinks}
                            desktopClassName="bg-gray-100"
                        />
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {navigation.footer.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navigation.footer.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            {navigation.footer.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-600 text-sm">{company.contact.address}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href={`mailto:${company.contact.email}`} className="text-gray-600 hover:text-cyan-600 transition-colors text-sm">
                                    {company.contact.email}
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="text-gray-600 text-sm">
                                    {company.contact.phone.map((phone, idx) => (
                                        <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-cyan-600 transition-colors block">
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 mt-12 pt-8 text-center">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} {company.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
