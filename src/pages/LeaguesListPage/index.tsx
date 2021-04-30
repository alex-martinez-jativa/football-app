import * as React from "react";
import { useHistory, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import LeagueItem from "../../components/LeagueItem";
import { League } from "../../domain/models/League";
import Title from "../../components/Title";
import GoBackComponent from "../../components/GoBackComponent";
import { useSelector } from "react-redux";
import { IInitialState } from "../../redux/reducers/leaguesReducer";
import getLeaguesAction from "../../redux/actions/getLeaguesAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme: Theme) => ({
  cardsGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

type ParamsType = {
  country: string;
};

const LeaguesListPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { country } = useParams<ParamsType>();
  const dispatch = useDispatch();
  const { leagues, error, loading }: any = useSelector<IInitialState | any>(
    (state: IInitialState) => state.leagues
  );

  const handleGoBack = () => {
    history.goBack();
  };

  React.useEffect(() => {
    dispatch(getLeaguesAction(country));
  }, [country, dispatch]);

  return (
    <>
      {/**TODO ERROR HANDLING IN UI */}
      {error && <h1>Error</h1>}
      <GoBackComponent goBack={handleGoBack} />
      {leagues && leagues.length > 0 && <Title title="Select your league" />}
      <Grid item xs={12} className={classes.cardsGrid}>
        {!loading &&
          leagues &&
          leagues.length > 0 &&
          leagues.map((l: League) => {
            return (
              <LeagueItem
                key={l.idLeague}
                text={l.strLeague}
                logo={l.strLogo}
                id={l.idLeague}
              />
            );
          })}
      </Grid>
    </>
  );
};

export default LeaguesListPage;
