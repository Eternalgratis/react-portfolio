/* eslint-disable */
import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.png';

const About = () => {
  return (
    <section id='about'>
      <h2 className="about-hd">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-pic " />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            A diligent FullStack Developer and a great collaborator with a background in developing efficient software applications. I have over 1300+ hours of experience, including mentoring over 5 junior developers to achieve their goals on a strict deadline. I have worked on several projects with other developers across the world. I have mastered communication, collaboration and other soft skills. Strong skills include React, Redux, JavaScript, Ruby on Rails, Figma, and animation libraries 
            for building and designing websites and applications.
          </p>
          <a href="#contact-segment" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About