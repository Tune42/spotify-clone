/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import authLink from '../../private';

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
                        <a href={authLink}>Log in</a>
                    </div>
                    <div className='logo'><i className='fa fa-spotify'></i>Spotify</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;