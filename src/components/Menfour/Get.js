import React from 'react'


function Get() {
  return (
    <>
         <section className="contact-two contact-two--service contact-two--home-3 contact-two--home-4" style={{ backgroundImage: "url(assets/images/shapes/contact-2-h-4-bg.jpg)" }} >
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-12 col-xl-4">
                    <div className="contact-two__images clearfix">
                    <img src="assets/images/resources/contact-2-h-4-1.png"  />
                    </div>
                   
                </div>
                
                <div className="col-md-12 col-lg-12 col-xl-8  d-flex">
                    <div className="my-auto">
                    <form action="assets/inc/sendemail.php" className="contact-two__form contact-form-validated" >
                        <div className="sec-title text-start">
                        <p className="sec-title__tagline">Get free estimate</p>
                        
                        <h3 className="sec-title__title">
                            Get an insurance quote to get started!
                        </h3>
                       
                        </div>
                        
                        <div className="nav-tabs--with-btns">
                        <ul className="list-unstyled nav-tabs--btns">
                            <li className="prev">
                            <a href="#">
                                <i className="far fa-arrow-left" />
                            </a>
                            </li>
                            <li className="next">
                            <a href="#">
                                <i className="far fa-arrow-right" />
                            </a>
                            </li>
                        </ul>
                        
                        <ul className="nav nav-tabs nav-tabs--with-btns contact-two__tab__btns nav-tabs-have-btns"
                            id="contact-two-tab"
                            role="tablist" >
                            <li role="presentation" className="nav-item">
                            <button className="nav-link active"
                                id="contact-two-01-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#contact-two-01"
                                type="button"
                                role="tab"
                                aria-selected="true" >
                                <i className="flaticon-insurance-3" />
                                <span>
                                House <br />
                                Insurance
                                </span>
                            </button>
                            </li>
                            <li role="presentation" className="nav-item">
                            <button
                                className="nav-link"
                                id="contact-two-02-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#contact-two-02"
                                type="button"
                                role="tab"
                                aria-selected="true" >
                                <i className="flaticon-health-care" />
                                <span>
                                Life <br />
                                Insurance
                                </span>
                            </button>
                            </li>
                            <li role="presentation" className="nav-item">
                            <button
                                className="nav-link"
                                id="contact-two-03-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#contact-two-03"
                                type="button"
                                role="tab"
                                aria-selected="true" >
                                <i className="flaticon-travel-insurance-1" />
                                <span>
                                Travel
                                <br /> Insurance
                                </span>
                            </button>
                            </li>
                        </ul>
                        
                        <div className="tab-content" id="contact-two-tab-content">
                            <div className="tab-pane fade show active animated fadeInUp"
                            id="contact-two-01"
                            role="tabpanel"
                            aria-labelledby="contact-two-01-tab" >
                            <div className="row">
                                <div className="col-md-6">
                                <div className="contact-two__input">
                                    <div className="contact-two__input__label">
                                    <i className="far fa-user" />
                                    <input type="text"
                                        placeholder="Full Name"
                                        name="name" />
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
                                    <i className="far fa-envelope-open" />
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
                                    <i className="far fa-envelope-open" />
                                    <select name="insurance" className="niceselect">
                                        <option value="Type Of Insurance">
                                        Type Of Insurance
                                        </option>
                                        <option value="Life Insurance">
                                        Life Insurance
                                        </option>
                                        <option value="Business Insurance">
                                        Business Insurance
                                        </option>
                                        <option value="Health Insurance">
                                        Health Insurance
                                        </option>
                                    </select>
                                    
                                    </div>
                                
                                </div>
                               
                                </div>
                              
                                <div className="col-md-12">
                                <div className="contact-two__input">
                                    <div className="contact-two__input__title">
                                    Limit Of Balance
                                    </div>
                                
                                    <div className="contact-two__progress-range">
                                    <input type="text"
                                        className="balance-range-slider"
                                        data-hide-min-max="true"
                                        data-step={100}
                                        data-from={56307}
                                        data-min={0}
                                        data-max={90000}
                                        defaultValue="" />
                                    <div className="contact-two__balance-box">
                                        <p className="contact-two__balance">
                                        $<span />
                                        </p>
                                    </div>
                                    <input type="hidden" className="contact-two__balance__input" />
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
                            
                            </div>
                            {/* /.tab-pane fade show active */}
                            <div
                            className="tab-pane fade  animated fadeInUp"
                            id="contact-two-02"
                            role="tabpanel"
                            aria-labelledby="contact-two-02-tab"
                            >
                            <div className="row">
                                <div className="col-md-6">
                                <div className="contact-two__input">
                                    <div className="contact-two__input__label">
                                    <i className="far fa-user" />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        name="name"
                                    />
                                    </div>
                                
                                </div>
                               
                                </div>
                              
                                <div className="col-md-6">
                                <div className="contact-two__input">
                                    <div className="contact-two__input__label">
                                    <i className="far fa-envelope-open" />
                                    <input
                                        type="text"
                                        placeholder="Email Address"
                                        name="email"
                                    />
                                    </div>
                                
                                </div>
                               
                                </div>
                              
                                <div className="col-md-6">
                                <div className="contact-two__input">
                                    <div className="contact-two__input__label">
                                    <i className="far fa-envelope-open" />
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
                                    <i className="far fa-envelope-open" />
                                    <select name="insurance" className="niceselect">
                                        <option value="Type Of Insurance">
                                        Type Of Insurance
                                        </option>
                                        <option value="Life Insurance">
                                        Life Insurance
                                        </option>
                                        <option value="Business Insurance">
                                        Business Insurance
                                        </option>
                                        <option value="Health Insurance">
                                        Health Insurance
                                        </option>
                                    </select>
                                    
                                    </div>
                                
                                </div>
                               
                                </div>
                              
                                <div className="col-md-12">
                                <div className="contact-two__input">
                                    <div className="contact-two__input__title">
                                    Limit Of Balance
                                    </div>
                                
                                    <div className="contact-two__progress-range">
                                    <input type="text"
                                        className="balance-range-slider"
                                        data-hide-min-max="true"
                                        data-step={100}
                                        data-from={56307}
                                        data-min={0}
                                        data-max={90000}
                                        defaultValue="" />
                                    <div className="contact-two__balance-box">
                                        <p className="contact-two__balance">
                                        $<span />
                                        </p>
                                    </div>
                                    <input type="hidden" className="contact-two__balance__input" />
                                    </div>
                                    
                                </div>
                               
                                </div>
                              
                                <div className="col-md-12">
                                <div className="contact-two__input">
                                    <button type="submit"
                                    className="thm-btn thm-btn--three contact-two__btn" >
                                    <span>
                                        Get a Quote
                                        <i className="far fa-arrow-right" />
                                    </span>
                                    </button>
                                    
                                </div>
                               
                                </div>
                              
                            </div>
                            
                            </div>
                            
                            <div className="tab-pane fade  animated fadeInUp"
                            id="contact-two-03"
                            role="tabpanel"
                            aria-labelledby="contact-two-03-tab" >
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
                                    <i className="far fa-envelope-open" />
                                    <input type="text" placeholder="Email Address" name="email" />
                                    </div>
                                
                                </div>
                               
                                </div>
                              
                                <div className="col-md-6">
                                <div className="contact-two__input">
                                    <div className="contact-two__input__label">
                                    <i className="far fa-envelope-open" />
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
                                    <i className="far fa-envelope-open" />
                                    <select name="insurance" className="niceselect">
                                        <option value="Type Of Insurance">
                                        Type Of Insurance
                                        </option>
                                        <option value="Life Insurance">
                                        Life Insurance
                                        </option>
                                        <option value="Business Insurance">
                                        Business Insurance
                                        </option>
                                        <option value="Health Insurance">
                                        Health Insurance
                                        </option>
                                    </select>
                                    
                                    </div>
                                
                                </div>
                               
                                </div>
                              
                                <div className="col-md-12">
                                <div className="contact-two__input">
                                    <div className="contact-two__input__title">
                                    Limit Of Balance
                                    </div>
                                
                                    <div className="contact-two__progress-range">
                                    <input type="text"className="balance-range-slider"
                                        data-hide-min-max="true"
                                        data-step={100}
                                        data-from={56307}
                                        data-min={0}
                                        data-max={90000}
                                        defaultValue="" />
                                    <div className="contact-two__balance-box">
                                        <p className="contact-two__balance">
                                        $<span />
                                        </p>
                                    </div>
                                    <input type="hidden"
                                        className="contact-two__balance__input" />
                                    </div>
                                    
                                </div>
                               
                                </div>
                              
                                <div className="col-md-12">
                                <div className="contact-two__input">
                                    <button type="submit"
                                    className="thm-btn thm-btn--three contact-two__btn" >
                                    <span>
                                        Get a Quote
                                        <i className="far fa-arrow-right" />
                                    </span>
                                    </button>
                                    
                                </div>
                               
                                </div>
                              
                            </div>
                            
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

export default Get