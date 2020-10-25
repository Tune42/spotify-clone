import React, {useState, useEffect} from 'react';
import './content.scss'
import CircularProgress from '@material-ui/core/CircularProgress';

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
                            <div>
                                <img src={data.art} alt="Cover Art" />
                            </div>
                            <div>
                                <p>{data.type}</p>
                                <h1>{data.name}</h1>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                ]);
            }).catch(err => console.log(err));
        }
    }, [API, contextURI]);

    return(content);
}

export default Content;