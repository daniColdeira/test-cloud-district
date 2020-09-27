import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../GoogleLogout';

const globalState={
    state:{
        logged:true
    }
}

it('renders correctly', () => {
  const tree = renderer
    .create(<Link globalState={globalState}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});