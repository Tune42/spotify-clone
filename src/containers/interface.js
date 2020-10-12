import React from 'react';
import '../styles/interface.scss';
import spotifyWrapper from 'spotify-web-api-js';

const API = new spotifyWrapper();

const Interface = ({hashParam}) => {
    API.setAccessToken(hashParam['#access_token']);
    
    return(
        <h1>I am your interface now.</h1>
    )
}

export default Interface;