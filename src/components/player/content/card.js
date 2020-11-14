import React from 'react';

const Card = ({album, changeContextURI}) => {
    let description;
    if (album.release_date) {
        description = <h5 className='card-description'>Released {album.release_date}</h5>;
    } else {
        description = <h5 className='card-description'>{album.description}</h5>
    }

    let image;
    if (album.images.length > 1) {
        image = <img  className='card-image' src={album.images[1].url} alt="playlist" />
    } else {
        image = <img className='card-image' src={album.images[0].url} alt="playlist" />
    }

    return(
        <div className='card' onClick={() => changeContextURI(album.uri)}>
            {image}
            <div className='card-text'>
                <h3 className='card-title'>{album.name}</h3>
                {description}
            </div>
        </div>
    )
}

export default Card;