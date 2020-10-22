import React from 'react';
import './controls.scss';
import Volume from '../controls/volume';

const Controls = ({API}) => {
    return(
        <div className='controls'>
            <div className="left-section">
                <img src="./test" alt="Album Art" className='mr-10' />
                <div className='mr-10'>
                    <p>Song Title</p>
                    <p>Artist</p>
                </div>
                <i className="fa fa-heart mr-10"></i>
            </div>
            <div className="mid-section">
                <i className="fa fa-random"></i>
                <i className="fa fa-step-backward"></i>
                <i className="fa fa-play"></i>
                <i className="fa fa-step-forward"></i>
                <i className="fa fa-repeat"></i>
            </div>
            <div className="right-section">
                <i className="fa fa-list-ol mr-10"></i>
                <i className="fa fa-laptop mr-10"></i>
                <Volume />
            </div>
        </div>
    )
}

export default Controls;