import { http } from "../../http";
import { Teams } from "../../../domain/models/Teams";
import { API_URL } from "../../../constants";

export const teamsRepository = {
  getTeamsByLeagueId: async (leagueId: string) => {
    const teams = await http.get<Teams>(
      `${API_URL}/lookup_all_teams.php?id=${leagueId}`
    );
    return teams;
  },
};
