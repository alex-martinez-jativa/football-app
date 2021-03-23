import { combineReducers } from "redux";
import leaguesReducer from "./leaguesReducer";

export default combineReducers({
  leagues: leaguesReducer,
});
