import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import { ModalProvider } from '@eisgs/modal';

import App from '@core/components/App';
import ErrorBoundary from '@core/components/ErrorBoundary';
import store from '@core/store';

import GlobalCSS from '@core/styles/styles';
import { isDevelopment } from '@core/utils/env';

// eslint-disable-next-line import/extensions
import '@core/styles/reset.css';


ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <GlobalCSS />
      <StyleSheetManager disableVendorPrefixes={isDevelopment()}>
        <Provider store={store}>
          <BrowserRouter>
            <ModalProvider>
              <App />
            </ModalProvider>
          </BrowserRouter>
        </Provider>
      </StyleSheetManager>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root'),
);
