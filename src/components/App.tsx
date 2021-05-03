import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Home from "../pages/Home";
import Header from "../components/Header";
import LeaguePage from "../pages/LeaguePage";
import LeaguesListPage from "../pages/LeaguesListPage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/:country/leagues" render={() => <LeaguesListPage />} />
        <Route path="/league/:id" render={() => <LeaguePage />} />
      </Switch>
    </Provider>
  );
};

export default App;
