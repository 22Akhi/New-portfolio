import React from 'react'
import './about.css'
import ME from '../../assets/mypic.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary   } from 'react-icons/vsc';

const About = () => {
  return (
   
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className = "container about__container">
        <div className="about__me">
          <div className = "about__me-image">
            <img src= { ME }  alt = "About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className = "about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
              <article className="about__card">
              <FiUsers className = "about__icon"/>
              <h5>Clients</h5>
              <small>3+ </small>
            </article>
              <article className="about__card">
              < VscFolderLibrary  className = "about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            With a background in arts and a passion for creativity, I transitioned into the IT industry, eager to apply my artistic perspective
            to front-end development. I am a quick learner, adapt well to new challenges, and have 1.8 years of diverse IT industry exposure. I bring a unique blend of technical skills in front-end development, proficiency in modern frameworks, and a fresh, innovative approach to problem-solving. Additionally, my exceptional interpersonal
            and communication skills enable effective collaboration with colleagues from diverse backgrounds.
          </p>
          <a href = "#contact" className = "btn btn-primary"> Let's talk</a>
        </div>
     </div>
      
    </section>
  )
}

export default About