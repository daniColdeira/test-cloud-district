import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { store } from './store.js';
import logo from './logo.svg';
import './App.css';
import Login from './GoogleLogin';
import ViewUsers from './ViewUsers'; 
import { Input, Button, Link} from './styled';


function App() {
  const [users, setUsers] = useState([]);
  const[user, setUser] = useState(null);
  const[newUser, setNewUser]  = useState({ name:'', job:''})
  const globalState = useContext(store);

  const ExampleComponent = () => {
    const globalState = useContext(store);
    console.log('Initial State', globalState); // this will return { color: red }
  };

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
