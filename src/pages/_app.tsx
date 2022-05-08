import * as React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";

import '../../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const theme = {
    colors: {
      primary: '#000'
    }
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
