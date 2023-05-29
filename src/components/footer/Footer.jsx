import React from 'react'
import './footer.css'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
         <li><a href= "#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target = "_blank"> < GrFacebookOption/></a>
        <a href="https://www.instagram.com/gangulibaishakhi/" target = "_blank">< AiOutlineInstagram /></a>
             <a href = "https://linkedin.com/in/bganguli22" target = "_blank"> < BsLinkedin /></a>
      </div>

     
  </footer>
  )
}

export default Footer