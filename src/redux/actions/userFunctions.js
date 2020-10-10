import * as types from "../types.js";
import axios from 'axios';

export const getUsers = (page) => {
  return dispatch => {
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
      dispatch(getUsersRequest(true));
      axios.get("https://reqres.in/api/users/" + id)
      .then(res => {
        dispatch({
          type: types.GET_USER_SUCCESS,
          payload: res.data
      });
        dispatch(getUsersRequest(false));
      })
      .catch(err => {
        dispatch({
          type: types.GET_USER_FAILURE,
          payload: err.response
      });
      dispatch(getUsersRequest(false));
      });
  };
};


export const updateUser = (newUser) => {
  
  return dispatch => {
      dispatch(setUsersRequest(true));
      axios.patch("https://reqres.in/api/users/"+ newUser.id, newUser)
      .then(response => {
        dispatch(setSuccessUser({ data:response.data, type:'updated'}))
        dispatch(setUsersRequest(false));
      })
      .catch(err => {
        dispatch(setFailureUser(err.response));
        dispatch(setUsersRequest(false));
      });
  };
};


export const createUser = (newUser) => {
  
  return dispatch => {
      dispatch(setUsersRequest(true));
      axios.post("https://reqres.in/api/users/", newUser)
      .then(response => {
        dispatch(setSuccessUser({ data:response.data, type:'created'}))
        dispatch(setUsersRequest(false));
      })
      .catch(err => {
        dispatch(setFailureUser(err.response));
        dispatch(setUsersRequest(false));
      });
  };
};


export function getUsersRequest(status) {
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
