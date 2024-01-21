import React from 'react'
import { Link } from 'react-router-dom'

function Plan() {
  return (
    <>
        <section className="pricing-one">
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">Pricing plan</p>
                
                <h3 className="sec-title__title">We provide amazing pricing package</h3>
                
                </div>
               
                <div className="row gutter-y-30">
                <div className="col-md-12 col-lg-4">
                    <div className="pricing-card">
                    <div className="pricing-card__bg" />
                    
                    <h3 className="pricing-card__title">Basic Plan</h3>
                    
                    <p className="pricing-card__tagline">Save 20% for all services</p>
                    
                    <p className="pricing-card__amount">
                        <span>$19</span>/monthly
                    </p>
                    
                    <ul className="list-unstyled pricing-card__list">
                        <li>
                        <i className="far fa-check" />
                        Individual &amp; Family Doctor
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Psychiatric treatment
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Surgery and anaesthetics
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Drugs and dressings
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Therapeutic aids appliances
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Therapeutic aids appliances
                        </li>
                    </ul>
                    
                    <div className="pricing-card__btns">
                        <Link to="/contact" className="thm-btn thm-btn--three pricing-card__btn" >
                        <span>
                            Choose Package
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                    </div>
                   
                    </div>
                   
                </div>
               
                <div className="col-md-12 col-lg-4">
                    <div className="pricing-card popular">
                    <div className="pricing-card__bg" />
                    
                    <h3 className="pricing-card__title">Standard Plan</h3>
                    
                    <p className="pricing-card__tagline">Save 30% for all services</p>
                    
                    <p className="pricing-card__amount">
                        <span>$49</span>/monthly
                    </p>
                    
                    <ul className="list-unstyled pricing-card__list">
                        <li>
                        <i className="far fa-check" />
                        Individual &amp; Family Doctor
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Psychiatric treatment
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Surgery and anaesthetics
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Drugs and dressings
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Therapeutic aids appliances
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Therapeutic aids appliances
                        </li>
                    </ul>
                    
                    <div className="pricing-card__btns">
                        <Link to="/contact" className="thm-btn thm-btn--two pricing-card__btn" >
                        <span>
                            Choose Package
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                    </div>
                   
                    </div>
                   
                </div>
               
                <div className="col-md-12 col-lg-4">
                    <div className="pricing-card">
                    <div className="pricing-card__bg" />
                    
                    <h3 className="pricing-card__title">Silver Plan</h3>
                    
                    <p className="pricing-card__tagline">Save 43% for all services</p>
                    
                    <p className="pricing-card__amount">
                        <span>$99</span>/monthly
                    </p>
                    
                    <ul className="list-unstyled pricing-card__list">
                        <li>
                        <i className="far fa-check" />
                        Individual &amp; Family Doctor
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Psychiatric treatment
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Surgery and anaesthetics
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Drugs and dressings
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Therapeutic aids appliances
                        </li>
                        <li>
                        <i className="far fa-check" />
                        Therapeutic aids appliances
                        </li>
                    </ul>
                    
                    <div className="pricing-card__btns">
                        <Link to="/contact" className="thm-btn thm-btn--three pricing-card__btn" >
                        <span>
                            Choose Package
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                    </div>
                   
                    </div>
                   
                </div>
               
                </div>
                {/* /.row */}
                <div className="row">
                <div className="col-md-12 text-center">
                    <div className="pricing-one__info">
                    <i className="far fa-check pricing-one__info__icon" />
                    <span>
                        Sit amet consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et
                    </span>
                    <Link className="pricing-one__info__link" to="/contact">
                        <span>Contact Us</span>
                        <i className="far fa-arrow-right" />
                    </Link>
                    </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Plan