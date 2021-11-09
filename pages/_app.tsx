import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { storeWrapper } from '../src/store'
import Head from 'next/head'
import { useTitle } from '../src/store/title/hook'
import { useProducts } from '../src/store/products/hook'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const { title } = useTitle()
  const { loadProducts } = useProducts()

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default storeWrapper.withRedux(MyApp)
