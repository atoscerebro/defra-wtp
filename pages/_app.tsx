import type { AppProps } from 'next/app';
import { GlobalStyle } from 'govuk-react';
import '../styles/globals.css';
import 'normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
