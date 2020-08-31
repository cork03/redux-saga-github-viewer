import profile from "./Profile";
import issue from "./Issue";
import { combineReducers } from "redux";

const reducer = combineReducers({
  profile,
  issue,
});

export default reducer;
