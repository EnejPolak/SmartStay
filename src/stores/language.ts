import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, Translation } from '../lib/translations';

interface LanguageState {
  selectedLanguage: string;
  setLanguage: (language: string) => void;
  getBookingLink: () => string;
  getTranslation: () => Translation;
}

const languages = [
  { code: 'EN', flag: '🇬🇧', bookingLink: 'https://hanakucej-qr-space.zohobookings.eu/#/242002000000052012' },
  { code: 'SL', flag: '🇸🇮', bookingLink: 'https://hanakucej-qr-space.zohobookings.eu/#/242002000000052012' },
  { code: 'HR', flag: '🇭🇷', bookingLink: 'https://hanakucej-qr-space.zohobookings.eu/#/242002000000057014' }
];

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      selectedLanguage: 'EN',
      setLanguage: (language: string) => set({ selectedLanguage: language }),
      getBookingLink: () => {
        const { selectedLanguage } = get();
        const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0];
        return currentLanguage.bookingLink;
      },
      getTranslation: () => {
        const { selectedLanguage } = get();
        return translations[selectedLanguage] || translations['EN'];
      }
    }),
    {
      name: 'smartstay-language',
      partialize: (state) => ({
        selectedLanguage: state.selectedLanguage,
      }),
    }
  )
);

export { languages };
