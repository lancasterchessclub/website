import React from "react";
import {
  BrowserRouter as Router,
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
import Congress from './Congress';
import Congress20221211 from './congress/20221211';
import Congress20230121 from './congress/20230121';

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
          <Route path="/congress/20221211">
            <Congress20221211 />
          </Route>
          <Route path="/congress/20230121">
            <Congress20230121 />
          </Route>
          <Route path="/congress">
            <Congress />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
