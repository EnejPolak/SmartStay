import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Pricing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white">
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
              Trusted by 500+ Properties Worldwide
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-[#8B7CDF] via-white to-[#60A5FA] bg-clip-text text-6xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
              Simple, Transparent<br />Pricing
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-xl text-zinc-300 leading-relaxed">
              Choose the perfect plan for your property portfolio. Scale effortlessly as you grow.
            </p>
            <div className="mx-auto max-w-3xl rounded-2xl border border-yellow-400/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 backdrop-blur-sm">
              <p className="text-sm text-yellow-100">
                💡 <span className="font-semibold">Fair & Flexible:</span> All prices are starting points. We customize every solution to fit your exact needs.
              </p>
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
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-white">SmartxStart</h3>
              <p className="text-sm text-zinc-400 mb-4">(1 – 3 units)</p>
              <p className="text-zinc-300 text-sm mb-4">For small property owners with 1 to 3 units</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Setup:</span>
                  <span className="text-white font-semibold">from €450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Annual hosting:</span>
                  <span className="text-white font-semibold">€180</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Monthly:</span>
                  <span className="text-2xl font-black text-white">€15<span className="text-sm font-normal text-zinc-400">/month</span></span>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <ul className="mb-8 space-y-3">
              {[
                "Secure hosting on fast servers",
                "Regular backups & updates",
                "Uninterrupted platform operation without ads",
                "Technical support from our team",
                "Continuous improvements and new features"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-zinc-200">
                  <div className="mr-3 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-500/20 border border-green-400/30 flex-shrink-0">
                    <svg className="h-2.5 w-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link href="/Contact" className="block w-full rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] py-3 text-center font-semibold text-white shadow-lg shadow-[#8B7CDF]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#8B7CDF]/40">
              Request a Quote
            </Link>
          </div>

            {/* SmartxPlus Plan - Featured */}
            <div className="group relative animate-fade-in-up rounded-3xl border-2 border-[#8B7CDF]/50 bg-gradient-to-b from-white/[0.12] to-white/[0.04] p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-[#8B7CDF]/70 hover:shadow-violet-500/30 [animation-delay:150ms]">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-4 py-1 text-xs font-bold text-white shadow-lg">
              MOST POPULAR
            </div>
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#8B7CDF]/50 to-transparent"></div>
            
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B7CDF]/30 to-[#60A5FA]/30 border border-[#8B7CDF]/40">
              <svg className="h-8 w-8 text-[#8B7CDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            {/* Plan Details */}
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-white">SmartxPlus</h3>
              <p className="text-sm text-zinc-400 mb-4">(4 – 7 units)</p>
              <p className="text-zinc-300 text-sm mb-4">Ideal for medium-sized providers with multiple units</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Setup:</span>
                  <span className="text-white font-semibold">from €590</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Annual hosting:</span>
                  <span className="text-white font-semibold">€300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Monthly:</span>
                  <span className="text-2xl font-black text-white">€25<span className="text-sm font-normal text-zinc-400">/month</span></span>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <ul className="mb-8 space-y-3">
              {[
                "Everything in SmartxStart",
                "Extended scalability for more guests",
                "More storage and capacity",
                "Customizable features depending on needs",
                "License for up to 7 units"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-zinc-200">
                  <div className="mr-3 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-500/20 border border-green-400/30 flex-shrink-0">
                    <svg className="h-2.5 w-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link href="/Contact" className="block w-full rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] py-3 text-center font-semibold text-white shadow-lg shadow-[#8B7CDF]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#8B7CDF]/40">
              Request a Quote
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
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-white">SmartxPro</h3>
              <p className="text-sm text-zinc-400 mb-4">(8 – 10 units)</p>
              <p className="text-zinc-300 text-sm mb-4">For larger property owners with 8 to 10 units</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Setup:</span>
                  <span className="text-white font-semibold">from €790</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Annual hosting:</span>
                  <span className="text-white font-semibold">€420</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Monthly:</span>
                  <span className="text-2xl font-black text-white">€35<span className="text-sm font-normal text-zinc-400">/month</span></span>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <ul className="mb-8 space-y-3">
              {[
                "Everything in SmartxPlus",
                "Optimized performance for higher usage",
                "Priority support",
                "Advanced management and analytics features",
                "License for up to 10 units"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-zinc-200">
                  <div className="mr-3 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-500/20 border border-green-400/30 flex-shrink-0">
                    <svg className="h-2.5 w-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link href="/Contact" className="block w-full rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] py-3 text-center font-semibold text-white shadow-lg shadow-[#8B7CDF]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#8B7CDF]/40">
              Request a Quote
            </Link>
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
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-white">SmartxEnterprise</h3>
              <p className="text-sm text-zinc-400 mb-4">(more than 10 units)</p>
              <p className="text-zinc-300 text-sm mb-4">For hotels and large accommodation providers</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Setup:</span>
                  <span className="text-white font-semibold">custom</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400 text-sm">Price:</span>
                  <span className="text-2xl font-black text-white">custom</span>
                </div>
                <p className="text-xs text-zinc-500 mt-2">(based on scope and requirements)</p>
              </div>
            </div>
            
            {/* Features */}
            <ul className="mb-8 space-y-3">
              {[
                "All benefits of SmartxPro",
                "Tailored integrations",
                "Dedicated account manager",
                "Unlimited scalability",
                "Fully customized licensing and pricing"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-zinc-200">
                  <div className="mr-3 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-500/20 border border-green-400/30 flex-shrink-0">
                    <svg className="h-2.5 w-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
                <Link href="/Contact" className="block w-full rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] py-3 text-center font-semibold text-white shadow-lg shadow-[#8B7CDF]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#8B7CDF]/40">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="mt-20 text-center">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-2xl font-bold text-white">Still have questions?</h3>
            <p className="mb-6 text-zinc-300">Our team is here to help you choose the perfect plan and answer any questions.</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/Contact" className="rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-6 py-3 font-semibold text-white transition-all hover:scale-105">
                Schedule Free Consultation
              </Link>
              <a href="mailto:hello@smartxstay.com" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                Email Us Directly
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}