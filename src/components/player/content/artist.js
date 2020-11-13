import React, { useState, useEffect } from 'react';

const Artist = ({artistData}) => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [tracks, setTracks] = useState('');

    useEffect(() => {
        setImage(artistData.image);
        setName(artistData.name);
        setTracks(artistData.tracks);
    }, [artistData])

    return(
        <div className='content-container'>
            <img src={image} alt={name} />
        </div>
    );
}

export default Artist;