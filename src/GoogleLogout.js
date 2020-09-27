import React, {useContext} from 'react';
import { useGoogleLogout } from 'react-google-login';
import { store } from './store.js';
import { refreshToken } from './refreshToken';
import { Button } from './styled';

function GoogleLogout() {
    const globalState = useContext(store);
    const onLogoutSuccess = (response) => {
        const { dispatch } = globalState;
        dispatch({ type: 'logout' })
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