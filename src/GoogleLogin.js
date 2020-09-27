import React, { useContext, useEffect, useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { store } from './store.js';
import { refreshToken } from './refreshToken';
import cloud from './cloud-district.jpg'
import { Button, WrapperLogin, LoginTitle, LoginDiv } from './styled';

function Login() { 
    const globalState = useContext(store);
    const onSuccess = (response) => {
        console.log('Login', response);
        // refreshToken(response);
        const { dispatch } = globalState;
        dispatch({ type: 'action description', payload: response })
    }

    const onFailure = (response) => {
        console.log('Failure', response);
    }

    const {signIn, loaded } = useGoogleLogin({
        clientId:"67870201376-kopnssl2i3uerlv4a15u6k6jv7kh5ob1.apps.googleusercontent.com",
        onSuccess,
        onFailure,
        isSignedIn:true,
    })

    return(
        <WrapperLogin>
           <LoginDiv>
            <img src={cloud} alt="logo" />
                <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginLeft:'60px'}}>
                    <LoginTitle>Social Login</LoginTitle>
                    <Button onClick={signIn}>
                        <span>Sign in with Google</span>
                    </Button>
                </div>
           </LoginDiv> 
        </WrapperLogin>
    );
}
export default Login;

 
