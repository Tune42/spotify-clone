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

    if (data !== null) {
        if (data.savedAlbums && data.savedAlbums.length > 0) {
            savedAlbums = data.savedAlbums.map((album, index) => {
                return <Card key={index + ' ' + album.album.name} album={album.album} changeContextURI={changeContextURI} />;
            })
        } else {
            savedAlbums = <h2>Unable to retrieve saved albums for this account either due to an error or because you have not saved any.</h2>
        }
        if (data.playlists && data.playlists.length > 0) {
            playlists = data.playlists.map((playlist, index) => {
                return <Card key={index + ' ' + playlist.name} album={playlist} changeContextURI={changeContextURI} />;
            })
        } else {
            playlists = <h2>Unable to retrieve playlists for this account either due to an error or because you have not saved any.</h2>
        }
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