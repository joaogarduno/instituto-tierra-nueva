import React from 'react'
import './MenuMobile.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const MenuMobile = () => {
  return (
    <div>
      <nav className="navContent nav__menu--mobile">
        
        {/* MOBILE - BURGER */}
        <div className="mobile__burger">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>

        {/* MOBILE - MENU */}
        <div className="mobile__menu">
          <ul className="mobile__ul">
            <li className="mobile__ul--li">
              <a href="index.html">home</a>
            </li>
            <li className="mobile__ul--li">
              <a href="index.html">acerca</a>
            </li>
            <li className="mobile__ul--li">
              <a href="index.html">noticias</a>
            </li>

            {/* MOBILE - SUBMENU */}
            <li className="mobile__ul--li">
              <a href="index.html">oferta educativa <RiArrowDropDownLine /></a>
              <ul className="submenu__mobile--ul">
                <li><a href="index.html">preescolar</a></li>
                <li><a href="index.html">primaria</a></li>
                <li><a href="index.html">secundaria</a></li>
                <li><a href="index.html">preparatoria</a></li>
              </ul>
            </li>
            {/* <li className="mobile__ul--li"><a href="index.html">oferta educativa</a></li> */}

            <li className="mobile__ul--li"><a href="index.html">blog</a></li>
            <li className="mobile__ul--li"><a href="index.html">contacto</a></li>
          </ul>
        </div>

        {/* MOBILE - ICONS */}
        <div className='mobile__icons'>
          <ul>
            <li><a href="https://www.facebook.com"><FaFacebook /></a></li>
            <li><a href="https://www.instagram.com"><FaInstagram /></a></li>
            <li><a href="https://www.youtube.com"><FaYoutube /></a></li>
          </ul>
        </div>

      </nav>
    </div>
  )
}

export default MenuMobile