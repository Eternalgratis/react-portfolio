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
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam iure provident amet? Necessitatibus qui sapiente temporibus perspiciatis. Ipsa, qui? Dignissimos, dolorem cumque sit expedita consequatur iusto quam assumenda itaque. Quidem unde animi aliquid ab aut natus explicabo. Possimus explicabo unde totam impedit repudiandae reiciendis pariatur minima, ex vitae nam, molestiae, aliquam doloremque voluptatibus reprehenderit ratione laborum tempore. Quae, itaque! Nemo cumque dignissimos necessitatibus eos obcaecati, neque inventore nobis reiciendis, esse quod, facilis officiis veritatis perferendis illum doloribus dolorem. Maxime cupiditate debitis ad quidem consequatur fugiat eos, pariatur fugit placeat.'
  },
  {
    avatar: avatar2,
    name: 'Ambrose Isigba',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam iure provident amet? Necessitatibus qui sapiente temporibus perspiciatis. Ipsa, qui? Dignissimos, dolorem cumque sit expedita consequatur iusto quam assumenda itaque. Quidem unde animi aliquid ab aut natus explicabo. Possimus explicabo unde totam impedit repudiandae reiciendis pariatur minima, ex vitae nam, molestiae, aliquam doloremque voluptatibus reprehenderit ratione laborum tempore. Quae, itaque! Nemo cumque dignissimos necessitatibus eos obcaecati, neque inventore nobis reiciendis, esse quod, facilis officiis veritatis perferendis illum doloribus dolorem. Maxime cupiditate debitis ad quidem consequatur fugiat eos, pariatur fugit placeat.'
  },
  {
    avatar: avatar3,
    name: 'Aneal Layea',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam iure provident amet? Necessitatibus qui sapiente temporibus perspiciatis. Ipsa, qui? Dignissimos, dolorem cumque sit expedita consequatur iusto quam assumenda itaque. Quidem unde animi aliquid ab aut natus explicabo. Possimus explicabo unde totam impedit repudiandae reiciendis pariatur minima, ex vitae nam, molestiae, aliquam doloremque voluptatibus reprehenderit ratione laborum tempore. Quae, itaque! Nemo cumque dignissimos necessitatibus eos obcaecati, neque inventore nobis reiciendis, esse quod, facilis officiis veritatis perferendis illum doloribus dolorem. Maxime cupiditate debitis ad quidem consequatur fugiat eos, pariatur fugit placeat.'
  },
  {
    avatar: avatar4,
    name: 'Afolabi Akorede',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam iure provident amet? Necessitatibus qui sapiente temporibus perspiciatis. Ipsa, qui? Dignissimos, dolorem cumque sit expedita consequatur iusto quam assumenda itaque. Quidem unde animi aliquid ab aut natus explicabo. Possimus explicabo unde totam impedit repudiandae reiciendis pariatur minima, ex vitae nam, molestiae, aliquam doloremque voluptatibus reprehenderit ratione laborum tempore. Quae, itaque! Nemo cumque dignissimos necessitatibus eos obcaecati, neque inventore nobis reiciendis, esse quod, facilis officiis veritatis perferendis illum doloribus dolorem. Maxime cupiditate debitis ad quidem consequatur fugiat eos, pariatur fugit placeat.'
  },
  {
    avatar: avatar5,
    name: 'Ese Odinko',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam iure provident amet? Necessitatibus qui sapiente temporibus perspiciatis. Ipsa, qui? Dignissimos, dolorem cumque sit expedita consequatur iusto quam assumenda itaque. Quidem unde animi aliquid ab aut natus explicabo. Possimus explicabo unde totam impedit repudiandae reiciendis pariatur minima, ex vitae nam, molestiae, aliquam doloremque voluptatibus reprehenderit ratione laborum tempore. Quae, itaque! Nemo cumque dignissimos necessitatibus eos obcaecati, neque inventore nobis reiciendis, esse quod, facilis officiis veritatis perferendis illum doloribus dolorem. Maxime cupiditate debitis ad quidem consequatur fugiat eos, pariatur fugit placeat.'
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