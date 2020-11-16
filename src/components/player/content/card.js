import React from 'react';

const Card = ({album, changeContextURI}) => {
    let description;
    if (album.release_date) {
        description = <h5 className='card-description'>Released in {album.release_date.split('-')[0]}</h5>;
    } else if (album.genres) {
        description = <h5 className="card-description" style={{textTransform: 'uppercase'}}>{album.genres[1]}</h5>
    } else {
        description = <h5 className='card-description'>{album.description}</h5>
    }

    let image;
    if (album.images[0]) {
        image = <img className='card-image' src={album.images[0].url} width="150px" height="150px" alt="playlist" />;
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