import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/custom-theme/theme';
import { MainPage } from '@/pages';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  </React.StrictMode>,
)
