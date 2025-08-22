import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HUDOverlay from "@/components/ui/HUDOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FOAMICO | SLEEP MODE UPGRADE | Next-Gen Mattress Tech",
  description: "MISSION: Upgrade your sleep with FOAMICO advanced mattress technology. +50% ENERGY REGEN, +30% FOCUS. Accept the mission for better sleep.",
  keywords: "gaming mattress, sleep upgrade, tech mattress, Foamico, deep sleep mode, performance sleep",
  openGraph: {
    title: "FOAMICO - Sleep Mode Upgrade Available",
    description: "NEW MISSION: Achieve deep sleep with next-gen mattress technology",
    url: "https://foamico-mattress.com",
    siteName: "FOAMICO",
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
        <HUDOverlay />
        <Header />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
