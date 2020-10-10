/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <div className='navbar'>
      <div className='nav-logo'><i className='fa fa-spotify'></i>Spotify</div>
      <nav>
        <ul>
          <li>
            <a href='#'>Premium</a>
          </li>
          <li>
            <a href='#'>Help</a>
          </li>
          <li>
            <a href='#'>Download</a>
          </li>
          <li>|</li>
          <li>
            <a className='auth-links' href='#'>Sign Up</a>
          </li>
          <li>
            <a className='auth-links' href="#">Log In</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className='body'>
      <div className='body-container'>
        <h1 className='body-title'>Another</h1>
        <h1 className='body-title'>Spotify</h1>
        <p>Millions of songs and podcasts. Partially accessible.</p>
        <button className='body-button'>Log In Here</button>
      </div>
    </div>
    <div className='footer'>
      <div className='footer-container'>
        Some Text
      </div>
    </div>
  </>
  );
}

export default App;
