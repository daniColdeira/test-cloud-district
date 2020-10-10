import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
import { AuthContext } from '../AuthContext/AuthContext.js';
import { Route } from "react-router-dom";

function PrivateRoute(props) {
    // keep in mind path is required as a prop
    const { path, children } = props;

    // using the AuthContext to get the state variable isAuthenticated
    const { user } = useContext(AuthContext);


    return (
        <Route
            exact
            path={path}
            render={({ location }) =>
                user.isAuthenticated ? (
                children
                ) : (
                <Redirect to="/" />
                )
            }
        />
    );
}
export default PrivateRoute;