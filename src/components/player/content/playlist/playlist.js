import React from 'react';
import './playlist.scss';
import TrackTable from './track-table/tracktable';

const Playlist = ({image, type, name, description, tracks, playerState, API, contextURI, artistURI, changeContextURI}) => {
    let subtitle;
    artistURI ? 
    subtitle = <p className='artist-link' onClick={() => changeContextURI(artistURI)}>{description}</p> : 
    subtitle = <p>{description}</p>;

    return(
        <div className='content-container'>
            <div className="title-row">
                <div className='art'>
                    <img src={image} alt="Cover Art" width='200px' />
                </div>
                <div className='playlist-info'>
                    <p style={{fontWeight: 400, textTransform: "uppercase"}}><small>{type}</small></p>
                    <h1 className='playlist-title'>{name}</h1>
                    {subtitle}
                </div>
            </div>
            <TrackTable 
            tracks={tracks} 
            album={name} 
            playerState={playerState} 
            API={API} 
            contextURI={contextURI}
            changeContextURI={changeContextURI} />
        </div>
    )
}

export default Playlist