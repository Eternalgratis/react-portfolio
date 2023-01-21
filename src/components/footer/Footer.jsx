/* eslint-disable */
import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Eternalgratis</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact-segment">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/eternalgratis" target="_blank" rel="noreferrer"><FaTwitter/></a>
        <a href="https://github.com/Eternalgratis" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/titilope-apuabi/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Eternalgratis. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer