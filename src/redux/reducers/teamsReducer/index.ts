import { Teams, SingleTeam } from "../../../domain/models/Teams";
import { AnyAction } from "redux";
import * as types from "../../actionTypes";

export interface ITeamsInitialState {
  teams: Teams[];
  team: SingleTeam;
  error: boolean;
  loading: boolean;
}

const initialState: ITeamsInitialState = {
  teams: [],
  team: {} as SingleTeam,
  error: false,
  loading: false,
};

const teamsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_TEAMS_REQUEST:
    case types.GET_TEAM_REQUEST:
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
    case types.GET_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        team: action.payload,
      };
    case types.GET_TEAMS_ERROR:
    case types.GET_TEAM_ERROR:
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
