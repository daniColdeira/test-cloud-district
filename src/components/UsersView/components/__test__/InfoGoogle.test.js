import React from 'react';
import { render } from '@testing-library/react';
import InfoGoogle from '../InfoGoogle';
import renderer from 'react-test-renderer';
import Context, {AuthContext} from '../../../../AuthContext/AuthContext.js';
import TestRenderer from 'react-test-renderer';
import { Provider } from "react-redux";
import reducers from '../../../../redux/reducers'
import { createStore, applyMiddleware } from "redux";
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from "../../../../store"; //historial de rutas

const store = configureStore()

test("renders correctly", () => {
    const tree = renderer
    .create(
        <Context>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <InfoGoogle />
                </ConnectedRouter>
            </Provider>
            
        </Context>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});



test("render with user", () => {
    let setUserAuth = jest.fn();
    let user = { user: { profileObj:{ name:'Daniel Coldeira', email:'danielcoldeirarm@gmail.com'}}}
    const element = new TestRenderer.create(
        <AuthContext.Provider value={{ user, setUserAuth }}>
            <Provider store={store}>
                <InfoGoogle />
            </Provider>
        </AuthContext.Provider>
    );
    expect(element).toMatchSnapshot();
});