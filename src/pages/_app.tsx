import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/app/globals.css';
import SmoothScrollProvider from '@/components/scrool-animations/SmoothScrollProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothScrollProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </SmoothScrollProvider>
  );
}


