import { leaguesRepository } from "../../../infraestructure/repositories/leagues-repository";

export const leaguesService = {
  getLeaguesByCountry: (country: string): any => {
    return leaguesRepository.getLeaguesByCountry(country);
  },
};
