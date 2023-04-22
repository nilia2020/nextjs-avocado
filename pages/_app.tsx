import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'
import CartProvider from '@store/Cart'

export function reportWebVitals(metric: any) {
  console.log(metric)
}

export default function MyApp({ Component, pageProps }: AppProps) {
  //Providers - Context/Providers, theme, data
  //Layout
  //props adicionales
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
