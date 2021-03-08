import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './themes/testingtheme';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme ={theme}>
      {/* <DataLayer initialState reducer> */}
        <App />
      {/* </DataLayer> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
