import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Foamico | Coming Soon",
  description: "Revolutionary sleep technology coming soon. Experience the perfect fusion of traditional craftsmanship and innovative foam technology.",
  keywords: "luxury mattress, premium sleep, smart foam technology, Foamico, orthopedic support, memory foam",
  openGraph: {
    title: "Foamico - Coming Soon",
    description: "Revolutionary sleep technology coming soon",
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
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
