import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode >
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
