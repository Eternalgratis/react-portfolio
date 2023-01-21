/* eslint-disable */
import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5 className="services-hd2">What I offer</h5>
      <h2 className="services-hd">Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create placeholders for clear direction of what is required</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create a hierarchy of styles and fonts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Radio buttons and dropdown for quick decision of options</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Icons for effective communication</p>
            </li> 
           </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure apps takes barest minimum time to load</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create User-Friendly applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure clear and effective CTAs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create Mobile responsive applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure cross browser compatibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimized for search Engines</p>
            </li>
          </ul>
        </article>
        {/* End of UWeb Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Articles</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <a href="https://medium.com/@tyaps002/describing-my-journey-as-a-new-software-developer-1ec854e20dca">Describing my journey as a Junior developer</a>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <a href="#" target="_blank" rel="noreferrer">More to come very soon</a>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <a href="#" target="_blank" rel="noreferrer">In Progress</a>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <a href="#" target="_blank" rel="noreferrer">In Progress</a>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <a href="#" target="_blank" rel="noreferrer">In Progress</a>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services