import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
