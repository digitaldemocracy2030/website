'use client'
import {ChakraProvider, createSystem, defaultConfig} from '@chakra-ui/react'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: {value: 'var(--font-mplus1)'},
        body: {value: 'var(--font-mplus1)'},
      },
    },
  },
})

export function Provider({children}: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  )
}
