/* eslint-disable */
import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r7vszdr', 'template_uxv9a6h', form.current, 'nH7B42VZrt34husRY')
      
     e.target.reset();
  };
  return (
    <section className='contact' id="contact-segment">
      <h2 className="contact-hd">Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>tyaps002gmail.com</h5>
            <a href="mailto:tyaps002@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact_option-icon' />
            <h4>Connect with me on LinkedIn</h4>
            <h5>LinkedIn</h5>
            <a href="https://www.linkedin.com/in/titilope-apuabi/" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact_option-icon' />
            <h4>Send a whatsapp message</h4>
            <h5>tyaps002gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348024224764" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact