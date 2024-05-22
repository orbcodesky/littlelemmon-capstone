import React from 'react'
import footerlogo from "./images/footerlogo.png";

const Footer = () => {
  return (
    <footer>
    <div id="footer-logo">
        <img src={footerlogo} alt="Logo"/>
    </div>
    <div>
        <h3>Sitemap</h3>
        <br/>
      <ul>
        <li><a href="/" ariaLabel="Navigation">Navigation</a></li>
        <li><a href="/" ariaLabel="Home">Home</a></li>
        <li><a href="/" ariaLabel="About">About</a></li>
        <li><a href="/" ariaLabel="Menu">Menu</a></li>
        <li><a href="/" ariaLabel="Reservations">Reservations</a></li>
        <li><a href="/" ariaLabel="Order Online">Order Online</a></li>
        <li><a href="/" ariaLabel="Login">Login</a></li>
      </ul>
    </div>
    <div>
        <h3>Location Details</h3>
        <br/>
      <ul>
        <li><a href="/" ariaLabel="Address">Address</a></li>
        <li><a href="/" ariaLabel="Home Number">home Number</a>P</li>
        <li><a href="/" ariaLabel="Email">Email</a></li>
        <li><a href="/" ariaLabel="Links">links</a></li>
      </ul>
    </div>
    <div>
        <h3>Social Media Links</h3>
        <br/>
      <ul>
        <li><a href="/" ariaLabel="X">X</a></li>
        <li><a href="/" ariaLabel="Facebook">Facebook</a></li>
        <li><a href="/" ariaLabel="Instagram">Instagram</a></li>
      </ul>
    </div>
    <div>
        <p>Copyright @ Little Lemon</p>
    </div>
</footer>
  )
}

export default Footer