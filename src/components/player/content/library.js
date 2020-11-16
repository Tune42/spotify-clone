import React, { useState, useEffect } from 'react';
import Card from './card';

const Library = ({API, changeContextURI}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (data === null) {
            const newData = {};

            async function fetchData() {
                await API.getMyTopArtists({limit: 50})
                .then(res => {
                    newData['artists'] = res.items;
                }).catch(err => console.log(err));
                setData(newData);
            }
            fetchData();
        }
    });

    let artists;
    if (data !== null) {
        artists = data['artists'].map((artist, index) => {
            return <Card API={API} changeContextURI={changeContextURI} album={artist} />
        })
    }

    return(
        <div className="content-container">
            <div className="content-container">
                <div className="card-category">
                    <div className="card-category-title"><h2>Your Top Artists</h2></div>
                    <div className='card-category-items'>{artists}</div>
                </div>
            </div>
        </div>
    )
}

export default Library;