import React from 'react'
import { Link } from 'react-router-dom'


function Navside() {
  return (
    <>
         <section className="slider-three">

                <div className="slider-three__shape-1 float-bob-y" />

                <div className="slider-three__shape-2 float-bob-x" />

                <div className="slider-three__shape-3 float-bob-y" />

                <div className="slider-three__shape-4 float-bob-y" />

                <div className="container">
                    <div className="row">
                    <div className="col-xl-5 d-flex">
                        <div className="my-auto wow fadeInUp" data-wow-duration="1500ms">
                        <h3 className="slider-three__title">
                            Let’s Grow your future together
                        </h3>
                        
                        <p className="slider-three__text">
                            Sed ut perspiciatis unde omnis natus sit accusantium doloremque
                            laudantium totam aperiam
                        </p>
                        
                        <div className="slider-three__btns">
                            <Link to="/about" className="thm-btn thm-btn--three slider-three__btn" >
                            <span>
                                Get Started
                                <i className="far fa-arrow-right" />
                            </span>
                            </Link>
                            
                            <Link to="/about" className="thm-btn thm-btn--two slider-three__btn slider-three__btn--two" >
                            <span>
                                Learn More
                                <i className="far fa-arrow-right" />
                            </span>
                            </Link>
                        
                        </div>
                        
                        </div>
                    
                    </div>
                    
                    <div className="col-xl-7">
                        <div className="slider-three__image">
                        <img src="assets/images/background/slider-3-1.jpg"  />
                        </div>
                    
                    </div>
                    
                    </div>

                </div>

        </section>
    </>
  )
}

export default Navside