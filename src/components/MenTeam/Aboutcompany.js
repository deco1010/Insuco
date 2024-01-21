import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Aboutcompany() {

    const [video, setVideo] = useState();

  return (
    <>
        <section className="about-one">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6">
                    <div className="about-one__image">
                    <img src="assets/images/resources/about-1-1.jpg"/>
                    <Link to="#" className="video-popup about-one__video" onClick={() => setVideo(true)} >
                        <i className="fa fa-play" />
                        <span>Play</span>
                    </Link>
                    </div>
                    
                </div>
               
                <div className="col-md-12 col-lg-6 d-flex">
                    <div className="my-auto">
                    <div className="about-one__content">
                        <div className="sec-title text-start">
                        <p className="sec-title__tagline">About company</p>
                        
                        <h3 className="sec-title__title">
                            Best insurance for change better future life
                        </h3>
                       
                        </div>
                      
                        <p className="about-one__content__text">
                        We denounce with righteous indignation and dislike men beguiled to
                        and demoralized by the charms of pleasure the moment desire is
                        they they cannot foresee the pain and trouble that are bound
                        </p>
                       
                        <ul className="list-unstyled about-one__progress">
                        <li>
                            <h3 className="about-one__progress__title">Quality Security</h3>
                            
                            <div className="bar">
                            <div className="bar-inner count-bar" data-percent="89%" style={{ width: "89%" }}>
                                <div className="count-text">89%</div>
                            </div>
                            </div>
                        </li>
                        <li>
                            <h3 className="about-one__progress__title">
                            Satisfaction Rate
                            </h3>
                            
                            <div className="bar">
                            <div className="bar-inner count-bar" data-percent="73%" style={{ width: "73%" }}>
                                <div className="count-text">73%</div>
                            </div>
                            </div>
                        </li>
                        </ul>
                        
                        <div className="about-one__btns">
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

export default Aboutcompany