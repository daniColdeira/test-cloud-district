import React, { useContext } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { store } from '../../store/store.js';
import { refreshToken } from '../../utils/refreshToken';
import cloud from '../../img/cloud-district.jpg'
import { Button, WrapperLogin, LoginTitle, LoginDiv, LoginSocial, LoginName } from './styled';

function Login() { 
    const globalState = useContext(store);
    const onSuccess = (response) => {
        refreshToken(response);
        const { dispatch } = globalState;
        dispatch({ type: 'login', payload: response })
    }

    const onFailure = (response) => {
        console.log('Failure', response);
    }

    const {signIn } = useGoogleLogin({
        clientId:"67870201376-kopnssl2i3uerlv4a15u6k6jv7kh5ob1.apps.googleusercontent.com",
        onSuccess,
        onFailure,
        isSignedIn:true,
    })

    return(
        <WrapperLogin>
           <LoginDiv>
            <img src={cloud} alt="logo" style={{ width: '20vw'}}/>
                <LoginSocial margin={"0 0 0 60px"}>
                    <LoginTitle>Social Login</LoginTitle>
                    <Button onClick={signIn}>
                        <LoginName>Sign in with Google</LoginName>
                    </Button>
                </LoginSocial>
           </LoginDiv> 
        </WrapperLogin>
    );
}
export default Login;

 
