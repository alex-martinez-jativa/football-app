import * as React from "react";
import CountryList from "../../components/CountryList";
import LeaguesList from "../../components/LeaguesList";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import SingleLeague from "../../components/SingleLeague";

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
    color: "#fafafa",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  const [showCountrysSection, setShowCountrysSection] = React.useState<boolean>(
    true
  );
  const [showLeaguesSection, setShowLeaguesSection] = React.useState<boolean>(
    false
  );

  const handleToggleShowSection = () => {
    if (showCountrysSection) {
      setShowCountrysSection(false);
      setShowLeaguesSection(true);
    }
    if (showLeaguesSection) {
      setShowLeaguesSection(false);
      setShowCountrysSection(true);
    }
  };

  const handleGoBack = () => {
    setShowLeaguesSection(false);
    setShowCountrysSection(true);
  };

  const isLeaguesSection = () => showLeaguesSection && !showCountrysSection;
  const isCountrysSection = () => showCountrysSection && !showLeaguesSection;

  return (
    <>
      {isLeaguesSection() && (
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
      {isCountrysSection() && (
        <CountryList handleToggleShowSection={handleToggleShowSection} />
      )}
      {isLeaguesSection() && <LeaguesList />}
      {<SingleLeague />}
    </>
  );
};

export default Home;
