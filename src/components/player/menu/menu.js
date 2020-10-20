import React, {useState, useEffect} from 'react';
import './menu.scss';

const Sidebar = ({API}) => {
    const [playlists, setPlaylists] = useState(null)

    useEffect(() => {
        if (playlists === null) {
            API.getUserPlaylists()
            .then(res => {
                console.log(res)
                setPlaylists(res.items.map(playlist => {
                    return <div key={'playlist' + playlist.name} className="playlist">{playlist.name}</div>
                }))
            })
            .catch(err => {
                console.log(err)
            })
        }
    })
    
    return(
        <div className="menu">
            <div className='menu-logo'><i className='fa fa-spotify'></i> Spotify</div>
            <div className="menu-item selected"><i className="fa fa-home"></i>Home</div>
            <div className="menu-item"><i className="fa fa-search"></i>Search</div>
            <div className="menu-item"><i className="fa fa-list"></i>Your Library</div>
            <div className='menu-playlist-title'>Playlists</div>
            <div className='menu-playlist-button'><i className="fa fa-plus mr-10"></i>Create Playlist</div>
            <div className='menu-playlist-button'><i className="fa fa-thumbs-up mr-10"></i>Liked Songs</div>
            <hr className='divider' />
            <div className="menu-playlist">
                {playlists}
            </div>
        </div>
    )
}

export default Sidebar;