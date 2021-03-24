import * as React from "react";
import Title from "../Title";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import CountryCard from "../CountryCard";
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

const CountryList: React.FC = () => {
  const classes = useStyles();

  const [countryState, setCountryState] = React.useState<string>();
  const dispatch = useDispatch();

  const handleGetLeaguesByCountry = (country: string) => {
    if (countryState !== country) {
      setCountryState(country);
      dispatch(getLeaguesAction(country));
    } else {
      return;
    }
  };
  return (
    <>
      <Title title="Selecciona un país" />
      <Grid item xs={12} className={classes.cardsGrid}>
        {countrys.map((c) => {
          return (
            <CountryCard
              key={c.id}
              name={c.name}
              image={c.img}
              handleGetLeaguesByCountry={() =>
                handleGetLeaguesByCountry(c.name)
              }
            />
          );
        })}
      </Grid>
    </>
  );
};

export default CountryList;
