/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react';
import Interface from './interface';
import {Redirect} from 'react-router-dom';
import spotifyWrapper from 'spotify-web-api-js';

const API = new spotifyWrapper();

class Player extends React.Component {
    constructor({location}) {
        super();
        let hashParam = {};
        location.hash.split('&').forEach(param => {
            const pair = param.split('=');
            hashParam[pair[0]] = pair[1];
        });
        this.state = {
            token: hashParam['#access_token']
        }
    }

    componentDidMount() {
        window.onSpotifyWebPlaybackSDKReady = () => {
            const token = this.state.token;
            const player = new window.Spotify.Player({
                name: 'Another Spotify Clone',
                getOAuthToken: cb => { cb(token); }
            });
            
            // Error handling
            player.addListener('initialization_error', ({ message }) => { console.error(message); });
            player.addListener('authentication_error', ({ message }) => { console.error(message); });
            player.addListener('account_error', ({ message }) => { console.error(message); });
            player.addListener('playback_error', ({ message }) => { console.error(message); });
            
            // Playback status updates
            player.addListener('player_state_changed', state => { console.log(state); });
            
            // Ready
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });
            
            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });
            
            // Connect to the player!
            player.connect();
        };
    }

    render() {
        if (this.state.token !== undefined) {
            return(
                <Interface API={API} />
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

export default Player;