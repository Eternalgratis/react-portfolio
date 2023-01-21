/* eslint-disable */
import React from 'react';
// import FullStack from '../../assets/fullstack.png';
import HeaderSocials from './HeaderSocials';
import CTA from './CTA';
import './header.css';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className="hello">Hello  I&apos;m</h5>
        <h1 className="my-name">Apuabi Titilope</h1>
        <p className="title">FullStack Developer</p>
        <CTA />
        <HeaderSocials />
        <div className="fullstack__image">
          {/* <img src={FullStack} alt="picure of me" id="slide" /> */}
        </div>
        {/* <a href="#contact" className="scroll__down" target="_blank" rel="noreferrer">Scroll Down</a> */}
      </div>
    </header>
  );
}

export default Header;
