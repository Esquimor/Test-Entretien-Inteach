import { combineReducers } from "redux";
import users from "./users";
import modules from "./modules";

const reducer = combineReducers({
  users,
  modules
});

export default reducer;
