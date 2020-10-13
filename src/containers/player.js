/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Interface from './interface';
import {Redirect} from 'react-router-dom';
import spotifyWrapper from 'spotify-web-api-js';
import { AppState } from '../contexts';


const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {

{/* Nice for debugging */}
    console.log(action);
{/* Nice for debugging */}

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

const API = new spotifyWrapper();

const Player = (props) => {
    // console.log(props);
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
        <AppState initialState={initialState} reducer={reducer}>
            <Interface API={API} />
        </AppState>
    )
}

export default Player;