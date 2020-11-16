import React, { useState } from 'react';
import Card from './card';

const Search = ({API, changeContextURI}) => {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');

    async function fetchData(search) {
        const newData = {};
        await API.search(search, ['album', 'artist', 'playlist'], {market: 'us', limit: 20})
        .then(res => {
            newData['artists'] = res.artists.items;
            newData['albums'] = res.albums.items;
            newData['playlists'] = res.playlists.items;
        })
        .catch(err => console.log(err));
        setData(newData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        fetchData(search);
    }

    const onChange = (event) => {
        setSearch(event.target.value);
    }

    let artists, albums, playlists;
    
    if (!!data && data.artists) {
        artists = data.artists.map((artist, index) => {
            return <Card key={'artist ' + index} album={artist} changeContextURI={changeContextURI} />;
        })
    };

    if (!!data && data.albums) {
        albums = data.albums.map((album, index) => {
            return <Card key={'album ' + index} album={album} changeContextURI={changeContextURI} />;
        })
    };

    if (!!data && data.playlists) {
        playlists = data.playlists.map((playlist, index) => {
            return <Card key={'playlist ' + index} album={playlist} changeContextURI={changeContextURI} />;
        })
    }

    return(
        <div className="content-container">
            <div className='search-container'>
                <form onSubmit={onSubmit}>
                    <input 
                    type="search" 
                    onChange={onChange} 
                    name="search" id="search" 
                    value={search} 
                    placeholder='Search artists or albums'
                    autoComplete='off'
                    className='search' />
                </form>
            </div>
            <div className="card-category">
                {artists && <div className="card-category-title" style={{fontSize: 30}}><h2>Artists</h2></div>}
                <div className='card-category-items'>{artists}</div>
            </div>
            <div className="card-category">
                {albums && <div className="card-category-title" style={{fontSize: 30}}><h2>Albums</h2></div>}
                <div className='card-category-items'>{albums}</div>
            </div>
            <div className="card-category">
                {playlists && <div className="card-category-title" style={{fontSize: 30}}><h2>Playlists</h2></div>}
                <div className="card-category-items">{playlists}</div>
            </div>
        </div>
    )
}

export default Search;