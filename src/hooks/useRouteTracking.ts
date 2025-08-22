"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useConsentStore } from '../stores/consent';
import { trackPageView } from '../../lib/marketing/metaPixel';

const MARKETING_ROUTES = ['/', '/pricing', '/features', '/demo', '/contact', '/thank-you'];

export function useRouteTracking() {
  const pathname = usePathname();
  const { hasConsented } = useConsentStore();

  useEffect(() => {
    if (!hasConsented || !pathname) return;

    // Track page view when pathname changes
    if (MARKETING_ROUTES.includes(pathname)) {
      trackPageView();
    }
  }, [pathname, hasConsented]);
}
