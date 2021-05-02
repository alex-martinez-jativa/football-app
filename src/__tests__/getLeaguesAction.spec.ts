import * as types from "../redux/actionTypes";
import {
  getLeaguesRequest,
  getLeaguesError,
  getLeaguesSuccess,
} from "../redux/actions/getLeaguesAction";
import { mockLeagues } from "../mocks/mockLeagues";

describe("getLeaguesActions", () => {
  it("getLeaguesRequest", () => {
    expect(getLeaguesRequest()).toEqual({ type: types.GET_LEAGUES_REQUEST });
  });
  it("getLeaguesError", () => {
    expect(getLeaguesError()).toEqual({ type: types.GET_LEAGUES_ERROR });
  });
  it("getLeaguesSuccess", () => {
    expect(getLeaguesSuccess(mockLeagues)).toEqual({
      type: types.GET_LEAGUES_SUCCESS,
      payload: mockLeagues,
    });
  });
});
