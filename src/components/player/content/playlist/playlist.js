import React from 'react';
import './playlist.scss';
import TrackTable from './track-table/tracktable';

const Playlist = ({image, type, name, description, tracks, playerState, API, contextURI}) => {
    return(
        <div className='content-container'>
            <div className="title-row">
                <div className='art'>
                    <img src={image} alt="Cover Art" width='200px' />
                </div>
                <div className='playlist-info'>
                    <p style={{fontWeight: 400, textTransform: "uppercase"}}><small>{type}</small></p>
                    <h1 className='playlist-title'>{name}</h1>
                    <p className='playlist-description'>{description}</p>
                </div>
            </div>
            <TrackTable tracks={tracks} album={name} playerState={playerState} API={API} contextURI={contextURI} />
        </div>
    )
}

export default Playlist