import React from 'react';
import '../styles/sidebar.scss';

const Sidebar = () => {
    return(
        <>
            <div className='sidebar'>
                <div className='sidebar-menu'>
                    <div className='sidebar-links'>
                        <a href='#'>Premium</a>
                        <a href='#'>Help</a>
                        <a href='#'>Download</a>
                        <hr />
                        <br />
                        <a href='#'>Sign up</a>
                        <a href='#'>Log in</a>
                    </div>
                    <div className='logo'><i className='fa fa-spotify'></i>Spotify</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;