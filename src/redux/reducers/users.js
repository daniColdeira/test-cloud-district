import { 
  GET_USERS_SUCCESS, 
  GET_USERS_FAILURE, 
  GET_USER_SUCCESS, 
  GET_USER_FAILURE,
  GET_USER_REQUEST,  
  SET_USER_REQUEST, 
  SET_USER_SUCCESS,
  SET_USER_FAILURE
} from "../types.js";

const initialState = {
  users: [],
  user: undefined,
  response: undefined,
  error: undefined,
  loadingUser: false,
  loadingResponse: false,
};

const users = (previousState = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return Object.assign({}, previousState, { users: action.payload });
    case GET_USERS_FAILURE:
      return Object.assign({}, previousState, { error: action.payload });
    case GET_USER_SUCCESS:
      return Object.assign({}, previousState, { user: action.payload }); // Si existe Token, nos envía a la comprobación del <Redirect />
    case GET_USER_FAILURE:
      return Object.assign({}, previousState, { error: action.payload });
    case GET_USER_REQUEST:
      return Object.assign({}, previousState, { loadingUser: action.payload }); // Si existe Token, nos envía a la comprobación del <Redirect />
    case SET_USER_SUCCESS:
      return Object.assign({}, previousState, { response: action.payload });
    case SET_USER_FAILURE:
      return Object.assign({}, previousState, { error: action.payload });
    case SET_USER_REQUEST:
      return Object.assign({}, previousState, { loadingResponse: action.payload });
    default:
      return previousState;
  }
};

export default users;
