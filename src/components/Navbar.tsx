"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation, company } from "@/data/company";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [nubLeft, setNubLeft] = useState(0);

    useEffect(() => {
        if (servicesOpen) {
            moveNub();
        }
    }, [servicesOpen]);

    const moveNub = () => {
        const servicesButton = document.getElementById("services-button");
        const dropdownContent = document.getElementById("dropdown-content");

        if (!servicesButton || !dropdownContent) return;

        const buttonRect = servicesButton.getBoundingClientRect();
        const { left: contentLeft } = dropdownContent.getBoundingClientRect();

        const buttonCenter = buttonRect.left + buttonRect.width / 2 - contentLeft;
        setNubLeft(buttonCenter);
    };

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-full shadow-2xl px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Logicpulse Innovation Logo"
                                width={180}
                                height={50}
                                className="h-12 w-auto object-contain"
                                priority
                                unoptimized
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div
                            className="hidden md:flex items-center space-x-8 flex-1 justify-center"
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            {navigation.main.map((item) =>
                                item.children ? (
                                    <div
                                        key={item.name}
                                        className="relative"
                                    >
                                        <button
                                            id="services-button"
                                            onMouseEnter={() => setServicesOpen(true)}
                                            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${servicesOpen
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700 hover:text-gray-900"
                                                }`}
                                        >
                                            <span>{item.name}</span>
                                            <svg
                                                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Animated Dropdown */}
                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div
                                                    id="dropdown-content"
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 8 }}
                                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    className="absolute left-0 top-[calc(100%_+_24px)] w-72 rounded-xl border border-gray-200 bg-white shadow-2xl p-4"
                                                >
                                                    {/* Bridge - invisible area between button and dropdown */}
                                                    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />

                                                    {/* Nub - triangle pointer */}
                                                    <motion.span
                                                        style={{
                                                            clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
                                                            left: nubLeft,
                                                        }}
                                                        animate={{ left: nubLeft }}
                                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                                        className="absolute top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-gray-200 bg-white"
                                                    />

                                                    {/* Dropdown Content */}
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.name}
                                                                href={child.href}
                                                                className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium px-3 py-1.5 rounded-full hover:bg-gray-100"
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block flex-shrink-0">
                            <Link
                                href="/contact"
                                className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                            >
                                Contact us
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-gray-700 hover:text-gray-900 p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200 animate-fadeIn">
                            {navigation.main.map((item) =>
                                item.children ? (
                                    <div key={item.name} className="py-2">
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="w-full text-left text-gray-700 hover:text-gray-900 transition-colors flex items-center justify-between"
                                        >
                                            <span>{item.name}</span>
                                            <svg
                                                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {servicesOpen && (
                                            <div className="pl-4 mt-2 space-y-2">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block mt-4"
                            >
                                <div className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium text-sm text-center transition-all duration-300">
                                    Contact us
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
