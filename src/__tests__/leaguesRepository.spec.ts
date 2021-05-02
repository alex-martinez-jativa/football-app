import { leaguesRepository } from "../infraestructure/repositories/leagues-repository";
import { mockLeagues } from "../mocks/mockLeagues";

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
});
