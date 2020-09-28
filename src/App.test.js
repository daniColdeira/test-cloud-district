import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import { StateProvider } from './store/store.js';

test("renders correctly", () => {
    const tree = renderer
    .create(
        <StateProvider>
            <App />
        </StateProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

