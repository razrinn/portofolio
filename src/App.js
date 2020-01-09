import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './containers/landing/LandingPage';
import ComingSoonPage from './containers/comingSoon/ComingSoonPage';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/blog" >
            <ComingSoonPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
