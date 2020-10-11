import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
    return(
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-logo logo'><i className='fa fa-spotify'></i>Spotify</div>
        <div className='socials'>
          <div className='social'><div className='fa fa-instagram'></div></div>
          <div className='social'><div className='fa fa-twitter'></div></div>
          <div className='social'><div className='fa fa-facebook'></div></div>
        </div>
        <div className='footer-legal'>
          <a href="#">Legal</a>
          <a href="#">Privacy Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">About Ads</a>
          <a href="#">Additional CA Privacy Disclosures</a>
        </div>
        <div className='footer-copy'>
          <div className='row'>
            <p>USA</p><img src='https://country-flags.scdn.co/flags/us.svg' height='18px' alt="US Flag"/>
          </div>
          <p>&copy;2020 Spotify AB</p>
        </div>
        <div className='footer-table'>
          <table>
            <thead>
              <tr>
                <td>Company</td>
                <td>Communities</td>
                <td>Useful Links</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>About</td>
                <td>For Artists</td>
                <td>Help</td>
              </tr>
              <tr>
                <td>Jobs</td>
                <td>Developers</td>
                <td>Web Player</td>
              </tr>
              <tr>
                <td>For the Record</td>
                <td>Advertising</td>
                <td>Free Mobile App</td>
              </tr>
              <tr>
                <td></td>
                <td>Investors</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Vendors</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}

export default Footer;