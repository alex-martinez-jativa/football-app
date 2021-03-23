import * as React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Card from "../../components/Card";
import Item from "../../components/Item";
import Title from "../../components/Title";
import jrSoccerImage from "../../images/jr_soccer.svg";
import { League } from "../../domain/models/League";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import getLeaguesAction from "../../redux/actions/getLeaguesAction";
import { IInitialState } from "../../redux/reducers/leaguesReducer";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#dfd3c3",
  },
  image: {
    maxWidth: "100%",
    minHeight: "10rem",
    maxHeight: "10rem",
    padding: "1rem 1rem",
  },
  cardsGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

const countrys = [
  {
    id: 1,
    name: "Spain",
    img:
      "https://www.ertheo.com/blog/wp-content/uploads/2017/10/Spain-national-football-team-shirt.jpg",
  },
  {
    id: 2,
    name: "Argentina",
    img:
      "https://www.audalianexia.com/wp-content/uploads/2019/04/flag-of-argentina-vector-illustration-vector.jpg",
  },
  {
    id: 3,
    name: "England",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrL3cBfiQsqgIPS6n9Wi9f0ZSC9KPxnV5sg&usqp=CAU",
  },
  {
    id: 4,
    name: "Italy",
    img: "https://ak.picdn.net/shutterstock/videos/8962729/thumb/1.jpg",
  },
  {
    id: 5,
    name: "Germany",
    img: "https://wallpapercave.com/wp/wp3109977.jpg",
  },
  {
    id: 6,
    name: "France",
    img:
      "https://whalebets.com/wp-content/uploads/France-National-Football-Team-History-Famous-Teams-Star-Players-and-What-to-Expect.jpg",
  },
];

const CountryPage: React.FC = () => {
  const classes = useStyles();
  const refLeagues = React.useRef<HTMLDivElement | any>(null);

  const dispatch = useDispatch();
  const { leagues, loading }: any = useSelector<IInitialState | any>(
    (state: IInitialState) => state.leagues
  );

  const handleGetLeaguesByCountry = async (country: string) => {
    dispatch(getLeaguesAction(country));
    window.scrollTo({ behavior: "smooth", top: refLeagues.current.offsetTop });
  };

  console.log(loading);

  const Header: React.FC = () => {
    return (
      <Grid item xs={12} className={classes.header}>
        <Grid item xs={8}>
          <img src={jrSoccerImage} alt="player" className={classes.image} />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Las mejores ligas del mundo</Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Header />
      <Title title="Selecciona un país" />
      <Grid item xs={12} className={classes.cardsGrid}>
        {countrys.map((c) => {
          return (
            <Card
              key={c.id}
              name={c.name}
              image={c.img}
              handleGetLeaguesByCountry={handleGetLeaguesByCountry}
            />
          );
        })}
      </Grid>
      <div ref={refLeagues}>
        {leagues.length > 0 && <Title title="Selecciona una liga" />}
        <Grid item xs={12} className={classes.cardsGrid}>
          {leagues.length > 0 &&
            leagues.map((l: League) => {
              return (
                <Item key={l.idLeague} text={l.strLeague} logo={l.strLogo} />
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default CountryPage;
