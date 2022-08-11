import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import { GlobalStyle } from 'govuk-react';
import '../styles/globals.css';
import '../styles/autocomplete.css';
import 'normalize.css';
import SubmitExportProvider from '../lib/SubmitExportContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SubmitExportProvider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </SubmitExportProvider>
  );
}

export default MyApp;
