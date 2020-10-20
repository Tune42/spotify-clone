/* eslint-disable no-empty-pattern */
import React, {useEffect} from 'react';
import Menu from '../components/player/menu/menu';
import Controls from '../components/player/controls/controls';

const Interface = ({API}) => {

    useEffect(() => {
        window.history.replaceState({}, document.title, "/player");
    })

    return(
        <div style={{position: "relative"}}>
            <Menu API={API} />
            <Controls API={API} />
        </div>
    )
}

export default Interface;