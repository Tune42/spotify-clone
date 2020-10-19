import React from 'react';
import './menu.scss';

const Sidebar = () => {
    return(
        <div className="menu">
            <div className='menu-logo'><i className='fa fa-spotify'></i> Spotify</div>
            <div className="menu-item selected"><i className="fa fa-home"></i>Home</div>
            <div className="menu-item"><i className="fa fa-search"></i>Search</div>
            <div className="menu-item"><i className="fa fa-list"></i>Your Library</div>
            <div className="menu-playlist">Something here</div>
        </div>
    )
}

export default Sidebar;