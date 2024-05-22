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
        <li><a href="">Navigation</a></li>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </div>
    <div>
        <h3>Location Details</h3>
        <br/>
      <ul>
        <li><a href="">Address</a></li>
        <li><a href="">hone Number</a>P</li>
        <li><a href="">Email</a></li>
        <li><a href="">links</a></li>
      </ul>
    </div>
    <div>
        <h3>Social Media Links</h3>
        <br/>
      <ul>
        <li><a href="">X</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Instagram</a></li>
      </ul>
    </div>
    <div>
        <p>Copyright @ Little Lemon</p>
    </div>
</footer>
  )
}

export default Footer