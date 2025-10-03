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
  title: "Foamico Mattress - Luxury Sleep Solutions | Premium Foam Technology",
  description: "Experience revolutionary sleep technology with Foamico luxury mattresses. Featuring premium foam layers, orthopedic support, and innovative design for exceptional comfort.",
  keywords: "luxury mattress, premium sleep, smart foam technology, Foamico, orthopedic support, memory foam, Sova mattress, Ultima mattress",
  openGraph: {
    title: "Foamico - Luxury Mattresses with Premium Foam Technology",
    description: "Experience revolutionary sleep technology with Foamico luxury mattresses featuring premium foam layers and orthopedic support.",
    url: "https://foamicomattress.com",
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
