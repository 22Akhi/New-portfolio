import React from 'react'
import './header.css';
import '../../components/about/about.css';
import CTA from './cta';
// import ME from '../../assets/7.png';
import HeaderSocial from './HeaderSocials'
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandCss3 } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
// import  { useState } from 'react';

const Header = () =>
{
  
  // const [ isDarkMode, setIsDarkMode ] = useState( false );

  // const handleToggle = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  return (
    <header>
{/*    
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button className="toggle-button" onClick={handleToggle}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
     
    </div> */}

      
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1> Baishakhi Ganguli </h1>
        <h5 className="text-light">Front end Developer</h5>
        <CTA />
        <HeaderSocial />
        

        <section id="about"> 
          <h2>Tech Stack</h2>
          <p className = "icons">< AiOutlineHtml5 />  < TbBrandCss3 /> < TbBrandJavascript /> < DiReact /> < SiTailwindcss /> < FaNodeJs /></p>
       </section>
        {/* <div className="me">
          <img src= {ME} alt = "me" />
        </div> */}
        <a href= "#contact" className = "scroll__down">Scroll down</a>
      </div>
    </header>
  )
}

export default Header