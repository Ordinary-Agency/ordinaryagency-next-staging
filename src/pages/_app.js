import '../app/components/styles/globals.css'
import Header from '../app/components/Header'
import Footer from '../app/components/Footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div id="my-root" >
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}
