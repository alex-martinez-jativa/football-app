import * as types from "../../actionTypes";
import { Dispatch } from "redux";
import { Team, SingleTeam } from "../../../domain/models/Teams";
import { teamsServices } from "../../../domain/services/teams-services";

const getTeamRequest = () => {
  return { type: types.GET_TEAM_REQUEST };
};

const getTeamSuccess = (team: Team) => {
  return { type: types.GET_TEAM_SUCCESS, payload: team };
};

const getTeamError = () => {
  return { type: types.GET_TEAM_ERROR };
};

const getLeagueAction = (teamId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getTeamRequest());
      const { teams }: SingleTeam = await teamsServices.getTeamById(teamId);
      dispatch(getTeamSuccess(teams[0]));
    } catch (error) {
      dispatch(getTeamError());
    }
  };
};

export default getLeagueAction;
