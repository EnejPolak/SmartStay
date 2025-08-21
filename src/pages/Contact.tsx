import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('loading');
    
    // Form submission simulation with enhanced UX flow
    setTimeout(() => {
      // Simulate random success/error for demonstration
      const isSuccess = Math.random() > 0.1; // 90% success rate for demo
      
      setIsSubmitting(false);
      
      if (isSuccess) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you as soon as possible.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage('Oops! Something went wrong. Please try again or contact us directly.');
      }
      
      // Auto-hide message and show form again after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contact - SmartStay</title>
        <meta name="description" content="Get in touch with us. We answer your questions about SmartStay solutions for digital hospitality experiences." />
      </Head>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Same background as Home.tsx */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        <Navbar />
        
        {/* Hero Section with staggered animations */}
        <section className="contact-hero relative z-10 pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-violet-600/20 to-blue-600/20 text-violet-300 border border-violet-500/30">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                Get In Touch
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Contact
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Have questions about SmartStay solutions? Need help or consultation? 
              Our team is here to help you transform your hospitality experience.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="relative z-10 px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Main Contact Section with improved visual hierarchy */}
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              
              {/* Contact Form - Left Side (emphasized with background and larger space) */}
              <div className="lg:col-span-2 order-1 lg:order-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                {/* Enhanced form container with more prominent styling */}
                <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12 shadow-2xl">
                  {/* Improved header with better typography and spacing */}
                  <div className="mb-12">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                      Send us a message
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Fill out the form below and we'll get back to you as soon as possible. 
                      <span className="block mt-2 text-lg text-gray-400">Your inquiry is important to us.</span>
                    </p>
                  </div>

                {/* Loading State */}
                {submitStatus === 'loading' && (
                  <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Sending your message...</h3>
                    <p className="text-gray-400 text-center">Please wait while we process your request.</p>
                  </div>
                )}

                {/* Success State */}
                {submitStatus === 'success' && submitMessage && (
                  <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                    <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6 animate-bounce">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-green-400 mb-4 text-center">Message Sent!</h3>
                    <p className="text-gray-300 text-center text-lg leading-relaxed max-w-md">{submitMessage}</p>
                    <div className="mt-8 text-sm text-gray-500">
                      Form will reappear in a few seconds...
                    </div>
                  </div>
                )}

                {/* Error State */}
                {submitStatus === 'error' && submitMessage && (
                  <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                    <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center mb-6 animate-pulse">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-red-400 mb-4 text-center">Oops! Something went wrong</h3>
                    <p className="text-gray-300 text-center text-lg leading-relaxed max-w-md mb-6">{submitMessage}</p>
                    <button
                      onClick={() => {
                        setSubmitStatus('idle');
                        setSubmitMessage('');
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                    >
                      Try Again
                    </button>
                  </div>
                )}

                {/* Contact form - only show when idle */}
                {submitStatus === 'idle' && (
                  <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                                              <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 ${
                            formData.name ? 'text-blue-400 font-medium' : 'text-white'
                          }`}
                          placeholder="Your name"
                        />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                                              <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 ${
                            formData.email ? 'text-blue-400 font-medium' : 'text-white'
                          }`}
                          placeholder="your@email.com"
                        />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 ${
                        formData.subject ? 'text-blue-400 font-medium' : 'text-white'
                      }`}
                    >
                      <option value="" disabled className="text-gray-400">Select subject</option>
                      <option value="general" className="bg-slate-800 text-white">General Inquiry</option>
                      <option value="demo" className="bg-slate-800 text-white">Product Demo</option>
                      <option value="pricing" className="bg-slate-800 text-white">Pricing & Packages</option>
                      <option value="support" className="bg-slate-800 text-white">Technical Support</option>
                      <option value="partnership" className="bg-slate-800 text-white">Partnership</option>
                      <option value="other" className="bg-slate-800 text-white">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 resize-none ${
                        formData.message ? 'text-blue-400 font-medium' : 'text-white'
                      }`}
                      placeholder="Describe your question or needs..."
                    />
                  </div>

                  {/* Enhanced CTA button with better styling and responsive sizing */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact-submit-mobile w-full lg:w-auto lg:min-w-[250px] px-8 py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        {/* Paper airplane icon from Heroicons */}
                        <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                  </form>
                )}
                </div>
              </div>

              {/* Contact Info - Right Side (compact and grouped) */}
              <div className="lg:col-span-1 order-2 lg:order-2 space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
                
                {/* Company Info Card - Largest and most prominent */}
                <div className="bg-gradient-to-br from-gray-900/60 to-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/15 p-8 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H7m5 0V9a2 2 0 012-2h2a2 2 0 012 2v12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">SmartxStay</h3>
                      <p className="text-violet-300 font-medium">Digital Solutions for Rental Properties</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    We help apartment and house rental owners create better guest experiences with smart digital guides. 
                    Our mission is to reduce guest questions and make property management effortless for owners.
                  </p>
                </div>

                {/* Contact Methods - Compact grid with color-coded icons */}
                <div className="grid gap-4">
                  
                  {/* Phone - Green theme with tap-to-call */}
                  <a href="tel:+38669415493" className="bg-gradient-to-br from-gray-900/40 to-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/10 p-5 group hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 cursor-pointer opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg group-hover:text-green-400 transition-colors duration-300">Phone</h4>
                        <p className="text-gray-300 font-medium">+386 69 415 493</p>
                        <p className="text-sm text-gray-400">Mon-Fri: 9:00 - 17:00</p>
                      </div>
                    </div>
                  </a>

                  {/* Email - Blue theme with tap-to-email */}
                  <a href="mailto:info@qr-space.si" className="bg-gradient-to-br from-gray-900/40 to-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/10 p-5 group hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer opacity-0 animate-fade-in-up" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors duration-300">Email</h4>
                        <p className="text-gray-300 font-medium">info@qr-space.si</p>
                        <p className="text-sm text-gray-400">Response within 24h</p>
                      </div>
                    </div>
                  </a>

                  {/* Location - Purple theme */}
                  <div className="bg-gradient-to-br from-gray-900/40 to-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/10 p-5 group hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg group-hover:text-purple-400 transition-colors duration-300">Location</h4>
                        <p className="text-gray-300 font-medium">Ljubljana, Slovenia</p>
                        <p className="text-sm text-gray-400">Available throughout Slovenia</p>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours - Orange theme */}
                  <div className="bg-gradient-to-br from-gray-900/40 to-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/10 p-5 group hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors duration-300">Working Hours</h4>
                        <p className="text-gray-300 font-medium">Mon-Fri: 9:00 - 17:00</p>
                        <p className="text-sm text-gray-400">Sat-Sun: By appointment</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Social Links - Visually separated section */}
                <div className="mt-8 pt-6 border-t border-white/10 opacity-0 animate-fade-in-up" style={{ animationDelay: '2.0s', animationFillMode: 'forwards' }}>
                  <div className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                    <h4 className="text-white font-bold text-lg mb-6 text-center">Follow Us</h4>
                    <div className="flex justify-center space-x-4">
                      {/* Facebook */}
                      <a href="https://www.facebook.com/SmartxStay/" className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg group">
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      {/* Instagram */}
                      <a href="https://www.instagram.com/smartxstay/" className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg group">
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      {/* LinkedIn */}
                      <a href="https://www.linkedin.com/company/smartxstay/posts/?feedView=all" className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg group">
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
