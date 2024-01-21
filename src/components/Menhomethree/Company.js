import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

function Company() {
  return (
    <>
        <section className="service-five">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6 text-center">
                    <div className="service-three__image">
                    <img src="assets/images/services/service-5-1.png"  />
                    <div className="service-three__image__caption text-start">
                        <h3 className="count-box service-three__image__caption__count">
                       
                        <CountUp end={25} duration={2}>    </CountUp>
                        </h3>
                        
                        <p className="service-three__image__caption__text">
                        Years Of Experience
                        </p>
                    </div>
                   
                    <div className="service-three__image__check">
                        <i className="flaticon-tick" />
                        <span>Quality Insurance</span>
                    </div>
                    
                    </div>
                  
                </div>
                
                <div className="col-md-12 col-lg-6">
                    <div className="service-five__content">
                    <div className="sec-title text-start">
                        <p className="sec-title__tagline">About company</p>
                        
                        <h3 className="sec-title__title">
                        Best insurance for change better future life
                        </h3>
                        
                    </div>
                    
                    <div className="service-five__text">
                        We denounce with righteous indignation and dislike men beguiled to
                        and demoralized by the charms of pleasure the moment desires they
                        they cannot foresee the pain and trouble that are bound
                    </div>
                    
                    <div className="service-five__btns">
                        <Link to="/about" className="thm-btn about-one__btn">
                        <span>
                            Learn More
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                        
                        <Link to="/insurances" className="thm-btn thm-btn--two about-one__btn about-one__btn--two" >
                        <span>
                            Our Services
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                        
                    </div>
                    
                    <ul className="service-five__list list-unstyled">
                        <li>
                        <div className="service-five__list__icon">
                            <i className="flaticon-management" />
                        </div>
                       
                        <h3 className="service-five__list__title">1.3m</h3>
                        
                        <p className="service-five__list__text">Our Active Customer</p>
                        
                        </li>
                        <li>
                        <div className="service-five__list__icon">
                            <i className="flaticon-rating" />
                        </div>
                       
                        <h3 className="service-five__list__title">9.9%</h3>
                        
                        <p className="service-five__list__text">Clients Satisfaction</p>
                        
                        </li>
                    </ul>
                    
                    </div>
                   
                </div>
                
                </div>
                
            </div>     
        </section>

    </>
  )
}

export default Company