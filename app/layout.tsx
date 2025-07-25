import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Foamico - Luxury Mattresses | Premium Sleep Solutions",
  description: "Experience the perfect blend of natural latex, European craftsmanship, and Indian innovation with Foamico luxury mattresses. 25-year warranty on all products.",
  keywords: "luxury mattress, latex mattress, orthopedic mattress, Foamico, natural latex, sleep solutions",
  openGraph: {
    title: "Foamico - Luxury Mattresses",
    description: "Premium latex mattresses designed for perfect sleep",
    url: "https://foamico-mattress.com",
    siteName: "Foamico",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
