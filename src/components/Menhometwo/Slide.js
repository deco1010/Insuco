import React from 'react'
import Img from '../../assets/images/background/slider-2-1.jpg'
import { Link } from 'react-router-dom'

function Slide() {
  return (
    <>
        <section className="slider-two"  style={{ backgroundImage:`url(${Img})` }} >
            <div className="container">
                <div className="slider-two__box wow fadeInUp" data-wow-duration="1500ms">
                <h3 className="slider-two__title">Let’s Grow your future together</h3>
                
                <p className="slider-two__text">
                    Sed ut perspiciatis unde omnis natus sit accusantium doloremque
                    laudantium totam aperiam
                </p>
                
                <div className="slider-two__btns">
                    <Link to="/about" className="thm-btn thm-btn--three slider-two__btn">
                    <span>
                        Get Started
                        <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                    
                    <Link to="/about" className="thm-btn thm-btn--three slider-two__btn slider-two__btn--two" >
                    <span>
                        Learn More
                        <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                    
                </div>
               
                </div>
                
            </div>
        </section>

    </>
  )
}

export default Slide