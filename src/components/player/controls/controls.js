import React from 'react';
import './controls.scss';
import Volume from '../controls/volume';

const Controls = ({API, playerState, setPlaylist}) => {

    const togglePlay = () => {
        if (playerState.paused) {
            API.play();
        } else {
            API.pause();
        }
    }

    let playControl;
    let art = '';
    let track = '';
    let artist = '';
    if (playerState !== null) {
        art = playerState.smallCover.url;
        track = playerState.track;
        artist = playerState.artist;
        playerState.paused ? playControl = 'fa fa-play' : playControl = 'fa fa-pause';
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
                <i className="fa fa-random"></i>
                <i className="fa fa-step-backward" onClick={API.skipToPrevious}></i>
                <i className={playControl} onClick={togglePlay}></i>
                <i className="fa fa-step-forward" onClick={API.skipToNext}></i>
                <i className="fa fa-repeat"></i>
            </div>
            <div className="right-section">
                <i className="fa fa-list-ol mr-10" onClick={() => setPlaylist(playerState.context)}></i>
                <Volume />
            </div>
        </div>
    )
}

export default Controls;