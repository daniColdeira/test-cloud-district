import * as types from "../types.js";
import axios from 'axios';

export const getUsers = (page) => {
  return dispatch => {
    dispatch(getUsersRequest(true));
      axios.get("https://reqres.in/api/users?page=" + page + "&per_page=5")
      .then(res => {
        dispatch({
          type: types.GET_USERS_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
          dispatch({
            type: types.GET_USERS_FAILURE,
            payload: err.response
          })
        })
  };
};

export const getUser = (id) => {
  
  return dispatch => {
      dispatch(getUserRequest(true));
      axios.get("https://reqres.in/api/users/" + id)
      .then(res => {
        dispatch({
          type: types.GET_USER_SUCCESS,
          payload: res.data
      });
      })
      .catch(err => {
        dispatch({
          type: types.GET_USER_FAILURE,
          payload: err.response
      });
      });
  };
};


export const updateUser = (newUser) => {
  
  return dispatch => {
      dispatch(setUsersRequest(true));
      axios.patch("https://reqres.in/api/users/"+ newUser.id, newUser)
      .then(response => {
        dispatch(setSuccessUser({ data:response.data, type:'updated'}))
      })
      .catch(err => {
        dispatch(setFailureUser(err.response));
      });
  };
};


export const createUser = (newUser) => {
  
  return dispatch => {
      dispatch(setUsersRequest(true));
      axios.post("https://reqres.in/api/users/", newUser)
      .then(response => {
        dispatch(setSuccessUser({ data:response.data, type:'created'}))
      })
      .catch(err => {
        dispatch(setFailureUser(err.response));
      });
  };
};

export function getUsersRequest(status) {
  return {
      type: types.GET_USERS_REQUEST,
      payload: status
  };
}

export function getUserRequest(status) {
  return {
      type: types.GET_USER_REQUEST,
      payload: status
  };
}

export function setUsersRequest(status) {
  return {
      type: types.SET_USER_REQUEST,
      payload: status
  };
}

export function setSuccessUser(user) {
  return {
      type: types.SET_USER_SUCCESS,
      payload: user
  };
}

export function setFailureUser(err) {
  return {
      type: types.SET_USER_FAILURE,
      payload: err
  };
}
