import * as React from "react";
import { useDispatch } from "react-redux";
import getLeaguesAction from "../../redux/actions/getLeaguesAction";
import Header from "../../components/Header";
import CountryList from "../../components/CountryList";
import LeaguesList from "../../components/LeaguesList";

const Home: React.FC = () => {
  const refLeagues = React.useRef<HTMLDivElement | any>(null);
  const [countryState, setCountryState] = React.useState<string>();
  const dispatch = useDispatch();

  const handleGetLeaguesByCountry = (country: string) => {
    if (countryState !== country) {
      setCountryState(country);
      dispatch(getLeaguesAction(country));
      window.scrollTo({
        behavior: "smooth",
        top: refLeagues.current.offsetTop,
      });
    } else {
      return;
    }
  };

  return (
    <>
      <Header />
      <CountryList handleGetLeaguesByCountry={handleGetLeaguesByCountry} />
      <div ref={refLeagues}>
        <LeaguesList />
      </div>
    </>
  );
};

export default Home;
