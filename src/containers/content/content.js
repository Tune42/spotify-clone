import React, {useState, useEffect} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Playlist from '../../components/player/content/playlist';
import Artist from '../../components/player/content/artist';
import Home from '../../components/player/content/home';
import Search from '../../components/player/content/search';
import Library from '../../components/player/content/library';
import Error from '../../components/player/content/error';

const Content = ({API, contextURI, playerState, changeContextURI}) => {
    const [content, setContent] = useState(
        <div className='content-container'>
            <div className="loading"><CircularProgress /></div>
        </div>
    );

    useEffect(() => {
        if (contextURI !== null) {
            const context = contextURI.split(':');
            if (context[1] === 'playlist') {
                API.getPlaylist(context[2])
                .then(res => {
                    setContent(
                        <Playlist 
                        image={res.images[0].url}
                        type={res.type}
                        name={res.name}
                        description={res.description}
                        tracks={res.tracks.items} 
                        playerState={playerState}
                        API={API}
                        contextURI={contextURI}
                        changeContextURI={changeContextURI}
                        />
                    );
                }).catch(err => console.log(err));
            } else if (context[1] === 'album') {
                API.getAlbum(context[2])
                .then(res => {
                    setContent(
                        <Playlist 
                        image={res.images[0].url}
                        type={res.type}
                        name={res.name}
                        description={res.artists[0].name}
                        artistURI={res.artists[0].uri}
                        tracks={res.tracks.items} 
                        playerState={playerState}
                        API={API}
                        contextURI={contextURI}
                        changeContextURI={changeContextURI}
                        />
                    )
                }).catch(err => console.log(err));
            } else if (context[1] === 'artist') {
                setContent(<Artist artist={context[2]} API={API} changeContextURI={changeContextURI} />);
            } else if (context[1] === 'custom') {
                if (context[2] === 'home') {
                    setContent(
                    <Home 
                    API={API} 
                    changeContextURI={changeContextURI} 
                    />);
                } else if (context[2] === 'search') {
                    setContent(
                    <Search 
                    API={API} 
                    changeContextURI={changeContextURI}
                    />);
                } else if (context[2] === 'library') {
                    setContent(
                    <Library
                    API={API} 
                    changeContextURI={changeContextURI}
                    />);
                }
            } else {
                console.log(context);
                setContent(<Error />);
            }
        } else {
            setContent(
                <Search 
                API={API} 
                changeContextURI={changeContextURI}
                />
            )
        }
    }, [API, changeContextURI, contextURI, playerState]);

    return(content);
}

export default Content;