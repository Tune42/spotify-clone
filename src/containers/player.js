/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Interface from './interface';

const Player = (props) => {
    // console.log(props);
    let content;

    if (props.location.hash) {
        let hashParam = {};
        props.location.hash.split('&').forEach(param => {
            const pair = param.split('=');
            hashParam[pair[0]] = pair[1];
        });
        content=<Interface hashParam={hashParam} />
    } else{
        content=<h1>Something went wrong!</h1>
    }
    
    return(
        <>
            {content}
        </>
    )
}

export default Player;