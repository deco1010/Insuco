import React from 'react'
import { Link } from 'react-router-dom'

function Take() {
  return (
    <>
        <section className="service-four" style={{ backgroundImage: "url(assets/images/background/service-4-bg-1.jpg)" }} >
            <div className="container">
                <img src="assets/images/services/service-4-1.jpg" className="wow fadeInRight service-four__bg" data-wow-duration="1500ms"  />
                <div className="row">
                <div className="col-xl-8">
                    <div className="sec-title text-start">
                    <p className="sec-title__tagline">insurance services</p>
                    
                    <h3 className="sec-title__title">
                        Take better insurance <br />
                        opportunity
                    </h3>
                   
                    </div>
                    
                    <ul className="list-unstyled service-four__list">
                    <li className="service-four__list__item">
                        <div className="service-card-three">
                        <div className="service-card-three__content">
                            <div className="service-card-three__icon">
                            <i className="flaticon-insurance-1" />
                            </div>
                           
                            <h3 className="service-card-three__title">
                            <Link to="/insurancesdetails">Life Insurance</Link>
                            </h3>
                            <p className="service-card-three__text">
                            Take a trivial example which of us ever undertakes larious
                            physical
                            </p>
                           
                        </div>
                        
                        </div>
                        
                    </li>
                    
                    <li className="service-four__list__item">
                        <div className="service-card-three">
                        <div className="service-card-three__content">
                            <div className="service-card-three__icon">
                            <i className="flaticon-insurance" />
                            </div>
                           
                            <h3 className="service-card-three__title">
                            <Link to="/insurancesdetails">Business Insurance</Link>
                            </h3>
                            <p className="service-card-three__text">
                            Take a trivial example which of us ever undertakes larious
                            physical
                            </p>
                           
                        </div>
                        
                        </div>
                        
                    </li>
                    
                    <li className="service-four__list__item">
                        <div className="service-card-three">
                        <div className="service-card-three__content">
                            <div className="service-card-three__icon">
                            <i className="flaticon-health-insurance" />
                            </div>
                           
                            <h3 className="service-card-three__title">
                            <Link to="/insurancesdetails">Health Insurance</Link>
                            </h3>
                            <p className="service-card-three__text">
                            Take a trivial example which of us ever undertakes larious
                            physical
                            </p>
                           
                        </div>
                        
                        </div>
                        
                    </li>
                    
                    <li className="service-four__list__item">
                        <div className="service-card-three">
                        <div className="service-card-three__content">
                            <div className="service-card-three__icon">
                            <i className="flaticon-study" />
                            </div>
                           
                            <h3 className="service-card-three__title">
                            <Link to="/insurancesdetails">Study Insurance</Link>
                            </h3>
                            <p className="service-card-three__text">
                            Take a trivial example which of us ever undertakes larious
                            physical
                            </p>
                           
                        </div>
                        
                        </div>
                        
                    </li>
                    
                    <li className="service-four__list__item">
                        <div className="service-card-three">
                        <div className="service-card-three__content">
                            <div className="service-card-three__icon">
                            <i className="flaticon-insurance-3" />
                            </div>
                           
                            <h3 className="service-card-three__title">
                            <Link to="/insurancesdetails">House Insurance</Link>
                            </h3>
                            <p className="service-card-three__text">
                            Take a trivial example which of us ever undertakes larious
                            physical
                            </p>
                           
                        </div>
                        
                        </div>
                        
                    </li>
                    
                    <li className="service-four__list__item">
                        <div className="service-card-three">
                        <div className="service-card-three__content">
                            <div className="service-card-three__icon">
                            <i className="flaticon-house" />
                            </div>
                           
                            <h3 className="service-card-three__title">
                            <Link to="/insurancesdetails">Fire Insurance</Link>
                            </h3>
                            <p className="service-card-three__text">
                            Take a trivial example which of us ever undertakes larious
                            physical
                            </p>
                           
                        </div>
                        
                        </div>
                        
                    </li>
                    
                    </ul>
                   
                </div>
               
                </div>
               
            </div>
        </section>
    </>
  )
}

export default Take