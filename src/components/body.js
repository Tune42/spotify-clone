import React from 'react';
import '../styles/body.scss';
import LandingButton from './landing-button';

const Body = ({authLink}) => {
    return(
    <div className='body'>
      <div className='body-container'>
        <h1 className='body-title'>Another</h1>
        <h1 className='body-title'>Spotify</h1>
        <h1 className='mobile-title'>Another Spotify</h1>
        <p>Millions of songs and podcasts. Partially accessible.</p>
        <a href={authLink}><LandingButton /></a>
      </div>
      <div className='padding'></div>
    </div>
    )
}

export default Body;