import React from 'react';
import Login from './components/GoogleLogin';
import UsersView from './components/UsersView'; 
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './layout/PrivateRoute'

function App(props) {
  
  return (
    <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/users">
            <UsersView />
          </PrivateRoute>
        </Switch> 
    </div>
  );
}


export default App;
