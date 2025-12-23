import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Hosts',
  description: 'SmartxStay helps vacation rental hosts automate guest communication, share local recommendations, and provide seamless digital experiences. Tools for creating smooth, hospitable experiences guests will remember.',
  keywords: [
    'vacation rental management',
    'host tools',
    'guest communication platform',
    'hospitality automation',
    'vacation rental software',
    'host technology',
    'guest experience tools',
  ],
  openGraph: {
    title: 'For Hosts | SmartxStay',
    description: 'Tools for creating smooth, hospitable experiences that guests will remember. Automate guest communication and share local recommendations with SmartxStay.',
    url: 'https://smartxstay.com/for-hosts',
    images: [
      {
        url: '/logo__1__720.png',
        width: 1200,
        height: 630,
        alt: 'SmartxStay for Hosts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Hosts | SmartxStay',
    description: 'Tools for creating smooth, hospitable experiences that guests will remember.',
    images: ['/logo__1__720.png'],
  },
  alternates: {
    canonical: 'https://smartxstay.com/for-hosts',
  },
};

export default function ForHostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

