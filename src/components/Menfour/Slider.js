import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import {Link} from 'react-router-dom'


function Slider() {

    const options = {
        loop : true,
        autoplay : true,
        autoplayTimeout : 7000,
        items : 1,
        margin : 0,
        animateIn : "fadeIn",
        animateOut : "fadeOut",
        nav : false,
        dots: false,
        navText : ["<span class=\"far fa-arrow-left\"></span>","<span class=\"far fa-arrow-right\"></span>"] };

  return (
    <>
        <section className="slider-four">
            <OwlCarousel className="thm-owl__carousel owl-carousel owl-theme" {...options}>
                <div className="item">
                <div className="slider-four__item">
                    <div className="slider-four__image" style={{ backgroundImage: "url(assets/images/shapes/slider-4-bg-1-1.jpg)" }} />
                  
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-5 d-flex">
                        <div className="my-auto">
                            <h2 className="slider-four__title">
                            Let’s Grow your <span>future</span>
                            together
                            </h2>
                            
                            <p className="slider-four__text">
                            Sed ut perspiciatis unde omnis natus sit accusantium
                            doloremque laudantium totam aperiam
                            </p>
                            
                            <div className="slider-four__btns">
                            <Link to="/about" className="thm-btn slider-four__btn">
                                <span>
                                Get Started
                                <i className="far fa-arrow-right" />
                                </span>
                            </Link>
                           
                            <Link to="/about" className="thm-btn thm-btn--three slider-four__btn slider-four__btn--two" >
                                <span>
                                Learn More
                                <i className="far fa-arrow-right" />
                                </span>
                            </Link>
                           
                            </div>
                           
                        </div>
                        
                        </div>
                        
                        <div className="col-xl-7">
                        <div className="slider-four__main__image">
                            <img src="assets/images/background/slider-4-1.jpg"  />
                        </div>
                      
                        </div>
                       
                    </div>
                    
                    </div>
                    
                </div>
               
                </div>
                
                <div className="item">
                <div className="slider-four__item">
                    <div className="slider-four__image" style={{ backgroundImage: "url(assets/images/shapes/slider-4-bg-1-1.jpg)" }} />
                  
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-5 d-flex">
                        <div className="my-auto">
                            <h2 className="slider-four__title">
                            Let’s Grow your <span>future</span>
                            together
                            </h2>
                            
                            <p className="slider-four__text">
                            Sed ut perspiciatis unde omnis natus sit accusantium
                            doloremque laudantium totam aperiam
                            </p>
                            
                            <div className="slider-four__btns">
                            <Link to="/about" className="thm-btn slider-four__btn">
                                <span>
                                Get Started
                                <i className="far fa-arrow-right" />
                                </span>
                            </Link>
                           
                            <Link to="/about" className="thm-btn thm-btn--three slider-four__btn slider-four__btn--two" >
                                <span>
                                Learn More
                                <i className="far fa-arrow-right" />
                                </span>
                            </Link>
                           
                            </div>
                           
                        </div>
                        
                        </div>
                        
                        <div className="col-xl-7">
                        <div className="slider-four__main__image">
                            <img src="assets/images/background/slider-4-2.jpg"  />
                        </div>
                      
                        </div>
                       
                    </div>
                    
                    </div>
                    
                </div>
               
                </div>
                
                <div className="item">
                <div className="slider-four__item">
                    <div className="slider-four__image" style={{ backgroundImage: "url(assets/images/shapes/slider-4-bg-1-1.jpg)" }} />
                  
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-5 d-flex">
                        <div className="my-auto">
                            <h2 className="slider-four__title">
                            Let’s Grow your <span>future</span>
                            together
                            </h2>
                            
                            <p className="slider-four__text">
                            Sed ut perspiciatis unde omnis natus sit accusantium
                            doloremque laudantium totam aperiam
                            </p>
                            
                            <div className="slider-four__btns">
                            <Link to="/about" className="thm-btn slider-four__btn">
                                <span>
                                Get Started
                                <i className="far fa-arrow-right" />
                                </span>
                            </Link>
                           
                            <Link to="/about" className="thm-btn thm-btn--three slider-four__btn slider-four__btn--two" >
                                <span>
                                Learn More
                                <i className="far fa-arrow-right" />
                                </span>
                            </Link>
                           
                            </div>
                           
                        </div>
                        
                        </div>
                        
                        <div className="col-xl-7">
                        <div className="slider-four__main__image">
                            <img src="assets/images/background/slider-4-3.jpg"  />
                        </div>
                      
                        </div>
                       
                    </div>
                    
                    </div>
                    
                </div>
               
                </div>
                
            </OwlCarousel>
        </section>

    </>
  )
}

export default Slider