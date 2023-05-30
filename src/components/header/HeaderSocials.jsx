import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

//HeaderSocials
const HeaderSocials = () => {
  return (
      <div className = 'header__socials'>
          <a href="https://linkedin.com/in/bganguli22" target="blank"> <BsLinkedin/></a>
          <a href="https://github.com/22Akhi" target="blank"> <FaGithubSquare/></a>
            
  </div>
  )
}

export default HeaderSocials