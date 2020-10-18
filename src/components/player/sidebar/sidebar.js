import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
    return(
        <div className="menu">
            <div className='menu-logo'><i className='fa fa-spotify'></i> Spotify</div>
            <div className="menu-playlist">Something here</div>
        </div>
    )
}

export default Sidebar;