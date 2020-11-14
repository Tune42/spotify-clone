import React, {useState, useEffect} from 'react';
import Card from '../../../components/player/content/card';

const Home = ({API, changeContextURI}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (data === null) {
            const newData = {};

            async function fetchData() {
                await API.getUserPlaylists()
                .then(res => {
                    console.log(res);
                    newData['playlists'] = res.items;
                }).catch(err => console.log(err));

                await API.getMySavedAlbums()
                .then(res => {
                    newData['savedAlbums'] = res.items;
                }).catch(err => console.log(err));
                setData(newData);
            }

            fetchData();
        }
    });

    let savedAlbums;
    let playlists;

    if (data !== null && data.savedAlbums) {
        savedAlbums = data.savedAlbums.map((album, index) => {
            return <Card key={index + ' ' + album.album.name} album={album.album} changeContextURI={changeContextURI} />;
        })
    }

    if (data !== null && data.playlists) {
        playlists = data.playlists.map((playlist, index) => {
            return <Card key={index + ' ' + playlist.name} album={playlist} changeContextURI={changeContextURI} />;
        })
    }

    return(
        <div className="content-container">
            <div className="card-category">
                <div className="card-category-title"><h2>Saved Albums</h2></div>
                <div className='card-category-items'>{savedAlbums}</div>
            </div>
            <div className="card-category">
                <div className="card-category-title"><h2>Playlists</h2></div>
                <div className='card-category-items'>{playlists}</div>
            </div>
        </div>
    )
}

export default Home;