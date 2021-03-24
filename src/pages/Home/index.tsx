import * as React from "react";
import Header from "../../components/Header";
import CountryList from "../../components/CountryList";
import LeaguesList from "../../components/LeaguesList";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <CountryList />
      <LeaguesList />
    </>
  );
};

export default Home;
