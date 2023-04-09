import type { AppProps } from 'next/app'
import Layout from '@components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  //Providers - Context/Providers, theme, data
  //Layout
  //props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
