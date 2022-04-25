import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Global from './components/styled-components/Global';
import store from './redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styled-components/media'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </ThemeProvider>
);