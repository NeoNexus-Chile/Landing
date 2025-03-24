import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import Analytics from "@/components/Analytics";
import "swiper/css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-redhat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeoNexus - Innovación y Desarrollo de Software profesional",
  description:
    "En NeoNexus creamos soluciones de software innovadoras y personalizadas para potenciar tu negocio. Desarrollo web, integración de sistemas y más.",
  keywords: [
    "desarrollo de software",
    "aplicaciones web",
    "apps móviles",
    "soluciones tecnológicas",
    "innovación digital",
  ],
  alternates: {
    canonical: "https://www.neonexus.cl",
  },
  robots: "index, follow",
  openGraph: {
    title: "NeoNexus - Innovación y Desarrollo de Software profesional",
    description:
      "En NeoNexus creamos soluciones de software innovadoras y personalizadas para potenciar tu negocio. Desarrollo web, integración de sistemas y más.",
    url: "https://www.neonexus.cl",
    siteName: "NeoNexus",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NeoNexus - Desarrollo de Software Profesional",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoNexus - Innovación y Desarrollo de Software profesional",
    description:
      "En NeoNexus creamos soluciones de software innovadoras y personalizadas para potenciar tu negocio.",
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased`}>
        <Navbar />
        {children}
        <ToastContainer position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
