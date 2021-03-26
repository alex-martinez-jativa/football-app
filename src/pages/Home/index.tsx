import * as React from "react";
import CountryList from "../../components/CountryList";
import LeaguesList from "../../components/LeaguesList";
import LeagueCard from "../../components/LeagueCard";
import ContainerBar from "../../components/ContainerBar";
import GoBack from "../../components/GoBack";

const Home: React.FC = () => {
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
          <GoBack handleGoBack={handleGoBack} />
        </ContainerBar>
      )}
      {isCountrysSection() && (
        <CountryList handleToggleShowSection={handleToggleShowSection} />
      )}
      {isLeaguesSection() && <LeaguesList />}
      <LeagueCard />
    </>
  );
};

export default Home;
