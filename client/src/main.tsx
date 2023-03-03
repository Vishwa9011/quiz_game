import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import App from './App'
import CProvider from './context/Provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <ChakraProvider>
      <CProvider>
        <App />
      </CProvider>
    </ChakraProvider>
  </>,
)
