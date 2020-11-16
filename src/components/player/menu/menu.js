import React, {useState, useEffect} from 'react';

const Menu = ({API, changeContextURI, contextURI}) => {
    const [playlists, setPlaylists] = useState(null);
    const [context, setContext] = useState('');

    useEffect(() => {
        if (playlists === null) {
            API.getUserPlaylists()
            .then(res => {
                // console.log(res);
                if (res.items.length > 0) {
                    setPlaylists(res.items.map(playlist => {
                        return <div key={'playlist ' + playlist.name} 
                        className="playlist"
                        onClick={() => changeContextURI(playlist.uri)}>{playlist.name}</div>
                    }))
                } else {
                    setPlaylists(
                        <div key={'no playlist'} className="playlist">No saved playlists!</div>
                    )
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
        if (contextURI) {
            setContext(contextURI.split(':')[2]);
        }
    }, [playlists, contextURI, API, changeContextURI])

    return(
        <div className="menu">
            <div className='menu-logo'><i className='fa fa-spotify'></i> Spotify</div>
            <div className={context === 'home' ? 'menu-item selected' : 'menu-item'}
            onClick={() => changeContextURI('custom:custom:home')}>
                <i className="fa fa-home"></i>Home
            </div>
            <div className={context === 'search' ? 'menu-item selected' : 'menu-item'}
            onClick={() => changeContextURI('custom:custom:search')}>
                <i className="fa fa-search"></i>Search
            </div>
            <div className={context === 'library' ? 'menu-item selected' : 'menu-item'}
            onClick={() => changeContextURI('custom:custom:library')}>
                <i className="fa fa-list"></i>Top Artists
            </div>
            <div className='menu-playlist-title'>Web Links</div>
            <div className='menu-playlist-button'><i className="fa fa-plus mr-10"></i><a href='https://github.com/Tune42' className='menu-link'>Other Works</a></div>
            <div className='menu-playlist-button'><i className="fa fa-thumbs-up mr-10"></i><a href='https://github.com/Tune42/spotify-clone/stargazers' className='menu-link'>Like the App</a></div>
            <hr className='divider' />
            <div className="menu-playlist">
                {playlists}
            </div>
        </div>
    )
}

export default Menu;