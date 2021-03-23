import * as React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";

type Props = {
  name: string;
  image: string;
  handleGetLeaguesByCountry: (country: string) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    backgroundColor: theme.palette.primary.light,
    maxWidth: "10rem",
    minWidth: "10rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    borderRadius: "1rem",
    cursor: "pointer",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "3rem",
    },
  },
  title: {
    marginBottom: "1rem",
  },
  image: {
    maxWidth: "100%",
    height: "5.6rem",
    borderRadius: "0 0 1rem 1rem",
  },
}));

const Card: React.FC<Props> = ({ name, image, handleGetLeaguesByCountry }) => {
  const classes = useStyles();
  const handleOnClick = (country: string) => {
    handleGetLeaguesByCountry(country);
  };
  return (
    <Slide in={true} direction="left" timeout={500}>
      <Box className={classes.box} onClick={() => handleOnClick(name)}>
        <Typography variant="h5" className={classes.title}>
          {name}
        </Typography>
        <img src={image} alt="country-team" className={classes.image} />
      </Box>
    </Slide>
  );
};

export default Card;
