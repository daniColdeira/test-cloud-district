import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../redux/reducers'
import { composeWithDevTools } from "redux-devtools-extension"; //extension de Redux del navegador
import promiseMiddleware from "redux-promise"; //trata las promesas del redux asincronamente
import thunk from 'redux-thunk';

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const middleware = [
        promiseMiddleware,
        thunk
    ];
      
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                ...middleware
            ),
        ),
    )

    return store
}