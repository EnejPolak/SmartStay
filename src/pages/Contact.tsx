"use client";

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - SmartStay</title>
        <meta name="description" content="Get in touch with SmartStay to learn how we can transform your guest experience" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white">
        <Navbar />
        
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Ready to transform your guest experience? Let's discuss how SmartStay can help 
                your property stand out and increase guest satisfaction.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-violet-400 mb-2">Email</h3>
                    <p className="text-zinc-300">hello@smartstay.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-violet-400 mb-2">Phone</h3>
                    <p className="text-zinc-300">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-violet-400 mb-2">Response Time</h3>
                    <p className="text-zinc-300">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-semibold mb-6">Why Choose SmartStay?</h2>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Reduce guest support requests by up to 80%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Increase guest satisfaction scores</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Streamline operations and save time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Professional, branded guest experience</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
