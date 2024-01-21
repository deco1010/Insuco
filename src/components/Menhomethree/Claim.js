import React from 'react'
import { Link } from 'react-router-dom'
import IonRangeSlider from 'react-ion-slider'


function Claim() {

    const Datashow = (value)=> {
        document.getElementById("show").innerHTML = "$" + value;
    };

  return (
    <>
        <section className="steps-one steps-one--home-3">
            <div className="steps-one__bg" style={{ backgroundImage: "url(assets/images/shapes/steps-bg-1-1.png)" }} />
            
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">How to Claim</p>
               
                <h3 className="sec-title__title">
                    Here are some important steps to <br />
                    take insurance claim.
                </h3>
                
                </div>
                
                <ul className="list-unstyled steps-one__list">
                <li>
                    <div className="steps-one__list__icon">
                    <i className="flaticon-insurance-4" />
                    <div className="steps-one__list__caption">step 01</div>
                    
                    </div>
                    
                    <h3 className="steps-one__list__title">
                    <Link to="#">Select Insurance</Link>
                    </h3>
                    <p className="steps-one__list__text">
                    We denounce righte indigtion and dislike beguiled demoralize charms
                    pleasure moment
                    </p>
                    
                </li>
                <li>
                    <div className="steps-one__list__icon">
                    <i className="flaticon-portfolio" />
                    <div className="steps-one__list__caption">step 02</div>
                    
                    </div>
                    
                    <h3 className="steps-one__list__title">
                    <Link to="#">Find Best Agent</Link>
                    </h3>
                    <p className="steps-one__list__text">
                    Quis autem vel eum reprehe nderite qui voluptate velit esse molestiae
                    conse dolorem
                    </p>
                    
                </li>
                <li>
                    <div className="steps-one__list__icon">
                    <i className="flaticon-workgroup" />
                    <div className="steps-one__list__caption">step 03</div>
                    
                    </div>
                    
                    <h3 className="steps-one__list__title">
                    <Link to="#">Meeting Agent</Link>
                    </h3>
                    <p className="steps-one__list__text">
                    On the other hand denounce with righteous indignation and dislike
                    demoralize charms
                    </p>
                    
                </li>
                <li>
                    <div className="steps-one__list__icon">
                    <i className="flaticon-agreement" />
                    <div className="steps-one__list__caption">step 04</div>
                    
                    </div>
                    
                    <h3 className="steps-one__list__title">
                    <Link to="#">Get Insurance</Link>
                    </h3>
                    <p className="steps-one__list__text">
                    Wise man therefore alwayson holds in these matters principle selectio
                    rejects pleasures
                    </p>
                    
                </li>
                </ul>
                
            </div>
        </section>

        <section className="contact-two contact-two--service contact-two--home-3">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6">
                    <div className="contact-two__images">
                    <img src="assets/images/resources/contact-2-3.jpg"  />
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-6 d-flex">
                    <div className="my-auto">
                    <form
                        action="assets/inc/sendemail.php"
                        className="contact-two__form contact-form-validated" >
                        <div className="sec-title text-start">
                        <p className="sec-title__tagline">Get free estimate</p>
                       
                        <h3 className="sec-title__title">
                            Get an insurance quote to get started!
                        </h3>
                        
                        </div>
                       
                        <div className="row">
                        <div className="col-md-6">
                            <div className="contact-two__input">
                            <div className="contact-two__input__label">
                                <i className="far fa-user" />
                                <input type="text" placeholder="Full Name" name="name" />
                            </div>
                           
                            </div>
                            
                        </div>
                       
                        <div className="col-md-6">
                            <div className="contact-two__input">
                            <div className="contact-two__input__label">
                                <i className="far fa-phone-plus" />
                                <input type="text" placeholder="Phone No" name="phone" />
                            </div>
                           
                            </div>
                            
                        </div>
                       
                        <div className="col-md-6">
                            <div className="contact-two__input">
                            <div className="contact-two__input__label">
                                <i className="far fa-envelope-open" />
                                <input type="text" placeholder="Email Address" name="email" />
                            </div>
                           
                            </div>
                            
                        </div>
                       
                        <div className="col-md-6">
                            <div className="contact-two__input">
                            <div className="contact-two__input__label">
                                <select name="insurance" className="niceselect">
                                <option value="Type Of Insurance">
                                    Type Of Insurance
                                </option>
                                <option value="Life Insurance">Life Insurance</option>
                                <option value="Business Insurance">
                                    Business Insurance
                                </option>
                                <option value="Health Insurance">Health Insurance</option>
                                </select>
                              
                            </div>
                           
                            </div>
                            
                        </div>
                       
                        <div className="col-md-6">
                            <div className="contact-two__input">
                            <div className="contact-two__input__label">
                                <select name="gender" className="niceselect">
                                <option value="Gender">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                </select>
                              
                            </div>
                           
                            </div>
                            
                        </div>
                       
                        <div className="col-md-6">
                            <div className="contact-two__input">
                            <div className="contact-two__input__label">
                                <i className="far fa-calendar-alt" />
                                <input type="text" placeholder="Birth Date" name="birthday" className="datepicker" />
                            </div>
                           
                            </div>
                            
                        </div>
                       
                        <div className="col-md-12">
                            <div className="contact-two__input">
                            <div className="contact-two__input__title">
                                Limit Of Balance
                            </div>
                           
                            <div className="contact-two__progress-range">
                                <IonRangeSlider type={"single"} min={0} max={90000} from={56307} onChange={(value) => {Datashow(value.from)}} step={100} hide_min_max={true} className="balance-range-slider"/>
                                <div className="contact-two__balance-box">
                                <p className="contact-two__balance" id='show'>
                                    $0 <span />
                                </p>
                                </div>
                                <input
                                type="hidden"
                                className="contact-two__balance__input"
                                />
                            </div>
                           
                            </div>
                            
                        </div>
                       
                        <div className="col-md-12">
                            <div className="contact-two__input">
                            <button
                                type="submit"
                                className="thm-btn thm-btn--three contact-two__btn" >
                                <span>
                                Get a Quote
                                <i className="far fa-arrow-right" />
                                </span>
                            </button>
                            
                            </div>
                            
                        </div>
                       
                        </div>
                       
                    </form>
                    </div>
                   
                </div>
                
                </div>
               
            </div>
        </section>
    </>
  )
}

export default Claim