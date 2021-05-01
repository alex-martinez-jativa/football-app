import { combineReducers } from "redux";
import leaguesReducer from "./leaguesReducer";
import teamsReducer from "./teamsReducer";

export default combineReducers({
  leagues: leaguesReducer,
  teams: teamsReducer,
});
