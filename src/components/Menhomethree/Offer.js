import React from 'react'
import { Link } from 'react-router-dom'

function Offer() {
  return (
    <>
        <section className="about-six">
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">What We Offer</p>
               
                <h3 className="sec-title__title">
                    Great insurance build better <br />
                    future together
                </h3>
                
                </div>
               
                <div className="row gutter-y-30">
                <div
                    className="col-md-12 col-lg-4 wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="000ms" >

                    <div className="about-six__card">
                    <div className="about-six__card__icon">
                        <i className="fas fa-check" />
                    </div>
                   
                    <h3 className="about-six__card__title">
                        <Link to="#">Saving your money</Link>
                    </h3>
                    
                    <div className="about-six__card__text">
                        We denounce with righteou indigntion and dislike men beguile
                        demoralized by the charms of pleasure moment
                    </div>
                   
                    <Link to="/about" className="thm-btn about-six__card__btn">
                        <span>
                        Read More
                        <i className="far fa-arrow-right" />
                        </span>
                    </Link>
                   
                    </div>
                    
                </div>
               
                <div
                    className="col-md-12 col-lg-4 wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms">

                    <div className="about-six__card">
                    <div className="about-six__card__icon">
                        <i className="fas fa-check" />
                    </div>
                   
                    <h3 className="about-six__card__title">
                        <Link to="#">Easy process system</Link>
                    </h3>
                    
                    <div className="about-six__card__text">
                        On the other hand, we denounce with righteous indignation beg
                        demoralized charms of pleasure moment
                    </div>
                   
                    <Link to="/about" className="thm-btn about-six__card__btn">
                        <span>
                        Read More
                        <i className="far fa-arrow-right" />
                        </span>
                    </Link>
                   
                    </div>
                    
                </div>
               
                <div
                    className="col-md-12 col-lg-4 wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="200ms">
                        
                    <div className="about-six__card">
                    <div className="about-six__card__icon">
                        <i className="fas fa-check" />
                    </div>
                   
                    <h3 className="about-six__card__title">
                        <Link to="#">Mobile banking system</Link>
                    </h3>
                    
                    <div className="about-six__card__text">
                        Quis autem veleumiure reprehenderit quin ea voluptate velit esse
                        quam nihile molestiae consequ aturillum dolore
                    </div>
                   
                    <Link to="/about" className="thm-btn about-six__card__btn">
                        <span>
                        Read More
                        <i className="far fa-arrow-right" />
                        </span>
                    </Link>
                   
                    </div>
                    
                </div>
               
                </div>
                
            </div>
        </section>

    </>
  )
}

export default Offer