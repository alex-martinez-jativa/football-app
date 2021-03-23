import { http } from "../../http";
import { League } from "../../../domain/models/League";

const API_URL = "https://www.thesportsdb.com/api/v1/json/1";

export const leaguesRepository = {
  getLeaguesByCountry: async (country: string) => {
    const leagues = await http.get<League[]>(
      `${API_URL}/search_all_leagues.php?c=${country}&s=Soccer`
    );
    return leagues;
  },
};
