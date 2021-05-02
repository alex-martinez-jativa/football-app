import leaguesReducer, {
  IInitialState,
} from "../redux/reducers/leaguesReducer";
import { League } from "../domain/models/League";
import * as types from "../redux/actionTypes";
import { mockLeagues } from "../mocks/mockLeagues";

describe("leaguesReducer", () => {
  let initialState: IInitialState;
  beforeEach(() => {
    initialState = {
      leagues: [],
      league: {} as League,
      error: false,
      loading: false,
    };
  });
  it("should return initial state", () => {
    const action = {};
    const reducer = leaguesReducer(undefined, action as any);
    expect(reducer).toEqual(initialState);
  });
  it("should return initial state and loading to true", () => {
    const action = {
      type: types.GET_LEAGUES_REQUEST,
    };
    const reducer = leaguesReducer(initialState, action);
    expect(reducer).toEqual({
      leagues: [],
      league: {} as League,
      error: false,
      loading: true,
    });
  });
  it("should return initial state with leagues and loading false", () => {
    const action = {
      type: types.GET_LEAGUES_SUCCESS,
      payload: mockLeagues,
    };
    const reducer = leaguesReducer(initialState, action);
    expect(reducer).toEqual({
      leagues: mockLeagues,
      league: {} as League,
      error: false,
      loading: false,
    });
  });
  it("should return error true", () => {
    const action = {
      type: types.GET_LEAGUES_ERROR,
    };
    const reducer = leaguesReducer(initialState, action);
    expect(reducer).toEqual({
      leagues: [],
      league: {} as League,
      error: true,
      loading: false,
    });
  });
});
