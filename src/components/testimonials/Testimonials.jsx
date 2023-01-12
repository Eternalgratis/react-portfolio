import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'

// import Swiper core and required modules
// import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avatar1,
    name: 'Natasha Chirombe',
    review: 'A great teammate and software developer, she is always ready to put in 100% of her work.I have worked with her and l have never regretted any moment.She will be of value to any company , l would definitely love to work with her again'
  },
  {
    avatar: avatar2,
    name: 'Ambrose Isigba',
    review: 'A very hard-working individual. She always tries to learn something new so I can say she is a lifelong learner. I think that is a very important thing and unique thing in web development.'
  },
  {
    avatar: avatar3,
    name: 'Aneal Layea',
    review: 'She is a committed developer, always open to new ideas and full of energy. Building projects together has been a delightful experience, she definitely knows how to be a team player. Resourceful and passionate, she is willing to overcome any challenge she faces. She is an element that cannot be missing from your team.'
  },
  {
    avatar: avatar4,
    name: 'Afolabi Akorede',
    review: 'She is a very proactive person in terms of learning new things or trying out something new. she has a good sense while writing industry-standard code. she is very fun to work with and helpful every time she is needed. I would like to highly recommend her for any Software development role. I believe she can add good value to any tech team, be it remote or on-site'
  },
  {
    avatar: avatar5,
    name: 'Ese Odinko',
    review: 'An amazing individual with a great personality. We collaborated on couple of projects and i must she is very diligent with her work. She is kind and caring and was always available when needed for problem-solving. I recommend her for any job opportunity.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Partners</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
      {/* // install Swiper modules
      modules={[ Pagination ]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }} */}
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Partners-images" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials