import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/scrool-animations/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartStay - Digital Guest Experience Solutions",
  description: "Transform your property into a modern, connected experience. SmartStay provides digital solutions for vacation rentals, hotels, and hospitality businesses.",
  keywords: "vacation rental, hotel management, digital guest experience, hospitality technology, property management",
  authors: [{ name: "SmartStay Team" }],
  openGraph: {
    title: "SmartStay - Digital Guest Experience Solutions",
    description: "Transform your property into a modern, connected experience with our comprehensive digital solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
