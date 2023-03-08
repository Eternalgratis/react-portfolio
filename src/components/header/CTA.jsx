import React from 'react'
import CV from '../../assets/newestResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV </a>
        <a href="#contact-segment" className='btn btn-primary'>Let&apos;s Talk</a>
    </div>
  )
}

export default CTA