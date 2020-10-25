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
                            <div className='art'>
                                <img src={data.art} alt="Cover Art" width='200px' />
                            </div>
                            <div className='playlist-info'>
                                <p style={{fontWeight: 400}}><small>{data.type}</small></p>
                                <h1>{data.name}</h1>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        <table className='track-table'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th width="40%">Title</th>
                                    <th width="40%">Album</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.tracks.map((row, index) => {
                                    return(
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{row.track.name}</td>
                                            <td>{row.track.album.name}</td>
                                            <td>{row.track.duration_ms}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                ]);
            }).catch(err => console.log(err));
        }
    }, [API, contextURI]);

    return(content);
}

export default Content;