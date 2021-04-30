import { teamsRepository } from "../../../infraestructure/repositories/teams-repository";
import { Teams } from "../../models/Teams";

export const teamsServices = {
  getTeamsByLeagueId: (leaguesId: string): Promise<Teams> => {
    return teamsRepository.getTeamsByLeagueId(leaguesId);
  },
};
