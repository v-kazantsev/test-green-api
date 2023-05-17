import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/custom-theme/theme';
import { store, persistor } from '@/store/store';
import { MainPage } from '@/pages';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <MainPage />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
