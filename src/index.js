import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import { settingsReducer } from './redux/reducer';

const store = createStore(settingsReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);