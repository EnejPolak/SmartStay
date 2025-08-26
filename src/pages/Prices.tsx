import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useLanguageStore } from "../stores/language";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { getBookingLink, getTranslation } = useLanguageStore();
  const t = getTranslation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white" suppressHydrationWarning>
      {/* Enhanced background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#8B7CDF]/30 to-[#60A5FA]/30 blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-[#60A5FA]/20 to-[#8B7CDF]/20 blur-3xl opacity-40" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }}
      />

      <Navbar />

      <main className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
              {t.pricing.trustBadge}
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-[#8B7CDF] via-white to-[#60A5FA] bg-clip-text text-6xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
              {t.pricing.title}
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-xl text-zinc-300 leading-relaxed">
              {t.pricing.subtitle}
            </p>
            <div className="mx-auto max-w-3xl rounded-2xl border border-yellow-400/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 backdrop-blur-sm">
              <p className="text-sm text-yellow-100">
                {t.pricing.fairPricing}
              </p>
            </div>
            
            {/* Billing Toggle */}
            <div className="mx-auto mt-8 flex w-fit items-center rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
              <button
                onClick={() => setIsAnnual(true)}
                className={`rounded-lg px-6 py-2 text-sm font-semibold transition-all ${
                  isAnnual 
                    ? "bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] text-white shadow-lg" 
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {t.pricing.annual} <span className="text-xs text-green-400 ml-1">({t.pricing.save})</span>
              </button>
              <button
                onClick={() => setIsAnnual(false)}
                className={`rounded-lg px-6 py-2 text-sm font-semibold transition-all ${
                  !isAnnual 
                    ? "bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] text-white shadow-lg" 
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {t.pricing.monthly}
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="space-y-16">
          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* SmartxStart Plan */}
            <div className="group relative animate-fade-in-up rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-violet-500/20">
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
              <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            
            {/* Plan Details */}
            <div className="mb-8">
              <h3 className="mb-3 text-3xl font-bold text-white">{t.pricing.plans.smartxStart.name}</h3>
              <p className="text-xs text-zinc-400 mb-6 font-medium tracking-wide uppercase">{t.pricing.plans.smartxStart.units}</p>
              <p className="text-zinc-300 text-sm mb-6 leading-relaxed">{t.pricing.plans.smartxStart.description}</p>
              
              {/* Pricing Section */}
              <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
                {/* Subscription Price - Main Focus */}
                <div className="text-center mb-6">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">
                      {isAnnual ? "162€" : "15€"}
                    </span>
                    <span className="text-lg font-normal text-zinc-400 ml-1">
                      {isAnnual ? "/year" : "/month"}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm font-medium">
                    {isAnnual ? "Annual subscription" : "Monthly subscription"}
                  </p>
                  {isAnnual && (
                    <p className="text-green-400 text-xs mt-1">Save 18€ annually</p>
                  )}
                </div>
                
                {/* Other Costs */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400 text-sm font-medium">One-time setup:</span>
                    <span className="text-zinc-100 font-semibold text-base">{t.pricing.plans.smartxStart.setup}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-zinc-300 mb-4 uppercase tracking-wide">{t.pricing.features.title}</h4>
              <ul className="space-y-3">
                {t.pricing.plans.smartxStart.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm font-normal text-zinc-200">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 border border-green-400/30 flex-shrink-0">
                      <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href={getBookingLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] py-3 text-center font-semibold text-white shadow-lg shadow-[#8B7CDF]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#8B7CDF]/40"
            >
              {t.pricing.requestQuote}
            </a>
          </div>

            {/* SmartxPlus Plan - Featured */}
            <div className="group relative animate-fade-in-up rounded-3xl border-2 border-[#8B7CDF]/50 bg-gradient-to-b from-white/[0.12] to-white/[0.04] p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-[#8B7CDF]/70 hover:shadow-violet-500/30 [animation-delay:150ms]">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-4 py-1 text-xs font-bold text-white shadow-lg">
              {t.pricing.plans.smartxPlus.popular}
            </div>
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#8B7CDF]/50 to-transparent"></div>
            
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B7CDF]/30 to-[#60A5FA]/30 border border-[#8B7CDF]/40">
              <svg className="h-8 w-8 text-[#8B7CDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            {/* Plan Details */}
            <div className="mb-8">
              <h3 className="mb-3 text-3xl font-bold text-white">{t.pricing.plans.smartxPlus.name}</h3>
              <p className="text-xs text-zinc-400 mb-6 font-medium tracking-wide uppercase">{t.pricing.plans.smartxPlus.units}</p>
              <p className="text-zinc-300 text-sm mb-6 leading-relaxed">{t.pricing.plans.smartxPlus.description}</p>
              
              {/* Pricing Section */}
              <div className="bg-white/5 rounded-xl p-6 mb-6 border border-[#8B7CDF]/20">
                {/* Subscription Price - Main Focus */}
                <div className="text-center mb-6">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">
                      {isAnnual ? "270€" : "25€"}
                    </span>
                    <span className="text-lg font-normal text-zinc-400 ml-1">
                      {isAnnual ? "/year" : "/month"}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm font-medium">
                    {isAnnual ? "Annual subscription" : "Monthly subscription"}
                  </p>
                  {isAnnual && (
                    <p className="text-green-400 text-xs mt-1">Save 30€ annually</p>
                  )}
                </div>
                
                {/* Other Costs */}
                <div className="border-t border-[#8B7CDF]/20 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400 text-sm font-medium">One-time setup:</span>
                    <span className="text-zinc-100 font-semibold text-base">{t.pricing.plans.smartxPlus.setup}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-zinc-300 mb-4 uppercase tracking-wide">{t.pricing.features.title}</h4>
              <ul className="space-y-3">
                {t.pricing.plans.smartxPlus.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm font-normal text-zinc-200">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 border border-green-400/30 flex-shrink-0">
                      <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link href="/Contact" className="block w-full rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] py-3 text-center font-semibold text-white shadow-lg shadow-[#8B7CDF]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#8B7CDF]/40">
              {t.pricing.requestQuote}
            </Link>
          </div>

            {/* SmartxPro Plan */}
            <div className="group relative animate-fade-in-up rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-violet-500/20 [animation-delay:300ms]">
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
              <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            
            {/* Plan Details */}
            <div className="mb-8">
              <h3 className="mb-3 text-3xl font-bold text-white">{t.pricing.plans.smartxPro.name}</h3>
              <p className="text-xs text-zinc-400 mb-6 font-medium tracking-wide uppercase">{t.pricing.plans.smartxPro.units}</p>
              <p className="text-zinc-300 text-sm mb-6 leading-relaxed">{t.pricing.plans.smartxPro.description}</p>
              
              {/* Pricing Section */}
              <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
                {/* Subscription Price - Main Focus */}
                <div className="text-center mb-6">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">
                      {isAnnual ? "378€" : "35€"}
                    </span>
                    <span className="text-lg font-normal text-zinc-400 ml-1">
                      {isAnnual ? "/year" : "/month"}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm font-medium">
                    {isAnnual ? "Annual subscription" : "Monthly subscription"}
                  </p>
                  {isAnnual && (
                    <p className="text-green-400 text-xs mt-1">Save 42€ annually</p>
                  )}
                </div>
                
                {/* Other Costs */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400 text-sm font-medium">One-time setup:</span>
                    <span className="text-zinc-100 font-semibold text-base">{t.pricing.plans.smartxPro.setup}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-zinc-300 mb-4 uppercase tracking-wide">{t.pricing.features.title}</h4>
              <ul className="space-y-3">
                {t.pricing.plans.smartxPro.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm font-normal text-zinc-200">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 border border-green-400/30 flex-shrink-0">
                      <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href={getBookingLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] py-3 text-center font-semibold text-white shadow-lg shadow-[#8B7CDF]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#8B7CDF]/40"
            >
              {t.pricing.requestQuote}
            </a>
          </div>
          </div>

          {/* Second Row - 1 Centered Card */}
          <div className="flex justify-center max-w-6xl mx-auto">
            <div className="w-full max-w-md">
              {/* SmartxEnterprise Plan */}
              <div className="group relative animate-fade-in-up rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-violet-500/20 [animation-delay:450ms]">
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30">
              <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            {/* Plan Details */}
            <div className="mb-8">
              <h3 className="mb-3 text-3xl font-bold text-white">{t.pricing.plans.smartxEnterprise.name}</h3>
              <p className="text-xs text-zinc-400 mb-6 font-medium tracking-wide uppercase">{t.pricing.plans.smartxEnterprise.units}</p>
              <p className="text-zinc-300 text-sm mb-6 leading-relaxed">{t.pricing.plans.smartxEnterprise.description}</p>
              
              {/* Pricing Section */}
              <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
                {/* Custom Price - Main Focus */}
                <div className="text-center mb-6">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">{t.pricing.plans.smartxEnterprise.custom}</span>
                  </div>
                  <p className="text-zinc-300 text-sm font-medium">Total investment</p>
                  <p className="text-xs text-zinc-500 mt-2 italic">{t.pricing.plans.smartxEnterprise.customDescription}</p>
                </div>
                
                {/* Other Details */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400 text-sm font-medium">Setup & Implementation:</span>
                    <span className="text-zinc-100 font-semibold text-base">{t.pricing.plans.smartxEnterprise.setup}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-zinc-300 mb-4 uppercase tracking-wide">{t.pricing.features.title}</h4>
              <ul className="space-y-3">
                {t.pricing.plans.smartxEnterprise.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm font-normal text-zinc-200">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 border border-green-400/30 flex-shrink-0">
                      <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
                <a 
                  href={getBookingLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] py-3 text-center font-semibold text-white shadow-lg shadow-[#8B7CDF]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#8B7CDF]/40"
                >
                  {t.pricing.requestQuote}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="mt-20 text-center">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-3xl font-bold text-white">{t.pricing.trust.title}</h3>
            <p className="mb-6 text-zinc-300">{t.pricing.trust.description}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a 
                href={getBookingLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-6 py-3 font-semibold text-white transition-all hover:scale-105"
              >
                {t.pricing.trust.consultation}
              </a>
              <a href="mailto:hello@smartxstay.com" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                {t.pricing.trust.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}