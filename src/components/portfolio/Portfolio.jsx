import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/nodejs.jpg'
import IMG2 from '../../assets/nestjs.jpg'
import IMG3 from '../../assets/reactjs.jpg'
import IMG4 from '../../assets/flutterfirebase.jpg'
import IMG5 from '../../assets/MERN.jpg'
import IMG6 from '../../assets/reactnative.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>
            This is a project for Discord Boot Developed with Nodejs . . .
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/pseudoO97/ChocoBot'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>This is Api project For Book Developed with Nestjs . . .</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/pseudoO97/bookapi'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>
            Authentication with page sign in and sign up with email verfication
            and Reset password . . .
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/pseudoO97/WebApp'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>
            This project is an mobile application usign Flutter and FireBase
            technologie (Dart) . . .{' '}
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/pseudoO97/flutterApp'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>
            This project is an E-commerce WebSite usign MERN technologie . . .{' '}
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/pseudoO97/Marocfiscal'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>
            This project is an Mobile Camera usign React Native technologie . .
            .{' '}
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/pseudoO97/Camera'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
