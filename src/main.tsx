import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import { createRoot } from 'react-dom/client';

const element = document.getElementById('root');
createRoot(element!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM;
