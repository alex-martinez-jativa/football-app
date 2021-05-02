import * as types from "../../actionTypes";
import { Dispatch } from "redux";
import { League, Leagues } from "../../../domain/models/League";
import { leaguesService } from "../../../domain/services/leagues-services";

export const getLeaguesRequest = () => {
  return { type: types.GET_LEAGUES_REQUEST };
};

export const getLeaguesSuccess = (leagues: League[]) => {
  return {
    type: types.GET_LEAGUES_SUCCESS,
    payload: leagues,
  };
};

export const getLeaguesError = () => {
  return {
    type: types.GET_LEAGUES_ERROR,
  };
};

const getLeaguesAction = (country: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getLeaguesRequest());
      const { countrys }: Leagues = await leaguesService.getLeaguesByCountry(
        country
      );
      dispatch(getLeaguesSuccess(countrys));
    } catch (error) {
      dispatch(getLeaguesError());
    }
  };
};

export default getLeaguesAction;
