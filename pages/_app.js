import Head from 'next/head'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin='true' />

        <link rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" />

        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
          media="print" onLoad="this.media='all'" />
          
        <noscript>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" />
        </noscript>
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
