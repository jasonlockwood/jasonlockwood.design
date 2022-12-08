import React from 'react'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import "tailwindcss/tailwind.css";
import { Analytics } from '@vercel/analytics/react';

const name = "Jason Lockwood";
export const siteTitle = "Jason Lockwood";

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
      <GlobalStyle />
    </ThemeProvider>
    
  </>
}


export default MyApp
