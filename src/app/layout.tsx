import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterContactSection from "@/components/FooterContactSection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Logicpulse Innovation | Software Development Company",
    template: "%s | Logicpulse Innovation",
  },
  description:
    "Logicpulse Innovation is the leading custom software development company that offers high-quality website design & development services as per the client's requirements.",
  keywords: [
    "software development",
    "web development",
    "app development",
    "custom software",
    "ERP development",
    "SEO services",
    "content marketing",
  ],
  authors: [{ name: "Logicpulse Innovation" }],
  openGraph: {
    title: "Logicpulse Innovation | Software Development Company",
    description:
      "Leading custom software development company offering high-quality website design & development services.",
    url: "https://logicpulse.com",
    siteName: "Logicpulse Innovation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-slate-950 text-white`}>
        <Navbar />
        <main className="pt-0">{children}</main>
        <FooterContactSection />
        <Footer />
      </body>
    </html>
  );
}
