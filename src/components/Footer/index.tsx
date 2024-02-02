import logo from '../../assets/images/logo-white.svg'
import socialFacebook from '../../assets/images/icon-facebook.svg'
import socialTwitter from '../../assets/images/icon-twitter.svg'
import socialPinterest from '../../assets/images/icon-pinterest.svg'
import socialInstagram from '../../assets/images/icon-instagram.svg'
import './Footer.scss'

function Footer () {
  return (
    <footer>
      <div className="footer-up">
        <h2>Boost your links today</h2>
        <button>Get started</button>
      </div>
      <div className="footer-down">
        <img className='header-logo' src={logo} alt="Shortly logo" />
        <ul className="footer-panels">
          <li>
            <ul className='footer-panel'>
              <li className='action-title'>Features</li>
              <li className='footer-action'>Link Shortening</li>
              <li className='footer-action'>Branded Links</li>
              <li className='footer-action'>Analytics</li>
            </ul>
          </li>
          <li>
            <ul className='footer-panel'>
              <li className='action-title'>Resources</li>
              <li className='footer-action'>Blog</li>
              <li className='footer-action'>Developers</li>
              <li className='footer-action'>Support</li>
            </ul>
          </li>
          <li>
            <ul className='footer-panel'>
              <li className='action-title'>Company</li>
              <li className='footer-action'>About</li>
              <li className='footer-action'>Our Team</li>
              <li className='footer-action'>Careers</li>
              <li className='footer-action'>Contact</li>
            </ul>
          </li>
        </ul>
        <ul className="footer-media">
          <li><img src={socialFacebook} alt="facebook social media icon" /></li>
          <li><img src={socialTwitter} alt="twitter social media icon" /></li>
          <li><img src={socialPinterest} alt="pinterest social media icon" /></li>
          <li><img src={socialInstagram} alt="instagram social media icon" /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
