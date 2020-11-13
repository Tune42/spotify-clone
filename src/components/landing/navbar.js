/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import authLink from '../../private';

const Navbar = ({setSidebar, sidebar}) => {

  let icon = sidebar ? <i style={{fontSize:'28px'}}className='fa fa-times'></i> : <i className='fa fa-bars'></i>;

  return(
    <>
      <div className='navbar'>
        <div className='logo'><i className='fa fa-spotify spotify'></i>Spotify</div>
        <div></div>
        <div onClick={() => setSidebar(!sidebar)} className='hamburger'>{icon}</div>
        <nav>
          <ul>
            <li>
              <a href='#'>Premium</a>
            </li>
            <li>
              <a href='#'>Help</a>
            </li>
            <li>
              <a href='#'>Download</a>
            </li>
            <li>|</li>
            <li>
              <a className='gray' href='#'>Sign Up</a>
            </li>
            <li>
              <a className='gray' href={authLink}>Log In</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar;