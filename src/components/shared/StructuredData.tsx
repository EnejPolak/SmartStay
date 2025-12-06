'use client';

import Script from 'next/script';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'SoftwareApplication';
}

export default function StructuredData({ type = 'Organization' }: StructuredDataProps) {
  const baseUrl = 'https://smartxstay.com';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SmartxStay',
    url: baseUrl,
    logo: `${baseUrl}/logo__1__720.png`,
    description: 'Digital guest experience platform for vacation rentals. Share all essential information, recommendations, and services with QR codes and NFC tags.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+386-69-415-493',
      contactType: 'Customer Service',
      email: 'info@qr-space.si',
      areaServed: ['SI', 'HR', 'EU'],
      availableLanguage: ['en', 'sl', 'hr']
    },
    sameAs: [
      'https://www.linkedin.com/company/smartxstay',
      'https://www.instagram.com/smartxstay.si',
      'https://www.facebook.com/SmartxStay'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SI'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SmartxStay',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SmartxStay',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '17.90',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '17.90',
        priceCurrency: 'EUR',
        unitText: 'MONTH'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '50'
    }
  };

  let schema;
  if (type === 'WebSite') {
    schema = websiteSchema;
  } else if (type === 'SoftwareApplication') {
    schema = softwareApplicationSchema;
  } else {
    schema = organizationSchema;
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

