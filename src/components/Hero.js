import React from "react";
import restaurantFood from "./images/restaurantfood.jpg";

const Hero = () => {
  return (
    <section className="hero own-green-bg">
      <article>
        <h1 className="display-title own-yellow">Little Lemon</h1>
        <p className="display-subtitle secondary-pastel">Chicago</p>
        <p className="display-text secondary-pastel mt-5 mb-5">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <a href="/" className="little-pill-button mb-5" ariaLabel="Reserve Table">
          Reserve Table
        </a>
      </article>
      <article id="hero-img">
        <img src={restaurantFood} alt="Restaurant Food" />
      </article>
    </section>
  );
};

export default Hero;
