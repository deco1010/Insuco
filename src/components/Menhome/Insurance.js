import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';


function Insurance() {
    const options = {
                items : 1,
                margin : 0,
                loop : true,
                dots : true,
                smartSpeed : 700,
                nav : false,
                responsive : {
                        "0": {
                             items: 1,
                             margin: 0
                            },
                        "576" : {
                              items: 2,
                              margin: 30
                            },
                        "992" : {
                             items: 3,
                             margin: 30
                            }
    }};

  return (
    <>
       <div className="service-seven">
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">insurance services</p>
                
                <h3 className="sec-title__title">Take better insurance opportunity</h3>
                
                </div>
                
                <OwlCarousel className="thm-owl__carousel owl-theme owl-carousel owl-with-shadow owl-dot-one" {...options}>
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-1.jpg"  />
                    </div>
                    
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-insurance-1" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Life Insurance</Link>
                        </h3>
                        
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                   
                    </div>
                   
                </div>
                
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-2.jpg"  />
                    </div>
                    
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-insurance" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Business Insurance</Link>
                        </h3>
                        
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-3.jpg"  />
                    </div>
                  
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-health-insurance" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Health Insurance</Link>
                        </h3>
                       
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                     
                        <Link to="/insurancesdetails" className="service-card-five__link">
                         <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-1.jpg"  />
                    </div>
                    
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-insurance-1" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Life Insurance</Link>
                        </h3>
                        
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                       
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                   
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-2.jpg"  />
                    </div>
                    
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-insurance" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Business Insurance</Link>
                        </h3>
                       
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                       
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-3.jpg"  />
                    </div>
                    
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-health-insurance" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Health Insurance</Link>
                        </h3>
                        
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                   
                    </div>
                    
                </div>
               
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-1.jpg"  />
                    </div>
                   
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-insurance-1" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Life Insurance</Link>
                        </h3>
                        
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                       
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                   
                    </div>
                    
                </div>
                
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-2.jpg"  />
                    </div>
                
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-insurance" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Business Insurance</Link>
                        </h3>
                       
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                       
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                   
                    </div>
                  
                </div>

                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-3.jpg"  />
                    </div>
                   
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-health-insurance" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Health Insurance</Link>
                        </h3>
                        
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                       
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                   
                    </div>
                    
                </div>
                
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-1.jpg"  />
                    </div>
                   
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-insurance-1" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Life Insurance</Link>
                        </h3>
                       
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                       
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                   
                </div>
              
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-2.jpg"  />
                    </div>
                   
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-insurance" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Business Insurance</Link>
                        </h3>
                       
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                   
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="service-card-five">
                    <div className="service-card-five__image">
                        <img src="assets/images/services/service-5-3.jpg"  />
                    </div>
                   
                    <div className="service-card-five__content">
                        <i className="service-card-five__icon flaticon-health-insurance" />
                        <h3 className="service-card-five__title">
                        <Link to="/insurancesdetails">Health Insurance</Link>
                        </h3>
                        
                        <p className="service-card-five__text">
                        We denounce righteou indignaties and dislike men demoralize
                        </p>
                      
                        <Link to="/insurancesdetails" className="service-card-five__link">
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                   
                    </div>
                    
                </div>
                
                </OwlCarousel>
               
            </div>
       </div>

    </>
  )
}

export default Insurance