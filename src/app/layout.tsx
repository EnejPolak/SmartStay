import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import StructuredData from "@/components/shared/StructuredData";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smartxstay.com'),
  title: {
    default: 'SmartxStay - Digital Guest Experience Platform for Vacation Rentals',
    template: '%s | SmartxStay'
  },
  description: 'SmartxStay is a digital guest experience platform that helps vacation rental hosts share all essential information, recommendations, and services in one place by simply scanning a QR code or tapping an NFC tag. Perfect for hosts who care about their guests.',
  keywords: [
    'vacation rental management',
    'QR code for hotels',
    'digital guest experience',
    'hotel technology',
    'apartment management',
    'guest communication',
    'hospitality software',
    'NFC tags for hotels',
    'smart stay',
    'guest information system',
    'Slovenia hotels',
    'Croatia hotels',
    'vacation rental software'
  ],
  authors: [{ name: 'SmartxStay' }],
  creator: 'SmartxStay',
  publisher: 'SmartxStay',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smartxstay.com',
    siteName: 'SmartxStay',
    title: 'SmartxStay - Digital Guest Experience Platform',
    description: 'Transform your vacation rental with SmartxStay. Share all essential information, recommendations, and services in one place with QR codes and NFC tags.',
    images: [
      {
        url: '/logo__1__720.png',
        width: 1200,
        height: 630,
        alt: 'SmartxStay - Digital Guest Experience Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartxStay - Digital Guest Experience Platform',
    description: 'Transform your vacation rental with SmartxStay. Share all essential information with QR codes and NFC tags.',
    images: ['/logo__1__720.png'],
    creator: '@smartxstay',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo__1__720.png', type: 'image/png' },
    ],
    apple: '/logo__1__720.png',
  },
  alternates: {
    canonical: 'https://smartxstay.com',
    languages: {
      'en': 'https://smartxstay.com',
      'sl': 'https://smartxstay.com',
      'hr': 'https://smartxstay.com',
    },
  },
  verification: {
    // Add Google Search Console verification if available
    // google: 'your-verification-code',
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
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <LanguageProvider>
        <Navbar />
        {children}
        <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

