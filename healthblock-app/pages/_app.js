import '@/styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { NextUIProvider } from '@nextui-org/react'

function App({ Component, pageProps }) {
  return( 
  <NextUIProvider>
  <Component {...pageProps} />
  </NextUIProvider>
  )
}

export default App;