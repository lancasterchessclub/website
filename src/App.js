import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import HeroBar from './HeroBar';
import Home from './Home';
import News from './News';
import ClubOfficers from './ClubOfficers';
import Header from './Header';
import Footer from './Footer';
import History from './History';

export default function Site() {
  return (
    <Router basename='/'>
      <Header />
      <HeroBar />
      <div>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/officers">
            <ClubOfficers />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
