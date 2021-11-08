import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { storeWrapper } from '../src/store'
import Head from 'next/head'
import { useTitle } from '../src/store/title/hook'

function MyApp({ Component, pageProps }: AppProps) {
  const { title } = useTitle()
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
