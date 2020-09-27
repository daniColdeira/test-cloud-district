import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import { StateProvider } from './store.js';

const globalState={
  state:{
      logged:true
  }
}

test("renders correctly", () => {
    const tree = renderer
    .create(
        <StateProvider value={globalState}>
            <App />
        </StateProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

