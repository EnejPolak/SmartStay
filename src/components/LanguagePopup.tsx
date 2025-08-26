"use client";

import { useLanguageStore } from '../stores/language';

interface LanguagePopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const languages = [
  { code: 'EN', flag: '🇬🇧', name: 'English' },
  { code: 'SL', flag: '🇸🇮', name: 'Slovenščina' },
  { code: 'HR', flag: '🇭🇷', name: 'Hrvatski' }
];

export default function LanguagePopup({ isVisible, onClose }: LanguagePopupProps) {
  const { setLanguage } = useLanguageStore();

  if (!isVisible) return null;

  const handleLanguageSelect = (languageCode: string) => {
    setLanguage(languageCode);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Choose your language / Izberite jezik / Odaberite jezik
          </h3>
          <p className="text-sm text-gray-600">
            Select your preferred language for the best experience
          </p>
        </div>
        
        <div className="space-y-3">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-2xl">{language.flag}</span>
              <span className="font-medium text-gray-900">{language.name}</span>
            </button>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Skip / Preskočite / Preskočite
          </button>
        </div>
      </div>
    </div>
  );
}
