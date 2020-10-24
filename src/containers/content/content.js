import React, {useState, useEffect} from 'react';
import './content.scss'

const getContent = (API, currentURI) => {
    if (currentURI !== null) {
        API.getPlaylist(currentURI.split(':').pop())
        .then(res => {
            console.log(res);
            return res;
        }).catch(err => console.log(err));
    }
}

const Content = ({API, currentURI}) => {

    const [content, setContent] = useState(getContent(API, currentURI));

    return(<h1>Content</h1>)
}

export default Content;