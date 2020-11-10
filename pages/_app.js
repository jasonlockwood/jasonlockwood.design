import React from 'react'
import '../styles/global.scss'
import { theme } from '../components/theme'
import { ThemeProvider } from 'styled-components'



function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}


export default MyApp
