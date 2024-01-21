import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Service() {

    const [video, setVideo] = useState();

  return (
    <>
        <div className="service-six">
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">What We Offer</p>
               
                <h3 className="sec-title__title">
                    Great insurance build better <br /> future together
                </h3>
                
                </div>
               
                <div className="row gutter-y-30">
                <div className="col-md-6 col-lg-3">
                    <div className="service-card-four">
                    <div className="service-card-four__bg" />
                    
                    <div className="service-card-four__content">
                        <div className="service-card-four__circle" />
                     
                        <i className="service-card-four__icon flaticon-piggy-bank" />
                        <h3 className="service-card-four__title">
                        <Link to="/insurancesdetails">Save your money</Link>
                        </h3>
                        
                        <p className="service-card-four__text">
                        Risus consectetur adipisineg eiusmo tempor incididunt
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-four__link">
                            <span>Read More</span>
                            <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="col-md-6 col-lg-3">
                    <div className="service-card-four">
                    <div className="service-card-four__bg" />
                    
                    <div className="service-card-four__content">
                        <div className="service-card-four__circle" />
                     
                        <i className="service-card-four__icon flaticon-reliability" />
                        <h3 className="service-card-four__title">
                        <Link to="/insurancesdetails">Trusted partners</Link>
                        </h3>
                        
                        <p className="service-card-four__text">
                        Risus consectetur adipisineg eiusmo tempor incididunt
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-four__link">
                        <span>Read More</span>
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="col-md-6 col-lg-3">
                    <div className="service-card-four">
                    <div className="service-card-four__bg" />
                    
                    <div className="service-card-four__content">
                        <div className="service-card-four__circle" />
                     
                        <i className="service-card-four__icon flaticon-money-transfer" />
                        <h3 className="service-card-four__title">
                        <Link to="/insurancesdetails">Mobile banking</Link>
                        </h3>
                        
                        <p className="service-card-four__text">
                        Risus consectetur adipisineg eiusmo tempor incididunt
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-four__link">
                        <span>Read More</span>
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="col-md-6 col-lg-3">
                    <div className="service-card-four">
                    <div className="service-card-four__bg" />
                    
                    <div className="service-card-four__content">
                        <div className="service-card-four__circle" />
                     
                        <i className="service-card-four__icon flaticon-insurance" />
                        <h3 className="service-card-four__title">
                        <Link to="/insurancesdetails">Protective insurance</Link>
                        </h3>
                        
                        <p className="service-card-four__text">
                        Risus consectetur adipisineg eiusmo tempor incididunt
                        </p>
                        
                        <Link to="/insurancesdetails" className="service-card-four__link">
                        <span>Read More</span>
                        <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                    
                    </div>
                    
                </div>
               
                </div>
                
            </div>
        </div>

        <section className="about-five about-five--home-1">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6">
                    <div className="about-one__image clearfix">
                    <img src="assets/images/resources/about-5-2.jpg"  />
                    <Link to="#" className="video-popup about-one__video" onClick={() => setVideo(true)} >
                        <i className="fa fa-play" />
                        <span>Play</span>
                    </Link>

                    <div className="about-five__image__caption" style={{left : "10px" }}>
                        <h3 className="about-five__image__caption__title">
                        25 Years Of Experience in Insurance Services
                        </h3>
                       
                        <p className="about-five__image__caption__text">
                        CEO &amp; Founder
                        </p>
                       
                    </div>
                  
                    </div>
                   
                </div>
                <div className="col-md-12 col-lg-6 d-flex">
                    <div className="my-auto">
                    <div className="about-five__content">
                        <div className="sec-title text-start">
                        <p className="sec-title__tagline">About company</p>
                       
                        <h3 className="sec-title__title">
                            Award winning insurance company since 1993
                        </h3>
                        
                        </div>
                        
                        <div className="about-five__content__text">
                        We denounce with righteous indignation and dislike men beguiled to
                        and demoralized by the charms of pleasure the moment desire is
                        they they cannot foresee the pain and trouble that are bound ensue
                        and equal blame belongs to those who fail in their duty
                        </div>
                       
                        <div className="about-five__author">
                        <div className="about-five__author__image new-img">
                            <img src="assets/images/resources/about-5-a-1.png"  />
                        </div>
                     
                        <div className="about-five__author__content">
                            <h3 className="about-five__author__name">
                            Marcellus A. Hilliard
                            </h3>
                         
                            <p className="about-five__author__designation">
                            CEO &amp; Founder
                            </p>
                           
                        </div>
                      
                        <div className="about-five__author__sign">
                            <img src="assets/images/resources/about-5-a-s.png"  />
                        </div>
                    
                        </div>
                      
                        <div className="about-five__btns">
                        <Link to="/about" className="thm-btn thm-btn--three about-one__btn" >
                            <span>
                            Learn More
                            <i className="far fa-arrow-right" />
                            </span>
                        </Link>
                    
                        <Link to="/insurances" className="thm-btn thm-btn--two about-one__btn about-one__btn--two" >
                            <span>
                            Our Services
                            <i className="far fa-arrow-right" />
                            </span>
                        </Link>
                        
                        </div>
                        
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
            </div>

            {video &&

                <div className={`YouTubePopUp-Wrap ${video && "YouTubePopUp-hide"}`} onClick={() => { setVideo(false) }}>
                <div className="YouTubePopUp-Content">
                <span className="YouTubePopUp-Close" />
                     <iframe src="https://www.youtube.com/embed/CWCPovmNWK8?autoplay=1" allowFullScreen="" />
                </div>
                </div>

            }

        </section>

       

    </>
  )
}

export default Service