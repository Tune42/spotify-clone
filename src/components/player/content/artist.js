import React, { useState, useEffect } from 'react';
import Card from './card';

const Artist = ({artist, API, changeContextURI}) => {
    const [data, setData] = useState({
        image: '',
        name: '',
    });
    
    useEffect(() => {
        const newData = {};

        async function fetchData (artist) {
            await API.getArtist(artist)
            .then(res => {
                newData['image'] = res.images[0].url;
                newData['name'] = res.name;
            }).catch(err => console.log(err));
            await API.getArtistAlbums(artist, {limit: 50, include_groups: 'album', country: 'US'})
            .then(res => {
                newData['albums'] = res.items;
            }).catch(err => console.log(err));
            setData(newData);
        }

        fetchData(artist);
    }, [artist, API]);

    let albums;
    if (data.albums) {
        albums = data.albums.map((album, index) => {
            return <Card key={index + ' ' + album} album={album} changeContextURI={changeContextURI} />;
        })
    }

    return(
        <div className='content-container'>
            <div className="title-row">
                <div className='art'>
                    <img src={data.image} alt="Cover Art" width='300px' />
                </div>
                <div className='playlist-info'>
                    <p style={{fontWeight: 400, textTransform: "uppercase"}}>Artist</p>
                    <h1 className='playlist-title'>{data.name}</h1>
                </div>
            </div>
            <div className="card-category">
                <div className="card-category-title"><h2>Albums</h2></div>
                <div className='card-category-items'>{albums}</div>
            </div>
        </div>
    );
}

export default Artist;