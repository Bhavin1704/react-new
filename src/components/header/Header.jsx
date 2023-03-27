import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from "../../assets/bhavin2.JPEG"
import HederSocial from './HederSocial';
export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Bhavin Panchal</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HederSocial />
        <div className='me'>
          <img src={ME} alt='Bhavin Panchal' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;

