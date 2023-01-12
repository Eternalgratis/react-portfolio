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
    livedemo: 'https://eternalgratis.github.io/AwesomebooksES6/',
    description: 'This is a basic website that enables a user to add or remove books from a list. It was built using ES6'
  },
  {
    id: 2,
    title: 'Bookstore',
    image: IMG2,
    github: 'https://github.com/Eternalgratis/Bookstore',
    livedemo: 'https://eternalgratis-bookstore.netlify.app/',
    description: 'This is a project built with react that displays list of books where you can add and remove a selected book'
  },
  {
    id: 3,
    title: 'Leaderboard',
    image: IMG3,
    github: 'https://github.com/Eternalgratis/Leaderboard',
    livedemo: 'https://eternalgratis-leaderboard.netlify.app/',
    description: 'A JavaScript project named leaderboard website which displays scores submitted by different players and also allows a user to submit their scores'
  },
  {
    id: 4,
    title: 'Math Magician',
    image: IMG4,
    github: 'https://github.com/Eternalgratis/Math-magician',
    livedemo: 'https://eternalgratis-math-magician.netlify.app/',
    description: 'This is a Single Page App (SPA) for all fans of mathematics that allows users to make simple calculations and read a random math-related quote'
  },
  {
    id: 5,
    title: 'Space Travelers',
    image: IMG5,
    github: 'https://github.com/Eternalgratis/Space-Travelers',
    livedemo: 'https://space-travelers-hub-1088.netlify.app/',
    description: 'A web application for a company that provides commercial and scientific space travel services. It pulls from an open API for bookings and allows users to book rockets, dragons and join selected space missions.'
  },
  {
     id: 6,
     title: 'Budget App',
     image: IMG6,
     github: 'https://github.com/Eternalgratis/Budget-app',
     livedemo: 'https://dribble.com/Alien_pixels',
     description: 'This a mobile web application where you can manage your budget and have a list of transactions associated with a category, so that you can see how much money you spent and on what.'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, title, image, github, livedemo, description }) => {
            return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={description} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={livedemo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              <p className='portfolio__description'>{description}</p>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio