import React from 'react'
import avatar1 from "./images/avatar_1.png";
import avatar2 from "./images/avatar_2.svg";
import avatar3 from "./images/avatar_3.png";
import avatar4 from "./images/avatar_4.png";
import star from "./images/star.svg";



const Testimonials = () => {
  return (
    <div>
         <section>
            <article>
                <h2 className="testimonials-title">Testimonials</h2>
            </article>
        </section>

        <section className="testimonials own-green-bg">
        <article>
                <img src={avatar1} width="75" alt="testimonials"  />
                    <div>
                    <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                    </div>
                    <div className="name">
                        Maria Smith
                    </div>
                    <div className="description">
                        The restaurant is great!
                    </div>
              </article>
              <article>
                <img src={avatar2} width="75" alt="testimonials" />
                    <div class="stars">
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                    </div>
                    <div className="name">
                        Joe Doe
                    </div>
                    <div className="description">
                        The service was outstanding!
                    </div>
              </article>
              <article>
                <img src={avatar3}  width="75" alt='testimonials'/>
                    <div className="stars">
                    <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                    </div>
                    <div className="name">
                        Joe Doe
                    </div>
                    <div className="description">
                        The keylime pie was wonderful!
                    </div>
              </article>
              <article>
                <img src={avatar4}  width="75" alt='testimonials'/>
                    <div className="stars">
                    <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                        <img className="testimonials-star" src={star} alt=""/>
                    </div>
                    <div className="name">
                        Joe Doe
                    </div>
                    <div className="description">
                        Maria gave us great service!
                    </div>
              </article>
        </section>
    </div>
  )
}

export default Testimonials