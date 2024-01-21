import React, { useState } from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';



function Main() {
    const [Load, setLoad] = useState(false)

  return (
    <>
        <Waypoint onEnter={()=> (setLoad(true))}>

          

            <section className="funfact-one">
            {Load && 
                <div className="container">
                    <div className="sec-title text-center">
                    <p className="sec-title__tagline">company statistics</p>
                    
                    <h3 className="sec-title__title">
                        We are happy to share our achievement
                    </h3>
                    
                    </div>
                    
                    <div className="row gutter-y-30">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="funfact-one__card">
                        <i className="funfact-one__card__icon flaticon-money-bag" />
                        <h3 className="funfact-one__card__title count-box">
                            <CountUp end={253} duration={3}>    </CountUp>k
                        </h3>
                        
                        <p className="funfact-one__card__text">Gave insurances</p>
                        
                        <div className="funfact-one__card__shape" />
                        
                        </div>
                        
                    </div>
                
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="funfact-one__card">
                        <i className="funfact-one__card__icon flaticon-community" />
                        <h3 className="funfact-one__card__title count-box">
                        <CountUp end={596} duration={3}>    </CountUp>m
                        </h3>
                        
                        <p className="funfact-one__card__text">Happy Customers</p>
                        
                        <div className="funfact-one__card__shape" />
                        
                        </div>
                        
                    </div>
                
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="funfact-one__card">
                        <i className="funfact-one__card__icon flaticon-target" />
                        <h3 className="funfact-one__card__title count-box">
                        <CountUp end={99} duration={3}>    </CountUp>k
                        </h3>
                        
                        <p className="funfact-one__card__text">Success Rate</p>
                        
                        <div className="funfact-one__card__shape" />
                        
                        </div>
                        
                    </div>
                
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="funfact-one__card">
                        <i className="funfact-one__card__icon flaticon-success" />
                        <h3 className="funfact-one__card__title count-box">
                        <CountUp end={856} duration={3}>    </CountUp>+
                        </h3>
                        
                        <p className="funfact-one__card__text">Awards Winning</p>
                        
                        <div className="funfact-one__card__shape" />
                        
                        </div>
                        
                    </div>
                
                    </div>
                
                    <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="funfact-one__info">
                        <span>Find Quality and best price Insurance or any agent</span>
                        <Link to="/pricing" className="thm-btn thm-btn--three funfact-one__info__btn" >
                            <span>
                            Get Started
                            <i className="far fa-arrow-right" />
                            </span>
                        </Link>
                        
                        </div>
                    
                    </div>
                
                    </div>
                    
                </div>
                }
            </section>
            
           
           
        </Waypoint>
    </>
  )
}

export default Main