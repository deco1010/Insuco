import React from 'react'
import { Link } from 'react-router-dom'


function First() {
  return (
    <>
        <section className="faq-one">
            <div className="container">
                <div className="row">
                <div className="col-md-12 col-lg-5">
                    <div className="faq-one__content">
                    <div className="sec-title text-start">
                        <p className="sec-title__tagline">Faqs</p>
                       
                        <h3 className="sec-title__title">
                        Frequently Asked <br />
                        Questions
                        </h3>
                        
                    </div>
                    
                    <p className="faq-one__text">
                        We denounce with righteous indignation and likely men beguiled to
                        demoralized the charms of pleasure they cannot foresee the pain and
                        trouble
                    </p>
                    <Link className="faq-one__link" to="/about">
                        <span>Learn More</span>
                        <i className="far fa-arrow-right" />
                    </Link>
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-7">
                    <div className="accordion faq-one__accordion" id="faq-one__accordion-1">
                    <div className="accordion-item faq-one__accordion__item ">
                        <h2
                        className="accordion-header faq-one__accordion__header"
                        id="faq-one__accordion-1__heading-1" >
                        <button
                            className="accordion-button faq-one__accordion__button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-one__accordion-1__collapse-1"
                            aria-expanded="true"
                            aria-controls="faq-one__accordion-1__collapse-1" >
                            Benefits of Health Insurance
                            <span className="faq-one__accordion__icon" />
                            
                        </button>
                        </h2>
                        <div id="faq-one__accordion-1__collapse-1"
                        className="accordion-collapse collapse  faq-one__accordion__collapse"
                        aria-labelledby="faq-one__accordion-1__heading-1"
                        data-bs-parent="#faq-one__accordion-1" >
                        <div className="accordion-body faq-one__accordion__body">
                            On the other hand denounce with righteous indignation dislike
                            men who beguiled demoralized the charms of pleasure of the
                            moment soblinded by desire that cannot foresee the pain atrouble
                            that are bound to ensue and equal blame{" "}
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item faq-one__accordion__item accordion--active">
                        <h2
                        className="accordion-header faq-one__accordion__header"
                        id="faq-one__accordion-1__heading-2" >
                        <button
                            className="accordion-button faq-one__accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-one__accordion-1__collapse-2"
                            aria-expanded="true"
                            aria-controls="faq-one__accordion-1__collapse-2" >
                            How Much Friendly Our Team Member?
                            <span className="faq-one__accordion__icon" />
                        </button>
                        </h2>
                        <div id="faq-one__accordion-1__collapse-2" className="accordion-collapse faq-one__accordion__collapse collapse show"
                        aria-labelledby="faq-one__accordion-1__heading-2"
                        data-bs-parent="#faq-one__accordion-1" >
                        <div className="accordion-body faq-one__accordion__body">
                            On the other hand denounce with righteous indignation dislike
                            men who beguiled demoralized the charms of pleasure of the
                            moment soblinded by desire that cannot foresee the pain atrouble
                            that are bound to ensue and equal blame{" "}
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item faq-one__accordion__item">
                        <h2
                        className="accordion-header faq-one__accordion__header"
                        id="faq-one__accordion-1__heading-3" >
                        <button
                            className="accordion-button faq-one__accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-one__accordion-1__collapse-3"
                            aria-expanded="false"
                            aria-controls="faq-one__accordion-1__collapse-3" >
                            Why Choose Our Insurance Services ?
                            <span className="faq-one__accordion__icon" />
                        </button>
                        </h2>
                        <div
                        id="faq-one__accordion-1__collapse-3"
                        className="accordion-collapse faq-one__accordion__collapse collapse"
                        aria-labelledby="faq-one__accordion-1__heading-3"
                        data-bs-parent="#faq-one__accordion-1" >
                        <div className="accordion-body faq-one__accordion__body">
                            On the other hand denounce with righteous indignation dislike
                            men who beguiled demoralized the charms of pleasure of the
                            moment soblinded by desire that cannot foresee the pain atrouble
                            that are bound to ensue and equal blame{" "}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
               
                </div>
                
            </div>
 
        </section>

    </>
  )
}

export default First