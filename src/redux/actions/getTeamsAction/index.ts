import * as types from "../../actionTypes";
import { Dispatch } from "redux";
import { Teams, Team } from "../../../domain/models/Teams";
import { teamsServices } from "../../../domain/services/teams-services";

const getTeamsRequest = () => {
  return { type: types.GET_TEAMS_REQUEST };
};

const getTeamsSuccess = (teams: Team[]) => {
  return {
    type: types.GET_TEAMS_SUCCESS,
    payload: teams,
  };
};

const getTeamsError = () => {
  return {
    type: types.GET_TEAMS_ERROR,
  };
};

const getTeamsAction = (leagueId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getTeamsRequest());
      const { teams }: Teams = await teamsServices.getTeamsByLeagueId(leagueId);
      debugger;
      dispatch(getTeamsSuccess(teams));
    } catch (error) {
      dispatch(getTeamsError());
    }
  };
};

export default getTeamsAction;
