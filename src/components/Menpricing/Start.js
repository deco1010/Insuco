import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <>
        <div className="cta-two">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-lg-6">
                    <div className="cta-two__image wow fadeInUp" data-wow-duration="1500ms">
                    <img  src="assets/images/resources/cta-2-1.png" className="img-fluid" />
                    </div>
                </div>
                
                <div className="col-lg-6 d-flex">
                    <div className="my-auto">
                    <div className="cta-two__content">
                        <div className="sec-title text-start">
                        <p className="sec-title__tagline">Get free estimate</p>
                        
                        <h3 className="sec-title__title">
                            Get an insurance agenct! started with us
                        </h3>
                       
                        </div>
                      
                        <div className="cta-two__text">
                        We denounce with righteous indignation and dislike men beguiled to
                        and demoralized by the charms of pleasure the moment desire is
                        they they cannot foresee the pain and trouble that are bound ensue
                        and equal blame belongs to those who fail in their duty
                        </div>
                       
                        <div className="cta-one__content">
                        <Link to="/pricing" className="thm-btn thm-btn--three cta-one__btn" >
                            <span>
                            Get a Quote
                            <i className="far fa-arrow-right" />
                            </span>
                        </Link>
                     
                        <div className="cta-one__info">
                            <div className="cta-one__info__icon">
                            <i className="far fa-phone-plus" />
                            </div>
                         
                            <div className="cta-one__info__content">
                            <span className="cta-one__info__name">Phone No</span>
                            <Link to="tel:+000(123)45688">+000 (123) 456 88</Link>
                            </div>
                           
                        </div>
                       
                        </div>
                       
                    </div>
                   
                    </div>
                  
                </div>
                
                </div>
              
            </div>
        </div>

    </>
  )
}

export default Start