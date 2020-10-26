import React, {useState, useEffect} from 'react';
import './content.scss'
import CircularProgress from '@material-ui/core/CircularProgress';
import TrackTable from '../../components/player/content/tracktable';

const getJSX = (image, type, name, description, tracks) => {
    return(
        <div className='content-container'>
            <div className="title-row">
                <div className='art'>
                    <img src={image} alt="Cover Art" width='200px' />
                </div>
                <div className='playlist-info'>
                    <p style={{fontWeight: 400}}><small>{type}</small></p>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <TrackTable tracks={tracks} album={name} />
        </div>
    )
}

const Content = ({API, contextURI}) => {
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
                        getJSX(res.images[0].url, res.type, res.name, res.description, res.tracks.items)
                    );
                }).catch(err => console.log(err));
            } else if (context[1] === 'album') {
                API.getAlbum(context[2])
                .then(res => {
                    // console.log(res);
                    setContent(
                        getJSX(res.images[0].url, res.type, res.name, res.artists[0].name, res.tracks.items)
                    )
                }).catch(err => console.log(err));
            }
        }
    }, [API, contextURI]);

    return(content);
}

export default Content;