/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import './styles/landing.scss';
import './styles/player.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from './components/landing/landing';
import Player from './containers/player';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Landing />
        </Route>

        <Route path='/player' component={Player} /> 

      </Switch>
    </Router>
  );
}

export default App;
