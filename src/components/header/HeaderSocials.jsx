import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a rel='alternate' href="https://www.linkedin.com/in/titilope-apuabi/" target="_blank"><BsLinkedin/></a> 
       <a rel='alternate' href="https://github.com" target="_blank"><BsGithub/></a> 
       <a rel='alternate' href="https://twitter.com" target="_blank"><BsTwitter/></a> 
    </div>
  )
}

export default HeaderSocials