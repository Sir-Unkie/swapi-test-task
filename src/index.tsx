import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@core/components/App';
import ErrorBoundary from '@core/components/ErrorBoundary';
import store from '@core/store';
import GlobalCSS from '@core/styles/styles';

// eslint-disable-next-line import/extensions
import '@core/styles/reset.css';

ReactDOM.render(
  <StrictMode>
    <GlobalCSS />
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root'),
);
