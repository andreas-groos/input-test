import '../styles/index.scss'
import NextHead from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NextHead>
        < meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </NextHead>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
