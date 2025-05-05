import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './Provider';
import { container } from './container';
import 'reflect-metadata';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider container={container}>
      <App />
    </Provider>
  </React.StrictMode>
); 