import React, {useState, useEffect} from 'react';
import './content.scss'
import CircularProgress from '@material-ui/core/CircularProgress';
import TrackTable from '../../components/player/content/tracktable';

const Content = ({API, contextURI}) => {
    const [content, setContent] = useState(
        [<div className='loading'>
            <CircularProgress />
        </div>]
    );

    useEffect(() => {
        if (contextURI !== null) {
            API.getPlaylist(contextURI.split(':').pop())
            .then(res => {
                console.log(res)
                const data = {
                    description: res.description,
                    id: res.id,
                    art: res.images[0].url,
                    name: res.name,
                    type: res.type,
                    uri: res.uri,
                    tracks: res.tracks.items,
                }
                setContent([
                    <div className='content-container'>
                        <div className="title-row">
                            <div className='art'>
                                <img src={data.art} alt="Cover Art" width='200px' />
                            </div>
                            <div className='playlist-info'>
                                <p style={{fontWeight: 400}}><small>{data.type}</small></p>
                                <h1>{data.name}</h1>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        <TrackTable data={data} />
                    </div>
                ]);
            }).catch(err => console.log(err));
        }
    }, [API, contextURI]);

    return(content);
}

export default Content;