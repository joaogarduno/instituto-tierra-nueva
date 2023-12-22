import React from 'react';
import './MenuDeskTop.css';

import Logo from '../../../Assets/img/logo-institute.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const MenuDeskTop = () => {
  return (
    <div>
      <nav className='navContent nav_menu--desktop'>
        {/* BURGER */}
        <div className='desktop__burger'>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
        
        {/* LOGO */}
        <div className='desktop__logo'>
          <a href='index.html' className='desktop__logo--a'>
            <figure className='figureContent logo__a--figure'>
              <img 
                src={Logo} 
                alt='Logo_de_Instituto_Tierra_Nueva'
              />
            </figure>
          </a>
        </div>

        {/* MENU */}
        <div className='desktop__menu'>
          <ul className='desktop__menu--ul'>
            <li className="menu__ul--li">
              <a className='' href='index.html'>home</a>
            </li>
            <li className="menu__ul--li">
              <a className='desktop__ul--a' href='index.html'>acerca</a>
            </li>
            <li className="menu__ul--li">
              <a className='desktop__ul--a' href='index.html'>noticias</a>
            </li>
            <li className="menu__ul--li">
              <a className='desktop__ul--a' href='index.html'>oferta educativa</a>
            </li>

            {/* SUBMENU */}
            <li className="menu__ul--li">
              <a className='desktop__ul--a' href='index.html'>instituto<RiArrowDropDownLine /></a>

              <ul className="submenu__desktop--ul">
                <li><a href="index.html">preescolar</a></li>
                <li><a href="index.html">primaria</a></li>
                <li><a href="index.html">secundaria</a></li>
                <li><a href="index.html">preparatoria</a></li>
              </ul>
            </li>

            <li className="menu__ul--li">
              <a className='desktop__ul--a' href='index.html'>blog</a>
            </li>
            <li className="menu__ul--li">
              <a className='desktop__ul--a' href='index.html'>contacto</a>
            </li>
          </ul>
        </div>

        {/* ICONS */}
        <div className='desktop__icons'>
          <a 
            href="index.html">
              <span><FaUser /></span>
          </a>
          <a 
            href="index.html">
              <span><FaSearch /></span>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default MenuDeskTop