import React, { useContext } from 'react';
import { store } from './store/store.js';
import Login from './components/GoogleLogin';
import ViewUsers from './components/ViewUsers'; 

function App() {
  const globalState = useContext(store);

  return (
    <div>
      {
        !globalState.state.logged ?
        <Login />
        :
        <ViewUsers />
      }
    </div>
  );
}

export default App;
