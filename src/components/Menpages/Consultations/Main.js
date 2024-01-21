import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
        <section className="about-three">
            <div className="about-three__bg" style={{ backgroundImage: "url(assets/images/background/about-3-bg-1-1.jpg)" }} ></div>
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6">
                    <div className="about-three__content">
                    <div className="sec-title text-start">
                        <p className="sec-title__tagline">get consultations</p>
                        
                        <h3 className="sec-title__title">
                        Find Best Insurance Agent <br />
                        or Need Consultations?
                        </h3>
                      
                    </div>
                    
                    <ul className="list-unstyled about-three__list">
                        <li>
                        <div className="about-three__list__icon">
                            <i className="flaticon-healthcare" />
                        </div>
                        
                        <div className="about-three__list__content">
                            <h3 className="about-three__list__title">
                            Trusted By Thousand
                            </h3>
                           
                            <p className="about-three__list__text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptate
                            accusantium laudantium totam rem aperiam
                            </p>
                        </div>
                      
                        </li>
                        <li>
                        <div className="about-three__list__icon">
                            <i className="flaticon-medical-insurance" />
                        </div>
                        
                        <div className="about-three__list__content">
                            <h3 className="about-three__list__title">
                            Protective Insurance
                            </h3>
                           
                            <p className="about-three__list__text">
                            We denounce with righteous indignation an dislike beguiled and
                            demoralized by the charms of pleasure
                            </p>
                        </div>
                      
                        </li>
                    </ul>
                  
                    <div className="about-three__btns">
                        <Link to="/team" className="thm-btn thm-btn--two about-three__btn" >
                        <span>
                            Find Agent
                            <i className="far fa-arrow-right" />
                        </span>
                       </Link>
                       
                        <Link to="/insurances" className="about-three__btn--two">
                        <span>Learn More</span>
                        <i className="far fa-arrow-right" />
                       </Link>
                       
                    </div>
                   
                    </div>
                    
                </div>
              
                <div className="col-md-12 col-lg-6">
                    <div className="about-three__image wow fadeInUp" data-wow-duration="1500ms" >
                    <img src="assets/images/resources/about-3-1.jpg"  className="img-fluid" />
                    </div>
                    
                </div>
              
                </div>
               
            </div>
        </section>

    </>
  )
}

export default Main