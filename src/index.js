// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import VideoPageView from "./components/VideoPageView";
import LandingPage from "./components/LandingPage";

export const config = {
  endpoint: `https://lazy-lime-foal-fez.cyclic.app/v1`
};

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/video/:id" component={VideoPageView} />
        </Switch>
      </React.StrictMode>
    </div>
  );
}

export default App;
