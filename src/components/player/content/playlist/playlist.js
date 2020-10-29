import React from 'react';
import './playlist.scss';
import TrackTable from '../track-table/tracktable';

const Playlist = ({image, type, name, description, tracks}) => {
    return(
        <div className='content-container'>
            <div className="title-row">
                <div className='art'>
                    <img src={image} alt="Cover Art" width='200px' />
                </div>
                <div className='playlist-info'>
                    <p style={{fontWeight: 400}}><small>{type}</small></p>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <TrackTable tracks={tracks} album={name} />
        </div>
    )
}

export default Playlist