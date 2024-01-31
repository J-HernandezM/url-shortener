import logo from '../../../public/images/logo.svg'
import illustration from '../../../public/images/illustration-working.svg'
import './Header.scss'
import { useState } from 'react'

function Header () {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header>
      <div className="header-up">
        <img className='header-logo' src={logo} alt="Shortly logo" />
        <div className='header-desktop-menu'>
          <Menu />
        </div>
        <i onClick={() => { setOpen(!open) }} className="fa-solid fa-bars fa-2xl header-mobile-icon" style={{ color: '#9e9aa7' }}></i>
      </div>
      <div className={`header-mobile-${open} header-mobile-menu`}>
        <Menu />
      </div>

      <div className="header-down">
        <img src={illustration} alt="Illustration of a person working" />
        <div className="header-info">
          <h1 className="header-title"></h1>
          <h2 className="header-description"></h2>
          <button className='header-btn'>Get Started</button>
        </div>
      </div>
    </header>
  )
}

function Menu () {
  return (
    <>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <ul>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </>
  )
}

export default Header
