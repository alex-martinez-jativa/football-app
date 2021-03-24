import * as React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import LeagueItem from "../LeagueItem";
import { League } from "../../domain/models/League";
import Title from "../Title";
import { useSelector } from "react-redux";
import { IInitialState } from "../../redux/reducers/leaguesReducer";

const useStyles = makeStyles((theme: Theme) => ({
  cardsGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

const LeaguesList: React.FC = () => {
  const classes = useStyles();
  const { leagues }: any = useSelector<IInitialState | any>(
    (state: IInitialState) => state.leagues
  );

  return (
    <>
      {leagues && leagues.length > 0 && <Title title="Selecciona una liga" />}
      <Grid item xs={12} className={classes.cardsGrid}>
        {leagues &&
          leagues.length > 0 &&
          leagues.map((l: League) => {
            return (
              <LeagueItem
                key={l.idLeague}
                text={l.strLeague}
                logo={l.strLogo}
              />
            );
          })}
      </Grid>
    </>
  );
};

export default LeaguesList;
