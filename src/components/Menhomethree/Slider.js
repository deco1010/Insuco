import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

function Slider() {

    const options = {
        items : 1,
        margin : 0,
        animateIn: "fadeIn",
        dots : false,
        nav : true,
        animateOut : "slideOutDown", 
        navText : ["<span class=\"far fa-arrow-left\"></span>","<span class=\"far fa-arrow-right\"></span>"] 
        
    };

  return (
    <>
        <section className="slider-one">
            <OwlCarousel className="thm-owl__carousel owl-carousel owl-theme" {...options}>

                <div className="item">
                <div className="slider-one__item">
                    <div className="slider-one__image" style={{ backgroundImage: "url(assets/images/background/slider-1-1.jpg)" }} />
                    
                    <div className="container">
                    <p className="slider-one__text">Welcom to Insuco</p>
                    
                    <h2 className="slider-one__title">Let’s Grow your future together</h2>
                    
                    <div className="slider-one__btns">
                        <Link to="/about" className="thm-btn thm-btn--three slider-one__btn" >
                        <span>
                            Get Started
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                       
                        <Link to="/about" className="thm-btn thm-btn--three slider-one__btn slider-one__btn--two" >
                        <span>
                            Learn More
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                       
                    </div>
                  
                    </div>
                    
                </div>
               
                </div>
                
                <div className="item">
                <div className="slider-one__item">
                    <div className="slider-one__image" style={{ backgroundImage: "url(assets/images/background/slider-1-2.jpg)" }} />
                    
                    <div className="container">
                    <p className="slider-one__text">Welcom to Insuco</p>
                    
                    <h2 className="slider-one__title">Let’s Grow your future together</h2>
                    
                    <div className="slider-one__btns">
                        <Link to="/about" className="thm-btn thm-btn--three slider-one__btn" >
                        <span>
                            Get Started
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                       
                        <Link to="/about" className="thm-btn thm-btn--three slider-one__btn slider-one__btn--two" >
                        <span>
                            Learn More
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                       
                    </div>
                  
                    </div>
                    
                </div>
               
                </div>
                
                <div className="item">
                <div className="slider-one__item">
                    <div className="slider-one__image" style={{ backgroundImage: "url(assets/images/background/slider-1-3.jpg)" }} />
                    
                    <div className="container">
                    <p className="slider-one__text">Welcom to Insuco</p>
                    
                    <h2 className="slider-one__title">Let’s Grow your future together</h2>
                    
                    <div className="slider-one__btns">
                        <Link to="/about" className="thm-btn thm-btn--three slider-one__btn" >
                        <span>
                            Get Started
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                       
                        <Link to="/about" className="thm-btn thm-btn--three slider-one__btn slider-one__btn--two" >
                        <span>
                            Learn More
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                       
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