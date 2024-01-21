import React from 'react'
import { Link } from 'react-router-dom'

function Free() {
  return (
    <>
            <section className="cta-one">
                <div className="container">
                    <div className="sec-title text-center">
                    <p className="sec-title__tagline">Get free estimate</p>
                    
                    <h3 className="sec-title__title">
                        Get an insurance agenct! <br />
                        started with us
                    </h3>
                   
                    </div>
                   
                    <div className="cta-one__content">
                    <Link to="/pricing" className="thm-btn thm-btn--three cta-one__btn">
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
            </section>

    
    </>
  )
}

export default Free