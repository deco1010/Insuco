import React from 'react'
import OwlCarousel from 'react-owl-carousel';

function Testimonials() {

    const options = {
        items: 1,
        margin: 0,
        loop: true,
        dots: true,
        smartSpeed: 700,
        nav: false,
        responsive : {
            "0": {
                items: 1,
                margin: 0
            },
            "576": {
                items: 2,
                margin: 30
            },
            "992": {
                items: 3,
                margin: 30
            }
}};

  return (
    <>
       <section className="testimonials-one testimonials-one--home-1">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="sec-title text-center">
                    <p className="sec-title__tagline">Clients testimonials</p>
                    <h3 className="sec-title__title">What customer say us</h3>
                    </div>
                    <OwlCarousel className="thm-owl__carousel owl-theme owl-carousel owl-with-shadow owl-dot-one" {...options} >
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#1da1f2"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-1.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Richard M. Pappas</h3>
                          
                            <p className="testimonials-card__designation">Senior Manager</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content">We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-twitter" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Quality Services</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#e60023"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-2.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Zachariah M. Trower</h3>
                          
                            <p className="testimonials-card__designation">Business Consultant</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-pinterest-p" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Experience Team</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#1da1f2"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-3.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Wiley J. Schreffler</h3>
                          
                            <p className="testimonials-card__designation">Marketing Officer</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-twitter" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Quality Services</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#e60023"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-2.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Zachariah M. Trower</h3>
                          
                            <p className="testimonials-card__designation">Business Consultant</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-pinterest-p" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Experience Team</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#1da1f2"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-1.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Richard M. Pappas</h3>
                          
                            <p className="testimonials-card__designation">Senior Manager</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content">We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-twitter" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Quality Services</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#e60023"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-2.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Zachariah M. Trower</h3>
                          
                            <p className="testimonials-card__designation">Business Consultant</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-pinterest-p" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Experience Team</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#1da1f2"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-3.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Wiley J. Schreffler</h3>
                          
                            <p className="testimonials-card__designation">Marketing Officer</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-twitter" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Quality Services</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#e60023"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-2.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Zachariah M. Trower</h3>
                          
                            <p className="testimonials-card__designation">Business Consultant</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-pinterest-p" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Experience Team</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#1da1f2"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-1.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Richard M. Pappas</h3>
                          
                            <p className="testimonials-card__designation">Senior Manager</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content">We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-twitter" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Quality Services</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#e60023"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-2.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Zachariah M. Trower</h3>
                          
                            <p className="testimonials-card__designation">Business Consultant</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-pinterest-p" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Experience Team</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#1da1f2"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-3.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Wiley J. Schreffler</h3>
                          
                            <p className="testimonials-card__designation">Marketing Officer</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-twitter" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Quality Services</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#e60023"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-2.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Zachariah M. Trower</h3>
                          
                            <p className="testimonials-card__designation">Business Consultant</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-pinterest-p" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Experience Team</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#1da1f2"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-1.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Richard M. Pappas</h3>
                          
                            <p className="testimonials-card__designation">Senior Manager</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content">We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-twitter" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Quality Services</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#e60023"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-2.png"/>
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Zachariah M. Trower</h3>
                          
                            <p className="testimonials-card__designation">Business Consultant</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-pinterest-p" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Experience Team</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card testimonials-card--two" style={{"--accent-color":"#1da1f2"}}>
                        <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                            <img src="assets/images/resources/testi-3-3.png"  />
                            </div>
                            <div className="testimonials-card__top__content">
                            <h3 className="testimonials-card__name">Wiley J. Schreffler</h3>
                          
                            <p className="testimonials-card__designation">Marketing Officer</p>
                            
                            </div>
                        </div>
                        <div className="testimonials-card__content"> We denounce with righteo indignation and
                            dislike men beguiled to demoralized by the charms of pleasure the moment desire
                            they cannot foresee the pain trouble</div>
                        <div className="testimonials-card__bottom">
                            <div className="testimonials-card__icon">
                            <i className="fab fa-twitter" />
                            </div>
                            <div className="testimonials-card__bottom__content">
                            <h3 className="testimonials-card__review">Quality Services</h3>
                           
                            <p className="testimonials-card__stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    </OwlCarousel>
                </div>
                </div>
            </div> 
        </section>

    </>
  )
}

export default Testimonials