import { combineReducers } from "redux";
import users from "./users";

const appReducer = combineReducers({
  users,
});

const rootReducer = () => (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
