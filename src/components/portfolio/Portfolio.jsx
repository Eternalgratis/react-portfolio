import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/awesomebooks.png';
import IMG2 from '../../assets/bookstore.png';
import IMG3 from '../../assets/leaderboard.png';
import IMG4 from '../../assets/Math-Magician.png';
import IMG5 from '../../assets/spaceTravelers.png';
import IMG6 from '../../assets/BudgetApp.png';


const data = [
  {
    id: 1,
    title: 'Awesome Books',
    image: IMG1,
    github: 'https://github.com/Eternalgratis/AwesomebooksES6',
    liveDemo: 'https://dribble.com/Alien_pixels',
  },
  {
  id: 2,
  title: 'Bookstore',
  image: IMG2,
  github: 'https://github.com/Eternalgratis/Bookstore',
  liveDemo: 'https://eternalgratis-bookstore.netlify.app/'
  },
  {
  id: 3,
  title: 'Leaderboard',
  image: IMG3,
  github: 'https://github.com/Eternalgratis/Leaderboard',
  liveDemo: 'https://eternalgratis-leaderboard.netlify.app/'
  },
  {
    id: 4,
    title: 'Math Magician',
    image: IMG4,
    github: 'https://github.com/Eternalgratis/Math-magician',
    liveDemo: 'https://eternalgratis-math-magician.netlify.app/',
  },
  {
    id: 5,
    title: 'Space Travelers',
    image: IMG5,
    github: 'https://github.com/Eternalgratis/Space-Travelers',
    liveDemo: 'https://space-travelers-hub-1088.netlify.app/',
  },
  {
    id: 6,
    title: 'Car Cruise',
    image: IMG6,
    github: 'https://github.com/Eternalgratis/car_cruise_rental',
    liveDemo: 'https://dribble.com/Alien_pixels',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, title, image, github, livedemo }) => {
            return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={livedemo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio