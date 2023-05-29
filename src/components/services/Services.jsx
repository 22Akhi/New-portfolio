import React from 'react'
import './services.css'
import { AiOutlineCheck } from 'react-icons/ai'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className ="service">
          <div className = "service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className ="service__list">
            <li><AiOutlineCheck className="service__list-icon" />
              <p> User-Centric Interface Design

</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>Wireframing and Prototyping Expertise
</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Visual Design and Branding Skills</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>Responsive and Mobile-Friendly Design</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>Interactive Elements and Animations
</p>
            </li>

          </ul>
        </article>



             <article className ="service">
          <div className = "service__head">
            <h3>Web Development</h3>
          </div>
          <ul className ="service__list">
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Responsive and Mobile-Friendly Web Design</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>Back-End Development: Database and Server-Side</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>API Integration and Web Services
</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>Debugging and Troubleshooting Skills

</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>Version Control (Git) and Deployment
</p>
            </li>
            
          </ul>
        </article>



             <article className ="service">
          <div className = "service__head">
            <h3>Content creation</h3>
          </div>
          <ul className ="service__list">
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Content Strategy and Audience Targeting
</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>SEO Optimization and Keyword Research
</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Video Production and Editing Abilities
</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>Creating images in Illustrator, Photoshop , Canva</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>Social Media Content Creation</p>
            </li>
            
          </ul>
        </article>

      </div>  
    </section>
  )
}

export default Services