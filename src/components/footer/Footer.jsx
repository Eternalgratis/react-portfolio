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
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/eternalgratis"><FaTwitter/></a>
        <a href="https://github.com/Eternalgratis"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/titilope-apuabi/"><FaLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Eternalgratis. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer