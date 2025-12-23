import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Guests',
  description: 'Everything you need for a perfect stay in one place. Scan a QR code and instantly access all information, local recommendations, and services with SmartxStay.',
  keywords: [
    'guest experience',
    'vacation rental information',
    'travel guide',
    'QR code access',
    'guest services',
    'local recommendations',
    'travel technology',
  ],
  openGraph: {
    title: 'For Guests | SmartxStay',
    description: 'Everything you need for a perfect stay in one place. Scan a QR code and instantly access all information, local recommendations, and services.',
    url: 'https://smartxstay.com/for-guests',
    images: [
      {
        url: '/logo__1__720.png',
        width: 1200,
        height: 630,
        alt: 'SmartxStay for Guests',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Guests | SmartxStay',
    description: 'Everything you need for a perfect stay in one place. Scan a QR code and access all information instantly.',
    images: ['/logo__1__720.png'],
  },
  alternates: {
    canonical: 'https://smartxstay.com/for-guests',
  },
};

export default function ForGuestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

