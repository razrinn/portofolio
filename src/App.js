import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from './containers/landing/LandingPage';
import BlogPage from './containers/blog/BlogPage';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/blog" >
            <BlogPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
