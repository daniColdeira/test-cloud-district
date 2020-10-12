import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import historyRouting from "./history"; //historial de rutas
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; //extension de Redux del navegador
import promiseMiddleware from "redux-promise"; //trata las promesas del redux asincronamente
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthContext from './AuthContext/AuthContext.js';// Context
import { Router } from "react-router-dom"; //enrutamiento
import reducers from "./redux/reducers/"; //reducers
import thunk from 'redux-thunk';

const middleware = [
  promiseMiddleware,
  thunk
];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

const app = (
  <AuthContext>
    <Provider store={store}>
      <Router history={historyRouting}>
        <App />
      </Router>
    </Provider>
  </AuthContext>
);
  
  ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
