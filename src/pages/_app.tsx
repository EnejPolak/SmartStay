import type { AppProps } from 'next/app';
import '@/app/globals.css';
import SmoothScrollProvider from '@/components/scrool-animations/SmoothScrollProvider';
import Analytics from '@/components/Analytics';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothScrollProvider>
      <Analytics />
      <Component {...pageProps} />
    </SmoothScrollProvider>
  );
}


