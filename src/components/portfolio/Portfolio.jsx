import React from 'react'
import './portfolio.css'
import  port1  from '../../assets/port1.png';
import  port2  from '../../assets/port2.png';
import port3  from '../../assets/port3.png';
import  port4  from '../../assets/port4.png';
import  port5  from '../../assets/port5.png';
// import  port6  from '../../assets/dr4.webp';


const data = [
  {
    id: 1,
    image: port1,
    title: "Food Order App (React)",
    github: "https://github.com/22Akhi/foodorderApp",
    demo:"https://foodorderapp.herokuapp.com/"
  },
    {
    id: 2,
    image: port2,
    title: "Sign up & Login(React, Mongodb, Nodejs, Tailwindcss)",
    github: "https://github.com/22Akhi/Signup-Login",
    
  },
      {
    id: 3,
    image: port3,
    title: "Expense Tracker (React)",
    github: "https://github.com/22Akhi/ExpenseTracker",
    demo:"https://myexpensetracker.herokuapp.com/"
  },
        {
    id: 4,
    image: port4,
    title: "Dance school website (HTML,CSS,Javascript,Bootstrap)",
    github: "https://github.com",
    demo:"http://rhythmdanceacademy.in/"
  },
          {
    id: 5,
    image: port5,
    title: "Portfolio Website (React)",
    github: "https://github.com/22Akhi/New-portfolio",
    demo:"http://www.baishakhiportfolio.com"
  }
  //           {
  //   id: 6,
  //   image: port6,
  //   title: "Dance school website",
  //   github: "https://github.com",
  //   demo:"http://rhythmdanceacademy.in/"
  // }

]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map( ( { id, image, title, github, demo } ) =>
          {
            return (
              <article key={ id }className = "portfolio__item">
          <div className = "portfolio__item-image">
                  <img src={ image } alt={ title}/>
       </div>
                <h3>{ title}</h3> 
             <div className = "portfolio__item-cta">
                  <a href={ github}  target = "_blank" className="btn">Github</a>
              <a href={demo} className="btn btn-primary" target = "_blank"> Live Demo</a>
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