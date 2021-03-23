import React from "react";
import CountryPage from "../pages/CountryPage";
import { Provider } from "react-redux";
import store from "../redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CountryPage />;
    </Provider>
  );
};

export default App;
