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
              <NavLink to="/" ariaLabel="Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/reservations" ariaLabel="Reservations">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/index.html" ariaLabel="About">About</NavLink>
            </li>
            <li>
              <NavLink to="/index1.html" ariaLabel="Menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/index3.html" ariaLabel="Order Online">Order Online</NavLink>
            </li>
            <li>
              <NavLink to="/index4.html" ariaLabel="Login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</div>
  )
}

export default Navigation