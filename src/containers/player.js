/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Redirect} from 'react-router-dom';
import spotifyWrapper from 'spotify-web-api-js';
import Menu from '../components/player/menu/menu';
import Controls from '../components/player/controls/controls';
import Content from './content/content';

const API = new spotifyWrapper();

class Player extends React.Component {
    constructor({location}) {
        super();
        let hashParam = {};
        location.hash.split('&').forEach(param => {
            const pair = param.split('=');
            hashParam[pair[0]] = pair[1];
        });
        API.setAccessToken(hashParam['#access_token'])
        this.state = {
            token: hashParam['#access_token'],
            playerState: null,
            contextURI: null,
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
            player.addListener('player_state_changed', state => { 
                // console.log(state);
                const currentTrack = state.track_window.current_track;
                const playerState = {
                    largeCover: currentTrack.album.images[0],
                    smallCover: currentTrack.album.images[1],
                    album: currentTrack.album.name,
                    albumURI: currentTrack.album.uri,
                    artist: currentTrack.artists[0].name,
                    artistURI: currentTrack.artists[0].uri,
                    track: currentTrack.name,
                    trackURI: currentTrack.uri,
                    context: state.context.uri,
                    paused: state.paused,
                    shuffle: state.shuffle,
                    repeat: state.repeat_mode,
                    linkedFrom: currentTrack.linked_from_uri,
                }
                // if (this.state.playerState === null || this.state.playerState.track !== playerState.track || player) {}
                this.setState({
                    playerState: playerState
                })
                if (this.state.contextURI === null) {
                    if (this.state.contextURI !== state.context.uri) {
                        this.setState({
                            contextURI: state.context.uri,
                        })
                    }
                }
            });
            
            // Ready
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
                this.setState({
                    deviceID: device_id
                });
                API.transferMyPlayback([device_id], {
                    play: true
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
            });
            
            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });
            
            // Connect to the player!
            player.connect();
        };
        window.history.replaceState({}, document.title, "/player");
    }

    changeContextURI = (newURI) => {
        if (newURI !== this.state.contextURI) {
            this.setState({
                contextURI: newURI
            });
            if (document.querySelector('content-container')) {
                document.querySelector('.content-container').scrollTo(0, 0);
            }
        }
    }

    render() {
        if (this.state.token !== undefined) {
            return(
                <div className='interface'>
                    <div className='not-controls'>
                        <Menu 
                        API={API} 
                        changeContextURI={this.changeContextURI} 
                        contextURI={this.state.contextURI}
                        />
                        <Content 
                        API={API} 
                        contextURI={this.state.contextURI} 
                        playerState={this.state.playerState}
                        changeContextURI={this.changeContextURI}
                        />
                    </div>
                    <Controls 
                    API={API} 
                    playerState={this.state.playerState} 
                    changeContextURI={this.changeContextURI} 
                    />
                </div>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

export default Player;