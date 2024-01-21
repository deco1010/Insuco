import React from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
  return (
    <>
        <section className="portfolio-one">
            <div className="container">
                <div className="portfolio-one__top">
                <div className="sec-title text-start">
                    <p className="sec-title__tagline">Photo Gallery</p>
                   
                    <h3 className="sec-title__title">Take a look about our inside</h3>
                    
                </div>
                
                <div className="portfolio-one__btns">
                    <Link to="/portfoliogrid" className="thm-btn thm-btn--three portfolio-one__btn" >
                    <span>
                        View More
                        <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                   
                </div>
                
                </div>
                
                <div className="row gutter-y-30">
                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-card portfolio-card--two portfolio-card--three">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-3-1.jpg"  />
                        <div className="portfolio-card__content">
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Health Insurance</Link>
                        </h3>
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-card portfolio-card--two portfolio-card--three">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-3-2.jpg"  />
                        <div className="portfolio-card__content">
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Life Insurance</Link>
                        </h3>
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-card portfolio-card--two portfolio-card--three">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-3-3.jpg"  />
                        <div className="portfolio-card__content">
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Car Insurance</Link>
                        </h3>
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                </div>
            </div>
        </section>

        <section className="cta-three">
            <div className="container">
                <div className="cta-three__inner" style={{ backgroundImage: "url(assets/images/background/cta-three-bg-1-1.jpg)" }} >
                <div className="sec-title text-start">
                    <p className="sec-title__tagline">Get free estimate</p>
                    
                    <h3 className="sec-title__title">
                    Get an insurance agenct! started with us
                    </h3>
                   
                </div>
                
                <div className="cta-one__content">
                    <Link to="/pricing" className="thm-btn thm-btn--two cta-one__btn">
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
        </section>

        <section className="faq-three faq-three--home-3 faq-three--home-2" style={{ backgroundImage: "url(assets/images/shapes/faq-3-home-2-bg.png)" }} >
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6">
                    <div className="faq-three--home-2__images">
                    <img src="assets/images/resources/faq-3-home-2-1.jpg"  />
                    <img src="assets/images/resources/faq-3-home-2-2.jpg"  />
                    <div className="about-five__image__caption">
                        <h3 className="about-five__image__caption__title">
                        25 Years Of Experience in Insurance Services
                        </h3>
                     
                        <p className="about-five__image__caption__text">
                        CEO &amp; Founder
                        </p>
                        
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-6">
                    <div className="sec-title text-start">
                    <p className="sec-title__tagline">get consultations</p>
                    
                    <h3 className="sec-title__title">
                        Find Best Insurance Agent or Need Consultations?
                    </h3>
                   
                    </div>
                    
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

export default Gallery