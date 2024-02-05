import logo from '../../assets/images/logo.svg'
import illustration from '../../assets/images/illustration-working.svg'
import './Header.scss'
import { useState } from 'react'
import Menu from './Menu'

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
        <div className="header-info">
          <h1 className="header-title">More than just shorter links</h1>
          <h2 className="header-description">Build your brand&apos;s recognition and get detailed insights on how your links are performing.</h2>
          <button className='header-btn'>Get Started</button>
        </div>
        <img className='header-illustration' src={illustration} alt="Illustration of a person working" />
      </div>
    </header>
  )
}

export default Header
