"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Spline from "@splinetool/react-spline";
import { trackViewContent } from "../../lib/marketing/metaPixel";
import { useCountryDetection } from "../hooks/useCountryDetection";

// Disable GSAP snap/auto-advance for Spline sync
const ENABLE_TIMELINE_SNAP = false;

type Feature = { id: string; title: string; desc: string; bullets?: string[] };

// Minimal helper: check reduced motion once on mount
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

// Register GSAP plugins once
let gsapRegistered = false;
function ensureGsapRegistered() {
  if (!gsapRegistered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    gsapRegistered = true;
  }
}

const FEATURES: Feature[] = [
  { id: "welcome", title: "Welcome Message", desc: "A warm, personal greeting upon arrival. The perfect first impression without extra effort.", bullets: ["Personalised hello", "Arrival tips", "Instant comfort"] },
  { id: "checkin", title: "Check-in / Check-out & Wi-Fi", desc: "Clear arrival/departure instructions and Wi-Fi details in one place (including copy button).", bullets: ["One-tap Wi‑Fi copy", "Directions & times", "No confusion"] },
  { id: "rules", title: "House Rules & Instructions", desc: "Simple, practical guidelines for a peaceful stay without misunderstandings.", bullets: ["Quiet hours", "Appliance guides", "No guesswork"] },
  { id: "info", title: "Additional Information", desc: "Breakfast, sauna, parking… little details that make a big difference.", bullets: ["Breakfast times", "Parking & sauna", "Small but vital"] },
  { id: "reservations", title: "Reservations & Extras", desc: "Book a massage, bike rental, restaurant table, or purchase local goods – in one click.", bullets: ["One‑click add‑ons", "Upsell ready", "Instant booking"] },
  { id: "food", title: "Local Cuisine & Bars", desc: "Closest and best places with direct links and directions.", bullets: ["Top picks", "Open hours", "Quick directions"] },
  { id: "activities", title: "Activities & Attractions", desc: "Tours, events, landmarks, and parking – all with navigation.", bullets: ["Tours & tickets", "Parking info", "Maps ready"] },
  { id: "routes", title: "Hiking & Cycling Routes", desc: "Google Maps integration; guests always know where and how to get there.", bullets: ["GPX / Maps", "Clear difficulty", "Offline friendly"] },
  { id: "services", title: "Nearby Services", desc: "Bakeries, shops, pharmacies, taxis, emergency contacts – quickly and safely accessible.", bullets: ["Essentials nearby", "Emergency ready", "Trustworthy"] },
  { id: "contact", title: "Contact", desc: "Host just one click away. Call or message without hassle.", bullets: ["One-tap call", "WhatsApp/SMS", "Always reachable"] },
  { id: "reviews", title: "Reviews", desc: "End-of-stay reminder; get more reviews with less effort.", bullets: ["Smart reminder", "Direct links", "More 5★"] },
];

// Mapping from feature IDs to exact Spline state names
const STATE_NAME_BY_ID: Record<string, string> = {
  welcome: "Base State",
  checkin: "check in",
  rules: "House rules",
  info: "breakfast",
  reservations: "e bikes",
  food: "cusine",
  activities: "tours",
  routes: "cycling",
  services: "shops",
  contact: "contact",
  reviews: "end",
};

// Page shell
function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white">
      <Head>
        <title>Smart Stay – Interactive Demo</title>
        <meta name="description" content="Smart Stay features with smooth, accessible GSAP animations." />
      </Head>
      {children}
    </div>
  );
}

// Sticky Spline container rendered only on desktop
function StickySpline({ onAppReady }: { onAppReady: (app: any) => void }) {
  return (
    <div className="sticky top-0 h-screen w-full">
      <Spline
        scene="https://prod.spline.design/2D8q-Cf9i0LO6Ei2/scene.splinecode"
        onLoad={(app) => {
          // log za potrditev API-ja
          // (v dev konzoli preveri, če obstaja setState in setVariable)
          // @ts-ignore
          console.log('[Spline onLoad] methods:', Object.keys(app || {}));
          try {
            // nekateri builde potrebujejo microtask delay
            setTimeout(() => {
              // poskusi state po imenu
              // @ts-ignore
              if (typeof app.setState === 'function') app.setState('Base State');
              // varnostni fallback (če setState ni na voljo)
              // @ts-ignore
              else if (typeof app.setVariable === 'function') app.setVariable('Progress', 0);
            }, 0);
          } catch {}
          onAppReady(app);
        }}
      />
    </div>
  );
}

