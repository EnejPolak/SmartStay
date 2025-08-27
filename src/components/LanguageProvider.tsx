'use client';

import { useLanguageInit } from '../hooks/useLanguageInit';
import { ReactNode } from 'react';

interface LanguageProviderProps {
  children: ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const { isHydrated } = useLanguageInit();
  
  // Show children immediately but with initialization running in background
  if (!isHydrated) {
    return (
      <>
        {children}
        {/* Optional: Small loading indicator */}
        <div className="fixed top-4 right-4 z-50 opacity-50">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </>
    );
  }
  
  return <>{children}</>;
}
