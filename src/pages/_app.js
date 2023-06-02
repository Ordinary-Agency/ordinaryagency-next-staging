import '../app/components/styles/globals.css'
import Head from "next/head"
export default function MyApp({ Component, pageProps }) { return (
<>
  <Head>
      <title>Ordinary Agency</title>
  </Head>
  <Component {...pageProps} />
</>
) }