"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/admin/store/auth";
import { FileText, Star, User } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { username, logout } = useAuthStore();

  async function handleLogout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    } catch {}
    logout();
    router.replace('/admin');
  }

  const navigation = [
    {
      name: 'Blog Posts',
      href: '/admin/dashboard',
      icon: FileText,
      current: pathname === '/admin/dashboard' || pathname?.startsWith('/admin/blog')
    },
    {
      name: 'Reviews',
      href: '/admin/reviews',
      icon: Star,
      current: pathname?.startsWith('/admin/reviews')
    }
  ];

  return (
    <div className="relative -mx-4 -my-8 px-4 py-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-violet-600/30 to-blue-600/30" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "16px 16px" }} />

      <div className="mx-auto max-w-7xl">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="flex h-16 items-center px-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-violet-400" />
                <span className="ml-2 text-lg font-semibold text-white">Admin Panel</span>
              </div>
            </div>
            <nav className="mt-8 px-4">
              <ul className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`
                          flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors
                          ${item.current
                            ? 'bg-violet-600 text-white'
                            : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                          }
                        `}
                      >
                        <Icon className="mr-3 h-5 w-5" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-hidden">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 min-h-screen">
              <div className="px-6 py-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold text-white">Welcome, {username || "admin"}</h1>
                    <p className="text-sm text-zinc-400">Manage your content and settings</p>
                  </div>
                  <button 
                    onClick={handleLogout} 
                    className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-white hover:border-[#8B7CDF] transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="p-0">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
