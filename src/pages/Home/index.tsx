import * as React from "react";
import CountryList from "../../components/CountryList";
import LeaguesList from "../../components/LeaguesList";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SingleLeague from "../../components/SingleLeague";
import ContainerBar from "../../components/ContainerBar";

const useStyles = makeStyles(() => ({
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
        <ContainerBar>
          <ArrowBackIosIcon onClick={handleGoBack} className={classes.arrow} />
          <Typography
            onClick={handleGoBack}
            className={classes.arrow}
            variant="h6"
          >
            Go back
          </Typography>
        </ContainerBar>
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
