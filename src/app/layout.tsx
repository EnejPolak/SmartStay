import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartStay",
  description: "SmartStay application",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo__1__720.png', type: 'image/png' },
    ],
    apple: '/logo__1__720.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
        <Navbar />
        {children}
        <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

