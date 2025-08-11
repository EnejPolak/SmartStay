import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DemoPage: React.FC = () => {
  const publishedAt = new Date('2025-05-10').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <>
      <Head>
        <title>Demo Article – SmartStay</title>
        <meta name="description" content="A demo blog article showcasing SmartStay's design system." />
      </Head>

      {/* Reuse existing layout header/footer for consistent UI */}
      <Navbar />
      <main className="pt-28 pb-16 px-4">
        <article className="max-w-3xl mx-auto">
          {/* Breadcrumbs / Back link */}
          <div className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">← Back to home</Link>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Designing Seamless Digital Guides for Modern Guests
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3 text-gray-400 mb-8">
            <span>By <span className="text-gray-200 font-medium">SmartStay Editorial</span></span>
            <span className="opacity-50">•</span>
            <time dateTime="2025-05-10">{publishedAt}</time>
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-2xl overflow-hidden border border-white/10">
            <Image 
              src="/pictures/logo/smartStay_logo.png" 
              alt="SmartStay demo cover"
              fill
              className="object-contain p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-slate max-w-none">
            <p>
              Great hospitality is proactive, not reactive. At SmartStay, we help property owners
              deliver clear, mobile‑first information that answers 95% of guest questions before
              they are even asked. From WiFi and house rules to curated local tips, our digital
              guides ensure every stay feels smooth and stress‑free.
            </p>
            <p>
              In this demo article, we outline a simple approach to crafting a high‑impact guide:
              prioritize clarity, design for small screens, and keep content up‑to‑date. The result is
              fewer interruptions for you and a consistently delightful experience for your guests.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default DemoPage;


