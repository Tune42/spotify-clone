/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Interface from './interface';
import {Redirect} from 'react-router-dom';
import spotifyWrapper from 'spotify-web-api-js';

const Player = (props) => {
    // console.log(props);
    const API = new spotifyWrapper();

    let hashParam = {};
    props.location.hash.split('&').forEach(param => {
        const pair = param.split('=');
        hashParam[pair[0]] = pair[1];
    });

    if (hashParam['#access_token']) {
        API.setAccessToken(hashParam['#access_token']);
    } else {
        return <Redirect to='/' />
    }

    return(
        <Interface API={API} />
    )
}

export default Player;