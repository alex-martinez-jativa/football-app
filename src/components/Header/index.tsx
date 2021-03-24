import * as React from "react";
import AppBarComponent from "../AppBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    justifyContent: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  title: {
    color: theme.palette.background.default,
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {matches && (
        <Grid item xs={12} className={classes.container}>
          <Typography variant="h6" className={classes.title}>
            The Football App
          </Typography>
        </Grid>
      )}
      <AppBarComponent />
    </>
  );
};

export default Header;
