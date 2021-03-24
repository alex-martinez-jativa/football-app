import * as React from "react";
import Header from "../../components/Header";
import CountryList from "../../components/CountryList";
import LeaguesList from "../../components/LeaguesList";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) => ({
  backGrid: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem 0 1rem 0.5rem",
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
  },
  arrow: {
    cursor: "pointer",
  },
}));

const Home: React.FC = () => {
  const [toggleShowSection, setToggleShowSection] = React.useState<string>(
    "countrys"
  );

  const classes = useStyles();

  const handleToggleShowSection = () => {
    if (toggleShowSection === "countrys") {
      setToggleShowSection("leagues");
    }
    if (toggleShowSection === "leagues") {
      setToggleShowSection("countrys");
    }
  };

  const handleGoBack = () => {
    setToggleShowSection("countrys");
  };

  return (
    <>
      <Header />
      {toggleShowSection === "leagues" && (
        <Grid item xs={12} className={classes.backGrid}>
          <ArrowBackIosIcon onClick={handleGoBack} className={classes.arrow} />
          <Typography
            onClick={handleGoBack}
            className={classes.arrow}
            variant="h6"
          >
            Go back
          </Typography>
        </Grid>
      )}
      {toggleShowSection === "countrys" && (
        <CountryList handleToggleShowSection={handleToggleShowSection} />
      )}
      {toggleShowSection === "leagues" && <LeaguesList />}
    </>
  );
};

export default Home;
