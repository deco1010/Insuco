import React from 'react'
import {Link} from 'react-router-dom'


function Work() {
  return (
    <>
       
        <section className="contact-info">
            <div className="container">
            <div className="row gutter-y-30">
                <div className="col-md-12 col-lg-4">
                <div className="contact-info__card">
                    <div className="contact-info__card__icon">
                    <img src="assets/images/icons/contact-info-1-1.png"  />
                    </div>
                    
                    <h3 className="contact-info__card__title">
                        <Link to="/contact">Need Any Help?</Link>
                    </h3>
                
                    <p className="contact-info__card__text">
                    We denounce with righteous indignation dislike and demoralized
                    charms
                    </p>
                
                    <Link to="/contact" className="thm-btn thm-btn--three contact-info__card__btn" >
                    <span>
                        Contact Us
                        <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                
                </div>
                
                </div>
            
                <div className="col-md-12 col-lg-4">
                <div className="contact-info__card">
                    <div className="contact-info__card__icon">
                    <img src="assets/images/icons/contact-info-1-2.png"  />
                    </div>
                    
                    <h3 className="contact-info__card__title">
                    <Link to="/team">Work Together </Link>
                    </h3>
                
                    <p className="contact-info__card__text">
                    Quis autem vel eum iure reprehenderit voluptate velit esse quam
                    </p>
                
                    <Link to="/team" className="thm-btn thm-btn--three contact-info__card__btn" >
                    <span>
                        Let’s Work Us
                        <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                
                </div>
                
                </div>
            
                <div className="col-md-12 col-lg-4">
                <div className="contact-info__card">
                    <div className="contact-info__card__icon">
                    <img src="assets/images/icons/contact-info-1-3.png"  />
                    </div>
                    
                    <h3 className="contact-info__card__title">
                    <Link to="/pricing">Online Support</Link>
                    </h3>
                
                    <p className="contact-info__card__text">
                    To take a trivial example which of us ever undertakes laborious
                    physical
                    </p>
                
                    <Link to="/pricing" className="thm-btn thm-btn--three contact-info__card__btn" >
                    <span>
                        Get a Quote
                        <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                
                </div>
                
                </div>
            
            </div>
            
            </div>
        
        </section>
        
        <section className="contact-one">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-4">
                    <div className="contact-one__content">
                    <p className="contact-one__content__tagline">get in touch</p>
                   
                    <h3 className="contact-one__content__title">
                        Don’t hesited to contact us
                    </h3>
                    
                    <ul className="list-unstyled contact-one__info">
                        <li className="contact-one__info__item">
                        <div className="contact-one__info__icon">
                            <i className="far fa-map-marker-alt" />
                        </div>
                       
                        <div className="contact-one__info__content">
                            <span className="contact-one__info__name">Location</span>
                            <Link to="#">55 Main Street, USA</Link>
                        </div>
                        
                        </li>
                        <li className="contact-one__info__item">
                        <div className="contact-one__info__icon">
                            <i className="far fa-envelope-open" />
                        </div>
                       
                        <div className="contact-one__info__content">
                            <span className="contact-one__info__name">Email Address</span>
                            <Link to="mailto:support@gmail.com">support@gmail.com</Link>
                        </div>
                        
                        </li>
                        <li className="contact-one__info__item">
                        <div className="contact-one__info__icon">
                            <i className="far fa-phone-plus" />
                        </div>
                       
                        <div className="contact-one__info__content">
                            <span className="contact-one__info__name">Phone No</span>
                            <Link to="tel:+000(123)45688">+000 (123) 456 88</Link>
                        </div>
                        
                        </li>
                    </ul>
                    
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-8">
                    <form action="inc/sendemail.php" className="contact-form-validated contact-one__form" >
                    <h3 className="contact-one__form__title">Send us Message</h3>
                   
                    <div className="row">
                        <div className="col-md-6">
                        <input type="text" placeholder="Full Name" name="name" />
                        </div>
                        
                        <div className="col-md-6">
                        <input type="text" placeholder="Phone Number" name="phone" />
                        </div>
                        
                        <div className="col-md-12">
                        <input type="text" placeholder="Email address" name="email" />
                        </div>
                        
                        <div className="col-md-12">
                        <textarea name="message" placeholder="Write message" defaultValue={""} />
                        </div>
                        
                        <div className="col-md-12">
                        <button type="submit" className="thm-btn thm-btn--three contact-one__btn" >
                            <span>
                            Send Message Us
                            <i className="far fa-arrow-right" />
                            </span>
                        </button>
                        </div>
                        
                    </div>
                   
                    </form>
                    <div className="result" />
                   
                </div>
                
                </div>
               
            </div>
        </section>


    </>
  )
}

export default Work