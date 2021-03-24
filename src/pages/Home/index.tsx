import * as React from "react";
import Header from "../../components/Header";
import CountryList from "../../components/CountryList";
import LeaguesList from "../../components/LeaguesList";
import Fade from "@material-ui/core/Fade";

const Home: React.FC = () => {
  const [toggleShowSection, setToggleShowSection] = React.useState<string>(
    "countrys"
  );

  const handleToggleShowSection = () => {
    if (toggleShowSection === "countrys") {
      setToggleShowSection("leagues");
    }
    if (toggleShowSection === "leagues") {
      setToggleShowSection("countrys");
    }
  };

  return (
    <>
      <Header />
      {toggleShowSection === "countrys" && (
        <CountryList handleToggleShowSection={handleToggleShowSection} />
      )}
      {toggleShowSection === "leagues" && <LeaguesList />}
    </>
  );
};

export default Home;
