import React from 'react';
import { Spinner } from '../../GoogleLogin/styled';
import { CenterDiv } from '../styled'

function LoadingSpinner(props) {
    return (
        <CenterDiv>
            <Spinner>
                <div></div>
                <div></div>
            </Spinner>
        </CenterDiv>
    );
    
}

export default LoadingSpinner;

