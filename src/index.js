import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ThemeProvider } from '@mui/styles';
import App from './App';
import store from './store/store';
import theme from './theme/theme';

ReactDOM.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
  </Provider>,
  document.getElementById('root')
);
