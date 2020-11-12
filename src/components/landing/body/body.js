import React from 'react';
import './body.scss';
import LandingButton from '../landing/landing-button/landing-button';
import authLink from '../../../private';

const Body = () => {
    return(
    <div className='body'>
      <div className='body-container'>
        <h1 className='body-title'>Another</h1>
        <h1 className='body-title'>Spotify</h1>
        <h1 className='mobile-title'>Another Spotify</h1>
        <p>Millions of songs and podcasts from Spotify's API.</p>
        <a href={authLink}><LandingButton /></a>
      </div>
      <div className='padding'></div>
    </div>
    )
}

export default Body;