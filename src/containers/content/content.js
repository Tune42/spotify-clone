import React, {useState, useEffect} from 'react';
import './content.scss'
import CircularProgress from '@material-ui/core/CircularProgress';
import Playlist from '../../components/player/content/playlist/playlist';

const Content = ({API, contextURI, playerState}) => {
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
                    // console.log(res);
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
                        />
                    );
                }).catch(err => console.log(err));
            } else if (context[1] === 'album') {
                API.getAlbum(context[2])
                .then(res => {
                    // console.log(res);
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
                        />
                    )
                }).catch(err => console.log(err));
            } else if (context[0] === 'custom') {
                console.log('this will be the custom path')
            }
        }
    }, [API, contextURI, playerState]);

    return(content);
}

export default Content;