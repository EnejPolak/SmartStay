"use client";

// Sets up a GSAP ScrollTrigger sequence:
// 1) When the user reaches the end of `#mad-emotions`, scrolling pauses briefly (pin).
// 2) As the user continues, `#solution` slides in from right to fully cover `#mad-emotions`.
// 3) Once fully covered, scrolling resumes normally.

export async function initMadToSolutionTransition(): Promise<() => void> {
  if (typeof window === "undefined") return () => {};

  // Respect users who prefer reduced motion
  const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (prefersReduced) return () => {};

  try {
    const [{ gsap: gsapCore }, stModule] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]);

    const gsap: any = gsapCore;
    const ScrollTrigger: any = stModule.ScrollTrigger || stModule.default || stModule;
    if (!gsap || !ScrollTrigger) return () => {};

    gsap.registerPlugin(ScrollTrigger);

    // Guard for required elements
    const mad = document.querySelector("#mad-emotions");
    const sol = document.querySelector("#solution");
    if (!mad || !sol) return () => {};

    // Use a GSAP context to enable safe cleanup
    const ctx = gsap.context(() => {
      // Timeline that pins MadEmotions when its bottom reaches the bottom of the viewport
      // and controls the entire sequence while scrubbed by scroll.
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: mad,
          start: "bottom bottom",
          end: "+=1400", // Total scroll distance across hold + slide
          scrub: true,
          pin: mad,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // 1) Brief pause/hold while pinned (no visual change)
      tl.to({}, { duration: 0.25 });

      // 2) Prepare Solution as full-viewport overlay, off-screen to the right
      tl.set(sol, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        xPercent: 100,
        y: 0,
        zIndex: 50,
        // Give Solution its own background so it fully covers MadEmotions while overlaying
        // Approximate the app background gradient to keep visual consistency
        background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #111827 100%)",
        willChange: "transform",
      });

      // 3) Slide in to fully cover MadEmotions
      tl.to(sol, { xPercent: 0, duration: 0.65, ease: "power3.out" });

      // 4) Tiny hold fully covered (optional aesthetic beat)
      tl.to({}, { duration: 0.1 });

      // 5) Restore Solution back to normal document flow so scrolling continues naturally
      //    Clear only properties we set so Tailwind classes remain intact
      tl.set(sol, { clearProps: "position,top,left,width,height,transform,zIndex,background,willChange" });
    });

    // Return cleanup to caller
    return () => {
      try {
        ctx.revert?.();
      } catch {
        // ignore
      }
    };
  } catch {
    return () => {};
  }
}


