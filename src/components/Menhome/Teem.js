import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';


function Teem() {
    const options = {
        loop: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        dots: true,
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
            },
            "1200": {
                items: 4,
                margin: 30
            }
}};
  return (
    <>
        <section className="team-one">
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">meet our team</p>
               
                <h3 className="sec-title__title">
                    We’ve professional team member <br />
                    meet with our agent
                </h3>
                
                </div>
                
                <OwlCarousel className="thm-owl__carousel owl-theme owl-carousel owl-dot-one owl-with-shadow" {...options}>
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-1.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Brian S. Brooks</Link>
                        </h3>
                        
                        <p className="team-card__designation">CEO &amp; Founder</p>
                        
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                        
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Brian S. Brooks</Link>
                        </h3>
                        
                        <p className="team-card__designation">CEO &amp; Founder</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-2.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Ricky W. Montez</Link>
                        </h3>
                       
                        <p className="team-card__designation">Senior Manager</p>
                        
                        <ul className="list-unstyled team-card__social">
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
                       
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                       
                        </div>
                        
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Ricky W. Montez</Link>
                        </h3>
                      
                        <p className="team-card__designation">Senior Manager</p>
                       
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                       
                    </div>
                   
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-3.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">William D. Damian</Link>
                        </h3>
                       
                        <p className="team-card__designation">Business Consultant</p>
                        
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                       
                        </div>
                       
                    </div>
                   
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">William D. Damian</Link>
                        </h3>
                       
                        <p className="team-card__designation">Business Consultant</p>
                      
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                       
                    </div>
                   
                    </div>
                  
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-4.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Karl D. Boudreau</Link>
                        </h3>
                        
                        <p className="team-card__designation">Marketing Officer</p>
                      
                        <ul className="list-unstyled team-card__social">
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
                       
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                       
                        </div>
                        
                    </div>
                 
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Karl D. Boudreau</Link>
                        </h3>
                        
                        <p className="team-card__designation">Marketing Officer</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-5.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">William J. Monroe</Link>
                        </h3>
                      
                        <p className="team-card__designation">Consultant</p>
                       
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                       
                        </div>
                        
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">William J. Monroe</Link>
                        </h3>
                        
                        <p className="team-card__designation">Consultant</p>
                       
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                   
                    </div>
                    
                </div>
                
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-6.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Robert M. Chacon</Link>
                        </h3>
                        
                        <p className="team-card__designation">Junior Marketer</p>
                       
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                        
                    </div>
                  
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Robert M. Chacon</Link>
                        </h3>
                        
                        <p className="team-card__designation">Junior Marketer</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                       
                    </div>
                    
                    </div>
                   
                </div>
                
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-7.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Ronald J. Glasser</Link>
                        </h3>
                       
                        <p className="team-card__designation">Sr. Developer</p>
                      
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                        
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Ronald J. Glasser</Link>
                        </h3>
                        
                        <p className="team-card__designation">Sr. Developer</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                   
                    </div>
                    
                </div>
                
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-8.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Myron C. Penland</Link>
                        </h3>
                        
                        <p className="team-card__designation">UI Designer</p>
                      
                        <ul className="list-unstyled team-card__social">
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
                       
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                       
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Myron C. Penland</Link>
                        </h3>
                       
                        <p className="team-card__designation">UI Designer</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                       
                    </div>
                   
                    </div>
                    
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-9.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Lloyd L. Bowman</Link>
                        </h3>
                        
                        <p className="team-card__designation">SEO Marketer</p>
                       
                        <ul className="list-unstyled team-card__social">
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
                       
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                        
                    </div>
                   
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Lloyd L. Bowman</Link>
                        </h3>
                       
                        <p className="team-card__designation">SEO Marketer</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-10.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Ronnie V. Warren</Link>
                        </h3>
                       
                        <p className="team-card__designation">Junior Marketer</p>
                        
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                        
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Ronnie V. Warren</Link>
                        </h3>
                       
                        <p className="team-card__designation">Junior Marketer</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-11.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Nicholas L. Harris</Link>
                        </h3>
                       
                        <p className="team-card__designation">Senior Marketer</p>
                        
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                        
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Nicholas L. Harris</Link>
                        </h3>
                       
                        <p className="team-card__designation">Senior Marketer</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-12.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Mark B. McDowell</Link>
                        </h3>
                       
                        <p className="team-card__designation">Business Developer</p>
                        
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                        
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Mark B. McDowell</Link>
                        </h3>
                       
                        <p className="team-card__designation">Business Developer</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-1.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Brian S. Brooks</Link>
                        </h3>
                       
                        <p className="team-card__designation">CEO &amp; Founder</p>
                        
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                        
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Brian S. Brooks</Link>
                        </h3>
                       
                        <p className="team-card__designation">CEO &amp; Founder</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-2.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">Ricky W. Montez</Link>
                        </h3>
                       
                        <p className="team-card__designation">Senior Manager</p>
                        
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                        
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">Ricky W. Montez</Link>
                        </h3>
                       
                        <p className="team-card__designation">Senior Manager</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-3.jpg"  />
                        <div className="team-card__hover">
                        <h3 className="team-card__title">
                            <Link to="/teamdetails">William D. Damian</Link>
                        </h3>
                       
                        <p className="team-card__designation">Business Consultant</p>
                        
                        <ul className="list-unstyled team-card__social">
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
                        
                        <Link to="/teamdetails" className="team-card__hover__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        
                        </div>
                        
                    </div>
                    
                    <div className="team-card__content">
                        <h3 className="team-card__title">
                        <Link to="/teamdetails">William D. Damian</Link>
                        </h3>
                       
                        <p className="team-card__designation">Business Consultant</p>
                        
                        <Link to="/teamdetails" className="team-card__content__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                        
                    </div>
                    
                    </div>
                   
                </div>
               
                </OwlCarousel>
                
            </div>
        </section>

    </>
  )
}

export default Teem