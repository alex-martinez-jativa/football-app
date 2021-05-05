import { teamsRepository } from "../../../infraestructure/repositories/teams-repository";
import { Teams, SingleTeam } from "../../models/Teams";

export const teamsServices = {
  getTeamsByLeagueId: (leaguesId: string): Promise<Teams> => {
    return teamsRepository.getTeamsByLeagueId(leaguesId);
  },
  getTeamById: (teamId: string): Promise<SingleTeam> => {
    return teamsRepository.getTeamById(teamId);
  },
};
