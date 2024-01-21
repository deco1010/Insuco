import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

function Customer() {

    const options = {
        items: 1,
        margin: 0,
        loop: true,
        dots: false,
        smartSpeed: 700,
        nav: false,
        responsive : {
            "0": {
                items: 1,
                margin: 0
            },
            "576": {
                items: 2,
                margin: 30
            },
            "992": {
                items: 3,
                margin: 30
            }
}};

  return (
    <>
        <section className="portfolio-two">
            <div className="container-fluid">
                <OwlCarousel className="thm-owl__carousel owl-theme owl-carousel owl-with-shadow owl-dot-one" {...options} >
                <div className="item">
                    <div className="portfolio-card portfolio-card--two portfolio-card--four">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-4-1.jpg"  />
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
                
                <div className="item">
                    <div className="portfolio-card portfolio-card--two portfolio-card--four">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-4-2.jpg"  />
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
                
                <div className="item">
                    <div className="portfolio-card portfolio-card--two portfolio-card--four">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-4-3.jpg"  />
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
                
                </OwlCarousel>
            </div>
        </section>

    </>
  )
}

export default Customer