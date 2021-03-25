import { leaguesRepository } from "../../../infraestructure/repositories/leagues-repository";
import { Leagues, SingleLeague } from "../../models/League";

export const leaguesService = {
  getLeaguesByCountry: (country: string): Promise<Leagues> => {
    return leaguesRepository.getLeaguesByCountry(country);
  },
  getLeagueById: (id: string): Promise<SingleLeague> => {
    return leaguesRepository.getLeagueById(id);
  },
};
