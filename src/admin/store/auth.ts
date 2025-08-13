"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isAuthenticated: boolean;
  username: string | null;
  error: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      username: null,
      error: null,
      login: async (username: string, password: string) => {
        const isValid = username === "admin" && password === "admin123";
        if (isValid) {
          set({ isAuthenticated: true, username, error: null });
          return true;
        }
        set({ error: "Napačno uporabniško ime ali geslo." });
        return false;
      },
      logout: () => set({ isAuthenticated: false, username: null }),
      clearError: () => set({ error: null }),
    }),
    {
      name: "smartstay-admin-auth",
      partialize: (state) => ({ isAuthenticated: state.isAuthenticated, username: state.username }),
    }
  )
);


