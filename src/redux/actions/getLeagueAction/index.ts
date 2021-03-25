import * as types from "../../actionTypes";
import { Dispatch } from "redux";
import { League, SingleLeague } from "../../../domain/models/League";
import { leaguesService } from "../../../domain/services/leagues-services";

const getLeagueRequest = () => {
  return { type: types.GET_LEAGUE_REQUEST };
};

const getLeagueSuccess = (league: League) => {
  return {
    type: types.GET_LEAGUE_SUCCESS,
    payload: league,
  };
};

const getLeaguesError = () => {
  return {
    type: types.GET_LEAGUE_ERROR,
  };
};

const getLeaguesAction = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getLeagueRequest());
      const { leagues }: SingleLeague = await leaguesService.getLeagueById(id);
      dispatch(getLeagueSuccess(leagues[0]));
    } catch (error) {
      dispatch(getLeaguesError());
    }
  };
};

export default getLeaguesAction;
