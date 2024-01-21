import React from 'react'
import { Link } from 'react-router-dom'


function Whychoose() {
  return (
    <>
        <section className="about-four about-four--home-1" style={{ backgroundImage: "url(assets/images/shapes/about-4-h-1-bg.png)" }} >
            <div className="container">
                <img src="assets/images/resources/about-4-h-1.jpg" className="about-four--home-1__bg wow fadeInUp" data-wow-duration="1500ms"  />
                <div className="sec-title text-start">
                <p className="sec-title__tagline">Why choose us</p>
              
                <h3 className="sec-title__title">
                    Bring your insurance idea with <br />
                    professionals
                </h3>
                
                </div>
                
                <div className="row gutter-y-30">
                <div className="col-md-12 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms" >
                    <div className="about-four__card">
                    <div className="about-four__card__icon">
                        <i className="fas fa-check" />
                    </div>
                   
                    <h3 className="about-four__card__title">
                        <Link to="#">Protect and save your money</Link>
                    </h3>
                    
                    <div className="about-four__card__text">
                        We denounce with righteous dislike beguile charms
                    </div>
                    
                    <div className="about-four__card__shape" />
                    
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms" >
                    <div className="about-four__card">
                    <div className="about-four__card__icon">
                        <i className="fas fa-check" />
                    </div>
                   
                    <h3 className="about-four__card__title">
                        <Link to="#">Very easy process systems</Link>
                    </h3>
                    
                    <div className="about-four__card__text">
                        We denounce with righteous dislike beguile charms
                    </div>
                    
                    <div className="about-four__card__shape" />
                    
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms" >
                    <div className="about-four__card">
                    <div className="about-four__card__icon">
                        <i className="fas fa-check" />
                    </div>
                   
                    <h3 className="about-four__card__title">
                        <Link to="#">Digital insurance policy system</Link>
                    </h3>
                    
                    <div className="about-four__card__text">
                        We denounce with righteous dislike beguile charms
                    </div>
                    
                    <div className="about-four__card__shape" />
                    
                    </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>

    </>
  )
}

export default Whychoose