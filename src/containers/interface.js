/* eslint-disable no-empty-pattern */
import React, {useEffect} from 'react';
import Menu from '../components/player/menu/menu';
import Controls from '../components/player/controls/controls';
import './interface.scss';

const Interface = ({API}) => {

    useEffect(() => {
        window.history.replaceState({}, document.title, "/player");
    })

    return(
        <div className='interface'>
            <div style={{display: "flex"}}>
                <Menu API={API} />
                <h1>Content</h1>
            </div>
            <Controls API={API} />
        </div>
    )
}

export default Interface;