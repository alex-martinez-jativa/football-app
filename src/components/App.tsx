import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Home from "../pages/Home";
import Header from "../components/Header";
import LeagueCard from "../pages/LeagueCard";
import LeaguesList from "../pages/LeaguesList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/:country/leagues" render={() => <LeaguesList />} />
        <Route path="/league/:id" render={() => <LeagueCard />} />
      </Switch>
    </Provider>
  );
};

export default App;
