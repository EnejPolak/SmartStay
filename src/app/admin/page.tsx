"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/admin/store/auth";
import { useEffect, useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const { isAuthenticated, login, error, clearError } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.replace("/admin/dashboard");
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const ok = await login(username, password);
    setLoading(false);
    if (ok) router.replace("/admin/dashboard");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-violet-600/30 to-blue-600/30"></div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "16px 16px" }}
      />
      <div className="w-[95%] sm:w-[400px] animate-fade-in-up animate-scale-in rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10">
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="animate-fade-in-down bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] bg-clip-text text-5xl font-black tracking-tight text-transparent drop-shadow-lg">SmartxStay</div>
          <p className="text-xs text-zinc-400">Admin Login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Username</label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" fill="currentColor"/></svg>
              </span>
              <input
                value={username}
                onChange={(e) => { setUsername(e.target.value); if (error) clearError(); }}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-10 py-3 text-sm text-white placeholder-gray-400 shadow-inner outline-none focus:ring-2 focus:ring-violet-400/50"
                placeholder="Enter username"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Password</label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 8h-1V6a4 4 0 10-8 0v2H7a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2v-9a2 2 0 00-2-2zm-8-2a3 3 0 016 0v2H9V6zm8 13H7v-9h10v9z" fill="currentColor"/></svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); if (error) clearError(); }}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-10 py-3 pr-12 text-sm text-white placeholder-gray-400 shadow-inner outline-none focus:ring-2 focus:ring-violet-400/50"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-zinc-400 hover:text-zinc-200"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3l18 18-1.41 1.41L18.17 19C16.6 20 14.87 20.5 12 20.5 5.5 20.5 2 13.5 2 13.5s1.18-2.36 3.39-4.36L1.59 4.41 3 3zm7.73 7.73L8.27 8.27A3 3 0 0012 15a3 3 0 00-1.27-4.27zM12 6.5c6.5 0 10 7 10 7s-.66 1.31-1.95 2.73l-2.18-2.18C17.31 11.3 14.97 9.5 12 9.5c-.35 0-.69.03-1.02.08l-1.7-1.7c.84-.25 1.75-.38 2.72-.38z" fill="currentColor"/></svg>
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="animate-fade-in-up rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Log In"}
          </button>
          <p className="text-center text-xs text-zinc-500">Enter your credentials to access admin dashboard</p>
        </form>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-[11px] text-zinc-500">© 2025 SmartxStay — All rights reserved.</div>
    </div>
  );
}