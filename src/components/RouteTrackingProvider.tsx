"use client";

import { usePathname } from 'next/navigation';
import { useRouteTracking } from '../hooks/useRouteTracking';

const MARKETING_ROUTES = ['/', '/pricing', '/features', '/demo', '/contact', '/thank-you'];

interface RouteTrackingProviderProps {
  children: React.ReactNode;
}

export default function RouteTrackingProvider({ children }: RouteTrackingProviderProps) {
  const pathname = usePathname();
  // Guard against potential null from usePathname during build/render
  const currentPath = pathname ?? "";
  const isMarketingRoute = MARKETING_ROUTES.includes(currentPath);

  // Always call the hook, but it will only track on marketing routes
  useRouteTracking();

  return <>{children}</>;
}