// Pinned phone
type PinnedPhoneApi = { setPhoneScreen: (stage: string) => void };
function PinnedPhone({
  screen,
  onReady,
  pinScope,
  reduced,
}: {
  screen: string;
  onReady?: (api: PinnedPhoneApi) => void;
  pinScope: React.RefObject<HTMLElement>;
  reduced: boolean;
}) {
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [internalScreen, setInternalScreen] = useState<string>(screen);

  useEffect(() => setInternalScreen(screen), [screen]);

  useEffect(() => {
    onReady?.({ setPhoneScreen: (stage: string) => setInternalScreen(stage) });
  }, [onReady]);

  useEffect(() => {
    if (reduced) return; // respect reduced motion
    ensureGsapRegistered();
    if (!phoneRef.current || !pinScope.current) return;

    // Pin only on large screens
    const mm = ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        const st = ScrollTrigger.create({
          trigger: pinScope.current!,
          start: "top top+=96",
          end: "bottom bottom-=120",
          pin: phoneRef.current!,
          pinSpacing: false,
          anticipatePin: 1,
        });
        return () => st.kill();
      },
    }) as unknown as { revert?: () => void } | void;
    return () => {
      if (mm && typeof (mm as any).revert === "function") {
        (mm as any).revert();
      }
    };
  }, [pinScope, reduced]);

  // Placeholder phone with 3D mount
  return (
    <div ref={phoneRef} className="lg:sticky lg:top-24">
      <div className="rounded-3xl shadow-xl ring-1 ring-white/10 overflow-hidden aspect-[9/19.5] max-w-[320px] bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center relative">
        {/* TODO: Replace this mount with your 3D phone/canvas. */}
        <div id="phone-3d-mount" ref={mountRef} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/0 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs tracking-wide text-zinc-300">Your 3D phone goes here</span>
        </div>
        {/* Screen overlay based on current step */}
        <div className="absolute inset-0 p-4">
          <div className="h-full w-full rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <span className="text-[11px] font-medium text-zinc-200">Screen: {internalScreen}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ onPrimaryClick, onSecondaryClick, phone }: { onPrimaryClick: () => void; onSecondaryClick: () => void; phone?: React.ReactNode }) {
  return (
    <section aria-labelledby="hero-heading" className="py-32 lg:py-70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Kicker - top left for F-pattern */}
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full bg-violet-600/10 px-4 py-1.5 text-sm font-medium text-violet-400 ring-1 ring-inset ring-violet-600/20">
              Smart Stay Platform
            </span>
          </div>
          
          {/* Main headline - scannable hierarchy */}
          <h1 id="hero-heading" className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Clear guest guides.
            <span className="text-violet-400"> Fewer questions.</span>
            <br />
            <span className="text-zinc-300">Happier stays.</span>
          </h1>
          
          {/* Supporting copy - increased line height for better scanning */}
          <p className="mt-8 text-xl leading-8 text-zinc-300 max-w-2xl mx-auto">
            Share everything guests need to know — from Wi‑Fi to local tips — in a beautiful, mobile‑first guide that reduces support requests and improves guest satisfaction.
          </p>
          
          {/* Action buttons - prominent primary action */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              aria-label="Book a Demo" 
              onClick={onPrimaryClick} 
              className="w-64 sm:w-auto inline-flex items-center justify-center rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 transition-colors"
            >
              Book a Call
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              aria-label="See Features" 
              onClick={onSecondaryClick} 
              className="w-64 sm:w-auto inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-transparent px-8 py-4 text-lg font-medium text-zinc-300 hover:border-zinc-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 transition-colors"
            >
              See Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureRail({ activeIndex, total, ids, filledIds, features, onJump, reduced }: { activeIndex: number; total: number; ids: string[]; filledIds: Set<string>; features: Feature[]; onJump: (index: number) => void; reduced: boolean; }) {
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [displayedIndex, setDisplayedIndex] = useState<number>(activeIndex);

  let highestFilledIndex = -1;
  ids.forEach((id, i) => {
    if (filledIds.has(id)) highestFilledIndex = Math.max(highestFilledIndex, i);
  });
  const progress = total > 1 && highestFilledIndex >= 0 ? highestFilledIndex / (total - 1) : 0;

  const computePanelTop = (): number => {
    const sticky = stickyRef.current;
    const dot = dotRefs.current[activeIndex];
    if (!sticky || !dot) return 0;
    const sRect = sticky.getBoundingClientRect();
    const dRect = dot.getBoundingClientRect();
    return dRect.top - sRect.top + dRect.height / 2; // center align
  };

  useEffect(() => {
    // Initialize position and content
    if (!panelRef.current) return;
    const top = computePanelTop();
    panelRef.current.style.top = `${top}px`;
    setDisplayedIndex(activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!panelRef.current) return;
    const newTop = computePanelTop();
    if (reduced) {
      panelRef.current.style.top = `${newTop}px`;
      setDisplayedIndex(activeIndex);
      return;
    }
    ensureGsapRegistered();
    const tl = gsap.timeline();
    tl.to(panelRef.current, { top: newTop, duration: 0.35, ease: "power2.out" }, 0)
      .to(contentRef.current, { opacity: 0, y: 8, duration: 0.2, ease: "power2.out" }, 0)
      .add(() => setDisplayedIndex(activeIndex))
      .fromTo(contentRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "+=0.01");
    return () => {
      tl.kill();
    };
  }, [activeIndex, reduced]);

  return (
    <nav aria-label="Feature progress" className="hidden lg:block lg:col-span-1" aria-orientation="vertical">
      <div ref={stickyRef} className="sticky top-28 h-[calc(100vh-7rem)] relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-white/10 rounded" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-violet-500 rounded" style={{ height: `${progress * 100}%` }} />
        <ul className="absolute inset-0 flex flex-col justify-between py-1">
          {ids.map((id, i) => (
            <li key={id} className="flex items-center justify-center">
              <button
                ref={(el) => { dotRefs.current[i] = el; }}
                aria-label={`Go to ${features[i]?.title || `step ${i + 1}`}`}
                aria-current={activeIndex === i ? "step" : undefined}
                onClick={() => onJump(i)}
                className={`h-3 w-3 rounded-full ring-2 transition-all duration-300 cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-transparent ${filledIds.has(id) ? "bg-violet-500 ring-violet-300/40 hover:bg-violet-400" : "bg-transparent ring-white/25 hover:bg-white/10 hover:ring-white/40"}`}
              />
            </li>
          ))}
        </ul>

        {/* Text panel aligned to active dot */}
        <div ref={panelRef} className="absolute left-12 -translate-y-1/2 pr-8" style={{ width: "36rem" }}>
          <div ref={contentRef} className="relative">
            <div className="p-4">
              {/* Feature number for scanning */}
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-violet-600/20 px-3 py-1 text-sm font-medium text-violet-300">
                  {String(displayedIndex + 1).padStart(2, '0')}
                </span>
              </div>
              
              {/* Main title - optimized for F-pattern scanning */}
              <h3 className="text-2xl font-bold text-white leading-tight mb-4">
                {features[displayedIndex]?.title}
              </h3>
              
              {/* Description with better line height */}
              <p className="text-lg text-zinc-200 leading-7 mb-6 max-w-lg">
                {features[displayedIndex]?.desc}
              </p>
              
              {/* Key points with improved visual hierarchy */}
              {features[displayedIndex]?.bullets && features[displayedIndex]?.bullets!.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide">Key Benefits</h4>
                  <ul className="space-y-3">
                    {features[displayedIndex]!.bullets!.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></div>
                        <span className="text-base text-zinc-300 leading-6">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function FeatureStep({ id, title, kicker, bullets, desc, onEnter, onFill, onUnfill, reduced, visuallyHidden }: { id: string; title: string; kicker?: string; bullets?: string[]; desc: string; onEnter?: (id: string) => void; onFill?: (id: string) => void; onUnfill?: (id: string) => void; reduced: boolean; visuallyHidden?: boolean; }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureGsapRegistered();
    if (!ref.current) return;
    const tl = reduced ? null : gsap.timeline({ paused: true });
    if (tl) {
      tl.fromTo(ref.current.querySelectorAll("[data-anim]") as NodeListOf<HTMLElement>, { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power2.out" });
    }

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 70%",
      onEnter: () => {
        tl?.play();
        onEnter?.(id);
        onFill?.(id);
      },
      onEnterBack: () => {
        tl?.play(0);
        onEnter?.(id);
      },
      onLeaveBack: () => {
        onUnfill?.(id);
      },
    });
    return () => {
      tl?.kill();
      st.kill();
    };
  }, [id, onEnter, onFill, onUnfill, reduced]);

  return (
    <section ref={ref} aria-labelledby={`${id}-title`} className="py-10">
      <div className={`space-y-3 ${visuallyHidden ? "invisible" : ""}`} aria-hidden={visuallyHidden ? true : undefined}>
        {kicker && (
          <p data-anim className="text-sm font-semibold text-violet-300">{kicker}</p>
        )}
        <h3 id={`${id}-title`} data-anim className="text-2xl font-bold text-white">{title}</h3>
        <p data-anim className="text-zinc-300 max-w-prose">{desc}</p>
        {bullets && bullets.length > 0 && (
          <ul className="list-disc pl-5 space-y-1 text-zinc-200">
            {bullets.map((b, i) => (
              <li data-anim key={i} className="">{b}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function FeatureTextSwitcher({ features, activeIndex, reduced }: { features: Feature[]; activeIndex: number; reduced: boolean; }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastIndexRef = useRef<number>(-1);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      const heights = panelRefs.current.map((el) => (el ? el.scrollHeight : 0));
      const max = Math.max(0, ...heights);
      setContainerHeight(max);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [features.length]);

  useEffect(() => {
    const current = panelRefs.current[activeIndex];
    const prev = lastIndexRef.current >= 0 ? panelRefs.current[lastIndexRef.current] : null;
    if (!current || current === prev) {
      lastIndexRef.current = activeIndex;
      return;
    }
    if (reduced) {
      if (prev) {
        prev.style.opacity = "0";
        prev.style.transform = "translateY(24px)";
        prev.style.pointerEvents = "none";
      }
      current.style.opacity = "1";
      current.style.transform = "translateY(0px)";
      current.style.pointerEvents = "auto";
      lastIndexRef.current = activeIndex;
      return;
    }
    ensureGsapRegistered();
    if (prev) {
      gsap.to(prev, { opacity: 0, y: 24, duration: 0.35, ease: "power2.out", onComplete: () => { if (prev) prev.style.pointerEvents = "none"; } });
    }
    gsap.fromTo(current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out", onStart: () => { current.style.pointerEvents = "auto"; } });
    lastIndexRef.current = activeIndex;
  }, [activeIndex, reduced]);

  return (
    <div ref={containerRef} className="relative" style={{ height: containerHeight ? `${containerHeight}px` : undefined }}>
      {features.map((f, i) => (
        <div
          key={f.id}
          ref={(el) => { panelRefs.current[i] = el; }}
          className="absolute inset-0"
          style={{ opacity: i === activeIndex ? 1 : 0, transform: i === activeIndex ? "translateY(0px)" : "translateY(24px)", pointerEvents: i === activeIndex ? "auto" : "none" }}
          aria-hidden={i === activeIndex ? undefined : true}
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">{f.title}</h3>
            <p className="text-zinc-300 max-w-prose">{f.desc}</p>
            {f.bullets && f.bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-1 text-zinc-200">
                {f.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileActiveText({ feature, reduced }: { feature: Feature; reduced: boolean; }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const featureIndex = FEATURES.findIndex(f => f.id === feature.id);
  
  useEffect(() => {
    if (reduced || !ref.current) return;
    ensureGsapRegistered();
    gsap.fromTo(ref.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
  }, [feature.id, reduced]);
  
  return (
    <div ref={ref} className="relative">
      <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50 p-6">
        {/* Feature number badge */}
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-violet-600/20 px-3 py-1.5 text-sm font-medium text-violet-300">
            {String(featureIndex + 1).padStart(2, '0')}
          </span>
        </div>
        
        {/* Title with better hierarchy */}
        <h3 className="text-xl font-bold text-white leading-tight mb-3">
          {feature.title}
        </h3>
        
        {/* Description with optimal line height */}
        <p className="text-base text-zinc-200 leading-7 mb-5">
          {feature.desc}
        </p>
        
        {/* Benefits with improved scanning */}
        {feature.bullets && feature.bullets.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Key Benefits</h4>
            <ul className="space-y-2.5">
              {feature.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></div>
                  <span className="text-sm text-zinc-300 leading-6">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function MobileProgressBar({ progress, features, onStepClick, reduced }: { progress: number; features: Feature[]; onStepClick: (index: number) => void; reduced: boolean; }) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const stepIndex = Math.round(percentage * (features.length - 1));
    const clampedIndex = Math.max(0, Math.min(features.length - 1, stepIndex));
    onStepClick(clampedIndex);
  };

  return (
    <div className="lg:hidden w-full py-2">
      <div 
        className="h-1.5 w-full bg-white/10 rounded cursor-pointer relative"
        onClick={handleClick}
        role="progressbar"
        aria-label="Feature progress - click to navigate"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full bg-violet-500 rounded transition-[width] duration-300" style={{ width: `${Math.max(0, Math.min(100, progress * 100))}%` }} />
        
        {/* Invisible click targets for each step */}
        <div className="absolute inset-0 flex">
          {features.map((_, i) => (
            <div
              key={i}
              className="flex-1 h-full"
              onClick={(e) => {
                e.stopPropagation();
                onStepClick(i);
              }}
              aria-label={`Go to ${features[i]?.title || `step ${i + 1}`}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileZigZagBlocks({ reduced }: { reduced: boolean }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    ensureGsapRegistered();

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(max-width: 767px)", () => {
        const elements = gsap.utils.toArray<HTMLElement>("[data-zigzag]");
        elements.forEach((el, i) => {
          // Prvi blok (i=0) iz leve, drugi (i=1) iz desne, tretji (i=2) iz leve...
          const dir = i % 2 === 0 ? -1 : 1; // -1 = leva, 1 = desna
          
          // Postavimo starting position izven ekrana
          const startPosition = dir * (window.innerWidth + 100);
          
          // Končna pozicija za zig-zag efekt - ne v sredino
          const finalPosition = dir * 30; // levi bloki ostanejo levo (-30px), desni desno (+30px)
          
          gsap.set(el, { 
            x: startPosition, 
            opacity: 0,
            scale: 0.9
          });
          
          // Animacija se sproži šele ko scrollamo do elementa
          gsap.to(el, {
            x: finalPosition,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          });
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      mm.kill();
    };
  }, [reduced]);

  const blocks = useMemo(() => Array.from({ length: 11 }, (_, i) => i + 1), []);

  return (
    <section aria-label="Mobile ZigZag" className="md:hidden py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center px-4">
          <h2 className="text-2xl font-bold tracking-tight text-white leading-tight">Complete Guest Experience</h2>
          <p className="mt-3 text-base leading-7 text-zinc-300 max-w-md mx-auto">Everything your guests need, organized and accessible in one beautiful interface</p>
        </div>
        <div ref={containerRef} className="space-y-5">
          {blocks.map((num) => {
            const label = String(num).padStart(2, "0");
            const feature = FEATURES[num - 1];
            return (
              <div
                key={label}
                data-zigzag
                className="w-full rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-lg flex transform-gpu will-change-transform"
              >
                <div className="w-full p-5">
                  {feature ? (
                    <div className="space-y-4">
                      {/* Number and title in one line */}
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-mono font-bold text-violet-300">{label}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                          {feature.title}
                        </h3>
                      </div>
                      
                      {/* Minimal description */}
                      <p className="text-sm text-zinc-200 leading-relaxed pl-10">
                        {feature.desc}
                      </p>
                      
                      {/* Clean benefits list */}
                      {feature.bullets && feature.bullets.length > 0 && (
                        <div className="space-y-2 pl-10">
                          {feature.bullets.map((b, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0"></div>
                              <span className="text-xs text-zinc-300 leading-relaxed">{b}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-mono font-semibold text-violet-300">{label}</span>
                      </div>
                      <div className="text-sm text-zinc-300">Block {label} content</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { getBookingLink } = useCountryDetection();
  
  return (
    <section aria-labelledby="cta-title" className="py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-zinc-900/60 shadow-sm ring-1 ring-white/10 p-10 md:p-14 text-center">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white">Book a Free Call</h2>
          <p className="mt-3 text-zinc-300 max-w-2xl mx-auto">See how Smart Stay reduces questions and elevates guest experience in minutes.</p>
          <div className="mt-6">
            <a 
              href={getBookingLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Book a Free Demo" 
              className="inline-flex items-center rounded-lg bg-violet-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Demo() {
  const reduced = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [screen, setScreen] = useState<string>(FEATURES[0].id);
  const featuresRef = useRef<HTMLElement | null>(null);
  const [filled, setFilled] = useState<Set<string>>(new Set());
  const currentIndexRef = useRef<number>(0);
  const cooldownRef = useRef<boolean>(false);
  const tickCountRef = useRef<number>(0);
  const lastDirectionRef = useRef<1 | -1 | 0>(0);
  const touchStartYRef = useRef<number | null>(null);
  // Desktop Spline sync state
  const appRef = useRef<any>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { getBookingLink } = useCountryDetection();

  const ids = useMemo(() => FEATURES.map((f) => f.id), []);

  const handleEnter = (id: string) => {
    // Always update the UI screen label
    setScreen(id);

    // Switch Spline state directly on desktop
    const stateName = STATE_NAME_BY_ID[id];
    if (isDesktop && appRef.current && stateName) {
      try {
        appRef.current.setState(stateName);
      } catch {}
    }
  };

  const handleFill = (id: string) => {
    setFilled((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const handleUnfill = (id: string) => {
    setFilled((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const highestFilledIndex = useMemo(() => {
    let max = -1;
    FEATURES.forEach((f, i) => {
      if (filled.has(f.id)) max = Math.max(max, i);
    });
    return max;
  }, [filled]);

  const mobileProgress = useMemo(() => {
    return FEATURES.length > 1 && highestFilledIndex >= 0 ? highestFilledIndex / (FEATURES.length - 1) : 0;
  }, [highestFilledIndex]);

  useEffect(() => {
    if (highestFilledIndex >= 0) {
      setActiveIndex(highestFilledIndex);
    }
  }, [highestFilledIndex]);

  // Keep a ref of the current active index for non-react listeners
  useEffect(() => {
    currentIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Desktop-only switch with resize listener
  useEffect(() => {
    const evaluate = () => setIsDesktop(window.innerWidth >= 1024);
    evaluate();
    window.addEventListener("resize", evaluate);
    return () => window.removeEventListener("resize", evaluate);
  }, []);

  // Annotate sections and wire observers/clicks
  useEffect(() => {
    if (!featuresRef.current) return;
    const container = featuresRef.current;
    const sectionNodes = Array.from(container.querySelectorAll<HTMLElement>("[id$='-section']"));
    sectionNodes.forEach((el, idx) => {
      el.setAttribute("data-section", "");
    });
    sectionsRef.current = sectionNodes;

    // Click-to-jump on bullets/cards (FeatureRail buttons)
    const dotButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("nav[aria-label='Feature progress'] button"));
    dotButtons.forEach((btn, idx) => {
      const handler = () => {
        const section = sectionsRef.current[idx];
        if (!section) return;
        section.scrollIntoView({ behavior: "smooth", block: "center" });
        updateActiveDot(idx);
      };
      btn.addEventListener("click", handler);
      (btn as any).__demoHandler = handler;
    });

    const io = new IntersectionObserver(() => {
      const viewportCenter = window.innerHeight / 2;
      let bestIdx = -1;
      let bestDist = Infinity;
      sectionsRef.current.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });
      if (bestIdx >= 0) {
        updateActiveDot(bestIdx);
      }
    }, { threshold: [0.6], rootMargin: "-35% 0px -35% 0px" });

    sectionsRef.current.forEach((el) => io.observe(el));
    observerRef.current = io;

    return () => {
      io.disconnect();
      dotButtons.forEach((btn) => {
        const h = (btn as any).__demoHandler;
        if (h) btn.removeEventListener("click", h);
      });
    };
  }, []);

  // Removed rAF lerp and mutation observer: direct Spline state switching is used

  function updateActiveDot(activeIdx: number) {
    const dotButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("nav[aria-label='Feature progress'] button"));
    dotButtons.forEach((btn, idx) => {
      if (idx === activeIdx) btn.classList.add("is-active");
      else btn.classList.remove("is-active");
    });
  }

  // Helper to scroll to a specific section aligned with the trigger position
  const scrollToSection = (index: number) => {
    const clamped = Math.max(0, Math.min(FEATURES.length - 1, index));
    const el = document.getElementById(`${FEATURES[clamped].id}-section`);
    if (!el) return;
    const stickyHeader = 0; // adjust if needed
    const offsetY = window.innerHeight * 0.7 - stickyHeader; // align element top to 70% viewport line
    gsap.to(window, {
      duration: reduced ? 0 : 0.45,
      ease: "power1.out",
      scrollTo: { y: el, offsetY },
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
  };

  // Gesture gate (disabled when ENABLE_TIMELINE_SNAP=false)
  useEffect(() => {
    if (!ENABLE_TIMELINE_SNAP) return;
    ensureGsapRegistered();
    ScrollTrigger.normalizeScroll(true);

    // Snap to nearest section to avoid half states
    let snapTrigger: ScrollTrigger | null = null;
    if (featuresRef.current) {
      snapTrigger = ScrollTrigger.create({
        trigger: featuresRef.current,
        start: "top top",
        end: "bottom bottom",
        anticipatePin: 1,
        snap: {
          snapTo: (value: number) => {
            const idx = Math.round(value * (FEATURES.length - 1));
            return idx / (FEATURES.length - 1);
          },
          duration: { min: 0.2, max: 0.5 },
          delay: 0.05,
          ease: "power1.out",
          inertia: false,
        },
      });
    }

    const TICKS_TO_ADVANCE = 2;
    const COOLDOWN_MS = 380;

    const resetGate = () => {
      tickCountRef.current = 0;
      lastDirectionRef.current = 0;
    };

    const triggerAdvance = (direction: 1 | -1) => {
      if (cooldownRef.current) return;
      const nextIndex = currentIndexRef.current + direction;
      if (nextIndex < 0 || nextIndex > FEATURES.length - 1) {
        resetGate();
        return;
      }
      scrollToSection(nextIndex);
      cooldownRef.current = true;
      setTimeout(() => {
        cooldownRef.current = false;
        resetGate();
      }, COOLDOWN_MS);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const dir: 1 | -1 = e.deltaY > 0 ? 1 : -1;
      if (lastDirectionRef.current !== dir) {
        lastDirectionRef.current = dir;
        tickCountRef.current = 1;
        return;
      }
      tickCountRef.current += 1;
      if (tickCountRef.current >= TICKS_TO_ADVANCE) {
        triggerAdvance(dir);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      const downKeys = ["ArrowDown", "PageDown", " ", "Spacebar"]; // spacebar legacy
      const upKeys = ["ArrowUp", "PageUp"];
      let dir: 1 | -1 | 0 = 0;
      if (downKeys.includes(e.key)) dir = 1;
      else if (upKeys.includes(e.key)) dir = -1;
      if (dir === 0) return;
      e.preventDefault();
      if (lastDirectionRef.current !== dir) {
        lastDirectionRef.current = dir;
        tickCountRef.current = 1;
        return;
      }
      tickCountRef.current += 1;
      if (tickCountRef.current >= TICKS_TO_ADVANCE) {
        triggerAdvance(dir as 1 | -1);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartYRef.current == null) return;
      const endY = e.changedTouches[0]?.clientY ?? touchStartYRef.current;
      const delta = touchStartYRef.current - endY;
      const dir: 1 | -1 = delta > 0 ? 1 : -1;
      if (lastDirectionRef.current !== dir) {
        lastDirectionRef.current = dir;
        tickCountRef.current = 1;
      } else {
        tickCountRef.current += 1;
      }
      if (tickCountRef.current >= TICKS_TO_ADVANCE) {
        triggerAdvance(dir);
      }
      touchStartYRef.current = null;
    };

    // Passive false so we can preventDefault and fully control the scroll
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey, { passive: false } as AddEventListenerOptions);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel as EventListener);
      window.removeEventListener("keydown", onKey as EventListener);
      window.removeEventListener("touchstart", onTouchStart as EventListener);
      window.removeEventListener("touchend", onTouchEnd as EventListener);
      if (snapTrigger) snapTrigger.kill();
    };
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    ensureGsapRegistered();
    // Subtle fade-up on hero content
    const hero = document.getElementById("hero-root");
    if (hero) {
      gsap.fromTo(hero.querySelectorAll("[data-hero]") as NodeListOf<HTMLElement>, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" });
    }
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [reduced]);

  return (
    <PageShell>
      <Navbar />
      <main>
        <div id="hero-root">
          <Hero
            onPrimaryClick={() => { 
              trackViewContent({ content_name: 'Request Demo' });
              window.open(getBookingLink(), '_blank');
            }}
            onSecondaryClick={() => featuresRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" })}
          />
        </div>

        {/* Mobile-only zig-zag animated blocks */}
        <MobileZigZagBlocks reduced={reduced} />

        <section ref={featuresRef} aria-label="Features" className="hidden lg:block lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section header for F-pattern - positioned lower */}
            <div className="pt-48 pb-50">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Complete Guest Experience
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-300">
                  Everything your guests need, organized and accessible in one beautiful interface
                </p>
              </div>
            </div>
            {/* Mobile progress bar removed as requested */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-8">
              <FeatureRail activeIndex={activeIndex} total={FEATURES.length} ids={ids} filledIds={filled} features={FEATURES} reduced={reduced} onJump={(i) => {
                const el = document.getElementById(`${FEATURES[i].id}-section`);
                if (el) {
                  // Calculate precise offset to match ScrollTrigger "start: top 70%" exactly
                  const rect = el.getBoundingClientRect();
                  const absoluteTop = rect.top + window.pageYOffset;
                  const targetScroll = absoluteTop - (window.innerHeight * 0.3); // 70% from top = 30% from top
                  
                  window.scrollTo({
                    top: Math.max(0, targetScroll),
                    behavior: reduced ? "auto" : "smooth"
                  });
                }
              }} />

              {/* Invisible scroll triggers */}
              <div className="lg:col-span-4">
                {FEATURES.map((f) => (
                  <div id={`${f.id}-section`} key={f.id}>
                    <FeatureStep id={f.id} title={f.title} desc={f.desc} bullets={f.bullets} onEnter={handleEnter} onFill={handleFill} onUnfill={handleUnfill} reduced={reduced} visuallyHidden />
                  </div>
                ))}
              </div>

              {/* Desktop-only: sticky Spline on the right; mobile fallback */}
              <div className="lg:col-span-7 hidden lg:block">
                {isDesktop ? (
                  <StickySpline onAppReady={(app) => { appRef.current = app; try { app.setState("Base State"); } catch {} }} />
                ) : (
                  <div className="sticky top-0 h-screen w-full flex items-center justify-center text-zinc-300">
                    Demo is available on desktop 💻
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="py-8 lg:py-0" />
        <FinalCTA />
      </main>
      <Footer />
    </PageShell>
  );
}