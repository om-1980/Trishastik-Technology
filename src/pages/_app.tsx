import type { AppProps } from 'next/app';
import '../styles/globals.css';  // Importing the global CSS file

// The custom App component that wraps all your page components
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
