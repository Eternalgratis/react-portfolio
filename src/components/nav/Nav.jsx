/* eslint-disable */
import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#home" target="_blank" rel="noreferrer" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" target="_blank" rel="noreferrer" onClick={() => setActiveNav('#About')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" target="_blank" rel="noreferrer" onClick={() => setActiveNav('#Experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" target="_blank" rel="noreferrer" onClick={() => setActiveNav('#Services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact-segment" target="_blank" rel="noreferrer" onClick={() => setActiveNav('#contact-segment')} className={activeNav === '#contact-segment' ? 'active' : ''} ><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav