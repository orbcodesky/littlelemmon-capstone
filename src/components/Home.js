import React from 'react'
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Cards from "../components/Cards";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

const Home = () => {
  return (
    <div>
        <Hero />
        <Specials />
        <Cards />
        <Testimonials />
        <About />
    </div>
  )
}

export default Home