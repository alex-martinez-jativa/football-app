import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import jrSoccerImage from "../../images/jr_soccer.svg";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.palette.primary.dark,
    height: "6rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  headerImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    minWidth: "7.716rem",
    minHeight: "5rem",
    padding: ".5rem .5rem",
    borderRadius: "2rem",
    backgroundColor: theme.palette.background.default,
    marginLeft: "1.5rem",
  },
  headerTitle: {
    marginLeft: "1rem",
    color: theme.palette.background.default,
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.header}>
      <img src={jrSoccerImage} alt="player" className={classes.headerImage} />
      <Typography variant="h5" className={classes.headerTitle}>
        Las mejores ligas de fútbol del mundo
      </Typography>
    </Grid>
  );
};

export default Header;
