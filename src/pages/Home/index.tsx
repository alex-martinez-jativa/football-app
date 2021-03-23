import * as React from "react";
import Grid from "@material-ui/core/Grid";
import LeagueItem from "../../components/LeagueItem";
import Title from "../../components/Title";
import { League } from "../../domain/models/League";
import { useDispatch, useSelector } from "react-redux";
import getLeaguesAction from "../../redux/actions/getLeaguesAction";
import { IInitialState } from "../../redux/reducers/leaguesReducer";
import Header from "../../components/Header";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import CountryList from "../../components/CountryList";

const useStyles = makeStyles((theme: Theme) => ({
  cardsGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const refLeagues = React.useRef<HTMLDivElement | any>(null);

  const dispatch = useDispatch();
  const { leagues }: any = useSelector<IInitialState | any>(
    (state: IInitialState) => state.leagues
  );

  const handleGetLeaguesByCountry = async (country: string) => {
    dispatch(getLeaguesAction(country));
    window.scrollTo({
      behavior: "smooth",
      top: refLeagues.current.offsetTop,
    });
  };

  return (
    <>
      <Header />
      <CountryList handleGetLeaguesByCountry={handleGetLeaguesByCountry} />
      <div ref={refLeagues}>
        {leagues.length > 0 && <Title title="Selecciona una liga" />}
        <Grid item xs={12} className={classes.cardsGrid}>
          {leagues.length > 0 &&
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
      </div>
    </>
  );
};

export default Home;
