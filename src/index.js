import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './themes/testingtheme';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';
import { responsiveFontSizes } from '@material-ui/core/styles';


ReactDOM.render(

  <React.StrictMode>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
      {/* <DataLayer initialState reducer> */}
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
