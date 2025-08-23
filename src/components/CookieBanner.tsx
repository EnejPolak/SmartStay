"use client";

import { useEffect } from 'react';
import { useConsentStore } from '../stores/consent';

const MARKETING_ROUTES = ['/', '/pricing', '/features', '/demo', '/contact', '/thank-you'];

export default function CookieBanner() {
  const { hasConsented, setConsent, setBannerSeen } = useConsentStore();

  // Check if we're on a marketing route
  const isMarketingRoute = typeof window !== 'undefined' && 
    MARKETING_ROUTES.includes(window.location.pathname);

  // Don't show banner if:
  // - User has already made a decision
  // - Not on marketing route
  // - No pixel ID configured
  if (hasConsented !== null || !isMarketingRoute) {
    return null;
  }

  const handleAccept = () => {
    setConsent(true);
    setBannerSeen();
  };

  const handleDecline = () => {
    setConsent(false);
    setBannerSeen();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              We use cookies to improve your experience
            </h3>
            <p className="text-sm text-gray-600">
              We use cookies and similar technologies to help personalize content, 
              provide a better experience, and analyze our traffic. By clicking &quot;Accept&quot;, 
              you consent to our use of cookies for marketing purposes.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-white bg-violet-600 border border-transparent rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
