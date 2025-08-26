import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/users/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Импортируйте BrowserRouter
import './css/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Оберните в BrowserRouter */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

