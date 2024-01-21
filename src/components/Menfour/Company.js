import React from 'react'
import {Link} from 'react-router-dom'

function Company() {
  return (
    <>
        <section className="about-seven">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-lg-6">
                    <div className="about-five__content">
                    <div className="sec-title text-start">
                        <p className="sec-title__tagline">About company</p>
                       
                        <h3 className="sec-title__title">
                        Best insurance for change better future life
                        </h3>
                        
                    </div>
                    
                    <div className="about-five__author">
                        <div className="about-five__author__image">
                        <img src="assets/images/resources/about-5-a-1.png" alt="" />
                        </div>
                        
                        <div className="about-five__author__content">
                        <h3 className="about-five__author__name">
                            Marcellus A. Hilliard
                        </h3>
                        
                        <p className="about-five__author__designation">
                            CEO &amp; Founder
                        </p>
                        
                        </div>
                       
                        <div className="about-five__author__sign">
                        <img src="assets/images/resources/about-5-a-s.png" alt="" />
                        </div>
                       
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="col-lg-6">
                    <div className="accordion faq-two__accordion" id="faq-two__accordion-2">
                    <div className="accordion-item faq-two__accordion__item">
                        <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-2__heading-1" >
                        <button
                            className="accordion-button faq-two__accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-two__accordion-2__collapse-1"
                            aria-expanded="true"
                            aria-controls="faq-two__accordion-2__collapse-1" >
                            Benefits of Health Insurance
                            <span className="faq-two__accordion__icon" />
                            
                        </button>
                        </h2>
                        <div id="faq-two__accordion-2__collapse-1" className="accordion-collapse collapse  faq-two__accordion__collapse"
                        aria-labelledby="faq-two__accordion-2__heading-1"
                        data-bs-parent="#faq-two__accordion-2" >
                        <div className="accordion-body faq-two__accordion__body">
                            We denounce with righteous indignation dislike beguile deorazey
                            charms of pleasure the moment desires they foresee
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item faq-two__accordion__item  accordion--active">
                        <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-2__heading-2" >
                        <button
                            className="accordion-button faq-two__accordion__button "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-two__accordion-2__collapse-2"
                            aria-expanded="false"
                            aria-controls="faq-two__accordion-2__collapse-2" >
                            How Much Friendly Our Team Member?
                            <span className="faq-two__accordion__icon" />
                        </button>
                        </h2>
                        <div
                        id="faq-two__accordion-2__collapse-2"
                        className="accordion-collapse faq-two__accordion__collapse collapse show"
                        aria-labelledby="faq-two__accordion-2__heading-2"
                        data-bs-parent="#faq-two__accordion-2" >
                        <div className="accordion-body faq-two__accordion__body">
                            We denounce with righteous indignation dislike beguile deorazey
                            charms of pleasure the moment desires they foresee
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item faq-two__accordion__item">
                        <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-2__heading-3" >
                        <button
                            className="accordion-button faq-two__accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-two__accordion-2__collapse-3"
                            aria-expanded="false"
                            aria-controls="faq-two__accordion-2__collapse-3" >
                            Why Choose Our Insurance Services ?
                            <span className="faq-two__accordion__icon" />
                        </button>
                        </h2>
                        <div
                        id="faq-two__accordion-2__collapse-3"
                        className="accordion-collapse faq-two__accordion__collapse collapse"
                        aria-labelledby="faq-two__accordion-2__heading-3"
                        data-bs-parent="#faq-two__accordion-2" >
                        <div className="accordion-body faq-two__accordion__body">
                            We denounce with righteous indignation dislike beguile deorazey
                            charms of pleasure the moment desires they foresee
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item faq-two__accordion__item">
                        <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-2__heading-4" >
                        <button
                            className="accordion-button faq-two__accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-two__accordion-2__collapse-4"
                            aria-expanded="false"
                            aria-controls="faq-two__accordion-2__collapse-4" >
                            Great Offer For Health Insurance ?
                            <span className="faq-two__accordion__icon" />
                        </button>
                        </h2>
                        <div
                        id="faq-two__accordion-2__collapse-4"
                        className="accordion-collapse faq-two__accordion__collapse collapse"
                        aria-labelledby="faq-two__accordion-2__heading-4"
                        data-bs-parent="#faq-two__accordion-2" >
                        <div className="accordion-body faq-two__accordion__body">
                            We denounce with righteous indignation dislike beguile deorazey
                            charms of pleasure the moment desires they foresee
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
               
                </div>
               
            </div>
        </section>

        <div className="service-six service-six--home-4">
            <div className="container">
                <div className="row gutter-y-30">
                <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="service-card-four">
                    <div className="service-card-four__bg" />
                  
                    <div className="service-card-four__content">
                        <div className="service-card-four__circle" />
                        
                        <i className="service-card-four__icon flaticon-piggy-bank" />
                        <h3 className="service-card-four__title">
                        <Link to="/insurancesdetails">Save your money</Link>
                        </h3>
                       
                        <p className="service-card-four__text">
                        Risus consectetur adipisineg eiusmo tempor incididunt
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-four__link">
                        <span>Read More</span>
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                   
                </div>
                
                <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="service-card-four">
                    <div className="service-card-four__bg" />
                  
                    <div className="service-card-four__content">
                        <div className="service-card-four__circle" />
                        
                        <i className="service-card-four__icon flaticon-reliability" />
                        <h3 className="service-card-four__title">
                        <Link to="/insurancesdetails">Trusted partners</Link>
                        </h3>
                       
                        <p className="service-card-four__text">
                        Risus consectetur adipisineg eiusmo tempor incididunt
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-four__link">
                        <span>Read More</span>
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                   
                </div>
                
                <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="service-card-four">
                    <div className="service-card-four__bg" />
                  
                    <div className="service-card-four__content">
                        <div className="service-card-four__circle" />
                        
                        <i className="service-card-four__icon flaticon-money-transfer" />
                        <h3 className="service-card-four__title">
                        <Link to="/insurancesdetails">Mobile banking</Link>
                        </h3>
                       
                        <p className="service-card-four__text">
                        Risus consectetur adipisineg eiusmo tempor incididunt
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-four__link">
                        <span>Read More</span>
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                   
                </div>
                
                <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="service-card-four">
                    <div className="service-card-four__bg" />
                  
                    <div className="service-card-four__content">
                        <div className="service-card-four__circle" />
                        
                        <i className="service-card-four__icon flaticon-insurance" />
                        <h3 className="service-card-four__title">
                        <Link to="/insurancesdetails">Protective insurance</Link>
                        </h3>
                       
                        <p className="service-card-four__text">
                        Risus consectetur adipisineg eiusmo tempor incididunt
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-four__link">
                        <span>Read More</span>
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                   
                </div>
                
                </div>
                
            </div>
        </div>

    </>
  )
}

export default Company