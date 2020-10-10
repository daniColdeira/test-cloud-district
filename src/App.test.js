import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import AuthContext from './AuthContext/AuthContext.js';
import { Router } from "react-router-dom"; //enrutamiento
import historyRouting from "./history"; //historial de rutas

test("renders correctly", () => {
    const tree = renderer
    .create(
        <AuthContext>
            <Router history={historyRouting}>
                <App />
            </Router>
        </AuthContext>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

