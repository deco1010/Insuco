import React from 'react'
import { Link } from 'react-router-dom'

function Offer() {
  return (
    <>
        <section className="service-one service-one--home-two">
            <div className="service-one--home-two__inner">
                <div className="service-one--home-two__bg" />
               
                <div className="container">
                <div className="sec-title text-center">
                    <p className="sec-title__tagline">What We Offer</p>
                    
                    <h3 className="sec-title__title">
                    Great insurance build better <br />
                    future together
                    </h3>
                    
                </div>
                
                <div className="row gutter-y-60">
                    <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="service-card__image">
                        <img src="assets/images/services/services-1-1.jpg"  />
                        <div className="service-card__hover">
                            <h3 className="service-card__title">
                            <Link to="/insurancesdetails">Saving money</Link>
                            </h3>
                            <p className="service-card__text">
                            We denounce righ indignaties dislike men demoralize
                            </p>
                            <Link to="/insurancesdetails" className="service-card__link">
                            <i className="far fa-arrow-right" />
                            </Link>
                        </div>
                        
                        </div>
                       
                        <div className="service-card__content">
                        <h3 className="service-card__title">
                            <Link to="/insurancesdetails">Saving money</Link>
                        </h3>
                        <Link to="/insurancesdetails" className="service-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                    
                    </div>
                  
                    <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="service-card__image">
                        <img src="assets/images/services/services-1-2.jpg"  />
                        <div className="service-card__hover">
                            <h3 className="service-card__title">
                            <Link to="/insurancesdetails">Trusted partners</Link>
                            </h3>
                            <p className="service-card__text">
                            We denounce righ indignaties dislike men demoralize
                            </p>
                            <Link to="/insurancesdetails" className="service-card__link">
                            <i className="far fa-arrow-right" />
                            </Link>
                        </div>
                        
                        </div>
                       
                        <div className="service-card__content">
                        <h3 className="service-card__title">
                            <Link to="/insurancesdetails">Trusted partners</Link>
                        </h3>
                        <Link to="/insurancesdetails" className="service-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                    
                    </div>
                  
                    <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="service-card__image">
                        <img src="assets/images/services/services-1-3.jpg"  />
                        <div className="service-card__hover">
                            <h3 className="service-card__title">
                            <Link to="/insurancesdetails">Mobile banking</Link>
                            </h3>
                            <p className="service-card__text">
                            We denounce righ indignaties dislike men demoralize
                            </p>
                            <Link to="/insurancesdetails" className="service-card__link">
                            <i className="far fa-arrow-right" />
                            </Link>
                        </div>
                        
                        </div>
                       
                        <div className="service-card__content">
                        <h3 className="service-card__title">
                            <Link to="/insurancesdetails">Mobile banking</Link>
                        </h3>
                        <Link to="/insurancesdetails" className="service-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                    
                    </div>
                  
                    <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="service-card__image">
                        <img src="assets/images/services/services-1-4.jpg"  />
                        <div className="service-card__hover">
                            <h3 className="service-card__title">
                            <Link to="/insurancesdetails">Best Protective</Link>
                            </h3>
                            <p className="service-card__text">
                            We denounce righ indignaties dislike men demoralize
                            </p>
                            <Link to="/insurancesdetails" className="service-card__link">
                            <i className="far fa-arrow-right" />
                            </Link>
                        </div>
                        
                        </div>
                       
                        <div className="service-card__content">
                        <h3 className="service-card__title">
                            <Link to="/insurancesdetails">Best Protective</Link>
                        </h3>
                        <Link to="/insurancesdetails" className="service-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
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

export default Offer