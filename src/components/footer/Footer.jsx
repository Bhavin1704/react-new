import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './footer.css'

export const Footer = () => {
  return (

    <footer>
      <a href="#" className='footer__logo'>Bhavin Panchal</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" target='_blank'><FaFacebook /></a>
        <a href="https://instagram.com" target='_blank'><FiInstagram /></a>
        <a href="https://twiiter.com" target='_blank'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bhavin Panchal. All rights Reserved.</small>
      </div>
    </footer>
  )
}
export default Footer;