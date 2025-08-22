import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ConsentState {
  hasConsented: boolean | null; // null = not decided yet
  hasSeenBanner: boolean;
  setConsent: (consent: boolean) => void;
  setBannerSeen: () => void;
  reset: () => void;
}

export const useConsentStore = create<ConsentState>()(
  persist(
    (set) => ({
      hasConsented: null,
      hasSeenBanner: false,
      setConsent: (consent: boolean) => set({ hasConsented: consent }),
      setBannerSeen: () => set({ hasSeenBanner: true }),
      reset: () => set({ hasConsented: null, hasSeenBanner: false }),
    }),
    {
      name: 'smartstay-consent',
      partialize: (state) => ({
        hasConsented: state.hasConsented,
        hasSeenBanner: state.hasSeenBanner,
      }),
    }
  )
);
