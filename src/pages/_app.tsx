import type { AppProps } from 'next/app';
import '@/app/globals.css';
import SmoothScrollProvider from '@/components/scrool-animations/SmoothScrollProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothScrollProvider>
      <Component {...pageProps} />
    </SmoothScrollProvider>
  );
}


