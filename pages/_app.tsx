import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import ThemeProvider from '../components/ThemeSelector/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
