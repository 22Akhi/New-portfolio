import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>  What I offer</h5>
      <h2>Services</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>UI/UX Design</h3>
          <div className="experience__content">
            <article className = "experience-details">
              <BsFillPatchCheckFill className = "experience__details-icon"/>
              <div>
                 <h5>User-Centric Interface Design

</h5>
              {/* <small className = 'text-light'>Experienced</small> */}
             </div>
            </article>
              <article className = "experience-details">
              <BsFillPatchCheckFill  className = "experience__details-icon"/>
              <div>
                 <h5>Wireframing and Prototyping Expertise</h5>
              {/* <small className = 'text-light'>Experienced</small> */}
             </div>
            </article>
              <article className = "experience-details">
              <BsFillPatchCheckFill className = "experience__details-icon"/> 
              <div>
                 <h5>Visual Design and Branding Skills</h5>
              {/* <small className = 'text-light'>Experienced</small> */}
             </div>
            </article>
              <article className = "experience-details">
              <BsFillPatchCheckFill className = "experience__details-icon"/> 
              <div>
                 <h5>Video Production & Editing Abilities</h5>
              {/* <small className = 'text-light'>Experienced</small> */}
             </div>
            </article>
              <article className = "experience-details">
              <BsFillPatchCheckFill  className = "experience__details-icon"/>
              <div>
                 <h5>Responsive and Mobile-Friendly Design</h5>
              {/* <small className = 'text-light'>Experienced</small> */}
                    </div>
                   
            </article>
               <article className = "experience-details">
              <BsFillPatchCheckFill className = "experience__details-icon"/> 
              <div>
                 <h4>Interactive Elements and Animations</h4>
              {/* <small className = 'text-light'>Intermediate</small> */}
             </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
           <h3>Web Development</h3>
          <div className="experience__content">
            <article className = "experience-details">
              <BsFillPatchCheckFill  className = "experience__details-icon"/>
              <div>
                 <h5>Responsive and Mobile-Friendly Web Design</h5>
              {/* <small className = 'text-light'>Intermediate</small> */}
             </div>
            </article>
              <article className = "experience-details">
              <BsFillPatchCheckFill  className = "experience__details-icon"/>
              <div>
                 <h5>Back-End Development: Database and Server-Side</h5>
              {/* <small className = 'text-light'>Basic</small> */}
             </div>
            </article>
              <article className = "experience-details">
              <BsFillPatchCheckFill className = "experience__details-icon"/>
              <div>
                 <h5>API Integration and Web Services</h5>
              {/* <small className = 'text-light'>Basic</small> */}
             </div>
                 </article>
                        <article className = "experience-details">
              <BsFillPatchCheckFill  className = "experience__details-icon"/>
              <div>
                 <h5>Version Control (Git) and Deployment

</h5>
              {/* <small className = 'text-light'>Basic</small> */}
             </div>
            </article>
              <article className = "experience-details">
              <BsFillPatchCheckFill  className = "experience__details-icon"/>
              <div>
                 <h5>Debugging and Troubleshooting Skills. 

</h5>
              {/* <small className = 'text-light'>Basic</small> */}
             </div>
                 </article>
                    <article className = "experience-details">
              <BsFillPatchCheckFill  className = "experience__details-icon"/>
              <div>
                 <h5>Creating images in Illustrator, Photoshop , Canva

</h5>
              {/* <small className = 'text-light'>Basic</small> */}
             </div>
                 </article>
                 
             
          </div>
           </div>
         
      </div>
    </section>
  )
}

export default Experience