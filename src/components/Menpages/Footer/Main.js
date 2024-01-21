import React from 'react'
import { Link } from 'react-router-dom'


function Main() {
  return (
   <>
        <footer className="footer-one">
            <div className="footer-one__top">
                <div className="container">
                <div className="footer-one__top__logo">
                    <Link to="/">
                        <img src="assets/images/logo-light.png"  />
                    </Link>
                </div>
             
                <div className="footer-one__top__content">
                    <p className="footer-one__top__tagline">Get free estimate</p>
                   
                    <h3 className="footer-one__top__title">Find insurance agenct!</h3>
                   
                </div>
               
                <div className="footer-one__top__btns">
                    <Link to="/pricing" className="thm-btn thm-btn--two">
                    <span>
                        Get a Quote
                        <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                </div>
                
                </div>
              
            </div>
            
            <div className="footer-one__middle">
                <div className="container">
                <div className="footer-one__middle__inner">
                    <div className="row gutter-y-30">
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-one__widget">
                        <h3 className="footer-one__widget__title">About</h3>
                        
                        <p className="footer-one__widget__text">
                            We denounce righteous indignations dislike men beguiled and
                            demoralized charms of pleasure moment
                        </p>
                        
                        <ul className="list-unstyled footer-one__widget__social">
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
                   
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-one__widget footer-one__widget--menu">
                        <h3 className="footer-one__widget__title">Links</h3>
                        
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
                   
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-one__widget footer-one__widget--gallery">
                        <h3 className="footer-one__widget__title">Gallery</h3>
                        
                        <ul className="list-unstyled footer-one__widget__gallery">

                            <li>
                                <Link to="#" className="img-popup" >
                                    <img src="assets/images/resources/footer-g-1.jpg"  />
                                    <span className="footer-one__widget__gallery__hover">
                                    <i className="fab fa-instagram" />
                                    </span>
                                
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className="img-popup" >
                                    <img src="assets/images/resources/footer-g-2.jpg"  />
                                    <span className="footer-one__widget__gallery__hover">
                                    <i className="fab fa-instagram" />
                                    </span>
                                
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className="img-popup" >
                                    <img src="assets/images/resources/footer-g-3.jpg"  />
                                    <span className="footer-one__widget__gallery__hover">
                                    <i className="fab fa-instagram" />
                                    </span>
                                
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className="img-popup" >
                                    <img src="assets/images/resources/footer-g-4.jpg"  />
                                    <span className="footer-one__widget__gallery__hover">
                                    <i className="fab fa-instagram" />
                                    </span>
                                
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className="img-popup" >
                                    <img src="assets/images/resources/footer-g-5.jpg"  />
                                    <span className="footer-one__widget__gallery__hover">
                                    <i className="fab fa-instagram" />
                                    </span>
                                
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className="img-popup" >
                                    <img src="assets/images/resources/footer-g-6.jpg"  />
                                    <span className="footer-one__widget__gallery__hover">
                                    <i className="fab fa-instagram" />
                                    </span>
                                
                                </Link>
                            </li>
                        </ul>
                        
                        </div>
                        
                    </div>
                   
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-one__widget">
                        <h3 className="footer-one__widget__title">Newsletter</h3>
                        
                        <form action="#" className="mc-form footer-one__widget__form" data-url="MC_FORM_URL" >
                            <input type="text" name="EMAIL" placeholder="Email Address" />
                            <button type="submit">
                            <i className="far fa-paper-plane" />
                            </button>
                        </form>
                        <div className="mc-form__response" />
                       
                        <ul className="list-unstyled footer-one__widget__contact">
                            <li>
                            <i className="far fa-envelope-open" />
                            <Link to="mailto:support@gmail.com">support@gmail.com</Link>
                            </li>
                            <li>
                            <i className="far fa-phone-plus" />
                            <Link to="tel:+000(123)45688">+000 (123) 456 88</Link>
                            </li>
                        </ul>
                        
                        </div>
                        
                    </div>
                   
                    </div>
                   
                </div>
              
                </div>
              
            </div>
          
            <div className="footer-one__bottom">
                <div className="container">
                <div className="footer-one__bottom__inner">
                    <Link to="#" data-target="html" className="scroll-to-target footer-one__bottom__scroll" >
                    <i className="far fa-arrow-alt-up" />
                    </Link>
                    <ul className="footer-one__bottom__menu list-unstyled">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfoliogrid">Setting</Link>
                    </li>
                    <li>
                        <Link to="/insurances">Services</Link>
                    </li>
                    <li>
                        <Link to="/faqs">Faqs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    </ul>
                    
                    <p className="footer-one__bottom__copyright">
                    Copyright © <span className="dynamic-year" /> Insuco , All rights
                    Reserved
                    </p>
                    
                </div>
                
                </div>
              
            </div>
           
        </footer>

   </>
  )
}

export default Main