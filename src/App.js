import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LandingPage from './containers/landing/LandingPage';
import ComingSoonPage from './containers/comingSoon/ComingSoonPage';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileComingSoonPage from './containers/comingSoon/MobileComingSoonPage';
import NotFoundPage from './containers/notFound/NotFoundPage';

const App = () => {
  return (
    <>
      <BrowserView>
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/blog" >
              <ComingSoonPage />
            </Route>
            <Route path='/404'>
              <NotFoundPage />
            </Route>
            <Redirect to='/404' />
          </Switch>
        </Router>
      </BrowserView>
      <MobileView>
        <MobileComingSoonPage />
      </MobileView>
    </>
  );
}

export default App;
