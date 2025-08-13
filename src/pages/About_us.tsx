import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Hana",
      role: "Co-Founder",
      image: "/pictures/persons/hana.png",
      description: "Visionary leader focused on crafting exceptional guest experiences and shaping the future of hospitality technology.",
      isFounder: true,
    },
    {
      name: "Nik",
      role: "Co-Founder", 
      image: "/pictures/persons/nik.png",
      description: "Product strategist driving growth and innovation, ensuring SmartStay stays ahead of industry trends and user needs.",
      isFounder: true,
    },
    {
      name: "Eva",
      role: "Design & Marketing",
      image: "/pictures/persons/eva.png", 
      description: "Creative force behind our brand identity and user experience, with an exceptional eye for aesthetics and compelling communication.",
      isDesigner: true,
    },
    {
      name: "Peter",
      role: "Lead Developer",
      image: "/pictures/persons/peter.png",
      description: "Technical architect and backbone of the platform, ensuring everything runs seamlessly, reliably, and securely.",
      isDeveloper: true,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#8B7CDF]/20 to-[#60A5FA]/20 blur-3xl opacity-60" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-[#60A5FA]/15 to-[#8B7CDF]/15 blur-3xl opacity-50" />
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
            <h1 className="mb-6 bg-gradient-to-r from-[#8B7CDF] via-white to-[#60A5FA] bg-clip-text text-6xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
              Meet the SmartStay Team
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-zinc-300 leading-relaxed">
              The people behind your next-level guest experience.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`group animate-fade-in-up rounded-3xl backdrop-blur-xl transition-all duration-500 hover:scale-105 ${
                  member.isFounder
                    ? "border-2 border-[#8B7CDF]/30 bg-gradient-to-b from-white/[0.12] to-white/[0.04] shadow-2xl hover:border-[#8B7CDF]/50 hover:shadow-violet-500/30 lg:scale-110"
                    : member.isDesigner
                    ? "border border-pink-400/30 bg-gradient-to-b from-pink-500/[0.08] to-purple-500/[0.04] shadow-xl hover:border-pink-400/50 hover:shadow-pink-500/20"
                    : member.isDeveloper
                    ? "border border-white/10 bg-gradient-to-b from-slate-800/[0.6] to-slate-900/[0.4] shadow-xl hover:border-cyan-400/30 hover:shadow-cyan-500/20"
                    : "border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-xl hover:border-white/20 hover:shadow-violet-500/20"
                } p-6`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Founder Badge */}
                {member.isFounder && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-3 py-1 text-xs font-bold text-white shadow-lg">
                    FOUNDER
                  </div>
                )}

                {/* Developer Pattern Overlay */}
                {member.isDeveloper && (
                  <div className="absolute inset-0 rounded-3xl opacity-5 overflow-hidden">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='0.4'%3E%3Ctext x='2' y='8' font-family='monospace' font-size='6'%3E01%3C/text%3E%3Ctext x='2' y='16' font-family='monospace' font-size='6'%3E10%3C/text%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Photo */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="h-30 w-30 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="mb-2 text-xl font-bold text-white">{member.name}</h3>
                    <div
                      className={`mb-3 inline-block rounded-lg px-3 py-1 text-xs font-semibold ${
                        member.isFounder
                          ? "bg-gradient-to-r from-[#8B7CDF]/20 to-[#60A5FA]/20 text-[#8B7CDF] border border-[#8B7CDF]/30"
                          : member.isDesigner
                          ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-400/30"
                          : member.isDeveloper
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30"
                          : "bg-white/10 text-zinc-300 border border-white/20"
                      }`}
                    >
                      {member.role}
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.12]">
            <h3 className="mb-4 text-3xl font-bold text-white">Want to work with us?</h3>
            <p className="mb-6 text-lg text-zinc-300">
              Ready to transform your property into an unforgettable experience? Let's create something amazing together.
            </p>
            <Link
              href="/Contact"
              className="inline-block rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-[#8B7CDF]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#8B7CDF]/40"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
