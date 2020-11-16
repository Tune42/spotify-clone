import React from 'react';
import Volume from '../controls/volume';
import Seeker from './seeker';

const Controls = ({API, playerState, changeContextURI}) => {

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
    let art;
    let track = '';
    let artist = '';
    let shuffle = '';
    let repeat = '';

    if (playerState !== null) {
        art = <img src={playerState.smallCover.url} alt="Album Art" className='mr-10' />;
        track = playerState.track;
        artist = playerState.artist;
        playerState.paused ? playControl = 'fa fa-play' : playControl = 'fa fa-pause';
        playerState.shuffle ? shuffle = '#1ED760' : shuffle = '';
        playerState.repeat === 2 ? repeat = '#1ED760' : repeat = '';
    }
    return(
        <div className='controls'>
            <div className="left-section">
                {art}
                <div className='mr-10'>
                    <p className='player-link' onClick={() => changeContextURI(playerState.albumURI)}>{track}</p>
                    <p className='player-artist player-link' onClick={() => changeContextURI(playerState.artistURI)}>{artist}</p>
                </div>
            </div>
            <div className="mid-section">
                <div className="player-buttons">
                    <i className="fa fa-random" style={{color: shuffle}} onClick={toggleShuffle}></i>
                    <i className="fa fa-step-backward" onClick={API.skipToPrevious}></i>
                    <i className={playControl} onClick={togglePlay}></i>
                    <i className="fa fa-step-forward" onClick={API.skipToNext}></i>
                    <i className="fa fa-repeat" style={{color: repeat}} onClick={toggleRepeat}></i>
                </div>
                <Seeker playerState={playerState} API={API} />
            </div>
            <div className="right-section">
                <i className="fa fa-list-ol mr-10" onClick={() => changeContextURI(playerState.context)}></i>
                <Volume API={API} />
            </div>
        </div>
    )
}

export default Controls;