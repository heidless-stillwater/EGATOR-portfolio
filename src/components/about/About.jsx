import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>BSc Comp Sci 1990</small>
              <small></small>
              <small></small>
              <small></small>
              <small></small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <ul>
                <li>
                  <small>Small growing concerns & Start Ups in SaaS & dApp space.</small>
                </li>
              </ul>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <ul>
                <li>
                  <small>S.M.A.R.T Deliverable Contracts preffered.</small>
                </li>
              </ul>
            </article>
          </div>

          <p>
            I've had the privilege of combining a career in both the Arts & IT. Agilista. Experience as both Scrum Master & ADM. Returning my focus to Software & Business Opportunities.
          </p>
          <p>  
            Exploring opportunities in the SaaS, blockchain space. 
          </p>
          <p>
            Looking to quickly regain my sea legs as a Dev. Open to short, deliverable based contracts - particularly relating to SaaS & blockchain.
          </p>
          <p>
            Very open to the Charity Sector - particularly Food Poverty - How can I help?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About