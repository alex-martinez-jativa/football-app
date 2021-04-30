import { http } from "../../http";
import { Leagues, SingleLeague } from "../../../domain/models/League";
import { API_URL } from "../../../constants";

export const leaguesRepository = {
  getLeaguesByCountry: async (country: string) => {
    const leagues = await http.get<Leagues>(
      `${API_URL}/search_all_leagues.php?c=${country}&s=Soccer`
    );
    return leagues;
  },
  getLeagueById: async (leagueId: string) => {
    const league = await http.get<SingleLeague>(
      `${API_URL}/lookupleague.php?id=${leagueId}`
    );
    return league;
  },
};
