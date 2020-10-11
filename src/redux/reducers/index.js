import { combineReducers } from "redux";
import users from "./users";
import { resetStore } from '../../index.js'

const appReducer = combineReducers({
  users,
});

const rootReducer = () => (state, action) => {
  if (action.type === 'LOG_OUT') {
      return appReducer(resetStore(), action);
  }

  return appReducer(state, action);
};

export default rootReducer;
