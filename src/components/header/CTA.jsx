/* eslint-disable */
import React from 'react';
import CV from '../../assets/myResume.pdf';

const CTA = () => {
  return (
  <div className="cta">
    <a href={CV} download className="btn" target="_blank" rel="noreferrer">Download CV </a>
    <a href="#contact-segment" className="btn btn-primary" rel="noreferrer">Let&apos;s Talk</a>
  </div>
  );
};

export default CTA;
