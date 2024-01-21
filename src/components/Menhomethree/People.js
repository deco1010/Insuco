import React from 'react'
import { Link } from 'react-router-dom'

function People() {
  return (
    <>
        <section className="faq-three faq-three--home-3" style={{ backgroundImage: "url(assets/images/shapes/faq-3-home-3-bg.png)" }} >
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">Why choose us</p>
               
                <h3 className="sec-title__title">
                    Why people get our insurance <br />
                    services
                </h3>
                
                </div>
                
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6 d-flex">
                    <div className="my-auto">
                    <div className="faq-two__content faq-two__content--services">
                        <div
                        className="accordion faq-two__accordion faq-two__accordion--ml"
                        id="faq-two__accordion-3" >
                        <div className="accordion-item faq-two__accordion__item accordion--active">
                            <h2
                            className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-3__heading-1" >
                            <button
                                className="accordion-button faq-two__accordion__button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-1"
                                aria-expanded="true"
                                aria-controls="faq-two__accordion-3__collapse-1" >
                                <i className="far fa-check" />
                                Benefits of Health Insurance
                                <span className="faq-two__accordion__icon" />
                               
                            </button>
                            </h2>
                            <div id="faq-two__accordion-3__collapse-1"
                            className="accordion-collapse collapse show faq-two__accordion__collapse"
                            aria-labelledby="faq-two__accordion-3__heading-1"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                We denounce with righteous indignation and dislike men
                                beguiled to and demoralized by the charms of pleasure the
                                moment desires they they cannot foresee the pain and trouble
                                that are bound
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2 className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-3__heading-2" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-2"
                                aria-expanded="false" aria-controls="faq-two__accordion-3__collapse-2" >
                                <i className="far fa-check" />
                                How Much Friendly Our Team Member?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div
                            id="faq-two__accordion-3__collapse-2"
                            className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-3__heading-2"
                            data-bs-parent="#faq-two__accordion-3">

                            <div className="accordion-body faq-two__accordion__body">
                                We denounce with righteous indignation and dislike men
                                beguiled to and demoralized by the charms of pleasure the
                                moment desires they they cannot foresee the pain and trouble
                                that are bound
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2
                            className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-3__heading-3" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-3"
                                aria-expanded="false"
                                aria-controls="faq-two__accordion-3__collapse-3" >
                                <i className="far fa-check" />
                                Why Choose Our Insurance Services ?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div
                            id="faq-two__accordion-3__collapse-3"
                            className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-3__heading-3"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                We denounce with righteous indignation and dislike men
                                beguiled to and demoralized by the charms of pleasure the
                                moment desires they they cannot foresee the pain and trouble
                                that are bound
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2
                            className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-3__heading-4" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-4"
                                aria-expanded="false"
                                aria-controls="faq-two__accordion-3__collapse-4" >
                                <i className="far fa-check" />
                                Great Offer For Health Insurance ?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div
                            id="faq-two__accordion-3__collapse-4"
                            className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-3__heading-4"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                We denounce with righteous indignation and dislike men
                                beguiled to and demoralized by the charms of pleasure the
                                moment desires they they cannot foresee the pain and trouble
                                that are bound
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                 
                </div>
                
                <div className="col-md-12 col-lg-6">
                    <div className="faq-three__right">
                    <div className="faq-three__box">
                        <div className="faq-three__box__icon">
                        <i className="flaticon-trust" />
                        </div>
                        
                        <h3 className="faq-three__box__title">
                        <Link to="/insurancesdetails">Trusted Partners</Link>
                        </h3>
                     
                        <Link to="/insurancesdetails" className="faq-three__box__link">
                        <i className="far fa-long-arrow-right" />
                        </Link>
                        
                        <div className="faq-three__box__hover">
                        <div className="faq-three__box__hover__icon">
                            <i className="flaticon-trust" />
                        </div>
                        
                        <h3 className="faq-three__box__hover__title">
                            <Link to="/insurancesdetails">Trusted Partners</Link>
                        </h3>
                       
                        <div className="faq-three__box__hover__text">
                            Take a trivial example which of ever undertakes
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <div className="faq-three__box">
                        <div className="faq-three__box__icon">
                        <i className="flaticon-medical-insurance" />
                        </div>
                        
                        <h3 className="faq-three__box__title">
                        <Link to="/insurancesdetails">Protective Insurance</Link>
                        </h3>
                     
                        <Link to="/insurancesdetails" className="faq-three__box__link">
                        <i className="far fa-long-arrow-right" />
                        </Link>
                        
                        <div className="faq-three__box__hover">
                        <div className="faq-three__box__hover__icon">
                            <i className="flaticon-medical-insurance" />
                        </div>
                        
                        <h3 className="faq-three__box__hover__title">
                            <Link to="/insurancesdetails">Protective Insurance</Link>
                        </h3>
                       
                        <div className="faq-three__box__hover__text">
                            Take a trivial example which of ever undertakes
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <div className="faq-three__box">
                        <div className="faq-three__box__icon">
                        <i className="flaticon-commercial" />
                        </div>
                        
                        <h3 className="faq-three__box__title">
                        <Link to="/insurancesdetails">Commercial Insurance</Link>
                        </h3>
                     
                        <Link to="/insurancesdetails" className="faq-three__box__link">
                        <i className="far fa-long-arrow-right" />
                        </Link>
                        
                        <div className="faq-three__box__hover">
                        <div className="faq-three__box__hover__icon">
                            <i className="flaticon-commercial" />
                        </div>
                        
                        <h3 className="faq-three__box__hover__title">
                            <Link to="/insurancesdetails">Commercial Insurance</Link>
                        </h3>
                       
                        <div className="faq-three__box__hover__text">
                            Take a trivial example which of ever undertakes
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <div className="faq-three__box">
                        <div className="faq-three__box__icon">
                        <i className="flaticon-agile" />
                        </div>
                        
                        <h3 className="faq-three__box__title">
                        <Link to="/insurancesdetails">Easy Process Systems</Link>
                        </h3>
                     
                        <Link to="/insurancesdetails" className="faq-three__box__link">
                        <i className="far fa-long-arrow-right" />
                        </Link>
                        
                        <div className="faq-three__box__hover">
                        <div className="faq-three__box__hover__icon">
                            <i className="flaticon-agile" />
                        </div>
                        
                        <h3 className="faq-three__box__hover__title">
                            <Link to="/insurancesdetails">Easy Process Systems</Link>
                        </h3>
                       
                        <div className="faq-three__box__hover__text">
                            Take a trivial example which of ever undertakes
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
              
            </div>
        </section>
    </>
  )
}

export default People