import { League } from "../../../domain/models/League";
import { AnyAction } from "redux";
import * as types from "../../actionTypes";

export interface IInitialState {
  leagues: League[];
  league: League;
  error: boolean;
  loading: boolean;
}

const initialState: IInitialState = {
  leagues: [],
  league: {} as League,
  error: false,
  loading: false,
};

const leaguesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_LEAGUES_REQUEST:
    case types.GET_LEAGUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_LEAGUES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        leagues: action.payload,
      };
    case types.GET_LEAGUE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        league: action.payload,
      };
    case types.GET_LEAGUES_ERROR:
    case types.GET_LEAGUE_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default leaguesReducer;
