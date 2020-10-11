import React from 'react';
import { render } from '@testing-library/react';
import InfoGoogle from '../InfoGoogle';
import renderer from 'react-test-renderer';
import Provider, {AuthContext} from '../../../../AuthContext/AuthContext.js';
import TestRenderer from 'react-test-renderer';
import { Router } from "react-router-dom"; //enrutamiento
import historyRouting from "../../../../history"; //historial de rutas

test("renders correctly", () => {
    const tree = renderer
    .create(
        <Provider>
            <Router history={historyRouting}>
                <InfoGoogle />
            </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});



test("render with user", () => {
    let setUserAuth = jest.fn();
    let user = { user: { profileObj:{ name:'Daniel Coldeira', email:'danielcoldeirarm@gmail.com'}}}
    const element = new TestRenderer.create(
        <AuthContext.Provider value={{ user, setUserAuth }}>
            <InfoGoogle />
        </AuthContext.Provider>
    );
    expect(element).toMatchSnapshot();
});