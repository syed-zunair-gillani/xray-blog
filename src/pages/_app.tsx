import { Footer, Header } from '@/components/importer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../config/client'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </>
  )
}
