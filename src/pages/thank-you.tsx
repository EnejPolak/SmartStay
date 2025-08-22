"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { trackCustom } from '../lib/marketing/metaPixel';

export default function ThankYouPage() {
  useEffect(() => {
    // Track demo scheduling event
    trackCustom('DemoScheduled', {
      content_name: 'Demo Scheduled',
      content_category: 'Lead Generation'
    });
  }, []);

  return (
    <>
      <Head>
        <title>Thank You - SmartStay</title>
        <meta name="description" content="Thank you for scheduling a demo with SmartStay" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-zinc-300 mb-6">
              We&apos;ve received your demo request and will be in touch shortly.
            </p>
            <p className="text-zinc-400 mb-8">
              Our team will contact you within 24 hours to schedule your personalized demo 
              and show you how SmartStay can transform your guest experience.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
            >
              Return to Home
            </Link>
            <div>
              <Link 
                href="/demo"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                Explore our demo →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
