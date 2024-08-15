import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import QuoteBox from './components/QuoteBox';

ReactDOM.render(
  <Provider store={store}>
    <QuoteBox />
  </Provider>,
  document.getElementById('root')
);
