import React from 'react';
import './card.scss';
import image from '../../../../assets/bursts-mobile.svg'

const Card = () => {
    // check out material UI card when you have internet again
    return(
        <div className='card'>
            <img  className='card-image' src={image} alt="playlist" />
            <div className='card-description'>
                <h3>Playlist Title</h3>
                <h5>Description would be here</h5>
            </div>
        </div>
    )
}

export default Card;