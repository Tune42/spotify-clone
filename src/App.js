/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <div className='navbar'>
      <div className='nav-logo'><i className='fa fa-spotify'></i>Spotify</div>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Home</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className='body'>
      <div className='body-content'>
        <div className='title'>
          <p>Another</p>
          <p>Spotify</p>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
