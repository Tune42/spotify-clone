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
        if (data['artists'] && data.artists.length > 0) {
            artists = data['artists'].map((artist, index) => {
                return <Card key={artist + ' ' + index} API={API} changeContextURI={changeContextURI} album={artist} />
            });
        } else {
            artists = <h2>Unable to retrieve artist data for this account either due to an error or because your account is too new.</h2>
        }
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