import * as React from "react";
import { useHistory } from "react-router-dom";
import AppBarComponent from "../AppBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
    cursor: "pointer",
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:599px)");

  const history = useHistory();

  const handleGoToHome = () => {
    if (history.location.pathname !== "/") {
      history.push("/");
    }
  };

  return (
    <>
      {matches && (
        <Grid item xs={12} className={classes.container}>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={handleGoToHome}
          >
            The Football App
          </Typography>
        </Grid>
      )}
      <AppBarComponent goToHome={handleGoToHome} />
    </>
  );
};

export default Header;
