import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Main() {

    const [video, setVideo] = useState();

  return (
    <>
        <section className="about-five">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-7">
                    <div className="about-one__image">
                    <img src="assets/images/resources/about-5-1.jpg"  />
                    <Link to="#" className="video-popup about-one__video" onClick={() => setVideo(true)} >
                        <i className="fa fa-play" />
                        <span>Play</span>
                    </Link>
                    <div className="about-five__image__caption">
                        <h3 className="about-five__image__caption__title">
                        25 Years Of Experience in Insurance Services
                        </h3>
                        
                        <p className="about-five__image__caption__text">
                        CEO &amp; Founder
                        </p>
                     
                    </div>
                   
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-5 d-flex">
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
                        <div className="about-five__author__image">
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

        <section className="about-four">
            <div className="container">
                <div className="row gutter-y-30">
                <div className="col-md-12 col-lg-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms" >
                    <div className="about-four__card">
                    <div className="about-four__card__icon">
                        <i className="fas fa-check" />
                    </div>

                    <h3 className="about-four__card__title">
                        <Link to="#"> Company mission </Link>
                    </h3>
                   
                    <div className="about-four__card__text">
                        We denounce with righteou indigntion and dislike men beguile
                        demoralized by the charms of pleasure moment
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms" >
                    <div className="about-four__card">
                    <div className="about-four__card__icon">
                        <i className="fas fa-check" />
                    </div>
                    
                    <h3 className="about-four__card__title">
                        <Link to="#">Company vision</Link>
                    </h3>
                   
                    <div className="about-four__card__text">
                        To take a trivial example which of us ever underta laborious
                        exercise except to obtain advantage from itenjoy
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms" >
                    <div className="about-four__card">
                    <div className="about-four__card__icon">
                        <i className="fas fa-check" />
                    </div>
                    
                    <h3 className="about-four__card__title">
                        <Link to="#">Best Features</Link>
                    </h3>
                   
                    <div className="about-four__card__text">
                        We denounce with righteou indigntion and dislike men beguile
                        demoralized by the charms of pleasure moment
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Main