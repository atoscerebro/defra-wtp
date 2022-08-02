import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout';
import { GlobalStyle } from 'govuk-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout>
    <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
