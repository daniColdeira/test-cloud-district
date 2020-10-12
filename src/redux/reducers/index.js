import { combineReducers } from "redux";
import users from "./users";
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  users,
})

const rootReducer = (history) => (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined;
  }
  return createRootReducer(history)(state, action);
};

export default rootReducer