import React, { useContext } from 'react';
import { useGoogleLogout } from 'react-google-login';
import { Button } from './styled';
import { AuthContext } from '../../AuthContext/AuthContext.js';

function GoogleLogout(props) {
    const { setUserAuth } = useContext(AuthContext);
    const onLogoutSuccess = (response) => {
        setUserAuth(response, false)
    };

    const onFailure = (response) => {

    };

    const { signOut} = useGoogleLogout({
        clientId:"67870201376-kopnssl2i3uerlv4a15u6k6jv7kh5ob1.apps.googleusercontent.com",
        onLogoutSuccess,
        onFailure,
    })

    return (
        <Button onClick={signOut}>
            <span>LogOut</span>
        </Button>
    );
}
  
export default GoogleLogout;
