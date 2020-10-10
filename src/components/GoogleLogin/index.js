import React, { useState, useContext } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshToken } from '../../utils/refreshToken';
import cloud from '../../img/cloud-district.jpg'
import { AuthContext } from '../../AuthContext/AuthContext.js';

import { Redirect } from "react-router-dom";
import { Button, WrapperLogin, LoginTitle, LoginDiv, LoginSocial, LoginName, Spinner, CenterDiv } from './styled';

function Login(props) { 
    const[loginSuccess, setLoginSuccess] = useState(undefined);
    const { user, setUserAuth } = useContext(AuthContext);
    

    const onSuccess = (response) => {
        refreshToken(response);
        setUserAuth(response, true)
    }

    const onFailure = (response) => {
        console.log('Failure', response);
    }

    const onAutoLoadFinished = (response) => {
        setLoginSuccess(true)
        return response;
    }

    const { signIn } = useGoogleLogin({
        clientId:"948322712560-47619obq9qjo58sr4ajnukaaqkcgup36.apps.googleusercontent.com",
        onSuccess,
        onFailure,
        onAutoLoadFinished,
        isSignedIn:true,
    })

    if(!loginSuccess){
        return <CenterDiv><Spinner><div></div><div></div></Spinner></CenterDiv>
    }
    

    return(
        !user.isAuthenticated ?
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
        :
        <Redirect to="/users" />
    );
}
  
export default Login;

 
