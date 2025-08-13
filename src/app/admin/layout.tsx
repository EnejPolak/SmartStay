import type { Metadata } from "next";

export const metadata: Metadata = { title: "SmartxStay Admin" };

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0b] via-[#0b0f1e] to-[#0b1220] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 h-80 w-80 rounded-full blur-3xl opacity-25 bg-gradient-to-br from-[#8B7CDF] to-[#60A5FA]"></div>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-8">{children}</div>
    </div>
  );
}


