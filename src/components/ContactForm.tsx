"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
    compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Reset form and show success
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus("success");

        // Reset status after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const inputClasses = `w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors ${compact ? "text-sm" : ""
        }`;

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className={compact ? "space-y-3" : "grid md:grid-cols-2 gap-4"}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>
            </div>

            {!compact && (
                <div>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>
            )}

            <div>
                <textarea
                    id="message"
                    name="message"
                    placeholder={compact ? "Message *" : "Your Message *"}
                    required
                    rows={compact ? 3 : 5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                />
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${compact ? "text-sm" : ""
                    }`}
            >
                {status === "loading" ? (
                    <span className="flex items-center justify-center">
                        <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Sending...
                    </span>
                ) : (
                    "Send Message"
                )}
            </button>

            {status === "success" && (
                <div className="flex items-center justify-center space-x-2 text-green-400 text-sm animate-fadeIn">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message sent successfully!</span>
                </div>
            )}

            {status === "error" && (
                <div className="flex items-center justify-center space-x-2 text-red-400 text-sm animate-fadeIn">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Something went wrong. Please try again.</span>
                </div>
            )}
        </form>
    );
}
