import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { IInitialState } from "../../redux/reducers/leaguesReducer";

const SingleLeague: React.FC = () => {
  const { league }: any = useSelector<IInitialState | any>(
    (state: IInitialState) => state.leagues
  );
  return <Typography variant="h1">{league && league.strLeague}</Typography>;
};

export default SingleLeague;
