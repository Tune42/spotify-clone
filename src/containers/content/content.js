import React, {useState} from 'react';
import './content.scss'
import CircularProgress from '@material-ui/core/CircularProgress';

const Content = ({API, currentURI}) => {

    const [content, setContent] = useState(null);

    if (currentURI === null) {
        return(
            <div className='loading'>
                <CircularProgress />
            </div>
        )
    } else {
        API.getPlaylist(currentURI.split(':').pop())
        .then(res => {
            console.log(res)
            if (res.uri !== content.uri) {
                const newContent = {
                    description: res.description,
                    id: res.id,
                    art: res.images[0].url,
                    name: res.name,
                    type: res.type,
                    uri: res.uri,
                    tracks: res.tracks.items,
                }
                setContent(newContent);
            }
        }).catch(err => console.log(err));

        return(
            <div className='content-container'>
                <h1>Hello, World!</h1>
                <h2>Some Stuff</h2>
            </div>
        )
    }
}

export default Content;