import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import { GlobalStyle } from 'govuk-react';
import '../styles/globals.css';
import '../styles/autocomplete.css';
import 'normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
