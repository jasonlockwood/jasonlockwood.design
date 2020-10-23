import App from 'next/app'
import React from 'react'
import '../styles/global.scss'
import '../styles/variables.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


export default MyApp
