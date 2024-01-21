import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Offer() {

    const [video, setVideo] = useState();

  return (
    <>
        <section className="faq-three">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6">
                    <div className="about-one__image about-one__image--services">
                    <img src="assets/images/resources/faq-2-1.jpg"  />
                    <Link to="#" className="video-popup about-one__video" onClick={() => setVideo(true)} >
                        <i className="fa fa-play" />
                        <span>Play</span>
                    </Link>
                    </div>
                    
                </div>
               
                <div className="col-md-12 col-lg-6 d-flex">
                    <div className="my-auto">
                    <div className="faq-two__content faq-two__content--services">
                        <div className="sec-title text-start">
                        <p className="sec-title__tagline">Why choose us</p>
                       
                        <h3 className="sec-title__title">
                            Why people choose our <br />
                            insurance services
                        </h3>
                     
                        </div>
                       
                        <div className="accordion faq-two__accordion faq-two__accordion--ml" id="faq-two__accordion-3" >
                        <div className="accordion-item faq-two__accordion__item accordion--active">
                            <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-3__heading-1" >
                            <button
                                className="accordion-button faq-two__accordion__button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-1"
                                aria-expanded="true"
                                aria-controls="faq-two__accordion-3__collapse-1" >
                                <i className="far fa-check" />
                                Benefits of Health Insurance
                                <span className="faq-two__accordion__icon" />
                              
                            </button>
                            </h2>
                            <div
                            id="faq-two__accordion-3__collapse-1"
                            className="accordion-collapse collapse show faq-two__accordion__collapse"
                            aria-labelledby="faq-two__accordion-3__heading-1"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                We denounce with righteous indignation dislike beguile
                                deorazey charms of pleasure the moment desires they foresee
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2
                            className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-3__heading-2" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-2"
                                aria-expanded="false"
                                aria-controls="faq-two__accordion-3__collapse-2" >
                                <i className="far fa-check" />
                                How Much Friendly Our Team Member?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div
                            id="faq-two__accordion-3__collapse-2"
                            className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-3__heading-2"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                We denounce with righteous indignation dislike beguile
                                deorazey charms of pleasure the moment desires they foresee
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2
                            className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-3__heading-3" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#faq-two__accordion-3__collapse-3"
                                aria-expanded="false" aria-controls="faq-two__accordion-3__collapse-3" >
                                <i className="far fa-check" />
                                Why Choose Our Insurance Services ?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div
                            id="faq-two__accordion-3__collapse-3"
                            className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-3__heading-3"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                We denounce with righteous indignation dislike beguile
                                deorazey charms of pleasure the moment desires they foresee
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2
                            className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-3__heading-4" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-4"
                                aria-expanded="false"
                                aria-controls="faq-two__accordion-3__collapse-4" >
                                <i className="far fa-check" />
                                Great Offer For Health Insurance ?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div
                            id="faq-two__accordion-3__collapse-4"
                            className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-3__heading-4"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                We denounce with righteous indignation dislike beguile
                                deorazey charms of pleasure the moment desires they foresee
                            </div>
                            </div>
                        </div>
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

export default Offer