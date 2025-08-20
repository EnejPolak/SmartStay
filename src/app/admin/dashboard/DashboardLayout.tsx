"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/admin/store/auth";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const { username, logout } = useAuthStore();

  async function handleLogout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    } catch {}
    logout();
    router.replace('/admin');
  }

  return (
    <div className="relative -mx-4 -my-8 px-4 py-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-violet-600/30 to-blue-600/30" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "16px 16px" }} />

      <div className="mx-auto max-w-6xl space-y-6 animate-fade-in-up">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Welcome, {username || "admin"}</h1>
            <p className="text-sm text-zinc-400">Create, manage and reorder your posts</p>
          </div>
          <button onClick={handleLogout} className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-sm hover:border-[#8B7CDF]">Logout</button>
        </div>
        {children}
      </div>
    </div>
  );
}
