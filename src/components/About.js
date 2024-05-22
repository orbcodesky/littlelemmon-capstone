import React from 'react'
import marioadriana from "./images/marioadriana.jpg";
import marioadrianb from "./images/marioadrianb.jpg";
 
const About = () => {
  return (
    <section className="about">
    <article>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-text"> 
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.

            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
    </article>
     <article id="about-images">
            <img id="about-under-img" src={marioadriana} alt="Image"/>
            <img id="about-over-img" src={marioadrianb} alt="Image"/>
 </article>
</section>
  )
}

export default About
