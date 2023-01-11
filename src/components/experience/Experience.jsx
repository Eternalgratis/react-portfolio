import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

    <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill experience__details-icon />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill experience__details-icon />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill experience__details-icon />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
               <BsPatchCheckFill experience__details-icon />
               <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
            <article className='experience__detail'>
               <BsPatchCheckFill experience__details-icon />
               <h4>MYSQL</h4>
               <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__detail'>
               <BsPatchCheckFill experience__details-icon />
               <h4>Buby</h4>
               <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__detail'>
               <BsPatchCheckFill experience__details-icon />
               <h4>Ruby on Rails</h4>
               <small className='text-light'>Experienced</small>
            </article>
      </div>
      </div>
    </section>
  )
}

export default Experience