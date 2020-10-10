import React, { useEffect } from 'react';
import { Spinner } from '../../GoogleLogin/styled';
import { CenterDiv } from '../styled'
import {connect} from 'react-redux'
import { useDispatch, useSelector } from "react-redux";

const withSpinner = Component => props => {
  /* useEffect(() => {
    fetch(`/logger?location=${ window.location}`);
  }, []); */
  const loaded = useSelector(state => state.users.loaded);
  console.log('Props', loaded);

  if(!loaded){
    return <CenterDiv><Spinner><div></div><div></div></Spinner></CenterDiv>
  }
  return <Component {...props } />;
};

export default withSpinner;
