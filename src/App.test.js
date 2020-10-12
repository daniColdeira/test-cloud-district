import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import AuthContext from './AuthContext/AuthContext.js';
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from "./store"; //historial de rutas

const store = configureStore()

test("renders correctly", () => {
    const tree = renderer
    .create(
        <AuthContext>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        </AuthContext>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

