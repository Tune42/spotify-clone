import React from 'react';

const Card = ({album, changeContextURI}) => {
    return(
        <div className='card' onClick={() => changeContextURI(album.uri)}>
            <img  className='card-image' src={album.images[1].url} alt="playlist" />
            <div className='card-text'>
                <h3 className='card-title'>{album.name}</h3>
                <h5 className='card-description'>Released {album.release_date}</h5>
            </div>
        </div>
    )
}

export default Card;