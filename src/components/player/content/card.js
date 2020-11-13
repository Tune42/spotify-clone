import React from 'react';
import image from '../../../assets/bursts-mobile.svg'

const Card = () => {
    // check out material UI card when you have internet again
    return(
        <div className='card'>
            <img  className='card-image' src={image} alt="playlist" />
            <div className='card-text'>
                <h3 className='card-title'>Playlist Title</h3>
                <h5 className='card-description'>Description would be here</h5>
            </div>
        </div>
    )
}

export default Card;