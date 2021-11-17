import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import Layout from 'components/layouts/main'
import theme from 'lib/theme'
import type { AppProps } from 'next/app'

const MyApp = function ({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
