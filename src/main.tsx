import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const element = document.getElementById('root');
createRoot(element!).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// ReactDOM;
