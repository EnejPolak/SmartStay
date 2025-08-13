"use client";

import React, { useEffect, useRef } from "react";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const rafIdRef = useRef<number | null>(null);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return; // Respect reduced motion

    let gsap: any | undefined;
    let ScrollTrigger: any | undefined;

    let isDestroyed = false;

    (async () => {
      try {
        const [{ gsap: gsapCore }, stModule, { default: Lenis }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("lenis"),
        ]);

        if (isDestroyed) return;

        gsap = gsapCore;
        ScrollTrigger = stModule.ScrollTrigger || stModule.default;
        if (!gsap || !ScrollTrigger || !Lenis) return;

        gsap.registerPlugin(ScrollTrigger);

        // Initialize Lenis
        const lenis = new Lenis({
          duration: 1.1,
          // Ease similar to gsap Power3.easeOut
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          smoothWheel: true,
        });
        lenisRef.current = lenis;

        // Keep ScrollTrigger in sync with Lenis
        lenis.on("scroll", () => {
          ScrollTrigger.update();
        });

        const raf = (time: number) => {
          lenis.raf(time);
          rafIdRef.current = window.requestAnimationFrame(raf);
        };
        rafIdRef.current = window.requestAnimationFrame(raf);

        // refresh after setup
        setTimeout(() => ScrollTrigger.refresh(), 0);
      } catch {
        // ignore
      }
    })();

    return () => {
      isDestroyed = true;
      if (rafIdRef.current != null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      try {
        lenisRef.current?.destroy?.();
      } catch {
        // ignore
      }
    };
  }, []);

  return <>{children}</>;
}


