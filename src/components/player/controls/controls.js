import React from 'react';
import './controls.scss';
import Volume from '../controls/volume';
import CircularProgress from '@material-ui/core/CircularProgress';


const Controls = ({API, playerState, setPlaylist}) => {

    const togglePlay = () => {
        if (playerState.paused) {
            API.play();
        } else {
            API.pause();
        }
    }

    const toggleShuffle = () => {
        API.setShuffle(!playerState.shuffle);
    }

    const toggleRepeat = () => {
        if (playerState.repeat === 2) {
            API.setRepeat('off');
        } else {
            API.setRepeat('track');
        }
    }

    let playControl = 'fa fa-play';
    let art = <CircularProgress />;
    let track = '';
    let artist = '';
    let shuffle = '';
    let repeat = '';
    if (playerState !== null) {
        art = playerState.smallCover.url;
        track = playerState.track;
        artist = playerState.artist;
        playerState.paused ? playControl = 'fa fa-play' : playControl = 'fa fa-pause';
        playerState.shuffle ? shuffle = '#1ED760' : shuffle = ''
        playerState.repeat === 2 ? repeat = '#1ED760' : repeat = ''
    }
    return(
        <div className='controls'>
            <div className="left-section">
                <img src={art} alt="Album Art" className='mr-10' />
                <div className='mr-10'>
                    <p onClick={() => setPlaylist(playerState.albumURI)}>{track}</p>
                    <p style={{fontWeight: 400, fontSize: '14px'}}>{artist}</p>
                </div>
            </div>
            <div className="mid-section">
                <i className="fa fa-random" style={{color: shuffle}} onClick={toggleShuffle}></i>
                <i className="fa fa-step-backward" onClick={API.skipToPrevious}></i>
                <i className={playControl} onClick={togglePlay}></i>
                <i className="fa fa-step-forward" onClick={API.skipToNext}></i>
                <i className="fa fa-repeat" style={{color: repeat}} onClick={toggleRepeat}></i>
            </div>
            <div className="right-section">
                <i className="fa fa-list-ol mr-10" onClick={() => setPlaylist(playerState.context)}></i>
                <Volume API={API} />
            </div>
        </div>
    )
}

export default Controls;