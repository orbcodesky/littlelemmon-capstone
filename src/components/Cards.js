import React from 'react'
import greeksalad from "./images/greeksalad.jpg";
import brushetta from "./images/brushetta.svg";
import lemonpie from "./images/lemonpie.jpg";


const Cards = () => {
  return (
    <section className="cards">
    <article className="card">
        <img src={greeksalad} alt="img"/>
        <div className="card-title-area">
              <h1 className="card-title">Greek Salad</h1><p className="card-price secondary-peach">$12.99</p>
        </div>
        <p className="paragraph-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        <a className="order-delivery" href="">Order & Delivery</a>
    </article>
     <article className="card">
        <img src={brushetta} alt="img"/>
        <div className="card-title-area">
            <h1 className="card-title">Brushetta</h1><p className="card-price secondary-peach">$12.99</p>
      </div>
         <p className="paragraph-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
         <a className="order-delivery" href="">Order & Delivery</a>
        </article> 
     <article className="card">
        <img src={lemonpie} alt="img"/>
        <div className="card-title-area">
            <h1 className="card-title">Lemon Dessert</h1><p className="card-price secondary-peach">$12.99</p>
      </div>
          <p className="paragraph-text">This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <a className="order-delivery" href="#">Order & Delivery</a>
        </article>
</section>
  )
}

export default Cards