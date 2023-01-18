import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/awesomebooks.png';
import IMG2 from '../../assets/bookstore.png';
import IMG3 from '../../assets/leaderboard.png';
import IMG4 from '../../assets/Math-Magician.png';
import IMG5 from '../../assets/tvshows.png';
import IMG6 from '../../assets/agrosummit.png';


const data = [
  {
    id: 1,
    title: 'Awesome Books',
    image: IMG1,
    languages: ' HTML, CSS, JavaScript',
    description: 'This is a basic website that enables a user to add or remove books from a list. It was built using ES6',
    github: 'https://github.com/Eternalgratis/AwesomebooksES6',
    livedemo: 'https://eternalgratis.github.io/AwesomebooksES6/',

  },
  {
    id: 2,
    title: 'Bookstore',
    image: IMG2,
    languages: ' HTML, CSS, JavaScript, React',
    description: 'This is a project built with react that displays list of books where you can add and remove a selected book',
    github: 'https://github.com/Eternalgratis/Bookstore',
    livedemo: 'https://eternalgratis-bookstore.netlify.app/',
  },
  {
    id: 3,
    title: 'Leaderboard',
    image: IMG3,
    languages: ' HTML, CSS, JavaScript',
    description: 'A JavaScript website which displays and submit scores by different players.',
    github: 'https://github.com/Eternalgratis/Leaderboard',
    livedemo: 'https://eternalgratis-leaderboard.netlify.app/',
  },
  {
    id: 4,
    title: 'Math Magician',
    image: IMG4,
    languages: 'HTML, CSS, JavaScript, React',
    description: 'A single Page App (SPA) for all the fans of mathematics and it allows users to make simple calculations and read a random math-related quote',
    github: 'https://github.com/Eternalgratis/Math-magician',
    livedemo: 'https://eternalgratis-math-magician.netlify.app/',
  },
  {
    id: 5,
    title: 'Tv Shows',
    image: IMG5,
    languages: ' HTML, CSS, JavaScript, React, Redux',
    description: 'An open API fetched webpage where we can see series of different kinds, called TV MAX',
    github: 'https://github.com/Eternalgratis/tv-shows',
    livedemo: 'https://eternalgratis-tvshows.netlify.app/',
  },
  {
     id: 6,
     title: 'Agro Summit',
     image: IMG6,
      languages: 'JavaScript, HTML, CSS',
     description: 'This shows list of past agricultural summit and their details for future reference to serve as guidelines',
     github: 'https://github.com/Eternalgratis/First-capstone-Project',
     livedemo: 'https://agro-food-summit.netlify.app/',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, title, image, github, livedemo, languages, description }) => {
            return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={description} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__description'>
                <h3>Built with</h3>
                <h5>{languages}</h5>
                <p>{description}</p>
              </div>
              <div className="portfolio__item-cta">
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