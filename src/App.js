import React from 'react';
import Login from './components/GoogleLogin';
import ViewUsers from './components/ViewUsers'; 
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './layout/PrivateRoute'

function App(props) {
  
  return (
    <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/users">
            <ViewUsers />
          </PrivateRoute>
        </Switch> 
    </div>
  );
}


export default App;
