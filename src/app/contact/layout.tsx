import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SmartxStay. Contact us for questions, support, or to learn how we can help transform your vacation rental business.',
  keywords: [
    'contact SmartxStay',
    'vacation rental support',
    'hospitality software support',
    'SmartxStay contact',
  ],
  openGraph: {
    title: 'Contact Us | SmartxStay',
    description: 'Get in touch with SmartxStay. Contact us for questions, support, or to learn how we can help transform your vacation rental business.',
    url: 'https://smartxstay.com/contact',
    images: [
      {
        url: '/logo__1__720.png',
        width: 1200,
        height: 630,
        alt: 'Contact SmartxStay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | SmartxStay',
    description: 'Get in touch with SmartxStay. Contact us for questions or support.',
    images: ['/logo__1__720.png'],
  },
  alternates: {
    canonical: 'https://smartxstay.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

