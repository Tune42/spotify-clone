/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
    return(
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-logo logo'><i className='fa fa-spotify'></i>Spotify</div>
        <div className='footer-links-section'>
          <div className='footer-links'>
            <div className='footer-link-header'>Company</div>
            <div className='footer-link'>About</div>
            <div className='footer-link'>Jobs</div>
            <div className='footer-link'>For the Record</div>
          </div>
          <div className='footer-links'>
            <div className='footer-link-header'>Communities</div>
            <div className='footer-link'>For Artists</div>
            <div className='footer-link'>Developers</div>
            <div className='footer-link'>Advertising</div>
            <div className="footer-link">Investors</div>
            <div className="footer-link">Vendors</div>
          </div>
          <div className='footer-links'>
            <div className='footer-link-header'>Useful Links</div>
            <div className='footer-link'>Help</div>
            <div className='footer-link'>Web Player</div>
            <div className='footer-link'>Free Mobile App</div>
          </div>
        </div>
        <div className='socials'>
          <div className='social'><div className='fa fa-instagram'></div></div>
          <div className='social'><div className='fa fa-twitter'></div></div>
          <div className='social'><div className='fa fa-facebook'></div></div>
        </div>
        <div className='usa'>
          <p>USA</p><img src='https://country-flags.scdn.co/flags/us.svg' height='18px' alt="US Flag"/>
        </div>
        <div className='footer-legal'>
          <div className='footer-legal-links'>
            <a href="#">Legal</a>
            <a href="#">Privacy Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">About Ads</a>
            <a href="#">Additional CA Privacy Disclosures</a>
          </div>
          <div className='footer-copy'>
            <p>&copy;2020 Spotify AB</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Footer;