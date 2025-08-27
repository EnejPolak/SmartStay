'use client';

import { useEffect, useState } from 'react';
import { useLanguageStore } from '../stores/language';

export const useLanguageInit = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const { selectedLanguage, setLanguage } = useLanguageStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Mark as hydrated first
      setIsHydrated(true);
      
      // Check for saved language, but only if it differs from current
      const savedLanguage = localStorage.getItem('smartstay-language');
      if (savedLanguage) {
        try {
          const parsed = JSON.parse(savedLanguage);
          const lang = parsed?.state?.selectedLanguage;
          if (lang && ['EN', 'SL', 'HR'].includes(lang) && lang !== selectedLanguage) {
            setLanguage(lang);
          }
        } catch (e) {
          console.log('Could not parse saved language preference');
        }
      } else {
        // Detect browser language only if no saved preference
        const browserLang = navigator.language.toLowerCase();
        let detectedLanguage = 'EN';
        
        if (browserLang.startsWith('sl')) {
          detectedLanguage = 'SL';
        } else if (browserLang.startsWith('hr') || browserLang.startsWith('sr')) {
          detectedLanguage = 'HR';
        }
        
        if (detectedLanguage !== selectedLanguage) {
          setLanguage(detectedLanguage);
        }
      }
    }
  }, []); // Remove dependencies to avoid infinite loops

  return { isHydrated, selectedLanguage };
};
