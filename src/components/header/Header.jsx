import React from 'react'
import FullStack from '../../assets/fullstack.png'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'
import './header.css'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello  I&apos;m</h5>
        <h1>Eternalgratis</h1>
        <h5 className='text-light'>FullStack Developer skilled in Javascript react ruby and ruby on rails</h5>
        <CTA />
        <HeaderSocials />
        <div className="fullstack__image">
          <img src={FullStack} alt="picure of me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header