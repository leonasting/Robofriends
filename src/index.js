import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore,applyMiddleware } from 'redux';

import './index.css';

import App from './container/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {searchRobots} from './reducer.js';
import {createLogger} from 'redux-logger';
const logger= createLogger();
const store = createStore(searchRobots,applyMiddleware(logger)) ;


ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
    <App  />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
// Provides store to all the child components
//<App />
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
