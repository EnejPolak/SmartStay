declare global {
  interface Window {
    fbq: any;
  }
}

type MetaPixelEvent = 'PageView' | 'ViewContent' | 'Lead' | 'DemoScheduled';

interface MetaPixelProps {
  content_name?: string;
  content_category?: string;
  source?: string;
  [key: string]: any;
}

let isInitialized = false;
let pixelId: string | null = null;

export function initMetaPixel(id: string): void {
  if (typeof window === 'undefined' || isInitialized) return;
  
  pixelId = id;
  
  // Load Facebook Pixel script
  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${id}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
  
  // Add noscript fallback
  const noscript = document.createElement('noscript');
  const img = document.createElement('img');
  img.height = 1;
  img.width = 1;
  img.style.display = 'none';
  img.src = `https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`;
  noscript.appendChild(img);
  document.head.appendChild(noscript);
  
  isInitialized = true;
}

export function trackPageView(): void {
  if (typeof window === 'undefined' || !isInitialized || !window.fbq) return;
  
  try {
    window.fbq('track', 'PageView');
  } catch (error) {
    console.warn('Meta Pixel PageView tracking failed:', error);
  }
}

export function trackViewContent(props?: MetaPixelProps): void {
  if (typeof window === 'undefined' || !isInitialized || !window.fbq) return;
  
  try {
    window.fbq('track', 'ViewContent', props);
  } catch (error) {
    console.warn('Meta Pixel ViewContent tracking failed:', error);
  }
}

export function trackLead(props?: MetaPixelProps): void {
  if (typeof window === 'undefined' || !isInitialized || !window.fbq) return;
  
  try {
    window.fbq('track', 'Lead', props);
  } catch (error) {
    console.warn('Meta Pixel Lead tracking failed:', error);
  }
}

export function trackCustom(event: string, props?: MetaPixelProps): void {
  if (typeof window === 'undefined' || !isInitialized || !window.fbq) return;
  
  try {
    window.fbq('trackCustom', event, props);
  } catch (error) {
    console.warn(`Meta Pixel Custom event '${event}' tracking failed:`, error);
  }
}

export function isMetaPixelInitialized(): boolean {
  return isInitialized && typeof window !== 'undefined' && !!window.fbq;
}

export function getPixelId(): string | null {
  return pixelId;
}
