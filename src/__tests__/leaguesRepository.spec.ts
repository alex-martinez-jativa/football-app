import { leaguesRepository } from "../infraestructure/repositories/leagues-repository";
import { mockLeagues } from "../mocks/mockLeagues";
import { mockSingleLeague } from "../mocks/mockSingleLeague";

describe("leaguesRepository", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));
  beforeEach(() => jest.resetAllMocks());
  it("getLeaguesByCountry", async () => {
    const country = "Spain";

    const fakeFetch = jest.fn();
    window.fetch = fakeFetch.mockResolvedValueOnce({
      status: 200,
      json: async () => ({ mockLeagues }),
    });

    const response = await leaguesRepository.getLeaguesByCountry(country);
    expect(response).not.toBeUndefined();
    expect(response).toEqual({ mockLeagues });
  });
  it("getLeagueById", async () => {
    const leagueID = "4400";

    const fakeFetch = jest.fn();
    window.fetch = fakeFetch.mockResolvedValueOnce({
      status: 200,
      json: async () => ({ mockSingleLeague }),
    });
    const response = await leaguesRepository.getLeagueById(leagueID);
    expect(response).not.toBeUndefined();
    expect(response).toEqual({ mockSingleLeague });
  });
});
