import React, {useState, useEffect} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Playlist from '../../components/player/content/playlist';
import Artist from '../../components/player/content/artist';

const Content = ({API, contextURI, playerState, changeContextURI}) => {
    const [content, setContent] = useState(
        <div className='loading'>
            <CircularProgress />
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
                API.getArtist(context[2])
                .then(res => console.log(res))
                .catch(err => console.log(err));
                API.getArtistAlbums(context[2], {limit: 50, include_groups: 'album'})
                .then(res => {
                    console.log(res);
                    setContent(
                        <Artist />
                    )
                }).catch(err => console.log(err));
            } else {
                console.log(context);
            }
            // document.querySelector('.')
        }
    }, [API, changeContextURI, contextURI, playerState]);

    return(content);
}

export default Content;