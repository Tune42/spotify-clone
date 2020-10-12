/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

const Player = (props) => {
    // console.log(props);
    let content;
    let hashParam = {};

    if (props.location.hash) {
        props.location.hash.split('&').forEach(param => {
            const pair = param.split('=');
            hashParam[pair[0]] = pair[1];
        });
        console.log(hashParam);
        content=<h1>Hello, World!</h1>
    } else{
        content=<h1>Something went wrong!</h1>
    }
    return(
        <div className='something'>
            {content}
        </div>
    )
}

export default Player;