import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import logo from "./images/logo.png";
import {ReactComponent as Hamburger} from './images/burger-menu.svg'


const Navigation = () => {

  const [showNavigation, setShowNavigation] = useState(false);

  const handleShowNavigation = () => {
    setShowNavigation(!showNavigation);
  }


  return (
    <div className="navigation">
    <header>
        <img id="hero-img" src={logo} alt="Little Lemmon"/>
    </header>
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
        </div>
        <div className="menu-icon" onClick={handleShowNavigation}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavigation && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/reservations">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/index.html">About</NavLink>
            </li>
            <li>
              <NavLink to="/index1.html">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/index3.html">Order Online</NavLink>
            </li>
            <li>
              <NavLink to="/index4.html">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</div>
  )
}

export default Navigation