import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SmartxStay - A digital guest experience platform designed to help vacation rental hosts provide the best guest experience with smart technology and transparent communication.',
  keywords: [
    'about SmartxStay',
    'vacation rental technology',
    'hospitality software company',
    'guest experience platform',
    'tourism technology',
  ],
  openGraph: {
    title: 'About Us | SmartxStay',
    description: 'Learn about SmartxStay - A digital guest experience platform designed to help vacation rental hosts provide the best guest experience.',
    url: 'https://smartxstay.com/about',
    images: [
      {
        url: '/logo__1__720.png',
        width: 1200,
        height: 630,
        alt: 'About SmartxStay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | SmartxStay',
    description: 'Learn about SmartxStay - A digital guest experience platform designed to help vacation rental hosts.',
    images: ['/logo__1__720.png'],
  },
  alternates: {
    canonical: 'https://smartxstay.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

