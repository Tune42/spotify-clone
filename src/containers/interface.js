/* eslint-disable no-empty-pattern */
import React from 'react';
import Menu from '../components/player/menu/menu';
import Controls from '../components/player/controls/controls';
import './interface.scss'


const Interface = () => {
    return(
        <div className='interface'>
            <Menu />
            <Controls />
        </div>
    )
}

export default Interface;