import React from 'react'
import './services.css'
import { AiOutlineCheck } from 'react-icons/ai'

const Services = () => {
  return (
    <section id="services">
      <h5>What I know</h5>
      <h2>Skill set</h2>
      <div className="container services__container">
        <article className ="service">
          <div className = "service__head">
            <h3>Front end development</h3>
          </div>
          <ul className ="service__list">
            <li><AiOutlineCheck className="service__list-icon" />
              <p> HTML5

</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>CSS3
</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Javascript</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>React</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>Word press
</p>
            </li>
                <li><AiOutlineCheck className="service__list-icon" />
              <p>Tailwind
</p>
            </li>

          </ul>
        </article>



             <article className ="service">
          <div className = "service__head">
            <h3>Backend development</h3>
          </div>
          <ul className ="service__list">
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Nodejs</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>C++</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>MySQL
</p>
            </li>
            
          </ul>
        </article>



             <article className ="service">
          <div className = "service__head">
            <h3>Tools</h3>
          </div>
          <ul className ="service__list">
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Visual Studio Code
</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>GIT
</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Jira/Confluence
</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p> Canva</p>
            </li>
             <li><AiOutlineCheck className="service__list-icon" />
              <p>Adobe Photoshop & Illustrator</p>
            </li>
           
               <li><AiOutlineCheck className="service__list-icon" />
              <p>Figma</p>
            </li>
            
          </ul>
        </article>

      </div>  
    </section>
  )
}

export default Services