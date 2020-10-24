import React, { useState } from 'react';
import './controls.scss';
import Volume from '../controls/volume';

const Controls = ({API, playerState}) => {

    const [playing, setPlaying] = useState(true);

    const togglePlay = () => {
        if (playing) {
            API.pause();
            setPlaying(false)
        } else {
            API.play();
            setPlaying(true);
        }
    }

    let playControl;
    playing ? playControl = 'fa fa-pause' : playControl = 'fa fa-play';
    let art = '';
    let track = 'track';
    let artist = 'artist';
    if (playerState !== null) {
        art = playerState.smallCover.url;
        track = playerState.track;
        artist = playerState.artist;
    }
    return(
        <div className='controls'>
            <div className="left-section">
                <img src={art} alt="Album Art" className='mr-10' />
                <div className='mr-10'>
                    <p>{track}</p>
                    <p style={{fontWeight: 400, fontSize: '14px'}}>{artist}</p>
                </div>
                {/* <i className="fa fa-heart mr-10"></i> */}
            </div>
            <div className="mid-section">
                <i className="fa fa-random"></i>
                <i className="fa fa-step-backward" onClick={API.skipToPrevious}></i>
                <i className={playControl} onClick={togglePlay}></i>
                <i className="fa fa-step-forward" onClick={API.skipToNext}></i>
                <i className="fa fa-repeat"></i>
            </div>
            <div className="right-section">
                <i className="fa fa-list-ol mr-10"></i>
                {/* <i className="fa fa-laptop mr-10"></i> */}
                <Volume />
            </div>
        </div>
    )
}

export default Controls;