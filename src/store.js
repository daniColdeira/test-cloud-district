import React, {createContext, useReducer} from 'react';

const initialState = { color:'blue', logged: false, user:{}};
const store = createContext(initialState);
const { Provider } = store;


const StateProvider = ( { children } ) => {
  let newState;
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'action description':
        console.log('Description')
        newState = { color:'red', logged: true, user: action.payload}
        return newState;
      case 'logout':
          console.log('Logout')
          newState = { color:'red', logged: false, user: {}}
          return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }