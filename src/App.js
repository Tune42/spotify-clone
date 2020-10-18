/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from './components/landing/landing/landing';
import Player from './containers/player';
import authLink from './private';
import Interface from './containers/interface';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Landing authLink={authLink} />
        </Route>

        <Route path='/player' component={Player} /> 

      </Switch>
    </Router>
  );
}

export default App;
