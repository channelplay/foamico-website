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
  title: "Foamico | Luxury Sleep Innovation",
  description: "Experience the pinnacle of sleep technology with Foamico's revolutionary smart foam systems. Where science meets serenity.",
  keywords: "luxury mattress, premium sleep, smart foam technology, Foamico, orthopedic support, memory foam",
  openGraph: {
    title: "Foamico - Where Science Meets Serenity",
    description: "Discover the perfect balance of luxury and innovation in sleep technology",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
