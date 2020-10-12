/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import Landing from './components/landing';
import clientID from './private';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Player from './containers/player';

const authLink = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=http://localhost:3000/player&scope=user-read-private%20user-read-email%20user-read-recently-played%20user-library-read%20user-follow-read%20playlist-read-private%20user-top-read&response_type=token&state=123`

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
