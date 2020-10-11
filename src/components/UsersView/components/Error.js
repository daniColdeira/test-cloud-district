import React from 'react';
import { ErrDiv } from '../styled';
import { useSelector } from "react-redux";

function Error(props) {
    const { error } = useSelector(state => ({
        error: state.users.error,
      }));
    
    return (
        <ErrDiv>
            {error}
        </ErrDiv>
    );
}

export default Error;
