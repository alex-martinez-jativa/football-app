import { http } from "../../http";
import { League, Leagues, SingleLeague } from "../../../domain/models/League";

const API_URL = "https://www.thesportsdb.com/api/v1/json/1";

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
