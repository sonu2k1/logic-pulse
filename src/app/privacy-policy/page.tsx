import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy policy for Logicpulse Innovation - how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
    return (
        <>
            <HeroSection
                title="Privacy Policy"
                subtitle="Legal"
                description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
                size="small"
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="glass rounded-2xl p-8 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                                <p className="text-gray-600 mb-4">
                                    We collect information you provide directly to us, including:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Name and contact information (email, phone number, address)</li>
                                    <li>Company name and business information</li>
                                    <li>Project requirements and specifications</li>
                                    <li>Payment and billing information</li>
                                    <li>Communications and correspondence with us</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Automatic Information Collection</h2>
                                <p className="text-gray-600 mb-4">
                                    When you visit our website, we automatically collect certain information, including:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>IP address and device information</li>
                                    <li>Browser type and operating system</li>
                                    <li>Pages visited and time spent on our website</li>
                                    <li>Referring website addresses</li>
                                    <li>Cookies and similar tracking technologies</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                                <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Process transactions and send related information</li>
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Send promotional communications (with your consent)</li>
                                    <li>Analyze usage patterns to improve user experience</li>
                                    <li>Protect against fraudulent or unauthorized activity</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
                                <p className="text-gray-600">
                                    We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                                <p className="text-gray-600">
                                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
                                <p className="text-gray-600">
                                    We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Disabling cookies may limit some features of our website.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
                                <p className="text-gray-600">
                                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
                                <p className="text-gray-600 mb-4">You have the right to:</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Access and receive a copy of your personal data</li>
                                    <li>Request correction of inaccurate data</li>
                                    <li>Request deletion of your personal data</li>
                                    <li>Object to or restrict processing of your data</li>
                                    <li>Withdraw consent at any time</li>
                                    <li>Lodge a complaint with a supervisory authority</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
                                <p className="text-gray-600">
                                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Project-related data may be retained for legal and business purposes.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                                <p className="text-gray-600">
                                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                                <p className="text-gray-600">
                                    If you have any questions about this Privacy Policy, please contact us:
                                </p>
                                <div className="mt-4 text-gray-600">
                                    <p><strong className="text-gray-900">Email:</strong> {company.contact.email}</p>
                                    <p><strong className="text-gray-900">Address:</strong> {company.contact.address}</p>
                                    <p><strong className="text-gray-900">Phone:</strong> {company.contact.phone[0]}</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-200">
                                <p className="text-gray-500 text-sm">
                                    Last updated: January 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
