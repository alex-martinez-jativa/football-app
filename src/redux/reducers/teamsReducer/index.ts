import { Team, Teams } from "../../../domain/models/Teams";
import { AnyAction } from "redux";
import * as types from "../../actionTypes";

export interface ITeamsInitialState {
  teams: Teams[];
  team: Team;
  error: boolean;
  loading: boolean;
}

const initialState: ITeamsInitialState = {
  teams: [],
  team: {} as Team,
  error: false,
  loading: false,
};

const teamsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        teams: action.payload,
      };
    case types.GET_TEAMS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default teamsReducer;
