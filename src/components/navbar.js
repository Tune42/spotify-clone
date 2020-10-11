import React from 'react';
import '../styles/navbar.scss';

const Navbar = () => {
    return(
    <div className='navbar'>
      <div className='logo'><i className='fa fa-spotify'></i>Spotify</div>
      <div></div>
      <div className='hamburger'><i className='fa fa-bars'></i></div>
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
            <a className='gray' href="#">Log In</a>
          </li>
        </ul>
      </nav>
    </div>
    )
}

export default Navbar;