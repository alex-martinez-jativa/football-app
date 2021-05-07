import { leaguesService } from "../domain/services/leagues-services";
import { mockLeagues } from "../mocks/mockLeagues";

describe("leaguesServices", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));
  beforeEach(() => jest.resetAllMocks());
  it("getLeaguesByCountry", async () => {
    const country = "Spain";

    const fakeFetch = jest.fn();
    window.fetch = fakeFetch.mockResolvedValueOnce({
      status: 200,
      json: async () => ({ mockLeagues }),
    });

    const response = await leaguesService.getLeaguesByCountry(country);
    expect(response).not.toBeUndefined();
    expect(response).toEqual({ mockLeagues });
  });
});
