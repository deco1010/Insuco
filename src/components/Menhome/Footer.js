import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
        <footer className="footer-two footer-two--home-1">

            <div className="footer-two__top">
                <div className="container">
                    <div className="footer-two__top__inner">
                        <div className="main-header__left">
                        <Link to="/" className="main-header__logo">
                            <img src="assets/images/logo-light.png"  />
                        </Link>
                        </div>
                        
                        <ul className="list-unstyled main-header__info">
                        <li className="main-header__info__item">
                            <div className="main-header__info__icon">
                                <i className="far fa-map-marker-alt" />
                            </div>
                        
                            <div className="main-header__info__content">
                            <span className="main-header__info__name">Location</span>
                                <Link to="#">55 Main Street, USA</Link>
                            </div>
                            
                        </li>
                        <li className="main-header__info__item">
                            <div className="main-header__info__icon">
                            <i className="far fa-envelope-open" />
                            </div>
                            
                            <div className="main-header__info__content">
                            <span className="main-header__info__name">Email Address</span>
                            <Link to="mailto:support@gmail.com">support@gmail.com</Link>
                            </div>
                            
                        </li>
                        <li className="main-header__info__item">
                            <div className="main-header__info__icon">
                                <i className="far fa-phone-plus" />
                            </div>
                            
                            <div className="main-header__info__content">
                            <span className="main-header__info__name">Phone No</span>
                            <Link to="tel:+000(123)45688">+000 (123) 456 88</Link>
                            </div>
                            
                        </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
          
            <div className="footer-two__middle">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-md-12 col-lg-3">
                        <div className="footer-two__widget footer-two__widget--about">
                            <h3 className="footer-two__widget__title">About</h3>
                            
                            <p className="footer-two__widget__text">
                            We denounce righteous indignations dislike men beguiled and
                            demoralized charms of pleasure moment
                            </p>
                            
                            <ul className="list-unstyled footer-two__widget__social">
                            <li>
                                <Link to="#">
                                <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                <i className="fab fa-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                <i className="fab fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                <i className="fab fa-instagram" />
                                </Link>
                            </li>
                            </ul>
                            
                        </div>
                        
                        </div>
                        
                        <div className="col-md-12 col-lg-4">
                        <div className="footer-two__widget footer-two__widget--menu">
                            <h3 className="footer-two__widget__title">Quick Links</h3>
                            
                            <div className="row">
                            <div className="col-6">
                                <ul className="list-unstyled footer-one__widget__menu">
                                <li>
                                    <Link to="/about">About Company</Link>
                                </li>
                                <li>
                                    <Link to="/insurances">Latest Services</Link>
                                </li>
                                <li>
                                    <Link to="/team">Meet The Team</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Need a Career?</Link>
                                </li>
                                <li>
                                    <Link to="/faqs">Newsletter</Link>
                                </li>
                                </ul>
                                
                            </div>
                            
                            <div className="col-6">
                                <ul className="list-unstyled footer-one__widget__menu">
                                <li>
                                    <Link to="/insurancesdetails">Life Insurance</Link>
                                </li>
                                <li>
                                    <Link to="/insurancesdetails">Car Insurance</Link>
                                </li>
                                <li>
                                    <Link to="/insurancesdetails">Health Insurance</Link>
                                </li>
                                <li>
                                    <Link to="/insurancesdetails">House Insurance</Link>
                                </li>
                                <li>
                                    <Link to="/insurancesdetails">Study Insurance</Link>
                                </li>
                                </ul>
                                
                            </div>
                            
                            </div>
                            
                        </div>
                        
                        </div>
                        
                        <div className="col-md-12 col-lg-5">
                        <div className="footer-two__widget footer-two__widget--form">
                            <h3 className="footer-two__widget__title">Newsletter</h3>
                            
                            <form action="#" className="mc-form footer-two__widget__form" data-url="MC_FORM_URL" >
                            <input type="text" placeholder="Email Address" />
                                <button type="submit">
                                    <i className="far fa-paper-plane" />
                                </button>
                            </form>
                            <div className="mc-form__response" />
                            
                        </div>
                        
                        </div>
                    
                    </div>
                </div>
                
            </div>
           
            <div className="footer-two__copyright">
                <div className="container text-center">
                    <p className="footer-two__copyright__text">
                        Copyright © <span className="dynamic-year" /> Insuco , All rights
                        Reserved
                    </p>
                </div>
            </div>
          
        </footer>
    </>
  )
}

export default Footer