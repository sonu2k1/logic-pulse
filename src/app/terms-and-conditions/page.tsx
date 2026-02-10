import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description: "Terms and conditions for using Logicpulse Innovation website and services.",
};

export default function TermsPage() {
    return (
        <>
            <HeroSection
                title="Terms and Conditions"
                subtitle="Legal"
                description="Please read these terms and conditions carefully before using our services."
                size="small"
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="glass rounded-2xl p-8 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                                <p className="text-gray-600">
                                    Welcome to {company.name}. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website or services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
                                <p className="text-gray-600">
                                    {company.name} provides custom software development services including but not limited to web development, mobile app development, ERP solutions, and digital marketing services. The scope of services for each project will be defined in a separate agreement or proposal.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                                <p className="text-gray-600">
                                    All content on this website, including text, graphics, logos, images, and software, is the property of {company.name} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without explicit written permission.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                                <p className="text-gray-600 mb-4">By using our services, you agree to:</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Provide accurate and complete information when requested</li>
                                    <li>Use our services only for lawful purposes</li>
                                    <li>Not attempt to gain unauthorized access to our systems</li>
                                    <li>Not engage in any activity that could harm our website or services</li>
                                    <li>Comply with all applicable laws and regulations</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
                                <p className="text-gray-600">
                                    Payment terms for our services will be specified in the project agreement. Unless otherwise stated, payments are due according to the milestone schedule defined in the project proposal. Late payments may incur additional fees as specified in the agreement.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
                                <p className="text-gray-600">
                                    We maintain strict confidentiality of all client information and project details. We will not disclose proprietary information to third parties without your explicit consent, except as required by law.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                                <p className="text-gray-600">
                                    To the maximum extent permitted by law, {company.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                                <p className="text-gray-600">
                                    Either party may terminate the service agreement as specified in the project contract. Upon termination, all outstanding payments become immediately due. We reserve the right to suspend or terminate access to our website for violation of these terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                                <p className="text-gray-600">
                                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                                <p className="text-gray-600">
                                    If you have any questions about these Terms and Conditions, please contact us at:
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
