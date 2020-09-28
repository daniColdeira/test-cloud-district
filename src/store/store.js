import React, {createContext, useReducer} from 'react';

const initialState = { logged: false, user:{}};
const store = createContext(initialState);
const { Provider } = store;


const StateProvider = ( { children } ) => {
  let newState;
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'login':
        newState = { logged: true, user: action.payload}
        return newState;
      case 'logout':
          newState = { logged: false, user: {}}
          return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }