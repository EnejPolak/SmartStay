import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the perfect SmartxStay plan for your vacation rental. Flexible pricing packages from SmartxWelcome to SmartxElite, plus additional modules to enhance your guest experience.',
  keywords: [
    'SmartxStay pricing',
    'vacation rental software pricing',
    'hospitality software cost',
    'host platform pricing',
    'guest experience platform pricing',
    'QR code platform pricing',
  ],
  openGraph: {
    title: 'Pricing | SmartxStay',
    description: 'Choose the perfect SmartxStay plan for your vacation rental. Flexible pricing packages and additional modules.',
    url: 'https://smartxstay.com/prices',
    images: [
      {
        url: '/logo__1__720.png',
        width: 1200,
        height: 630,
        alt: 'SmartxStay Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | SmartxStay',
    description: 'Choose the perfect SmartxStay plan for your vacation rental. Flexible pricing packages available.',
    images: ['/logo__1__720.png'],
  },
  alternates: {
    canonical: 'https://smartxstay.com/prices',
  },
};

export default function PricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

