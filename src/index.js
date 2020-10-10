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
import StateProvider from './AuthContext/AuthContext.js';
import { Router } from "react-router-dom"; //enrutamiento
import reducers from "./redux/reducers/"; //reducers
import thunk from 'redux-thunk';

function loggerRedux({ getState }) {
  return next => action => {
    // Llama al siguiente método dispatch en la cadena de middlewares
    let returnValue = next(action);
    // Este seguramente sera la acción, excepto
    // que un middleware anterior la haya modificado.
    return returnValue;
  };
}
const middleware = [
  loggerRedux, 
  promiseMiddleware,
  thunk
];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

const app = (
  <StateProvider>
    <Provider store={store}>
      <Router history={historyRouting}>
        <App />
      </Router>
    </Provider>
  </StateProvider>
);
  
  ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
