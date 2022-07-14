import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DndProvider>
  )
}

export default MyApp
